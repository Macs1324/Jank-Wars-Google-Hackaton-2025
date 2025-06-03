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
            // Store the original base rotation that was set up in _createLegs()
            const baseUpwardTilt = Math.PI / 20; // Base upward tilt from _createLegs()
            
            // Apply thigh angle as rotation around the leg's local X-axis
            // This controls movement in the Y-Z plane (radial-vertical plane)
            // After the leg setup transforms, X-axis rotation controls up/down tilt
            legGroup.rotation.x = baseUpwardTilt + thighAngle;
            
            // Apply tibia angle as rotation around the knee's local X-axis  
            // This controls knee bending - positive angles bend knee "up"
            kneeGroup.rotation.x = tibiaAngle;
            
            // Debug: Log the angles being applied for first leg
            if (legIndex === 0 && Math.random() < 0.1) {
                console.log(`Applying angles: thigh=${thighAngle.toFixed(3)} (total X=${legGroup.rotation.x.toFixed(3)}), tibia=${tibiaAngle.toFixed(3)}`);
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
        
        // Debug: Log foot position calculation for first leg
        if (legIndex === 0 && Math.random() < 0.1) {
            console.log(`Foot calc: attach=(${legAttachPoint.x.toFixed(3)}, ${legAttachPoint.y.toFixed(3)}, ${legAttachPoint.z.toFixed(3)}), knee=(${kneeWorldPos.x.toFixed(3)}, ${kneeWorldPos.y.toFixed(3)}, ${kneeWorldPos.z.toFixed(3)}), foot=(${footWorldPosition.x.toFixed(3)}, ${footWorldPosition.y.toFixed(3)}, ${footWorldPosition.z.toFixed(3)})`);
        }
        
        return footWorldPosition;
    }
} 