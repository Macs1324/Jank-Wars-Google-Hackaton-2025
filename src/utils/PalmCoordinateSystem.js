import * as THREE from 'three';

/**
 * @fileoverview Utility functions for calculating a local coordinate system for the palm.
 */

/**
 * Calculates a local coordinate system (origin, forward, up, right vectors) for the palm.
 * Assumes MediaPipe hand landmarks where:
 * - 0: Wrist
 * - 5: Index Finger MCP (Metacarpophalangeal joint)
 * - 9: Middle Finger MCP
 * - 17: Pinky MCP
 *
 * The coordinate system is defined as:
 * - Origin: Wrist landmark (0).
 * - Forward (local Z): Vector from wrist towards the midpoint of the MCP joints (approximating palm direction).
 * - Up (local Y / Palm Normal): Perpendicular to the palm surface. Derived from the cross product
 *   of a vector along the knuckles (e.g., Pinky MCP to Index MCP) and the Forward vector.
 *   Direction is adjusted based on handedness to consistently point "out of the palm".
 * - Right (local X): Cross product of Forward and Up.
 *
 * @param {THREE.Vector3[]} worldLandmarks An array of hand landmarks in world space.
 *                                        Each landmark should be a THREE.Vector3.
 *                                        Expects at least 21 landmarks.
 * @param {'Left' | 'Right'} handedness The handedness of the hand.
 * @returns {{
 *   origin: THREE.Vector3,
 *   forward: THREE.Vector3,
 *   up: THREE.Vector3,
 *   right: THREE.Vector3,
 *   transformMatrix: THREE.Matrix4,
 *   normalMatrix: THREE.Matrix3
 * } | null} An object containing the origin and basis vectors (forward, up, right) normalized,
 *            and a transformMatrix from local palm space to world space, and a normalMatrix.
 *            Returns null if not enough landmarks are provided.
 */
export function calculatePalmCoordinateSystem(worldLandmarks, handedness) {
    if (!worldLandmarks || worldLandmarks.length < 21) {
        // console.warn('PalmCoordinateSystem: Not enough landmarks provided.');
        return null;
    }

    // Convert key landmarks from {x,y,z} objects to THREE.Vector3 instances
    const wrist = new THREE.Vector3(worldLandmarks[0].x, worldLandmarks[0].y, worldLandmarks[0].z);
    const indexMCP = new THREE.Vector3(worldLandmarks[5].x, worldLandmarks[5].y, worldLandmarks[5].z);
    const middleMCP = new THREE.Vector3(worldLandmarks[9].x, worldLandmarks[9].y, worldLandmarks[9].z); // Often used for more stable forward direction
    const pinkyMCP = new THREE.Vector3(worldLandmarks[17].x, worldLandmarks[17].y, worldLandmarks[17].z);

    // Origin
    const origin = wrist.clone();

    // Forward vector (local +Z)
    // From wrist towards the center of the base of the fingers (middle MCP is a good proxy)
    const forward = new THREE.Vector3().subVectors(middleMCP, wrist).normalize();

    // Vector along the knuckles (approximates one axis of the palm plane)
    // Using pinkyMCP -> indexMCP to define a vector roughly along the "bottom edge" of the palm (when palm faces you, fingers up)
    const knuckleVector = new THREE.Vector3().subVectors(indexMCP, pinkyMCP).normalize(); 
    // For a more stable "knuckle line", one could average MCPs or use specific ones.

    // Up vector (local +Y, palm normal)
    // Cross product of knuckle vector and forward vector.
    // The direction of this normal depends on the order and handedness.
    // If forward is Z, and knuckle is X, then ZxX = -Y. If knuckle is -X, then Zx(-X) = Y.
    // Let's use palmPlaneX (pinky->index) and forward. (pinky->index) x forward should give up/normal.
    let up = new THREE.Vector3().crossVectors(knuckleVector, forward).normalize();

    // Adjust palm normal direction based on handedness.
    // We want "up" to point outwards from the palm surface consistently.
    // If using MediaPipe world landmarks (left-handed Y-up input, typically),
    // and assuming a canonical hand pose (palm facing camera, fingers up),
    // for a Right hand, (forward x knuckleVector) might point into the palm.
    // For a Left hand, it might point out of the palm.
    // This needs empirical validation with your specific landmark source and interpretation.
    // A common convention is:
    // Right hand: thumb is on the "right" if palm faces you.
    // Left hand: thumb is on the "left" if palm faces you.

    // Let's test with a specific landmark (e.g. thumb tip relative to wrist in XY of palm plane)
    // This part is tricky and often needs adjustment based on observed behavior.
    // For MediaPipe's typical output:
    // Right Hand: If palm is flat, normal might point along -Z if forward is +Y, right is +X
    // Left Hand: If palm is flat, normal might point along +Z if forward is +Y, right is -X
    // For MediaPipe's world landmarks: X right, Y up, Z towards viewer (left-handed system)
    // If our game world is Y-up, X-right, Z-out-of-screen (right-handed)
    // And MediaPipe's X for world landmarks is typically interpreted as "to the hand's right"
    // (e.g. -wrist.x in SpiderController for mapping to world), then this needs careful thought.

    // The knuckleVector (indexMCP to pinkyMCP) establishes one direction on the palm plane.
    // `up = knuckleVector.clone().cross(forward)` should give a perpendicular vector.
    // The direction (in/out of palm) depends on handedness and landmark chirality.
    // MediaPipe landmarks are generally right-handed internally for the hand model itself.

    // If `handedness === 'Right'`, `up` as calculated might point into the palm.
    // If `handedness === 'Left'`, `up` might point out of the palm.
    // This is a common point of confusion and requires empirical testing.
    // We want 'up' to consistently point "out of the back of the hand" or "out of the palm surface".
    // Let's assume for MediaPipe `worldLandmarks`:
    // - A canonical pose is palm facing camera, fingers pointing up (world Y).
    // - Knuckle vector (index to pinky) points roughly along world -X for a right hand.
    // - Forward vector (wrist to middle MCP) points roughly along world +Y.
    // - So, up = cross(knuckle, forward) = cross(-X, Y) = -Z (towards viewer for RH system, into palm if palm faces viewer).
    // Thus, for a right hand, we might need to flip 'up'.
    if (handedness === 'Right') {
        up.negate(); // Flip for right hand to make 'up' consistently point "out of palm" or "back of hand"
    }
    // If handedness === 'Left', original 'up' might be correct. This needs testing.
    // This heuristic assumes MediaPipe's standard landmark chirality and a view where palm faces camera.

    // Re-calculate 'right' based on the potentially flipped 'up' to maintain orthogonality.
    // And then re-calculate 'forward' to ensure a perfectly orthogonal right-handed system.
    const right = new THREE.Vector3().crossVectors(up, forward).normalize();
    // Recalculate forward to be orthogonal to the new up and right
    forward.crossVectors(right, up).normalize();


    // Old logic - may remove if above is better
    // Simpler adjustment: The knuckle vector from pinky to index typically forms the palm's "width".
    // If handedness is 'Right', `pinkyMCP -> indexMCP` should be "left-to-right" across palm.
    // If handedness is 'Left',  `pinkyMCP -> indexMCP` should be "right-to-left" across palm.
    // Let's use `indexMCP -> pinkyMCP` as a consistent "leftward" vector on the palm plane (if palm faces camera).
    // const palmPlaneX = new THREE.Vector3().subVectors(pinkyMCP, indexMCP).normalize();
    // up = new THREE.Vector3().crossVectors(palmPlaneX, forward).normalize();

    // if (handedness === 'Right') {
        // If the up vector (derived from (pinky->index) x forward) is pointing "into" the palm
        // for a right hand (needs checking), flip it.
        // This is highly dependent on the landmark coordinate system.
        // For now, let's assume this calculation gives an outward normal.
        // If it's consistently wrong, we'll flip it here.
        // up.negate(); // Potentially flip for one hand if needed


    // Create a transformation matrix from local palm space to world space
    const transformMatrix = new THREE.Matrix4();
    transformMatrix.makeBasis(right, up, forward); // X, Y, Z axes
    transformMatrix.setPosition(origin);

    // Normal matrix for transforming normals (inverse transpose of the rotation part of transformMatrix)
    const normalMatrix = new THREE.Matrix3().getNormalMatrix(transformMatrix);


    return {
        origin,
        forward, // Local Z
        up,      // Local Y (Palm Normal)
        right,   // Local X
        transformMatrix,
        normalMatrix,
    };
}

/**
 * Transforms a world point to the local coordinate system of the palm.
 * @param {THREE.Vector3} worldPoint The point in world space to transform.
 * @param {{origin: THREE.Vector3, forward: THREE.Vector3, up: THREE.Vector3, right: THREE.Vector3, transformMatrix: THREE.Matrix4}} palmCoords
 *        The palm coordinate system object from `calculatePalmCoordinateSystem`.
 * @returns {THREE.Vector3 | null} The point in the palm's local coordinate system, or null if palmCoords is invalid.
 */
export function worldToPalmLocal(worldPoint, palmCoords) {
    if (!palmCoords) return null;

    // Ensure worldPoint is a THREE.Vector3
    const wp = (worldPoint instanceof THREE.Vector3) ? worldPoint : new THREE.Vector3(worldPoint.x, worldPoint.y, worldPoint.z);

    // Create the inverse of the palm's world transformation matrix
    const worldToLocalMatrix = new THREE.Matrix4().copy(palmCoords.transformMatrix).invert();

    const localPoint = wp.clone().applyMatrix4(worldToLocalMatrix);
    return localPoint;
}

/**
 * Transforms a local point from the palm's coordinate system to world space.
 * @param {THREE.Vector3} localPoint The point in the palm's local space to transform.
 * @param {{origin: THREE.Vector3, forward: THREE.Vector3, up: THREE.Vector3, right: THREE.Vector3, transformMatrix: THREE.Matrix4}} palmCoords
 *        The palm coordinate system object from `calculatePalmCoordinateSystem`.
 * @returns {THREE.Vector3 | null} The point in world space, or null if palmCoords is invalid.
 */
export function palmLocalToWorld(localPoint, palmCoords) {
    if (!palmCoords) return null;

    // Ensure localPoint is a THREE.Vector3
    const lp = (localPoint instanceof THREE.Vector3) ? localPoint : new THREE.Vector3(localPoint.x, localPoint.y, localPoint.z);

    const worldPoint = lp.clone().applyMatrix4(palmCoords.transformMatrix);
    return worldPoint;
}