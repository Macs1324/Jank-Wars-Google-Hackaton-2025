use bevy::prelude::*;
use bevy_rapier3d::prelude::*;

// --- Components ---
#[derive(Component)]
pub struct Player {
    pub id: u32,
}

#[derive(Component)]
pub struct PlayerBody; // Marker for the main body of the player

#[derive(Component)]
pub struct PlayerLimb {
    pub id: u32, // Limb identifier (0, 1, 2, 3, etc.)
}

// --- Systems ---
pub fn spawn_player(
    commands: &mut Commands,
    meshes: &mut ResMut<Assets<Mesh>>,
    materials: &mut ResMut<Assets<StandardMaterial>>,
    position: Vec3,
    color: Color,
    player_id: u32,
) {
    let body_radius = 0.4;
    let limb_length = 0.8;
    let limb_radius = 0.15;
    
    // Spawn the main body
    let body_entity = commands.spawn((
        PbrBundle {
            mesh: meshes.add(Sphere::new(body_radius).mesh().ico(5).unwrap()),
            material: materials.add(color),
            transform: Transform::from_translation(position),
            ..default()
        },
        RigidBody::Dynamic,
        Collider::ball(body_radius),
        Player { id: player_id },
        PlayerBody,
        ExternalImpulse::default(),
        Name::new(format!("Player {} Body", player_id)),
    )).id();

    // Create 6 limbs in a spider-like arrangement
    let limb_positions = [
        Vec3::new(1.0, 0.0, 0.5),   // Front right
        Vec3::new(-1.0, 0.0, 0.5),  // Front left
        Vec3::new(1.0, 0.0, 0.0),   // Middle right
        Vec3::new(-1.0, 0.0, 0.0),  // Middle left
        Vec3::new(1.0, 0.0, -0.5),  // Back right
        Vec3::new(-1.0, 0.0, -0.5), // Back left
    ];

    for (limb_id, limb_offset) in limb_positions.iter().enumerate() {
        let limb_pos = position + *limb_offset * (body_radius + limb_length * 0.5);
        
        // Create limb entity
        let limb_entity = commands.spawn((
            PbrBundle {
                mesh: meshes.add(Capsule3d::new(limb_radius, limb_length)),
                material: materials.add(color * 0.8), // Slightly darker than body
                transform: Transform::from_translation(limb_pos),
                ..default()
            },
            RigidBody::Dynamic,
            Collider::capsule_y(limb_length * 0.5, limb_radius),
            PlayerLimb { id: limb_id as u32 },
            Player { id: player_id },
            ExternalImpulse::default(),
            Name::new(format!("Player {} Limb {}", player_id, limb_id)),
        )).id();

        // Connect limb to body with a spherical joint (ball joint)
        let joint = SphericalJointBuilder::new()
            .local_anchor1(Vec3::ZERO) // Connect at body center
            .local_anchor2(Vec3::new(0.0, limb_length * 0.5, 0.0)) // Connect at limb top
            .motor_position(JointAxis::AngX, 0.0, 5.0, 1.0)
            .motor_position(JointAxis::AngY, 0.0, 5.0, 1.0)
            .motor_position(JointAxis::AngZ, 0.0, 5.0, 1.0);

        commands.entity(limb_entity).insert(ImpulseJoint::new(body_entity, joint));
    }
}

// Enhanced input system for ragdoll control (temporary keyboard controls)
pub fn player_input_system(
    keyboard_input: Res<ButtonInput<KeyCode>>,
    mut body_query: Query<(&mut ExternalImpulse, &Transform, &Player), With<PlayerBody>>,
    mut limb_query: Query<(&mut ExternalImpulse, &PlayerLimb, &Player), (With<PlayerLimb>, Without<PlayerBody>)>,
) {
    // Control main body (Player 0 only for now)
    for (mut impulse, transform, player) in body_query.iter_mut() {
        if player.id == 0 {
            let mut force_direction = Vec3::ZERO;

            // Basic body movement
            if keyboard_input.pressed(KeyCode::ArrowUp) {
                force_direction -= *transform.local_z();
            }
            if keyboard_input.pressed(KeyCode::ArrowDown) {
                force_direction += *transform.local_z();
            }
            if keyboard_input.pressed(KeyCode::ArrowLeft) {
                force_direction -= *transform.local_x();
            }
            if keyboard_input.pressed(KeyCode::ArrowRight) {
                force_direction += *transform.local_x();
            }

            if keyboard_input.just_pressed(KeyCode::Space) {
                impulse.impulse += Vec3::Y * 15.0;
            }

            if force_direction != Vec3::ZERO {
                impulse.impulse += force_direction.normalize_or_zero() * 25.0 * 0.016;
            }
        }
    }

    // Control individual limbs (QWOP-style)
    for (mut impulse, limb, player) in limb_query.iter_mut() {
        if player.id == 0 {
            let mut limb_force = Vec3::ZERO;

            // Number keys control individual limbs
            match limb.id {
                0 => if keyboard_input.pressed(KeyCode::Digit1) { limb_force += Vec3::Y * 10.0; },
                1 => if keyboard_input.pressed(KeyCode::Digit2) { limb_force += Vec3::Y * 10.0; },
                2 => if keyboard_input.pressed(KeyCode::Digit3) { limb_force += Vec3::Y * 10.0; },
                3 => if keyboard_input.pressed(KeyCode::Digit4) { limb_force += Vec3::Y * 10.0; },
                4 => if keyboard_input.pressed(KeyCode::Digit5) { limb_force += Vec3::Y * 10.0; },
                5 => if keyboard_input.pressed(KeyCode::Digit6) { limb_force += Vec3::Y * 10.0; },
                _ => {}
            }

            if limb_force != Vec3::ZERO {
                impulse.impulse += limb_force * 0.016;
            }
        }
    }
}