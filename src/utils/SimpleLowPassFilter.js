/**
 * @fileoverview A simple low-pass filter for smoothing time-series data,
 * particularly useful for Vector3 and Quaternion components.
 */

import * as THREE from 'three';

export class SimpleLowPassFilter {
    /**
     * The smoothing factor, or "alpha".
     * A value closer to 0 means more smoothing (less responsive to new values).
     * A value closer to 1 means less smoothing (more responsive to new values).
     * @type {number}
     * @private
     */
    _alpha;

    /**
     * The previously filtered value.
     * @type {number | THREE.Vector3 | THREE.Quaternion | null}
     * @private
     */
    _lastValue = null;

    /**
     * Indicates if the filter has been initialized with a first value.
     * @type {boolean}
     * @private
     */
    _isInitialized = false;

    /**
     * Creates a new SimpleLowPassFilter.
     * @param {number} alpha - The smoothing factor (0 < alpha <= 1).
     *        A common starting point is 0.1 to 0.2 for noticeable smoothing.
     */
    constructor(alpha) {
        if (alpha <= 0 || alpha > 1) {
            console.warn(`SimpleLowPassFilter: alpha must be between 0 (exclusive) and 1 (inclusive). Using default 0.5.`);
            this._alpha = 0.5;
        } else {
            this._alpha = alpha;
        }
    }

    /**
     * Applies the low-pass filter to a new value.
     * Handles numbers, THREE.Vector3, and THREE.Quaternion.
     * @param {number | THREE.Vector3 | THREE.Quaternion} newValue The new, raw value to filter.
     * @returns {number | THREE.Vector3 | THREE.Quaternion} The filtered value.
     */
    apply(newValue) {
        if (!this._isInitialized || this._lastValue === null) {
            this._lastValue = this._cloneValue(newValue);
            this._isInitialized = true;
            return this._cloneValue(this._lastValue);
        }

        if (typeof newValue === 'number' && typeof this._lastValue === 'number') {
            this._lastValue = this._alpha * newValue + (1 - this._alpha) * this._lastValue;
        } else if (newValue instanceof THREE.Vector3 && this._lastValue instanceof THREE.Vector3) {
            this._lastValue.lerp(newValue, this._alpha);
        } else if (newValue instanceof THREE.Quaternion && this._lastValue instanceof THREE.Quaternion) {
            this._lastValue.slerp(newValue, this._alpha);
        } else {
            console.warn('SimpleLowPassFilter: Mismatched types or unsupported type for filtering. Returning new value directly.');
            this._lastValue = this._cloneValue(newValue); // Update last value to new type if necessary
            return this._cloneValue(this._lastValue);
        }
        return this._cloneValue(this._lastValue);
    }

    /**
     * Resets the filter, clearing its stored last value.
     * It will re-initialize on the next `apply` call.
     */
    reset() {
        this._lastValue = null;
        this._isInitialized = false;
    }

    /**
     * Gets the last filtered value.
     * @returns {number | THREE.Vector3 | THREE.Quaternion | null}
     */
    getLastValue() {
        return this._isInitialized ? this._cloneValue(this._lastValue) : null;
    }

    /**
     * Helper to clone values to prevent external modification of internal state.
     * @param {number | THREE.Vector3 | THREE.Quaternion} value
     * @returns {number | THREE.Vector3 | THREE.Quaternion}
     * @private
     */
    _cloneValue(value) {
        if (value instanceof THREE.Vector3) {
            return value.clone();
        } else if (value instanceof THREE.Quaternion) {
            return value.clone();
        }
        return value; // Numbers are primitive
    }
}

/**
 * A container for managing multiple SimpleLowPassFilter instances,
 * typically one for each component of a coordinate system (origin, axes).
 */
export class CoordsFilter {
    /** @type {SimpleLowPassFilter} */
    originFilter;
    /** @type {SimpleLowPassFilter} */
    forwardFilter;
    /** @type {SimpleLowPassFilter} */
    upFilter;
    /** @type {SimpleLowPassFilter} */
    rightFilter;

    /**
     * Creates a new CoordsFilter.
     * @param {number} alphaPosition - Smoothing factor for the origin vector.
     * @param {number} alphaRotation - Smoothing factor for the direction vectors (forward, up, right).
     */
    constructor(alphaPosition, alphaRotation) {
        this.originFilter = new SimpleLowPassFilter(alphaPosition);
        this.forwardFilter = new SimpleLowPassFilter(alphaRotation);
        this.upFilter = new SimpleLowPassFilter(alphaRotation);
        this.rightFilter = new SimpleLowPassFilter(alphaRotation);
    }

    /**
     * Applies filtering to a raw palm coordinate system object.
     * @param {{origin: THREE.Vector3, forward: THREE.Vector3, up: THREE.Vector3, right: THREE.Vector3}} rawCoords
     *        The raw, unfiltered coordinate system components.
     * @returns {{origin: THREE.Vector3, forward: THREE.Vector3, up: THREE.Vector3, right: THREE.Vector3, transformMatrix: THREE.Matrix4, normalMatrix: THREE.Matrix3} | null}
     *          The filtered coordinate system, or null if input is invalid.
     *          The direction vectors are re-orthogonalized after filtering.
     */
    apply(rawCoords) {
        if (!rawCoords) {
            this.reset(); // Reset filters if no new coords
            return null;
        }

        const filteredOrigin = this.originFilter.apply(rawCoords.origin);
        let filteredForward = this.forwardFilter.apply(rawCoords.forward);
        let filteredUp = this.upFilter.apply(rawCoords.up);
        let filteredRight = this.rightFilter.apply(rawCoords.right);

        // After individual filtering, the axes might no longer be perfectly orthogonal.
        // Re-orthogonalize, using 'forward' and 'up' as primary, then derive 'right'.
        // Or, use a more stable approach, e.g., filter quaternion for orientation.
        // For simplicity here, let's re-orthogonalize from filteredForward and filteredUp.
        filteredForward.normalize();
        filteredUp.normalize(); // Normalize first

        // Re-orthogonalize to form a proper right-handed basis from the filtered vectors.
        // We'll treat filteredForward as the primary direction.
        // filteredUp (from the filter) provides an initial guess for the "up" direction of the palm plane.
        filteredForward.normalize(); // Ensure primary direction is unit length

        // Create 'right' vector perpendicular to the initial 'filteredUp' and 'filteredForward'.
        // Order: up x forward = right (assuming up is Y, forward is Z, right is X in the local frame)
        filteredRight.crossVectors(filteredUp, filteredForward).normalize();

        // Handle potential collinearity: if filteredUp and filteredForward were parallel,
        // filteredRight would be a zero vector.
        if (filteredRight.lengthSq() < 0.000001) {
            // If forward is aligned with global Y (e.g. hand pointing straight up/down),
            // pick a default right (e.g., global X).
            if (Math.abs(filteredForward.x) < 0.1 && Math.abs(filteredForward.z) < 0.1) {
                filteredRight.set(1, 0, 0);
            } else {
                // Otherwise, use global Y to establish a 'right' perpendicular to 'forward'.
                filteredRight.crossVectors(new THREE.Vector3(0, 1, 0), filteredForward).normalize();
            }
        }

        // Re-calculate 'up' to be orthogonal to 'filteredForward' and the new 'filteredRight'.
        // Order: forward x right = up (assuming forward is Z, right is X, up is Y)
        filteredUp.crossVectors(filteredForward, filteredRight).normalize();


        // Construct new transform and normal matrices from the filtered, orthogonalized components
        const transformMatrix = new THREE.Matrix4();
        transformMatrix.makeBasis(filteredRight, filteredUp, filteredForward);
        transformMatrix.setPosition(filteredOrigin);

        const normalMatrix = new THREE.Matrix3().getNormalMatrix(transformMatrix);

        return {
            origin: filteredOrigin,
            forward: filteredForward,
            up: filteredUp,
            right: filteredRight,
            transformMatrix,
            normalMatrix,
        };
    }

    /**
     * Resets all internal filters.
     */
    reset() {
        this.originFilter.reset();
        this.forwardFilter.reset();
        this.upFilter.reset();
        this.rightFilter.reset();
    }
}