import * as THREE from 'three';

/**
 * @fileoverview Inverse Kinematics solver for 2-bone chains (thigh + tibia)
 * Provides analytical solutions for spider leg positioning.
 */

export class IKSolver {
    /**
     * Solve 2-bone IK to reach a target position.
     * Returns the angles needed for thigh and tibia to reach the target.
     * 
     * @param {THREE.Vector3} target - Target position in the leg's local space
     * @param {number} thighLength - Length of the first bone (thigh)
     * @param {number} tibiaLength - Length of the second bone (tibia)
     * @param {boolean} [flip=false] - Whether to flip the elbow direction
     * @returns {{thighAngle: number, tibiaAngle: number, reachable: boolean}}
     */
    static solve2BoneIK(target, thighLength, tibiaLength, flip = false) {
        // In our leg coordinate system:
        // X = side-to-side (minimal for now)
        // Y = outward from body (main extension)
        // Z = up/down (height)
        
        // Calculate distance in the Y-Z plane (primary leg movement plane)
        const targetDistanceYZ = Math.sqrt(target.y * target.y + target.z * target.z);
        const maxReach = thighLength + tibiaLength;
        const minReach = Math.abs(thighLength - tibiaLength);
        
        // Add small epsilon to avoid edge cases
        const epsilon = 0.001;
        
        // Check if target is reachable
        if (targetDistanceYZ > maxReach - epsilon) {
            // Target is at or beyond max reach - extend towards target
            const angleToTarget = Math.atan2(target.z, target.y);
            return {
                thighAngle: angleToTarget,
                tibiaAngle: 0, // Straight extension
                reachable: false
            };
        } else if (targetDistanceYZ < minReach + epsilon) {
            // Target too close - retract
            return {
                thighAngle: 0,
                tibiaAngle: Math.PI * 0.6, // Bend knee up
                reachable: false
            };
        }
        
        // Use law of cosines to find angles
        // Calculate knee angle (tibia relative to thigh)
        const cosKnee = (thighLength * thighLength + tibiaLength * tibiaLength - targetDistanceYZ * targetDistanceYZ) / 
                        (2 * thighLength * tibiaLength);
        
        // Clamp to valid range and calculate knee angle
        const clampedCosKnee = Math.max(-1 + epsilon, Math.min(1 - epsilon, cosKnee));
        const kneeAngle = Math.acos(clampedCosKnee);
        
        // Calculate thigh angle (thigh relative to leg base)
        const cosThigh = (thighLength * thighLength + targetDistanceYZ * targetDistanceYZ - tibiaLength * tibiaLength) / 
                         (2 * thighLength * targetDistanceYZ);
        
        // Clamp to valid range
        const clampedCosThigh = Math.max(-1 + epsilon, Math.min(1 - epsilon, cosThigh));
        const thighToTargetAngle = Math.acos(clampedCosThigh);
        
        const angleToTarget = Math.atan2(target.z, target.y);
        const thighAngle = angleToTarget - thighToTargetAngle;
        
        // Convert knee angle to our convention (exterior angle)
        const tibiaAngle = Math.PI - kneeAngle;
        
        return {
            thighAngle: thighAngle,
            tibiaAngle: tibiaAngle,
            reachable: true
        };
    }
    
    /**
     * Convert finger curl value (0-1) to a foot target position.
     * This maps the finger gesture to a position in the leg's local coordinate space.
     * 
     * @param {number} fingerCurl - Finger curl value from 0 (extended) to 1 (curled)
     * @param {number} legIndex - Index of the leg (0-4)
     * @param {number} thighLength - Length of the thigh
     * @param {number} tibiaLength - Length of the tibia
     * @returns {THREE.Vector3} Target position in leg's local space
     */
    static fingerCurlToFootTarget(fingerCurl, legIndex, thighLength, tibiaLength) {
        const maxReach = thighLength + tibiaLength;
        
        // Spider-like leg behavior:
        // - Extended finger (curl=0): Leg stretches ALL THE WAY out radially and down to ground
        // - Curled finger (curl=1): Leg pulls back toward body and lifts up (knee bends upward)
        
        // In leg coordinate system:
        // Y-axis = radial direction outward from body center
        // Z-axis = vertical (up/down)
        // X-axis = tangential (side-to-side, minimal for now)
        
        // Radial extension (Y-axis): how far out from body center
        const maxRadialExtension = maxReach * 0.95; // Nearly full extension when finger is extended
        const minRadialExtension = maxReach * 0.3;  // Pull close to body when finger is curled
        const yTarget = THREE.MathUtils.lerp(maxRadialExtension, minRadialExtension, fingerCurl);
        
        // Vertical position (Z-axis): height relative to leg attachment point
        const groundLevel = -maxReach * 0.5;    // Down toward ground when extended
        const liftedHeight = maxReach * 0.3;    // Lift up when curled (spider knee behavior)
        const zTarget = THREE.MathUtils.lerp(groundLevel, liftedHeight, fingerCurl);
        
        // Side-to-side (X-axis): minimal for now, could add knuckle control later
        const xTarget = 0;
        
        return new THREE.Vector3(xTarget, yTarget, zTarget);
    }
    
    /**
     * Apply IK solution to update leg visual elements.
     * 
     * @param {THREE.Group} legGroup - The leg group containing thigh and knee elements
     * @param {number} thighAngle - Calculated thigh angle in radians
     * @param {number} tibiaAngle - Calculated tibia angle in radians
     */
    static applyIKToLeg(legGroup, thighAngle, tibiaAngle) {
        // Get the knee group that controls tibia rotation
        const legIndex = legGroup.userData.legIndex || 0;
        const kneeGroup = legGroup.getObjectByName(`knee_group_${legIndex}`);
        
        if (kneeGroup) {
            // Store or retrieve the base rotation quaternion set up during leg creation
            if (!legGroup.userData.baseQuaternion) {
                // Store the base quaternion on first run (after initial setup)
                legGroup.userData.baseQuaternion = legGroup.quaternion.clone();
            }
            
            // Create rotation quaternion for the thigh angle around the leg's local X-axis
            // In the leg's coordinate system, X-axis controls up/down tilting
            const thighRotation = new THREE.Quaternion();
            thighRotation.setFromAxisAngle(new THREE.Vector3(1, 0, 0), thighAngle);
            
            // Apply thigh rotation on top of the base rotation
            legGroup.quaternion.multiplyQuaternions(legGroup.userData.baseQuaternion, thighRotation);
            
            // Apply tibia angle as rotation around the knee's local X-axis  
            // This controls knee bending - positive angles bend knee "up"
            kneeGroup.rotation.x = tibiaAngle;
            
            // Debug: Log the angles being applied for first leg
            if (legIndex === 0 && Math.random() < 0.05) { // Reduced logging frequency
                console.log(`IK Applied - Leg ${legIndex}: thigh=${thighAngle.toFixed(3)}rad (${(thighAngle * 180/Math.PI).toFixed(1)}°), tibia=${tibiaAngle.toFixed(3)}rad (${(tibiaAngle * 180/Math.PI).toFixed(1)}°)`);
            }
        }
    }
    
    /**
     * Calculate the world position of the foot given the current leg pose.
     * 
     * @param {THREE.Group} legGroup - The leg group
     * @param {number} thighLength - Length of the thigh
     * @param {number} tibiaLength - Length of the tibia
     * @returns {THREE.Vector3} World position of the foot
     */
    static getFootWorldPosition(legGroup, thighLength, tibiaLength) {
        // Find the tibia mesh to get its world matrix
        const legIndex = legGroup.userData.legIndex || 0;
        const kneeGroup = legGroup.getObjectByName(`knee_group_${legIndex}`);
        if (!kneeGroup) {
            console.warn(`Could not find knee_group_${legIndex}`);
            return new THREE.Vector3();
        }
        
        const tibiaMesh = kneeGroup.getObjectByName(`tibia_${legIndex}`);
        if (!tibiaMesh) {
            console.warn(`Could not find tibia_${legIndex}`);
            return new THREE.Vector3();
        }
        
        // Update matrices to ensure accurate world position calculation
        legGroup.updateMatrixWorld(true);
        
        // Calculate foot position by walking through the kinematic chain
        // Start at leg attachment point (legGroup position)
        const legAttachPoint = new THREE.Vector3();
        legGroup.getWorldPosition(legAttachPoint);
        
        // Get thigh end position (knee position)
        const kneeWorldPos = new THREE.Vector3();
        kneeGroup.getWorldPosition(kneeWorldPos);
        
        // Calculate foot position at the end of tibia
        // The tibia extends in its local Y direction from the knee
        const tibiaDirection = new THREE.Vector3(0, 1, 0); // Local Y direction
        tibiaDirection.applyQuaternion(tibiaMesh.getWorldQuaternion(new THREE.Quaternion()));
        
        // Foot is at knee position + tibia length in tibia direction
        const footWorldPosition = kneeWorldPos.clone();
        footWorldPosition.add(tibiaDirection.multiplyScalar(tibiaLength));
        
        // Debug: Log foot position calculation for first leg (reduced frequency)
        if (legIndex === 0 && Math.random() < 0.02) {
            console.log(`Foot Position - attach: (${legAttachPoint.x.toFixed(2)}, ${legAttachPoint.y.toFixed(2)}, ${legAttachPoint.z.toFixed(2)}), knee: (${kneeWorldPos.x.toFixed(2)}, ${kneeWorldPos.y.toFixed(2)}, ${kneeWorldPos.z.toFixed(2)}), foot: (${footWorldPosition.x.toFixed(2)}, ${footWorldPosition.y.toFixed(2)}, ${footWorldPosition.z.toFixed(2)})`);
        }
        
        return footWorldPosition;
    }

    /**
     * Debug utilities for IK solver visualization and analysis
     */
    static debugUtils = {
        /**
         * Add visual axes to a leg group to help debug coordinate systems
         * @param {THREE.Group} legGroup - The leg group to add axes to
         * @param {number} [size=0.1] - Size of the axes
         */
        addAxesToLeg(legGroup, size = 0.1) {
            const legIndex = legGroup.userData.legIndex || 0;
            const existingAxes = legGroup.getObjectByName(`debug_axes_${legIndex}`);
            if (existingAxes) {
                legGroup.remove(existingAxes);
            }

            const axesHelper = new THREE.AxesHelper(size);
            axesHelper.name = `debug_axes_${legIndex}`;
            legGroup.add(axesHelper);
        },

        /**
         * Log detailed IK solution for debugging
         * @param {number} legIndex - Index of the leg
         * @param {THREE.Vector3} target - Target position in leg-local space
         * @param {Object} ikSolution - The IK solution object
         * @param {THREE.Vector3} actualFootPos - Actual foot position in world space
         */
        logIKSolution(legIndex, target, ikSolution, actualFootPos) {
            console.group(`🕷️ IK Debug - Leg ${legIndex}`);
            console.log(`Target (leg-local): (${target.x.toFixed(3)}, ${target.y.toFixed(3)}, ${target.z.toFixed(3)})`);
            console.log(`Thigh angle: ${ikSolution.thighAngle.toFixed(3)}rad (${(ikSolution.thighAngle * 180/Math.PI).toFixed(1)}°)`);
            console.log(`Tibia angle: ${ikSolution.tibiaAngle.toFixed(3)}rad (${(ikSolution.tibiaAngle * 180/Math.PI).toFixed(1)}°)`);
            console.log(`Reachable: ${ikSolution.reachable}`);
            console.log(`Actual foot (world): (${actualFootPos.x.toFixed(3)}, ${actualFootPos.y.toFixed(3)}, ${actualFootPos.z.toFixed(3)})`);
            console.groupEnd();
        },

        /**
         * Test IK solver with a range of finger curl values
         * @param {number} legIndex - Index of the leg to test
         * @param {number} thighLength - Length of the thigh
         * @param {number} tibiaLength - Length of the tibia
         */
        testFingerCurlRange(legIndex, thighLength, tibiaLength) {
            console.group(`🧪 IK Finger Curl Test - Leg ${legIndex}`);
            for (let curl = 0; curl <= 1; curl += 0.2) {
                const target = IKSolver.fingerCurlToFootTarget(curl, legIndex, thighLength, tibiaLength);
                const solution = IKSolver.solve2BoneIK(target, thighLength, tibiaLength);
                console.log(`Curl ${curl.toFixed(1)}: target=(${target.x.toFixed(2)}, ${target.y.toFixed(2)}, ${target.z.toFixed(2)}), thigh=${(solution.thighAngle * 180/Math.PI).toFixed(1)}°, tibia=${(solution.tibiaAngle * 180/Math.PI).toFixed(1)}°, reachable=${solution.reachable}`);
            }
            console.groupEnd();
        }
    };
} 