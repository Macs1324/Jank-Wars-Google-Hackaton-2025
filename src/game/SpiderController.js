import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { calculatePalmCoordinateSystem, worldToPalmLocal } from '../utils/PalmCoordinateSystem.js';
import { CoordsFilter } from '../utils/SimpleLowPassFilter.js'; // Added for smoothing

/**
 * @fileoverview Defines the SpiderController class, responsible for translating
 * hand tracking data into physical actions for a Spider instance.
 */

export class SpiderController {
    /**
     * The Spider instance this controller will manipulate.
     * @type {import('./Spider.js').Spider}
     * @public
     */
    spider;

    /**
     * The physics controller, used to access the world and utility functions if needed.
     * @type {import('../core/PhysicsController.js').PhysicsController}
     * @public
     */
    physicsController;

    // _targetBodyPosition and _targetBodyOrientation removed as body is not directly controlled by palm.
    // bodyControlConfig, worldScale, yOffset removed as they were related to palm-based body control.

    /** @type {CoordsFilter} */
    palmCoordsFilter;

    /**
     * Configuration for leg joint control.
     * @type {{ KNEE_P_GAIN: number, KNEE_MAX_FORCE: number, FINGER_Y_TO_KNEE_SCALE: number, MIN_KNEE_ANGLE: number, MAX_KNEE_ANGLE: number }}
     */
    legControlConfig = {
        KNEE_P_GAIN: 5,         // Proportional gain for knee motor speed
        KNEE_MAX_FORCE: 5,      // Max force for the knee motor
        FINGER_Y_TO_KNEE_SCALE: Math.PI / 2, // Scales finger local Y to target knee angle offset
        MIN_KNEE_ANGLE: Math.PI / 6,  // Approx 30 degrees (more bent)
        MAX_KNEE_ANGLE: Math.PI / 1.5 // Approx 120 degrees (straighter)
    };

    /**
     * Mapping from finger names (or indices) to spider leg indices.
     * This should align with how spider legs are created and the player's expectation.
     * Example: Player's Index Finger (landmark group for index finger) controls Spider's Leg 1.
     * @type {Record<string, number>}
     */
    fingerToLegMap = {
        'Index': 1, // Player's Index finger controls Spider's leg 1 (e.g., a front-left leg)
        // TODO: Add mappings for Thumb, Middle, Ring, Pinky
    };

    /**
     * @param {import('./Spider.js').Spider} spider The Spider instance to control.
     * @param {import('../core/PhysicsController.js').PhysicsController} physicsController The physics controller.
     */
    constructor(spider, physicsController) {
        if (!spider) {
            throw new Error("SpiderController: Spider instance is required.");
        }
        if (!physicsController) {
            throw new Error("SpiderController: PhysicsController instance is required.");
        }
        this.spider = spider;
        this.physicsController = physicsController;
        // Initialize filter with appropriate alpha values (pos, rot)
        // Smaller alpha = more smoothing.
        this.palmCoordsFilter = new CoordsFilter(0.2, 0.3); 
    }

    /**
     * Updates the spider's physics based on the provided hand tracking data.
     * @param {Array<THREE.Vector3> | null} handLandmarks Normalized (0-1) or screen landmarks for a single hand.
     *                                                     If using MediaPipe's HandLandmarker `landmarks`, these are normalized.
     *                                                     World landmarks from `multiHandWorldLandmarks` are already in meters.
     * @param {'Left' | 'Right' | string} handedness The handedness of the detected hand.
     * @param {boolean} [isWorldLandmarks=false] True if `handLandmarks` are already world coordinates (e.g., from MediaPipe's `multiHandWorldLandmarks`).
     */
    update(handLandmarks, handedness, isWorldLandmarks = false) {
        if (!handLandmarks || handLandmarks.length === 0 || !this.spider.physicsBody) {
            // TODO: Implement ragdoll fallback if no hand is detected (after a timeout?)
            // For now, if no landmarks, do nothing or let it settle.
            // We might want to clear any residual forces or torques if the hand disappears.
            this.spider.physicsBody.velocity.scale(0.95, this.spider.physicsBody.velocity); // Dampen movement
            this.spider.physicsBody.angularVelocity.scale(0.95, this.spider.physicsBody.angularVelocity);
            return;
        }

        // --- Body control based on palm position/orientation removed ---
        // The spider's body will now only move due to leg forces (once implemented)
        // or external physics interactions (gravity, collisions).

        // --- TODO: Implement Leg Control ---
        // 1. For each finger, determine its state relative to the palm.
        //    - Relevant landmarks: Wrist (0), Thumb (1-4), Index (5-8), Middle (9-12), Ring (13-16), Pinky (17-20)
        //    - For each finger, calculate a vector from a palm anchor point (e.g., wrist or a calculated palm center)
        //      to the fingertip (e.g., landmarks 4, 8, 12, 16, 20).
        //    - This vector needs to be interpreted in a coordinate system relative to the palm itself.

        // 2. Map this relative finger state to a target position for the corresponding spider leg's "foot"
        //    (tip of the tibia) in the spider's local space (or a target configuration for leg joints).
        //    - Example: Finger curled = leg retracted; Finger extended = leg extended; Finger splayed left/right = leg moves left/right.

        // 3. Actuate the leg's physics joints (thigh-to-body constraint, knee hinge) to move the foot
        //    towards this target or achieve the target joint configuration.

        // --- Process Index Finger for controlling a specific leg's knee ---
        this._controlLegWithFinger(handLandmarks, handedness, 'Index', isWorldLandmarks);

    }

    /**
     * Controls a specific spider leg's knee joint based on a finger's state relative to the palm.
     * @param {Array<THREE.Vector3> | null} handLandmarks World landmarks for the hand.
     * @param {string} handedness Handedness ('Left' or 'Right').
     * @param {'Thumb' | 'Index' | 'Middle' | 'Ring' | 'Pinky'} fingerName The name of the finger to use.
     * @param {boolean} isWorldLandmarks If the landmarks are world landmarks.
     * @private
     */
    _controlLegWithFinger(handLandmarks, handedness, fingerName, isWorldLandmarks) {
        if (!isWorldLandmarks || !handLandmarks || handLandmarks.length < 21) {
            this.palmCoordsFilter.reset(); // Reset filter if no valid input
            return;
        }

        const rawPalmCoords = calculatePalmCoordinateSystem(handLandmarks, handedness);
        if (!rawPalmCoords) {
            this.palmCoordsFilter.reset();
            return;
        }
        
        const palmCoords = this.palmCoordsFilter.apply(rawPalmCoords);
        if (!palmCoords) return; // Filter might return null if it resets and has no initial value yet

        // Determine which finger tip landmark to use
        let fingerTipLandmarkIndex;
        switch (fingerName) {
            case 'Thumb': fingerTipLandmarkIndex = 4; break;
            case 'Index': fingerTipLandmarkIndex = 8; break;
            case 'Middle': fingerTipLandmarkIndex = 12; break;
            case 'Ring': fingerTipLandmarkIndex = 16; break;
            case 'Pinky': fingerTipLandmarkIndex = 20; break;
            default: return;
        }
        const fingerTipWorld = handLandmarks[fingerTipLandmarkIndex];
        const fingerTipLocal = worldToPalmLocal(fingerTipWorld, palmCoords);

        if (!fingerTipLocal) return;

        // --- Map finger state to target knee angle ---
        // fingerTipLocal.y: Extension/curl relative to palm's forward direction.
        // Positive Y is "finger extending away from palm along its surface".
        // Negative Y is "finger curled towards palm".
        // We want: extended finger -> straighter leg (larger knee angle), curled finger -> bent leg (smaller knee angle).
        // A typical HingeConstraint angle might be 0 when segments are aligned, positive when bent one way.
        // Our visual kneeBend in Spider.js makes a positive rotation around X make it more bent.
        // Let's define targetAngle such that straighter = larger angle. Max angle for straighter.
        
        // Normalize fingerTipLocal.y: Let's assume its effective range is roughly -0.05 to 0.1 for MediaPipe world landmarks
        // This needs calibration based on observed values.
        const normalizedFingerY = Math.max(-0.05, Math.min(0.1, fingerTipLocal.y)); // Clamp to expected range
        const fingerControlSignal = (normalizedFingerY + 0.05) / (0.1 + 0.05); // Map to 0 (curled) - 1 (extended)

        const targetKneeAngle = this.legControlConfig.MIN_KNEE_ANGLE + 
                                fingerControlSignal * (this.legControlConfig.MAX_KNEE_ANGLE - this.legControlConfig.MIN_KNEE_ANGLE);

        // --- Actuate the corresponding spider leg's knee joint ---
        const spiderLegIndex = this.fingerToLegMap[fingerName];
        if (spiderLegIndex === undefined || !this.spider.legConstraints) return;

        const kneeConstraintIndex = spiderLegIndex * 2 + 1; // Assuming body-thigh, then thigh-tibia (knee)
        if (kneeConstraintIndex >= this.spider.legConstraints.length) return;
        
        const kneeHinge = this.spider.legConstraints[kneeConstraintIndex];

        if (kneeHinge instanceof CANNON.HingeConstraint) {
            kneeHinge.enableMotor();
            
            // Simple P-controller for motor speed to reach target angle
            // Note: CANNON.HingeConstraint does not directly expose current angle easily.
            // This is a very simplified actuation. True target angle following needs more.
            // For now, we'll set a speed proportional to how "extended" the finger is.
            // More extended finger -> tries to achieve MAX_KNEE_ANGLE (straighter).
            // More curled finger -> tries to achieve MIN_KNEE_ANGLE (more bent).

            // To drive towards a target angle, the motor speed should be based on the error.
            // This is a placeholder for a proper PD controller on the joint angle.
            // A more direct (but potentially jerky) approach if we could get current angle:
            // let currentAngle = ... ; // How to get this robustly from Hinge?
            // const error = targetKneeAngle - currentAngle;
            // kneeHinge.setMotorSpeed(error * this.legControlConfig.KNEE_P_GAIN);

            // Simplified: if fingerControlSignal is high, aim for positive speed (straighten), if low, negative (bend)
            // This won't hold a position, just drives.
            let motorSpeed = (fingerControlSignal - 0.5) * 2 * this.legControlConfig.KNEE_P_GAIN; // -P_GAIN to +P_GAIN

            // A Hinge motor drives bodyB relative to bodyA.
            // If positive rotation means more bent, and targetAngle is "more straight" (larger),
            // we need to see how this maps.
            // Let's assume our targetAngle maps directly to the hinge's internal angle state where MAX is straighter.
            // The hinge motor will attempt to reach a certain angular velocity.
            // We'll use this simplified motor control for now:
            // Drive towards MAX_KNEE_ANGLE if finger extended, MIN_KNEE_ANGLE if curled.

            // A simple proportional velocity control to drive towards the target angle
            // This will oscillate without damping and precise current angle.
            // For a true PD controller on angle, one would typically apply torques or have a more complex motor model.
            // CANNON's Hinge motor is more of a velocity motor.
            // Let's make it simple: if finger is extended, try to straighten; if curled, try to bend.
            // This won't reach a specific angle but will react.
            
            if (fingerControlSignal > 0.6) { // Finger extended
                kneeHinge.setMotorSpeed(1.0 * this.legControlConfig.KNEE_P_GAIN); // Speed to straighten
            } else if (fingerControlSignal < 0.4) { // Finger curled
                kneeHinge.setMotorSpeed(-1.0 * this.legControlConfig.KNEE_P_GAIN); // Speed to bend further
            } else {
                kneeHinge.setMotorSpeed(0); // Hold (or attempt to, with damping)
            }

            kneeHinge.setMotorMaxForce(this.legControlConfig.KNEE_MAX_FORCE);
            // console.log(`Leg ${spiderLegIndex}, Finger ${fingerName}, LocalY: ${fingerTipLocal.y.toFixed(3)}, Signal: ${fingerControlSignal.toFixed(3)}, TargetAngle: ${targetKneeAngle.toFixed(3)}, MotorSpeed: ${kneeHinge.motorEquation.targetVelocity.toFixed(2)}`);

        }
    }

    // _updateTargetBodyTransform method removed.
    // _applyBodyControlForces method removed.

    /**
     * Cleans up any resources or event listeners if necessary.
     */
    dispose() {
        // Nothing to dispose of in this basic controller yet.
    }
}