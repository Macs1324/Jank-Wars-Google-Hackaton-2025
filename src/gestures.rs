use bevy::prelude::*;
use bevy::render::render_resource::{Extent3d, TextureDimension, TextureFormat};
use bevy::render::render_asset::RenderAssetUsages;
use nokhwa::pixel_format::RgbFormat;
use nokhwa::utils::{RequestedFormat, RequestedFormatType, CameraIndex};
use nokhwa::Camera;
use std::sync::{Arc, Mutex};
use std::thread;

// --- Components ---
#[derive(Component)]
pub struct WebcamOverlay;

// --- Resources ---
#[derive(Resource)]
pub struct WebcamResource {
    pub camera_data: Arc<Mutex<Option<Vec<u8>>>>,
    pub camera_width: u32,
    pub camera_height: u32,
}

// --- Systems ---
pub fn setup_webcam(
    mut commands: Commands,
    mut images: ResMut<Assets<Image>>,
) {
    println!("Initializing webcam...");
    
    // Create shared data for camera frames
    let camera_data = Arc::new(Mutex::new(None::<Vec<u8>>));
    let camera_data_clone = camera_data.clone();
    
    // Camera settings
    let camera_width = 320;
    let camera_height = 240;
    
    // Try to initialize camera in a separate thread
    thread::spawn(move || {
        match setup_camera_thread(camera_data_clone, camera_width, camera_height) {
            Ok(_) => println!("Camera thread started successfully"),
            Err(e) => println!("Camera initialization failed: {}", e),
        }
    });
    
    // Create initial black texture for the overlay
    let initial_texture = create_black_texture(camera_width, camera_height);
    let _texture_handle = images.add(initial_texture);
    
    // Insert webcam resource
    commands.insert_resource(WebcamResource {
        camera_data,
        camera_width,
        camera_height,
    });
    
    println!("Webcam system initialized with {}x{} resolution", camera_width, camera_height);
}

pub fn setup_webcam_overlay(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
    mut images: ResMut<Assets<Image>>,
    webcam_res: Res<WebcamResource>,
) {
    // Create initial texture
    let initial_texture = create_black_texture(webcam_res.camera_width, webcam_res.camera_height);
    let texture_handle = images.add(initial_texture);
    
    // Create material with the webcam texture
    let material = materials.add(StandardMaterial {
        base_color_texture: Some(texture_handle.clone()),
        unlit: true, // Make it emissive so it's always visible
        alpha_mode: bevy::pbr::AlphaMode::Blend,
        ..default()
    });
    
    // Create a larger quad mesh for the overlay
    let mesh = meshes.add(Mesh::from(Rectangle::new(4.0, 3.0)));
    
    // Spawn the overlay prominently in front of camera
    commands.spawn((
        PbrBundle {
            mesh,
            material,
            transform: Transform::from_xyz(0.0, 4.0, 5.0), // Center position, elevated, close to camera
            ..default()
        },
        WebcamOverlay,
        Name::new("Webcam Overlay"),
    ));
    
    println!("Webcam overlay created");
}

pub fn update_webcam_overlay(
    webcam_res: Res<WebcamResource>,
    mut images: ResMut<Assets<Image>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
    overlay_query: Query<&Handle<StandardMaterial>, With<WebcamOverlay>>,
) {
    static mut UPDATE_COUNT: u32 = 0;
    unsafe { UPDATE_COUNT += 1; }
    
    // Check if we have new camera data
    if let Ok(camera_data_guard) = webcam_res.camera_data.try_lock() {
        if let Some(ref frame_data) = *camera_data_guard {
            // Convert RGB to RGBA and validate data
            if frame_data.len() == (webcam_res.camera_width * webcam_res.camera_height * 3) as usize {
                let mut rgba_data = Vec::with_capacity((webcam_res.camera_width * webcam_res.camera_height * 4) as usize);
                
                // Add debugging for first few pixels
                if unsafe { UPDATE_COUNT } % 60 == 0 {
                    println!("📊 First 9 RGB values: {:?}", &frame_data[0..9.min(frame_data.len())]);
                }
                
                for chunk in frame_data.chunks(3) {
                    rgba_data.extend_from_slice(chunk);
                    rgba_data.push(255); // Alpha
                }
                
                // Create new image with camera data
                let new_image = Image::new(
                    Extent3d {
                        width: webcam_res.camera_width,
                        height: webcam_res.camera_height,
                        depth_or_array_layers: 1,
                    },
                    TextureDimension::D2,
                    rgba_data,
                    TextureFormat::Rgba8UnormSrgb,
                    RenderAssetUsages::RENDER_WORLD,
                );
                
                // Update materials with new texture
                for material_handle in overlay_query.iter() {
                    if let Some(material) = materials.get_mut(material_handle) {
                        // Create new texture handle and update material
                        let new_texture_handle = images.add(new_image.clone());
                        material.base_color_texture = Some(new_texture_handle);
                        
                        if unsafe { UPDATE_COUNT } % 60 == 0 {
                            println!("✅ Updated overlay texture with camera data!");
                        }
                    }
                }
            }
        }
    }
}

// --- Helper Functions ---
fn setup_camera_thread(
    camera_data: Arc<Mutex<Option<Vec<u8>>>>,
    width: u32,
    height: u32,
) -> Result<(), Box<dyn std::error::Error + Send + Sync>> {
    // First, check what cameras are available
    match nokhwa::query(nokhwa::utils::ApiBackend::Auto) {
        Ok(cameras) => {
            println!("Found {} camera(s):", cameras.len());
            for (i, camera_info) in cameras.iter().enumerate() {
                println!("  Camera {}: {}", i, camera_info.human_name());
            }
            if cameras.is_empty() {
                return Err("No cameras found on the system".into());
            }
        },
        Err(e) => {
            println!("Warning: Could not enumerate cameras: {}", e);
        }
    }
    
    // Try different camera formats and resolutions
    let fallback_resolutions = [
        (width, height),
        (640, 480),
        (320, 240),
        (160, 120),
    ];
    
    let format_types = [
        RequestedFormatType::AbsoluteHighestFrameRate,
        RequestedFormatType::HighestFrameRate(30),
        RequestedFormatType::HighestFrameRate(15),
        RequestedFormatType::Closest(nokhwa::utils::CameraFormat::new(
            nokhwa::utils::Resolution::new(320, 240), 
            nokhwa::utils::FrameFormat::YUYV, 
            30
        )),
    ];
    
    let mut camera = None;
    
    'outer: for &(res_width, res_height) in &fallback_resolutions {
        for format_type in &format_types {
            println!("Trying camera resolution: {}x{} with format: {:?}", res_width, res_height, format_type);
            
            let requested = RequestedFormat::new::<RgbFormat>(*format_type);
            
            match Camera::new(CameraIndex::Index(0), requested) {
                Ok(mut cam) => {
                    println!("Camera created, setting resolution...");
                    match cam.set_resolution(nokhwa::utils::Resolution::new(res_width, res_height)) {
                        Ok(_) => {
                            println!("Resolution set, opening stream...");
                            match cam.open_stream() {
                                Ok(_) => {
                                    println!("✅ Camera opened successfully at {}x{}", res_width, res_height);
                                    camera = Some(cam);
                                    break 'outer;
                                },
                                Err(e) => println!("❌ Failed to open stream: {}", e),
                            }
                        },
                        Err(e) => println!("❌ Failed to set resolution: {}", e),
                    }
                },
                Err(e) => println!("❌ Failed to create camera: {}", e),
            }
        }
    }
    
    let mut camera = camera.ok_or("Failed to initialize camera with any supported resolution")?;
    
    let mut frame_count = 0;
    loop {
        match camera.frame() {
            Ok(frame) => {
                let rgb_data = frame.decode_image::<RgbFormat>()?;
                let frame_data = rgb_data.as_raw().clone();
                
                frame_count += 1;
                if frame_count % 300 == 0 {
                    println!("📹 Camera thread: {} frames captured", frame_count);
                }
                
                // Update shared data
                if let Ok(mut data_guard) = camera_data.lock() {
                    *data_guard = Some(frame_data);
                }
            }
            Err(e) => {
                println!("Error capturing frame: {}", e);
                std::thread::sleep(std::time::Duration::from_millis(100));
            }
        }
        
        // Control frame rate
        std::thread::sleep(std::time::Duration::from_millis(33)); // ~30 FPS
    }
}

fn create_black_texture(width: u32, height: u32) -> Image {
    let size = (width * height * 4) as usize; // RGBA format
    let mut data = vec![0u8; size]; // Black pixels
    
    // Add some initial pattern so we can see the overlay
    for y in 0..height {
        for x in 0..width {
            let idx = ((y * width + x) * 4) as usize;
            if idx + 3 < data.len() {
                // Create a simple checkerboard pattern
                if (x / 20 + y / 20) % 2 == 0 {
                    data[idx] = 64;     // R
                    data[idx + 1] = 64; // G
                    data[idx + 2] = 64; // B
                    data[idx + 3] = 255; // A
                }
            }
        }
    }
    
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

pub fn process_gestures() {
    // Placeholder for future gesture processing
}

pub fn map_gestures_to_movement() {
    // Placeholder for future gesture-to-movement mapping
}