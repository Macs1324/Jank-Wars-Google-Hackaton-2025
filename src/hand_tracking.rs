use bevy::prelude::*;
use std::sync::{Arc, Mutex};
use std::thread;
use ort::{Environment, ExecutionProvider, Session, SessionBuilder, Value};
use ndarray::{ArrayD, CowArray};
use std::path::Path;
use crate::gestures::WebcamResource;

// --- Hand Tracking Data Structures ---

#[derive(Debug, Clone)]
pub struct HandLandmarks {
    pub landmarks: [Vec3; 21],  // 21 MediaPipe hand landmarks
    pub handedness: Handedness,
    pub confidence: f32,
    pub timestamp: f64,
}

#[derive(Debug, Clone)]
pub enum Handedness {
    Left,
    Right,
    Unknown,
}

#[derive(Debug, Clone)]
pub struct FingerJoints {
    pub thumb: [Vec3; 4],   // CMC, MCP, IP, TIP
    pub index: [Vec3; 4],   // MCP, PIP, DIP, TIP
    pub middle: [Vec3; 4],  // MCP, PIP, DIP, TIP
    pub ring: [Vec3; 4],    // MCP, PIP, DIP, TIP
    pub pinky: [Vec3; 4],   // MCP, PIP, DIP, TIP
}

#[derive(Debug, Clone)]
pub struct FingerPose {
    pub joints: FingerJoints,
    pub bend_angles: [f32; 5],  // Bend angle for each finger (0.0 = straight, 1.0 = fully bent)
    pub spread_angles: [f32; 4], // Spread between adjacent fingers
    pub palm_normal: Vec3,      // Direction palm is facing
    pub wrist_position: Vec3,   // Wrist landmark position
}

// --- Resources ---

#[derive(Resource)]
pub struct HandTrackingResource {
    pub hands: Arc<Mutex<Vec<HandLandmarks>>>,
    pub finger_poses: Vec<FingerPose>,
    pub is_active: bool,
    pub model_loaded: bool,
    pub last_detection_time: f64,
}

#[derive(Resource)]
pub struct HandTrackingDebugOverlay {
    pub enabled: bool,
    pub show_confidence: bool,
    pub show_coordinates: bool,
    pub show_model_outputs: bool,
}

impl Default for HandTrackingDebugOverlay {
    fn default() -> Self {
        Self {
            enabled: true,
            show_confidence: true,
            show_coordinates: true,
            show_model_outputs: false,
        }
    }
}

#[derive(Resource)]
pub struct HandTrackingConfig {
    pub max_hands: usize,
    pub detection_confidence: f32,
    pub tracking_confidence: f32,
    pub hand_model_path: String,
    pub palm_model_path: String,
}

// --- MediaPipe Hand Landmark Indices ---
pub mod landmarks {
    pub const WRIST: usize = 0;
    
    // Thumb
    pub const THUMB_CMC: usize = 1;
    pub const THUMB_MCP: usize = 2;
    pub const THUMB_IP: usize = 3;
    pub const THUMB_TIP: usize = 4;
    
    // Index finger
    pub const INDEX_MCP: usize = 5;
    pub const INDEX_PIP: usize = 6;
    pub const INDEX_DIP: usize = 7;
    pub const INDEX_TIP: usize = 8;
    
    // Middle finger
    pub const MIDDLE_MCP: usize = 9;
    pub const MIDDLE_PIP: usize = 10;
    pub const MIDDLE_DIP: usize = 11;
    pub const MIDDLE_TIP: usize = 12;
    
    // Ring finger
    pub const RING_MCP: usize = 13;
    pub const RING_PIP: usize = 14;
    pub const RING_DIP: usize = 15;
    pub const RING_TIP: usize = 16;
    
    // Pinky
    pub const PINKY_MCP: usize = 17;
    pub const PINKY_PIP: usize = 18;
    pub const PINKY_DIP: usize = 19;
    pub const PINKY_TIP: usize = 20;
}

// --- Implementation ---

impl Default for HandTrackingConfig {
    fn default() -> Self {
        Self {
            max_hands: 2,
            detection_confidence: 0.5,
            tracking_confidence: 0.5,
            hand_model_path: "models/hand_landmark.onnx".to_string(),
            palm_model_path: "models/palm_detection.onnx".to_string(),
        }
    }
}

impl HandLandmarks {
    pub fn to_finger_pose(&self) -> FingerPose {
        let landmarks = &self.landmarks;
        
        // Extract finger joints
        let thumb = [
            landmarks[landmarks::THUMB_CMC],
            landmarks[landmarks::THUMB_MCP],
            landmarks[landmarks::THUMB_IP],
            landmarks[landmarks::THUMB_TIP],
        ];
        
        let index = [
            landmarks[landmarks::INDEX_MCP],
            landmarks[landmarks::INDEX_PIP],
            landmarks[landmarks::INDEX_DIP],
            landmarks[landmarks::INDEX_TIP],
        ];
        
        let middle = [
            landmarks[landmarks::MIDDLE_MCP],
            landmarks[landmarks::MIDDLE_PIP],
            landmarks[landmarks::MIDDLE_DIP],
            landmarks[landmarks::MIDDLE_TIP],
        ];
        
        let ring = [
            landmarks[landmarks::RING_MCP],
            landmarks[landmarks::RING_PIP],
            landmarks[landmarks::RING_DIP],
            landmarks[landmarks::RING_TIP],
        ];
        
        let pinky = [
            landmarks[landmarks::PINKY_MCP],
            landmarks[landmarks::PINKY_PIP],
            landmarks[landmarks::PINKY_DIP],
            landmarks[landmarks::PINKY_TIP],
        ];
        
        let joints = FingerJoints {
            thumb, index, middle, ring, pinky
        };
        
        // Calculate bend angles for each finger
        let bend_angles = [
            calculate_finger_bend(&thumb),
            calculate_finger_bend(&index),
            calculate_finger_bend(&middle),
            calculate_finger_bend(&ring),
            calculate_finger_bend(&pinky),
        ];
        
        // Calculate spread angles between adjacent fingers
        let spread_angles = [
            calculate_finger_spread(&index, &middle),
            calculate_finger_spread(&middle, &ring),
            calculate_finger_spread(&ring, &pinky),
            calculate_finger_spread(&thumb, &index),
        ];
        
        // Calculate palm normal from wrist and MCP joints
        let wrist = landmarks[landmarks::WRIST];
        let palm_normal = calculate_palm_normal(&landmarks);
        
        FingerPose {
            joints,
            bend_angles,
            spread_angles,
            palm_normal,
            wrist_position: wrist,
        }
    }
}

// --- Setup Functions ---

pub fn setup_hand_tracking(mut commands: Commands, webcam_res: Option<Res<WebcamResource>>) -> Result<(), Box<dyn std::error::Error>> {
    let config = HandTrackingConfig::default();
    
    // Check if ONNX model files exist
    if !Path::new(&config.hand_model_path).exists() {
        println!("⚠️  Hand tracking ONNX model not found: {}", config.hand_model_path);
        println!("   Run: bash download_models.sh");
        println!("   For now, hand tracking will be disabled");
        
        commands.insert_resource(HandTrackingResource {
            hands: Arc::new(Mutex::new(Vec::new())),
            finger_poses: Vec::new(),
            is_active: false,
            model_loaded: false,
            last_detection_time: 0.0,
        });
        
        commands.insert_resource(HandTrackingDebugOverlay::default());
        
        commands.insert_resource(config);
        return Ok(());
    }
    
    println!("🤖 Loading MediaPipe ONNX hand tracking models with Candle...");
    
    // Initialize resources
    let hands = Arc::new(Mutex::new(Vec::new()));
    
    let hands_clone = hands.clone();
    let hand_model_path = config.hand_model_path.clone();
    let palm_model_path = config.palm_model_path.clone();
    
    // Get shared webcam frame buffer if available
    let webcam_buffer = webcam_res.map(|res| res.get_frame_buffer());
    
    // Insert resources
    commands.insert_resource(HandTrackingResource {
        hands: hands.clone(),
        finger_poses: Vec::new(),
        is_active: true,
        model_loaded: false,
        last_detection_time: 0.0,
    });
    
    commands.insert_resource(HandTrackingDebugOverlay::default());
    commands.insert_resource(config);
    
    // Start hand tracking thread
    thread::spawn(move || {
        if let Err(e) = run_hand_tracking_loop(hands_clone, hand_model_path, palm_model_path, webcam_buffer) {
            eprintln!("❌ Hand tracking thread error: {}", e);
        }
    });
    
    println!("✅ Hand tracking system initialized with ORT + ONNX");
    Ok(())
}

fn run_hand_tracking_loop(
    hands: Arc<Mutex<Vec<HandLandmarks>>>,
    hand_model_path: String,
    palm_model_path: String,
    webcam_buffer: Option<Arc<Mutex<Option<Vec<u8>>>>>,
) -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
    // Initialize ONNX Runtime environment
    let environment = Arc::new(Environment::builder().with_name("MediaPipe").build()?);
    
    // Load ONNX models
    println!("📋 Loading ONNX models with ORT...");
    let hand_session = SessionBuilder::new(&environment)?
        .with_execution_providers([ExecutionProvider::CPU(Default::default())])?
        .with_model_from_file(&hand_model_path)?;
    
    // Skip palm detection for now - focus on hand landmark model only
    println!("⚠️  Skipping palm detection model, using hand landmarks only");
    let palm_session = None;
    
    println!("✅ ONNX models loaded successfully with ORT");
    println!("   Hand model: {}", hand_model_path);
    println!("   Palm model: {}", palm_model_path);
    
    // Main detection loop
    loop {
        std::thread::sleep(std::time::Duration::from_millis(33)); // ~30 FPS
        
        // Get frame from webcam if available
        let frame_data = if let Some(ref buffer) = webcam_buffer {
            if let Ok(guard) = buffer.try_lock() {
                guard.clone()
            } else {
                None
            }
        } else {
            None
        };
        
        // Process frame and detect hands
        if let Ok(detected_hands) = detect_hands_in_frame(&hand_session, palm_session.as_ref(), frame_data) {
            // Update shared resources
            if let Ok(mut hands_guard) = hands.try_lock() {
                *hands_guard = detected_hands;
            }
        }
    }
}

fn detect_hands_in_frame(
    hand_session: &Session,
    palm_session: Option<&Session>,
    frame_data: Option<Vec<u8>>,
) -> Result<Vec<HandLandmarks>, Box<dyn std::error::Error>> {
    use std::time::{SystemTime, UNIX_EPOCH};
    let time = SystemTime::now().duration_since(UNIX_EPOCH)?.as_secs_f32();
    
    static mut DEBUG_COUNTER: u32 = 0;
    unsafe {
        DEBUG_COUNTER += 1;
        if DEBUG_COUNTER % 60 == 0 { // Every 2 seconds
            if let Some(ref data) = frame_data {
                println!("🔍 Frame data available: {} bytes (expected: {})", data.len(), 320 * 240 * 3);
            } else {
                println!("🔍 No frame data available, using mock data");
            }
        }
    }
    
    // If we have real frame data, process it with ONNX models
    if let Some(rgb_data) = frame_data {
        if rgb_data.len() == (320 * 240 * 3) {
            if unsafe { DEBUG_COUNTER % 60 == 0 } {
                println!("🧠 Calling ONNX inference with {} byte frame", rgb_data.len());
            }
            // Convert RGB frame to tensor format expected by MediaPipe
            if let Ok(detected_hands) = process_frame_with_onnx(hand_session, palm_session, &rgb_data, 320, 240, time) {
                static mut FRAME_LOG_COUNTER: u32 = 0;
                unsafe {
                    FRAME_LOG_COUNTER += 1;
                    if FRAME_LOG_COUNTER % 90 == 0 { // Every 3 seconds
                        println!("📸 ONNX Hand tracking: Processed frame, found {} hands", detected_hands.len());
                    }
                }
                return Ok(detected_hands);
            } else {
                println!("❌ ONNX inference failed, falling back to mock data");
            }
        } else {
            println!("⚠️ Frame data size mismatch: got {} bytes, expected {}", rgb_data.len(), 320 * 240 * 3);
        }
    }
    
    // Fallback: Create mock hand landmarks that animate
    let mut mock_hands = Vec::new();
    
    // Left hand
    let left_landmarks = create_mock_hand_landmarks(time, 0.3, Handedness::Left);
    mock_hands.push(HandLandmarks {
        landmarks: left_landmarks,
        handedness: Handedness::Left,
        confidence: 0.9,
        timestamp: time as f64,
    });
    
    // Right hand
    let right_landmarks = create_mock_hand_landmarks(time * 1.3, 0.7, Handedness::Right);
    mock_hands.push(HandLandmarks {
        landmarks: right_landmarks,
        handedness: Handedness::Right,
        confidence: 0.9,
        timestamp: time as f64,
    });
    
    Ok(mock_hands)
}

fn process_frame_with_onnx(
    hand_session: &Session,
    _palm_session: Option<&Session>,
    rgb_data: &[u8],
    width: u32,
    height: u32,
    time: f32,
) -> Result<Vec<HandLandmarks>, Box<dyn std::error::Error>> {
    // Convert RGB image to tensor format (assuming 224x224 input for hand model)
    let target_size = 224;
    
    // Debug: Check if input image is changing
    static mut LAST_FRAME_HASH: u32 = 0;
    static mut FRAME_CHANGE_COUNTER: u32 = 0;
    unsafe {
        FRAME_CHANGE_COUNTER += 1;
        // Simple hash of first 100 pixels to detect frame changes
        let mut hash: u32 = 0;
        for i in (0..300.min(rgb_data.len())).step_by(3) {
            hash = hash.wrapping_mul(31).wrapping_add(rgb_data[i] as u32);
        }
        
        if FRAME_CHANGE_COUNTER <= 5 || FRAME_CHANGE_COUNTER % 30 == 0 {
            if hash == LAST_FRAME_HASH {
                println!("⚠️ Input frame appears to be identical to previous frame! Hash: {}", hash);
            } else {
                println!("✅ Input frame changed. Hash: {} -> {}", LAST_FRAME_HASH, hash);
            }
        }
        LAST_FRAME_HASH = hash;
    }
    
    // For now, create a simple preprocessing pipeline
    // MediaPipe models typically expect normalized input in [-1, 1] range
    let mut input_data = vec![0.0f32; 3 * target_size * target_size];
    
    // Simple resize by sampling with improved normalization
    for y in 0..target_size {
        for x in 0..target_size {
            let src_x = (x * width as usize / target_size).min(width as usize - 1);
            let src_y = (y * height as usize / target_size).min(height as usize - 1);
            let src_idx = (src_y * width as usize + src_x) * 3;
            
            if src_idx + 2 < rgb_data.len() {
                let dst_idx = y * target_size + x;
                // Normalize to [-1, 1] range for MediaPipe models and convert to CHW format
                input_data[dst_idx] = (rgb_data[src_idx] as f32 / 127.5) - 1.0; // R
                input_data[target_size * target_size + dst_idx] = (rgb_data[src_idx + 1] as f32 / 127.5) - 1.0; // G
                input_data[2 * target_size * target_size + dst_idx] = (rgb_data[src_idx + 2] as f32 / 127.5) - 1.0; // B
            }
        }
    }
    
    // Debug: Check if preprocessed tensor is changing
    unsafe {
        if FRAME_CHANGE_COUNTER <= 5 || FRAME_CHANGE_COUNTER % 30 == 0 {
            let tensor_sum: f32 = input_data[..100].iter().sum();
            println!("🔍 Preprocessed tensor sample sum: {:.6}", tensor_sum);
        }
    }
    
    // Create input tensor for ONNX Runtime
    let input_array = ArrayD::from_shape_vec(
        vec![1, 3, target_size, target_size],
        input_data,
    )?;
    
    // Convert to CowArray for ORT
    let input_tensor = CowArray::from(&input_array);
    
    // Run inference
    let outputs = hand_session.run(vec![Value::from_array(hand_session.allocator(), &input_tensor)?])?;
    
    static mut INFERENCE_COUNTER: u32 = 0;
    unsafe {
        INFERENCE_COUNTER += 1;
        if INFERENCE_COUNTER % 30 == 0 {
            println!("🧠 ORT inference #{} completed, {} outputs", INFERENCE_COUNTER, outputs.len());
        }
    }
    
    // Parse outputs to extract hand landmarks
    // MediaPipe hand landmark models typically output:
    // Output 0: Hand landmarks (21 points × 3 coordinates)
    // Output 1: Hand confidence score
    // Output 2: Hand handedness classification
    
    let mut detected_hands = Vec::new();
    
    // Debug: Show ALL output tensor info to understand what we're getting
    unsafe {
        if INFERENCE_COUNTER <= 3 || INFERENCE_COUNTER % 300 == 0 {
            println!("\n📊 ONNX Model Output Analysis:");
            for (i, output) in outputs.iter().enumerate() {
                if let Ok(tensor) = output.try_extract::<f32>() {
                    let data = tensor.view();
                    let slice = data.as_slice().unwrap_or(&[]);
                    let shape = data.shape();
                    println!("  Output {}: shape {:?}, {} total elements", i, shape, slice.len());
                                
                    // Analyze value ranges
                    if !slice.is_empty() {
                        let min = slice.iter().fold(f32::INFINITY, |a, &b| a.min(b));
                        let max = slice.iter().fold(f32::NEG_INFINITY, |a, &b| a.max(b));
                        let avg = slice.iter().sum::<f32>() / slice.len() as f32;
                        println!("    Range: [{:.4}, {:.4}], Average: {:.4}", min, max, avg);
                                    
                        // Count values in different ranges
                        let in_0_1 = slice.iter().filter(|&&v| v >= 0.0 && v <= 1.0).count();
                        let in_0_224 = slice.iter().filter(|&&v| v >= 0.0 && v <= 224.0).count();
                        let negative = slice.iter().filter(|&&v| v < 0.0).count();
                        println!("    Values in [0,1]: {}, in [0,224]: {}, negative: {}", 
                                 in_0_1, in_0_224, negative);
                    }
                                
                    if slice.len() <= 20 {
                        println!("    All values: {:?}", slice);
                    } else {
                        println!("    First 10: {:?}", &slice[..10]);
                        println!("    Last 10: {:?}", &slice[slice.len()-10..]);
                    }
                }
            }
            println!();
        }
    }
    
    if outputs.len() >= 1 {
        if let Ok(landmarks_tensor) = outputs[0].try_extract::<f32>() {
            // Extract landmark data - assuming format is [batch, 21, 3] or flattened [batch, 63]
            let landmarks_data = landmarks_tensor.view();
            let landmarks_slice = landmarks_data.as_slice().unwrap_or(&[]);
            
            // For batch size 1, we expect either 63 elements (21 landmarks × 3 coords) 
            // or the tensor might be shaped differently
            if landmarks_slice.len() >= 63 {
                let mut landmarks = [Vec3::ZERO; 21];
                
                // Extract 21 landmarks with x, y, z coordinates
                // MediaPipe models typically output normalized coordinates (0-1)
                for i in 0..21 {
                    let base_idx = i * 3;
                    if base_idx + 2 < landmarks_slice.len() {
                        // Check if coordinates are already normalized (0-1 range)
                        let x = landmarks_slice[base_idx];
                        let y = landmarks_slice[base_idx + 1];
                        let z = landmarks_slice[base_idx + 2];
                        
                        // If values are > 1, they're likely in pixel space, otherwise normalized
                        if x > 1.0 || y > 1.0 {
                            // Pixel space - normalize to webcam dimensions
                            landmarks[i] = Vec3::new(
                                x / 224.0 * width as f32,
                                y / 224.0 * height as f32,
                                z,
                            );
                        } else {
                            // Already normalized - scale to webcam dimensions
                            landmarks[i] = Vec3::new(
                                x * width as f32,
                                y * height as f32,
                                z,
                            );
                        }
                    }
                }
                
                // Debug: Print landmark analysis
                if unsafe { INFERENCE_COUNTER % 30 == 0 } {
                    println!("🔍 Landmark Analysis:");
                    println!("   Wrist: ({:.1}, {:.1}, {:.3})", landmarks[0].x, landmarks[0].y, landmarks[0].z);
                    println!("   Index tip: ({:.1}, {:.1}, {:.3})", landmarks[8].x, landmarks[8].y, landmarks[8].z);
                    
                    // Check if landmarks are within expected bounds
                    let mut out_of_bounds = 0;
                    for (i, lm) in landmarks.iter().enumerate() {
                        if lm.x < 0.0 || lm.x > width as f32 || lm.y < 0.0 || lm.y > height as f32 {
                            out_of_bounds += 1;
                            if out_of_bounds <= 3 {
                                println!("   ⚠️ Landmark {} out of bounds: ({:.1}, {:.1})", i, lm.x, lm.y);
                            }
                        }
                    }
                    if out_of_bounds > 3 {
                        println!("   ⚠️ {} total landmarks out of bounds", out_of_bounds);
                    }
                }
                
                // Get confidence score from outputs
                let confidence = if outputs.len() >= 2 {
                    if let Ok(conf_tensor) = outputs[1].try_extract::<f32>() {
                        let conf_data = conf_tensor.view();
                        let conf_slice = conf_data.as_slice().unwrap_or(&[0.5]);
                        if unsafe { INFERENCE_COUNTER % 30 == 0 } {
                            println!("🔍 Confidence tensor: {} elements, values: {:?}", conf_slice.len(), &conf_slice[..5.min(conf_slice.len())]);
                        }
                        
                        // MediaPipe models often output presence/visibility scores
                        // Try to find the best confidence value
                        let mut max_conf = 0.0f32;
                        for &val in conf_slice {
                            if val > 0.0 && val <= 1.0 {
                                max_conf = max_conf.max(val);
                            }
                        }
                        
                        // If no valid confidence found, calculate from landmark visibility
                        if max_conf == 0.0 {
                            // Check if landmarks are within valid range as proxy for confidence
                            let mut valid_landmarks = 0;
                            for i in 0..21 {
                                let idx = i * 3;
                                if idx + 1 < landmarks_slice.len() {
                                    let x = landmarks_slice[idx];
                                    let y = landmarks_slice[idx + 1];
                                    // Check if normalized coordinates
                                    if (x >= 0.0 && x <= 1.0 && y >= 0.0 && y <= 1.0) ||
                                       (x >= 0.0 && x <= 224.0 && y >= 0.0 && y <= 224.0) {
                                        valid_landmarks += 1;
                                    }
                                }
                            }
                            max_conf = valid_landmarks as f32 / 21.0;
                        }
                        
                        max_conf
                    } else { 0.5 }
                } else {
                    // No confidence output - estimate from landmark validity
                    let mut valid_count = 0;
                    for landmark in &landmarks {
                        if landmark.x >= 0.0 && landmark.x <= width as f32 &&
                           landmark.y >= 0.0 && landmark.y <= height as f32 {
                            valid_count += 1;
                        }
                    }
                    valid_count as f32 / 21.0
                };
                
                // Only include hands with reasonable confidence (lowered threshold for testing)
                if confidence > 0.05 {
                    detected_hands.push(HandLandmarks {
                        landmarks,
                        handedness: Handedness::Unknown, // TODO: Parse from output 2
                        confidence,
                        timestamp: time as f64,
                    });
                    
                    if unsafe { INFERENCE_COUNTER % 30 == 0 } {
                        println!("✅ Detected hand with confidence {:.2}", confidence);
                    }
                } else if unsafe { INFERENCE_COUNTER % 30 == 0 } {
                    println!("⚠️ Low confidence hand rejected: {:.2}", confidence);
                }
            } else {
                println!("⚠️ Unexpected landmarks tensor size: {}", landmarks_slice.len());
            }
        }
    }
    
    Ok(detected_hands)
}

fn create_mock_hand_landmarks(time: f32, base_x: f32, _handedness: Handedness) -> [Vec3; 21] {
    let mut landmarks = [Vec3::ZERO; 21];
    
    // Wrist
    landmarks[landmarks::WRIST] = Vec3::new(
        base_x + (time * 0.5).sin() * 0.1,
        0.5 + (time * 0.3).cos() * 0.05,
        0.0
    );
    
    let wrist = landmarks[landmarks::WRIST];
    
    // Thumb chain
    for i in 0..4 {
        let offset = i as f32 * 0.03;
        let curl = (time * 2.0).sin() * 0.5 + 0.5; // 0-1 curl amount
        landmarks[landmarks::THUMB_CMC + i] = Vec3::new(
            wrist.x - 0.05 + offset * (1.0 - curl * 0.5),
            wrist.y + 0.02 + offset,
            wrist.z + curl * offset * 0.3,
        );
    }
    
    // Index finger chain
    for i in 0..4 {
        let offset = i as f32 * 0.03;
        let curl = (time * 1.5 + 1.0).sin() * 0.5 + 0.5;
        landmarks[landmarks::INDEX_MCP + i] = Vec3::new(
            wrist.x - 0.02,
            wrist.y + 0.05 + offset,
            wrist.z + curl * offset * 0.2,
        );
    }
    
    // Middle finger chain
    for i in 0..4 {
        let offset = i as f32 * 0.03;
        let curl = (time * 1.2 + 2.0).sin() * 0.5 + 0.5;
        landmarks[landmarks::MIDDLE_MCP + i] = Vec3::new(
            wrist.x,
            wrist.y + 0.05 + offset,
            wrist.z + curl * offset * 0.2,
        );
    }
    
    // Ring finger chain
    for i in 0..4 {
        let offset = i as f32 * 0.03;
        let curl = (time * 0.9 + 3.0).sin() * 0.5 + 0.5;
        landmarks[landmarks::RING_MCP + i] = Vec3::new(
            wrist.x + 0.02,
            wrist.y + 0.05 + offset,
            wrist.z + curl * offset * 0.2,
        );
    }
    
    // Pinky chain
    for i in 0..4 {
        let offset = i as f32 * 0.025;
        let curl = (time * 1.8 + 4.0).sin() * 0.5 + 0.5;
        landmarks[landmarks::PINKY_MCP + i] = Vec3::new(
            wrist.x + 0.04,
            wrist.y + 0.05 + offset,
            wrist.z + curl * offset * 0.15,
        );
    }
    
    landmarks
}

// --- Utility Functions ---

fn calculate_finger_bend(joints: &[Vec3; 4]) -> f32 {
    // Calculate bend angle based on joint positions
    let mut total_angle = 0.0;
    
    for i in 0..2 {
        if i + 2 < joints.len() {
            let v1 = (joints[i + 1] - joints[i]).normalize_or_zero();
            let v2 = (joints[i + 2] - joints[i + 1]).normalize_or_zero();
            let dot = v1.dot(v2).clamp(-1.0, 1.0);
            let angle = dot.acos();
            total_angle += angle;
        }
    }
    
    // Normalize to 0-1 range (0 = straight, 1 = fully bent)
    (total_angle / std::f32::consts::PI).clamp(0.0, 1.0)
}

fn calculate_finger_spread(finger1: &[Vec3; 4], finger2: &[Vec3; 4]) -> f32 {
    // Calculate angle between finger directions
    let dir1 = (finger1[3] - finger1[0]).normalize_or_zero();
    let dir2 = (finger2[3] - finger2[0]).normalize_or_zero();
    
    let dot = dir1.dot(dir2).clamp(-1.0, 1.0);
    dot.acos()
}

fn calculate_palm_normal(landmarks: &[Vec3; 21]) -> Vec3 {
    // Calculate palm normal from wrist and MCP joints
    let wrist = landmarks[landmarks::WRIST];
    let index_mcp = landmarks[landmarks::INDEX_MCP];
    let pinky_mcp = landmarks[landmarks::PINKY_MCP];
    
    let v1 = index_mcp - wrist;
    let v2 = pinky_mcp - wrist;
    
    v1.cross(v2).normalize_or_zero()
}

// --- Bevy Systems ---

pub fn update_hand_tracking_system(
    mut hand_tracking: ResMut<HandTrackingResource>,
    time: Res<Time>,
) {
    if !hand_tracking.is_active {
        return;
    }
    
    hand_tracking.last_detection_time = time.elapsed_seconds_f64();
    
    // Update finger poses from detected hands
    let new_poses = {
        if let Ok(hands_guard) = hand_tracking.hands.try_lock() {
            hands_guard.iter()
                .map(|hand| hand.to_finger_pose())
                .collect()
        } else {
            Vec::new()
        }
    };
    hand_tracking.finger_poses = new_poses;
    
    // Debug output every second
    static mut DEBUG_COUNTER: u32 = 0;
    unsafe {
        DEBUG_COUNTER += 1;
        if DEBUG_COUNTER % 60 == 0 {
            if let Ok(hands_guard) = hand_tracking.hands.try_lock() {
                println!("🤲 Hand Tracking: {} hands detected, {} finger poses", 
                         hands_guard.len(), hand_tracking.finger_poses.len());
                
                for (i, pose) in hand_tracking.finger_poses.iter().enumerate() {
                    println!("   Hand {}: Thumb bend: {:.2}, Index bend: {:.2}", 
                             i, pose.bend_angles[0], pose.bend_angles[1]);
                }
            }
        }
    }
}

pub fn map_fingers_to_spider_legs(
    hand_tracking: Res<HandTrackingResource>,
    // TODO: Add spider leg queries when we implement IK system
    // mut spider_query: Query<(&mut Transform, &SpiderLeg, &IKChain)>,
) {
    if !hand_tracking.is_active {
        return;
    }
    
    for (player_id, pose) in hand_tracking.finger_poses.iter().enumerate() {
        // Map finger poses to spider leg targets
        map_finger_pose_to_spider(pose, player_id as u32);
    }
}

fn map_finger_pose_to_spider(pose: &FingerPose, player_id: u32) {
    // TODO: Implement finger pose to spider leg IK mapping
    // This will be implemented when we add the IK system
    
    // For now, just log the mapping intent
    static mut LOG_COUNTER: u32 = 0;
    unsafe {
        LOG_COUNTER += 1;
        if LOG_COUNTER % 180 == 0 { // Every 3 seconds
            println!("🕷️ Player {}: Mapping finger pose to spider legs", player_id);
            println!("   Thumb bend: {:.2}, Index bend: {:.2}", 
                     pose.bend_angles[0], pose.bend_angles[1]);
        }
    }
}