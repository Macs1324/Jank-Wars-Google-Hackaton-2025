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
        const targetDistance = target.length();
        const maxReach = thighLength + tibiaLength;
        const minReach = Math.abs(thighLength - tibiaLength);
        
        // Check if target is reachable
        if (targetDistance > maxReach || targetDistance < minReach) {
            // Target is unreachable - return extended or retracted pose
            if (targetDistance > maxReach) {
                // Extend towards target
                const targetDirection = target.clone().normalize();
                return {
                    thighAngle: Math.atan2(targetDirection.x, targetDirection.y),
                    tibiaAngle: 0, // Straight extension
                    reachable: false
                };
            } else {
                // Target too close - retract
                return {
                    thighAngle: 0,
                    tibiaAngle: Math.PI, // Fully bent
                    reachable: false
                };
            }
        }
        
        // Use law of cosines to find angles
        // Calculate tibia angle first (angle at the "elbow"/knee)
        const cosC = (thighLength * thighLength + tibiaLength * tibiaLength - targetDistance * targetDistance) / 
                     (2 * thighLength * tibiaLength);
        const tibiaAngle = Math.acos(Math.max(-1, Math.min(1, cosC)));
        
        // Calculate thigh angle
        const cosA = (thighLength * thighLength + targetDistance * targetDistance - tibiaLength * tibiaLength) / 
                     (2 * thighLength * targetDistance);
        const angleToTarget = Math.atan2(target.x, target.y);
        const thighAngle = angleToTarget - Math.acos(Math.max(-1, Math.min(1, cosA))) * (flip ? -1 : 1);
        
        return {
            thighAngle: thighAngle,
            tibiaAngle: flip ? -tibiaAngle : tibiaAngle,
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
        // Simplified mapping - just control height based on finger curl
        const maxReach = thighLength + tibiaLength;
        
        // When finger is extended (curl = 0), foot goes down to ground level
        // When finger is curled (curl = 1), foot lifts up
        const baseHeight = -maxReach * 0.6; // Slightly bent resting position
        const liftHeight = maxReach * 0.2;   // How high to lift when curled
        
        const height = THREE.MathUtils.lerp(baseHeight, liftHeight, fingerCurl);
        
        // Keep X and Z simple for now - just point straight outward
        return new THREE.Vector3(0, height, maxReach * 0.7);
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
            // Store the base orientation (the initial setup rotation)
            // The leg is already oriented radially and tilted - we want to modify from there
            
            // Get the initial tilt that was applied during leg creation
            const initialUpwardTilt = Math.PI / 20; // This matches _createLegs()
            
            // Apply thigh angle as additional rotation around the local Z-axis
            // This will bend the leg up/down relative to its radial orientation
            legGroup.rotation.z = initialUpwardTilt + thighAngle * 0.5; // Scale down for more reasonable movement
            
            // Apply tibia angle - this controls knee bending
            // Start from the default knee bend and modify it
            const defaultKneeBend = Math.PI / 1.75;
            kneeGroup.rotation.x = defaultKneeBend + tibiaAngle * 0.5; // Scale down for more reasonable movement
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
        if (!kneeGroup) return new THREE.Vector3();
        
        const tibiaMesh = kneeGroup.getObjectByName(`tibia_${legIndex}`);
        if (!tibiaMesh) return new THREE.Vector3();
        
        // Update matrices to ensure accurate world position calculation
        legGroup.updateMatrixWorld(true);
        
        // Calculate foot position at the end of the tibia
        const footLocalPosition = new THREE.Vector3(0, tibiaLength / 2 + 0.03, 0); // Add tibia radius
        const footWorldPosition = new THREE.Vector3();
        footLocalPosition.applyMatrix4(tibiaMesh.matrixWorld);
        
        return footWorldPosition;
    }
} 