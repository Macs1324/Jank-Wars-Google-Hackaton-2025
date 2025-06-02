import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { calculatePalmCoordinateSystem, worldToPalmLocal } from '../utils/PalmCoordinateSystem.js';
import { CoordsFilter, SimpleLowPassFilter } from '../utils/SimpleLowPassFilter.js'; // Added for smoothing

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

    /** @type {Object<string, import('../utils/SimpleLowPassFilter.js').SimpleLowPassFilter>} */
    fingerSignalFilters = {}; // One filter per finger

    /**
     * Stores the index of the leg that was last actively controlled by this controller.
     * Used to unhighlight the leg when control stops.
     * @type {number | null}
     * @private
     */
    _lastControlledLegIndex = null;

    /**
     * Configuration for leg joint control.
     * @type {{ KNEE_P_GAIN: number, KNEE_MAX_FORCE: number, FINGER_Y_TO_KNEE_SCALE: number, MIN_KNEE_ANGLE: number, MAX_KNEE_ANGLE: number }}
     */
    legControlConfig = {
        KNEE_TARGET_BEND_P_GAIN: 4,   // Gain for driving towards target bend state
        KNEE_MAX_FORCE: 10,            // Max force (can be tuned)
        FINGER_SIGNAL_LPF_ALPHA: 0.25,
        FINGER_CONTROL_DEADZONE: 0.15, // How far from 0.5 signal needs to be to activate motor
        OBSERVED_FINGER_Z_MIN: 0.04,
        OBSERVED_FINGER_Z_MAX: 0.16,
        
        // Define target angles for the knee hinge (relative to thigh)
        // Positive angle = more bent (as per our kneeGroup.rotateX visual setup in Spider.js)
        TARGET_KNEE_ANGLE_CURLED: Math.PI / 1.7,  // Approx 105 degrees (very bent)
        TARGET_KNEE_ANGLE_EXTENDED: Math.PI / 8, // Approx 22.5 degrees (fairly straight but not 0)
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
        this.palmCoordsFilter = new CoordsFilter(0.2, 0.3); // Alpha for palm origin, alpha for palm axes

        // Initialize filters for finger signals (can be one per finger if needed later)
        // For now, one for the 'Index' finger example.
        this.fingerSignalFilters['Index'] = new SimpleLowPassFilter(this.legControlConfig.FINGER_SIGNAL_LPF_ALPHA);
        // TODO: Initialize for other fingers when they are implemented
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
            this.palmCoordsFilter.reset(); 
            if (this.fingerSignalFilters[fingerName]) {
                this.fingerSignalFilters[fingerName].reset(); 
            }
            // If we were controlling a leg, unhighlight it as the hand is gone
            if (this._lastControlledLegIndex !== null) {
                this.spider.highlightLeg(this._lastControlledLegIndex, false);
                this._lastControlledLegIndex = null;
            }
            return;
        }

        const rawPalmCoords = calculatePalmCoordinateSystem(handLandmarks, handedness);
        if (!rawPalmCoords) {
            this.palmCoordsFilter.reset();
            if (this.fingerSignalFilters[fingerName]) {
                this.fingerSignalFilters[fingerName].reset();
            }
            if (this._lastControlledLegIndex !== null) {
                this.spider.highlightLeg(this._lastControlledLegIndex, false);
                this._lastControlledLegIndex = null;
            }
            return;
        }
        
        const palmCoords = this.palmCoordsFilter.apply(rawPalmCoords);
        if (!palmCoords) { 
             if (this.fingerSignalFilters[fingerName]) {
                this.fingerSignalFilters[fingerName].reset();
            }
            // Potentially unhighlight if palmCoords become invalid after being valid
            if (this._lastControlledLegIndex !== null) {
                this.spider.highlightLeg(this._lastControlledLegIndex, false);
                this._lastControlledLegIndex = null;
            }
            return;
        }

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

        if (fingerName === 'Index') { // Only log for the finger we're working on
            // console.log(`IndexFinger Tip Local (Palm Space): X:${fingerTipLocal.x.toFixed(4)}, Y:${fingerTipLocal.y.toFixed(4)}, Z:${fingerTipLocal.z.toFixed(4)}`);
        }

        // --- Normalize finger state (curl/extension) based on Local Z ---
        const minZ = this.legControlConfig.OBSERVED_FINGER_Z_MIN;
        const maxZ = this.legControlConfig.OBSERVED_FINGER_Z_MAX;
        
        let rawFingerControlSignal = 0.5; // Default to neutral 
        if (maxZ > minZ) {
            // fingerTipLocal.z: 0.04 (curled) to 0.16 (extended)
            // We want signal: 0 (curled) to 1 (extended)
            const clampedZ = Math.max(minZ, Math.min(maxZ, fingerTipLocal.z));
            rawFingerControlSignal = (clampedZ - minZ) / (maxZ - minZ); 
        }

        // Apply Low-Pass Filter to the finger control signal
        let fingerControlSignal = rawFingerControlSignal; // Default if no filter
        if (this.fingerSignalFilters[fingerName]) {
            fingerControlSignal = this.fingerSignalFilters[fingerName].apply(rawFingerControlSignal);
        }


        // --- Actuate the corresponding spider leg\'s knee joint ---
        const spiderLegIndex = this.fingerToLegMap[fingerName];
        if (spiderLegIndex === undefined || !this.spider.legConstraints) {
            // If we were controlling a leg but this finger mapping is now invalid, unhighlight
            if (this._lastControlledLegIndex !== null) {
                this.spider.highlightLeg(this._lastControlledLegIndex, false);
                this._lastControlledLegIndex = null;
            }
            return;
        }

        // Unhighlight previously controlled leg if different from current
        if (this._lastControlledLegIndex !== null && this._lastControlledLegIndex !== spiderLegIndex) {
            this.spider.highlightLeg(this._lastControlledLegIndex, false);
        }
        
        // Highlight the currently controlled leg
        this.spider.highlightLeg(spiderLegIndex, true);
        this._lastControlledLegIndex = spiderLegIndex;


        const kneeConstraintIndex = spiderLegIndex * 2 + 1; // Assuming body-thigh, then thigh-tibia (knee)
        if (kneeConstraintIndex >= this.spider.legConstraints.length) {
             this.spider.highlightLeg(spiderLegIndex, false); // Can't control, so unhighlight
             this._lastControlledLegIndex = null;
            return;
        }
        
        const kneeHinge = this.spider.legConstraints[kneeConstraintIndex];

        if (kneeHinge instanceof CANNON.HingeConstraint) {
            kneeHinge.enableMotor(); 
            
            let motorSpeed = 0;
            const gain = this.legControlConfig.KNEE_TARGET_BEND_P_GAIN;
            const deadZone = this.legControlConfig.FINGER_CONTROL_DEADZONE;

            // fingerControlSignal: 0 (curled) to 1 (extended)
            // TARGET_KNEE_ANGLE_CURLED is a large positive bend (e.g., 105 deg)
            // TARGET_KNEE_ANGLE_EXTENDED is a small positive bend (e.g., 22 deg)

            // If finger is more towards "extended" (signal > 0.5 + deadzone), try to move towards TARGET_KNEE_ANGLE_EXTENDED
            // This means *decreasing* the current bend (if it's > TARGET_KNEE_ANGLE_EXTENDED), so negative motor speed.
            // The more extended the finger, the stronger the push towards the extended target angle.
            if (fingerControlSignal > 0.5 + deadZone) {
                // How "extended" is the finger beyond the neutral zone? (0 to 1 range)
                const extendEffort = (fingerControlSignal - (0.5 + deadZone)) / (1.0 - (0.5 + deadZone));
                motorSpeed = -extendEffort * gain; // Negative speed to reduce bend angle
            } 
            // If finger is more towards "curled" (signal < 0.5 - deadzone), try to move towards TARGET_KNEE_ANGLE_CURLED
            // This means *increasing* the current bend (if it's < TARGET_KNEE_ANGLE_CURLED), so positive motor speed.
            else if (fingerControlSignal < 0.5 - deadZone) {
                // How "curled" is the finger beyond the neutral zone? (0 to 1 range)
                const curlEffort = ((0.5 - deadZone) - fingerControlSignal) / (0.5 - deadZone);
                motorSpeed = curlEffort * gain; // Positive speed to increase bend angle
            }
            // else motorSpeed remains 0 (finger is in the deadzone)

            kneeHinge.setMotorSpeed(motorSpeed);
            kneeHinge.setMotorMaxForce(this.legControlConfig.KNEE_MAX_FORCE);
            
            if (fingerName === 'Index') { // Log only for the active finger
                 console.log(`Leg ${spiderLegIndex}, Finger: ${fingerName}, LocalZ: ${fingerTipLocal.z.toFixed(4)}, RawSignal: ${rawFingerControlSignal.toFixed(3)}, SmoothSignal: ${fingerControlSignal.toFixed(3)}, MotorSpeed: ${motorSpeed.toFixed(2)}`);
            }
        }
    }

    // _updateTargetBodyTransform method removed.
    // _applyBodyControlForces method removed.

    /**
     * Cleans up any resources or event listeners if necessary.
     */
    dispose() {
        // Unhighlight any leg this controller might have been controlling
        if (this._lastControlledLegIndex !== null && this.spider) {
            this.spider.highlightLeg(this._lastControlledLegIndex, false);
            this._lastControlledLegIndex = null;
        }
    }
}