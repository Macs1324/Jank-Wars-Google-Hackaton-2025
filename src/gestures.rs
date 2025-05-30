use bevy::prelude::*;
use bevy::render::render_resource::{Extent3d, TextureDimension, TextureFormat};
use bevy::render::render_asset::RenderAssetUsages;
use nokhwa::pixel_format::RgbFormat;
use nokhwa::utils::{RequestedFormat, RequestedFormatType, CameraIndex, Resolution, FrameFormat, CameraFormat};
use nokhwa::Camera;
use std::sync::{Arc, Mutex};
use std::thread;

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
            // Convert RGB to RGBA
            let mut rgba_data = Vec::with_capacity((webcam_res.width * webcam_res.height * 4) as usize);
            for chunk in frame_data.chunks(3) {
                rgba_data.extend_from_slice(chunk);
                rgba_data.push(255); // Alpha
            }
            
            // Create new image with camera data
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

