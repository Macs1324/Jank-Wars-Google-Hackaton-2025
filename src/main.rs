use bevy::prelude::*;
use bevy_inspector_egui::quick::WorldInspectorPlugin;
use bevy_rapier3d::prelude::*;

mod player;
mod environment;
mod physics;

use player::*;
use environment::*;
use physics::*;

fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .add_plugins(WorldInspectorPlugin::new())
        .add_plugins(RapierPhysicsPlugin::<NoUserData>::default())
        .add_plugins(RapierDebugRenderPlugin::default())
        .add_systems(Startup, (setup_lighting, setup_camera, setup_ground, setup_players))
        .add_systems(Update, (toggle_physics_debug_render, player_input_system))
        .run();
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

    println!("3D scene with physics setup complete. Press 'D' to toggle physics debug view.");
    println!("Ragdoll players spawned! Arrow keys move body, 1-6 keys control limbs (Player 0 Red).");
    println!("Press the default egui inspector key (usually F12 or ESC) to open the world inspector.");
}