use bevy::prelude::*;
use bevy_rapier3d::prelude::*;

// --- Environment Setup ---
pub fn setup_lighting(mut commands: Commands) {
    // Add ambient light for general illumination
    commands.insert_resource(AmbientLight {
        color: Color::WHITE,
        brightness: 0.3,
    });

    // Main directional light (simulates sun)
    commands.spawn(DirectionalLightBundle {
        directional_light: DirectionalLight {
            color: Color::rgb(1.0, 0.95, 0.8),
            illuminance: 10000.0,
            shadows_enabled: true,
            ..default()
        },
        transform: Transform::from_xyz(0.0, 10.0, 0.0)
            .looking_at(Vec3::new(-2.0, -5.0, -2.0), Vec3::Y),
        ..default()
    });

    // Fill light to brighten shadows
    commands.spawn(PointLightBundle {
        point_light: PointLight {
            intensity: 4000.0,
            color: Color::rgb(0.8, 0.9, 1.0),
            shadows_enabled: false,
            ..default()
        },
        transform: Transform::from_xyz(-4.0, 6.0, 4.0),
        ..default()
    });

    // Secondary accent light
    commands.spawn(PointLightBundle {
        point_light: PointLight {
            intensity: 3000.0,
            color: Color::rgb(1.0, 0.8, 0.6),
            shadows_enabled: false,
            ..default()
        },
        transform: Transform::from_xyz(4.0, 4.0, -4.0),
        ..default()
    });
}

pub fn setup_camera(mut commands: Commands) {
    // Camera with sky background
    commands.spawn((
        Camera3dBundle {
            transform: Transform::from_xyz(-4.0, 6.5, 10.0).looking_at(Vec3::ZERO, Vec3::Y),
            camera: Camera {
                clear_color: ClearColorConfig::Custom(Color::rgb(0.5, 0.8, 1.0)), // Nice sky blue
                ..default()
            },
            ..default()
        },
    ));
}

pub fn setup_ground(
    mut commands: Commands,
    mut meshes: ResMut<Assets<Mesh>>,
    mut materials: ResMut<Assets<StandardMaterial>>,
) {
    // Ground plane - Now a fixed rigid body
    commands.spawn((
        PbrBundle {
            mesh: meshes.add(Plane3d::default().mesh().size(10.0, 10.0)),
            material: materials.add(StandardMaterial {
                base_color: Color::rgb(0.7, 0.8, 0.6),
                perceptual_roughness: 0.8,
                metallic: 0.1,
                ..default()
            }),
            transform: Transform::from_xyz(0.0, 0.0, 0.0),
            ..default()
        },
        RigidBody::Fixed,
        Collider::cuboid(5.0, 0.1, 5.0), // A flat collider for the ground
    ));
}