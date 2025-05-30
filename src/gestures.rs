use bevy::prelude::*;
use bevy::render::render_resource::{Extent3d, TextureDimension, TextureFormat};
use bevy::render::render_asset::RenderAssetUsages;
use nokhwa::pixel_format::RgbFormat;
use nokhwa::utils::{RequestedFormat, RequestedFormatType, CameraIndex, Resolution, FrameFormat, CameraFormat};
use nokhwa::Camera;
use std::sync::{Arc, Mutex};
use std::thread;
use crate::hand_tracking::{HandTrackingResource, landmarks};

// --- Components ---
#[derive(Component)]
pub struct WebcamOverlay;

// --- Resources ---
#[derive(Resource)]
pub struct WebcamResource {
    frame_buffer: Arc<Mutex<Option<Vec<u8>>>>,
    width: u32,
    height: u32,
    texture_handle: Option<Handle<Image>>,
}

impl WebcamResource {
    pub fn get_frame_buffer(&self) -> Arc<Mutex<Option<Vec<u8>>>> {
        self.frame_buffer.clone()
    }
}



// --- Systems ---
pub fn setup_webcam(mut commands: Commands) {
    let frame_buffer = Arc::new(Mutex::new(None::<Vec<u8>>));
    let frame_buffer_clone = frame_buffer.clone();
    
    const TARGET_WIDTH: u32 = 320;
    const TARGET_HEIGHT: u32 = 240;
    
    thread::spawn(move || {
        if let Err(e) = run_camera_capture(frame_buffer_clone, TARGET_WIDTH, TARGET_HEIGHT) {
            eprintln!("Camera capture failed: {}", e);
        }
    });
    
    commands.insert_resource(WebcamResource {
        frame_buffer,
        width: TARGET_WIDTH,
        height: TARGET_HEIGHT,
        texture_handle: None,
    });
}

pub fn setup_webcam_ui(
    mut commands: Commands,
    mut images: ResMut<Assets<Image>>,
    mut webcam_res: ResMut<WebcamResource>,
) {
    let initial_image = create_placeholder_image(webcam_res.width, webcam_res.height);
    let texture_handle = images.add(initial_image);
    webcam_res.texture_handle = Some(texture_handle.clone());
    
    commands
        .spawn(NodeBundle {
            style: Style {
                position_type: PositionType::Absolute,
                top: Val::Px(10.0),
                right: Val::Px(10.0),
                width: Val::Px(160.0),
                height: Val::Px(120.0),
                border: UiRect::all(Val::Px(2.0)),
                ..default()
            },
            border_color: Color::WHITE.into(),
            background_color: Color::BLACK.into(),
            ..default()
        })
        .with_children(|parent| {
            parent.spawn((
                ImageBundle {
                    style: Style {
                        width: Val::Percent(100.0),
                        height: Val::Percent(100.0),
                        ..default()
                    },
                    image: UiImage::new(texture_handle),
                    ..default()
                },
                WebcamOverlay,
            ));
        });
}

pub fn update_webcam_texture(
    mut webcam_res: ResMut<WebcamResource>,
    mut images: ResMut<Assets<Image>>,
    mut ui_images: Query<&mut UiImage, With<WebcamOverlay>>,
    hand_tracking: Option<Res<HandTrackingResource>>,
) {
    let frame_data = {
        if let Ok(mut frame_guard) = webcam_res.frame_buffer.try_lock() {
            frame_guard.take()
        } else {
            None
        }
    };
    
    if let Some(frame_data) = frame_data {
        if frame_data.len() == (webcam_res.width * webcam_res.height * 3) as usize {
            // Convert RGB to RGBA and add hand landmark overlays
            let mut rgba_data = Vec::with_capacity((webcam_res.width * webcam_res.height * 4) as usize);
            for chunk in frame_data.chunks(3) {
                rgba_data.extend_from_slice(chunk);
                rgba_data.push(255); // Alpha
            }
            
            // Draw hand landmarks on the image
            if let Some(ref hand_res) = hand_tracking {
                if let Ok(hands_guard) = hand_res.hands.try_lock() {
                    for hand in hands_guard.iter() {
                        draw_hand_landmarks(&mut rgba_data, webcam_res.width, webcam_res.height, &hand.landmarks);
                    }
                }
            }
            
            // Create new image with camera data and overlays
            let new_image = Image::new(
                Extent3d {
                    width: webcam_res.width,
                    height: webcam_res.height,
                    depth_or_array_layers: 1,
                },
                TextureDimension::D2,
                rgba_data,
                TextureFormat::Rgba8UnormSrgb,
                RenderAssetUsages::RENDER_WORLD,
            );
            
            // Create new texture handle and update UI
            let new_texture_handle = images.add(new_image);
            webcam_res.texture_handle = Some(new_texture_handle.clone());
            
            for mut ui_image in ui_images.iter_mut() {
                ui_image.texture = new_texture_handle.clone();
            }
        }
    }
}

pub fn process_gestures() {
    // Placeholder for future gesture processing
}

pub fn map_gestures_to_movement() {
    // Placeholder for future gesture-to-movement mapping
}

// --- Helper Functions ---
fn run_camera_capture(
    frame_buffer: Arc<Mutex<Option<Vec<u8>>>>,
    target_width: u32,
    target_height: u32,
) -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
    let camera = initialize_camera(target_width, target_height)?;
    capture_loop(camera, frame_buffer)
}

fn initialize_camera(
    target_width: u32,
    target_height: u32,
) -> Result<Camera, Box<dyn std::error::Error + Send + Sync>> {
    let resolutions = [(target_width, target_height), (640, 480), (320, 240)];
    let formats = [
        RequestedFormatType::HighestFrameRate(30),
        RequestedFormatType::HighestFrameRate(15),
        RequestedFormatType::Closest(CameraFormat::new(
            Resolution::new(320, 240),
            FrameFormat::YUYV,
            30,
        )),
    ];

    for &(width, height) in &resolutions {
        for &format in &formats {
            if let Ok(camera) = try_camera_config(width, height, format) {
                return Ok(camera);
            }
        }
    }

    Err("Failed to initialize camera with any supported configuration".into())
}

fn try_camera_config(
    width: u32,
    height: u32,
    format: RequestedFormatType,
) -> Result<Camera, Box<dyn std::error::Error + Send + Sync>> {
    let requested = RequestedFormat::new::<RgbFormat>(format);
    let mut camera = Camera::new(CameraIndex::Index(0), requested)?;
    camera.set_resolution(Resolution::new(width, height))?;
    camera.open_stream()?;
    Ok(camera)
}

fn capture_loop(
    mut camera: Camera,
    frame_buffer: Arc<Mutex<Option<Vec<u8>>>>,
) -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
    loop {
        match camera.frame() {
            Ok(frame) => {
                let rgb_data = frame.decode_image::<RgbFormat>()?;
                let frame_data = rgb_data.as_raw().clone();
                
                if let Ok(mut buffer_guard) = frame_buffer.try_lock() {
                    *buffer_guard = Some(frame_data);
                }
            }
            Err(_) => {
                std::thread::sleep(std::time::Duration::from_millis(33));
                continue;
            }
        }
        
        std::thread::sleep(std::time::Duration::from_millis(33));
    }
}

fn create_placeholder_image(width: u32, height: u32) -> Image {
    let size = (width * height * 4) as usize;
    let data = vec![32u8; size];
    
    Image::new(
        Extent3d {
            width,
            height,
            depth_or_array_layers: 1,
        },
        TextureDimension::D2,
        data,
        TextureFormat::Rgba8UnormSrgb,
        RenderAssetUsages::RENDER_WORLD,
    )
}

fn draw_hand_landmarks(rgba_data: &mut [u8], width: u32, height: u32, landmarks: &[Vec3; 21]) {
    // Hand landmark connections (finger joints and palm structure)
    let connections = [
        // Thumb
        (landmarks::WRIST, landmarks::THUMB_CMC),
        (landmarks::THUMB_CMC, landmarks::THUMB_MCP),
        (landmarks::THUMB_MCP, landmarks::THUMB_IP),
        (landmarks::THUMB_IP, landmarks::THUMB_TIP),
        
        // Index finger
        (landmarks::WRIST, landmarks::INDEX_MCP),
        (landmarks::INDEX_MCP, landmarks::INDEX_PIP),
        (landmarks::INDEX_PIP, landmarks::INDEX_DIP),
        (landmarks::INDEX_DIP, landmarks::INDEX_TIP),
        
        // Middle finger
        (landmarks::WRIST, landmarks::MIDDLE_MCP),
        (landmarks::MIDDLE_MCP, landmarks::MIDDLE_PIP),
        (landmarks::MIDDLE_PIP, landmarks::MIDDLE_DIP),
        (landmarks::MIDDLE_DIP, landmarks::MIDDLE_TIP),
        
        // Ring finger
        (landmarks::WRIST, landmarks::RING_MCP),
        (landmarks::RING_MCP, landmarks::RING_PIP),
        (landmarks::RING_PIP, landmarks::RING_DIP),
        (landmarks::RING_DIP, landmarks::RING_TIP),
        
        // Pinky
        (landmarks::WRIST, landmarks::PINKY_MCP),
        (landmarks::PINKY_MCP, landmarks::PINKY_PIP),
        (landmarks::PINKY_PIP, landmarks::PINKY_DIP),
        (landmarks::PINKY_DIP, landmarks::PINKY_TIP),
        
        // Palm connections
        (landmarks::INDEX_MCP, landmarks::MIDDLE_MCP),
        (landmarks::MIDDLE_MCP, landmarks::RING_MCP),
        (landmarks::RING_MCP, landmarks::PINKY_MCP),
    ];
    
    // Draw landmark connections (skeleton)
    for &(start_idx, end_idx) in &connections {
        let start = landmarks[start_idx];
        let end = landmarks[end_idx];
        
        // Landmarks are already in pixel coordinates from the model
        let start_x = start.x.clamp(0.0, width as f32 - 1.0) as i32;
        let start_y = start.y.clamp(0.0, height as f32 - 1.0) as i32;
        let end_x = end.x.clamp(0.0, width as f32 - 1.0) as i32;
        let end_y = end.y.clamp(0.0, height as f32 - 1.0) as i32;
        
        draw_line(rgba_data, width, height, start_x, start_y, end_x, end_y, [0, 255, 0, 255]); // Green lines
    }
    
    // Draw landmark points
    for (i, landmark) in landmarks.iter().enumerate() {
        let x = landmark.x.clamp(0.0, width as f32 - 1.0) as i32;
        let y = landmark.y.clamp(0.0, height as f32 - 1.0) as i32;
        
        // Different colors for different parts of the hand
        let color = match i {
            landmarks::WRIST => [255, 255, 0, 255], // Yellow for wrist
            landmarks::THUMB_TIP | landmarks::INDEX_TIP | landmarks::MIDDLE_TIP | 
            landmarks::RING_TIP | landmarks::PINKY_TIP => [255, 0, 0, 255], // Red for fingertips
            _ => [0, 255, 255, 255], // Cyan for other joints
        };
        
        draw_circle(rgba_data, width, height, x, y, 3, color);
    }
}

fn draw_circle(rgba_data: &mut [u8], width: u32, height: u32, center_x: i32, center_y: i32, radius: i32, color: [u8; 4]) {
    for dy in -radius..=radius {
        for dx in -radius..=radius {
            if dx * dx + dy * dy <= radius * radius {
                let x = center_x + dx;
                let y = center_y + dy;
                
                if x >= 0 && x < width as i32 && y >= 0 && y < height as i32 {
                    let idx = ((y as u32 * width + x as u32) * 4) as usize;
                    if idx + 3 < rgba_data.len() {
                        rgba_data[idx] = color[0];     // R
                        rgba_data[idx + 1] = color[1]; // G
                        rgba_data[idx + 2] = color[2]; // B
                        rgba_data[idx + 3] = color[3]; // A
                    }
                }
            }
        }
    }
}

fn draw_line(rgba_data: &mut [u8], width: u32, height: u32, x0: i32, y0: i32, x1: i32, y1: i32, color: [u8; 4]) {
    // Simple line drawing using Bresenham's algorithm
    let dx = (x1 - x0).abs();
    let dy = (y1 - y0).abs();
    let sx = if x0 < x1 { 1 } else { -1 };
    let sy = if y0 < y1 { 1 } else { -1 };
    let mut err = dx - dy;
    let mut x = x0;
    let mut y = y0;
    
    loop {
        // Draw pixel
        if x >= 0 && x < width as i32 && y >= 0 && y < height as i32 {
            let idx = ((y as u32 * width + x as u32) * 4) as usize;
            if idx + 3 < rgba_data.len() {
                rgba_data[idx] = color[0];     // R
                rgba_data[idx + 1] = color[1]; // G
                rgba_data[idx + 2] = color[2]; // B
                rgba_data[idx + 3] = color[3]; // A
            }
        }
        
        if x == x1 && y == y1 { break; }
        
        let e2 = 2 * err;
        if e2 > -dy {
            err -= dy;
            x += sx;
        }
        if e2 < dx {
            err += dx;
            y += sy;
        }
    }
}

