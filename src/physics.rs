use bevy::prelude::*;
use bevy_rapier3d::prelude::*;

// --- Physics Debug Systems ---
pub fn toggle_physics_debug_render(
    mut debug_render_context: ResMut<DebugRenderContext>,
    keyboard_input: Res<ButtonInput<KeyCode>>,
) {
    if keyboard_input.just_pressed(KeyCode::KeyD) {
        debug_render_context.enabled = !debug_render_context.enabled;
        if debug_render_context.enabled {
            println!("Physics debug rendering ENABLED.");
        } else {
            println!("Physics debug rendering DISABLED.");
        }
    }
}