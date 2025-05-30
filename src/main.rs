use bevy::prelude::*;
use bevy_inspector_egui::quick::WorldInspectorPlugin;
use bevy_rapier3d::prelude::*;

mod debug_ui;
mod environment;
mod gestures;
mod hand_tracking;
mod physics;
mod player;

use debug_ui::*;
use environment::*;
use gestures::*;
use hand_tracking::*;
use physics::*;
use player::*;

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_plugins(WorldInspectorPlugin::new())
        .add_plugins(RapierPhysicsPlugin::<NoUserData>::default())
        .add_plugins(RapierDebugRenderPlugin::default())
        .add_systems(
            Startup,
            (
                setup_lighting,
                setup_camera,
                setup_ground,
                setup_players,
                setup_webcam,
            ),
        )
        .add_systems(
            Startup,
            (setup_webcam_ui, setup_hand_tracking_system, setup_debug_ui).after(setup_webcam),
        )
        .add_systems(Update, (toggle_physics_debug_render, player_input_system))
        .add_systems(
            Update,
            (
                update_webcam_texture,
                update_hand_tracking_system,
                map_fingers_to_spider_legs,
                update_debug_ui,
                toggle_debug_overlay,
            ),
        )
        .run();
}

fn setup_hand_tracking_system(commands: Commands, webcam_res: Res<WebcamResource>) {
    if let Err(e) = setup_hand_tracking(commands, Some(webcam_res)) {
        eprintln!("⚠️ Hand tracking setup failed: {}", e);
        eprintln!("   Game will continue with keyboard controls only");
    }
}

fn setup_players(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
) {
    // Spawn players
    spawn_player(
        &mut commands,
        &mut meshes,
        &mut materials,
        Vec3::new(-1.5, 1.0, 0.0), // Position for player 0
        Color::rgb(0.8, 0.2, 0.2), // Reddish color for player 0
        0,                         // Player ID 0
    );
    spawn_player(
        &mut commands,
        &mut meshes,
        &mut materials,
        Vec3::new(1.5, 1.0, 0.0),  // Position for player 1
        Color::rgb(0.2, 0.2, 0.8), // Bluish color for player 1
        1,                         // Player ID 1
    );

    println!("🕷️ Jank Wars - Finger-Controlled Spider Combat!");
    println!("🚀 Hand tracking: MediaPipe + TensorFlow Lite system initializing...");
    println!("🎮 Fallback controls: Arrow keys move body, 1-6 keys control limbs");
    println!("🎥 Webcam: Check top-right corner for camera feed with hand landmarks");
    println!("🔧 Debug: Press 'D' for physics debug, F12/ESC for inspector");
}
