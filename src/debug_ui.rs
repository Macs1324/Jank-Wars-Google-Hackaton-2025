use bevy::prelude::*;
use crate::hand_tracking::{HandTrackingResource, HandTrackingDebugOverlay};

#[derive(Component)]
pub struct DebugUIRoot;

#[derive(Component)]
pub struct DebugText;

pub fn setup_debug_ui(mut commands: Commands) {
    // Create debug UI root
    commands
        .spawn((
            NodeBundle {
                style: Style {
                    position_type: PositionType::Absolute,
                    bottom: Val::Px(10.0),
                    left: Val::Px(10.0),
                    flex_direction: FlexDirection::Column,
                    row_gap: Val::Px(5.0),
                    ..default()
                },
                ..default()
            },
            DebugUIRoot,
        ))
        .with_children(|parent| {
            parent.spawn((
                TextBundle::from_section(
                    "Hand Tracking Debug",
                    TextStyle {
                        font_size: 20.0,
                        color: Color::WHITE,
                        ..default()
                    },
                ),
                DebugText,
            ));
        });
}

pub fn update_debug_ui(
    mut debug_text_query: Query<&mut Text, With<DebugText>>,
    hand_tracking: Res<HandTrackingResource>,
    debug_overlay: Res<HandTrackingDebugOverlay>,
    keyboard: Res<ButtonInput<KeyCode>>,
) {
    // Toggle debug overlay with F3
    if keyboard.just_pressed(KeyCode::F3) {
        println!("🔧 Debug overlay toggled");
    }
    
    if !debug_overlay.enabled {
        return;
    }
    
    for mut text in debug_text_query.iter_mut() {
        let mut debug_info = String::new();
        debug_info.push_str("🔍 Hand Tracking Debug\n");
        debug_info.push_str("━━━━━━━━━━━━━━━━━━━━\n");
        
        if hand_tracking.is_active {
            debug_info.push_str(&format!("Status: {} Active\n", if hand_tracking.model_loaded { "✅" } else { "⏳" }));
            
            if let Ok(hands) = hand_tracking.hands.try_lock() {
                debug_info.push_str(&format!("Hands Detected: {}\n", hands.len()));
                
                for (i, hand) in hands.iter().enumerate() {
                    debug_info.push_str(&format!("\nHand {}:\n", i));
                    if debug_overlay.show_confidence {
                        debug_info.push_str(&format!("  Confidence: {:.2}\n", hand.confidence));
                    }
                    
                    if debug_overlay.show_coordinates {
                        let wrist = &hand.landmarks[0];
                        let index_tip = &hand.landmarks[8];
                        debug_info.push_str(&format!("  Wrist: ({:.0}, {:.0})\n", wrist.x, wrist.y));
                        debug_info.push_str(&format!("  Index Tip: ({:.0}, {:.0})\n", index_tip.x, index_tip.y));
                    }
                }
            }
            
            debug_info.push_str(&format!("\nFinger Poses: {}\n", hand_tracking.finger_poses.len()));
            for (i, pose) in hand_tracking.finger_poses.iter().enumerate() {
                if i < 2 {  // Only show first 2 hands
                    debug_info.push_str(&format!("  Hand {}: ", i));
                    for (j, &angle) in pose.bend_angles.iter().enumerate() {
                        let finger_name = match j {
                            0 => "T",
                            1 => "I", 
                            2 => "M",
                            3 => "R",
                            4 => "P",
                            _ => "?",
                        };
                        debug_info.push_str(&format!("{}{:.0}° ", finger_name, angle * 180.0 / std::f32::consts::PI));
                    }
                    debug_info.push_str("\n");
                }
            }
        } else {
            debug_info.push_str("Status: ❌ Inactive\n");
        }
        
        debug_info.push_str("\nControls:\n");
        debug_info.push_str("F3: Toggle Debug UI\n");
        debug_info.push_str("D: Toggle Physics Debug\n");
        
        text.sections[0].value = debug_info;
    }
}

pub fn toggle_debug_overlay(
    mut debug_overlay: ResMut<HandTrackingDebugOverlay>,
    keyboard: Res<ButtonInput<KeyCode>>,
) {
    if keyboard.just_pressed(KeyCode::F3) {
        debug_overlay.enabled = !debug_overlay.enabled;
    }
    
    if keyboard.just_pressed(KeyCode::F4) {
        debug_overlay.show_model_outputs = !debug_overlay.show_model_outputs;
        if debug_overlay.show_model_outputs {
            println!("📊 Model output debugging enabled");
        }
    }
}