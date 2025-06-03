import * as THREE from 'three';

/**
 * @fileoverview Processes MediaPipe hand tracking results to extract useful control data.
 * Converts raw hand landmarks into finger curl values and other control inputs.
 */

export class HandDataProcessor {
    /**
     * MediaPipe hand landmark indices for finger joints.
     * Based on MediaPipe's 21-point hand landmark model.
     */
    static LANDMARK_INDICES = {
        WRIST: 0,
        
        // Thumb: [1, 2, 3, 4]
        THUMB_CMC: 1,
        THUMB_MCP: 2,
        THUMB_IP: 3,
        THUMB_TIP: 4,
        
        // Index finger: [5, 6, 7, 8]
        INDEX_MCP: 5,
        INDEX_PIP: 6,
        INDEX_DIP: 7,
        INDEX_TIP: 8,
        
        // Middle finger: [9, 10, 11, 12]
        MIDDLE_MCP: 9,
        MIDDLE_PIP: 10,
        MIDDLE_DIP: 11,
        MIDDLE_TIP: 12,
        
        // Ring finger: [13, 14, 15, 16]
        RING_MCP: 13,
        RING_PIP: 14,
        RING_DIP: 15,
        RING_TIP: 16,
        
        // Pinky finger: [17, 18, 19, 20]
        PINKY_MCP: 17,
        PINKY_PIP: 18,
        PINKY_DIP: 19,
        PINKY_TIP: 20
    };

    /**
     * Configuration for each finger's joint chain.
     */
    static FINGER_CONFIGS = [
        { name: 'thumb', joints: [1, 2, 3, 4] },
        { name: 'index', joints: [5, 6, 7, 8] },
        { name: 'middle', joints: [9, 10, 11, 12] },
        { name: 'ring', joints: [13, 14, 15, 16] },
        { name: 'pinky', joints: [17, 18, 19, 20] }
    ];

    /**
     * Low-pass filter for smoothing finger curl values.
     */
    static smoothingFactor = 0.7; // Higher = more smoothing

    /**
     * Previous finger curl values for smoothing.
     * @type {Map<string, number[]>}
     */
    static previousCurls = new Map();

    /**
     * Process MediaPipe hand tracking results to extract finger curl values.
     * 
     * @param {Object} handResults - MediaPipe HandLandmarkerResult
     * @returns {Object} Processed hand data with finger curls for each hand
     */
    static processHandResults(handResults) {
        if (!handResults || !handResults.landmarks || handResults.landmarks.length === 0) {
            return { leftHand: null, rightHand: null };
        }

        const processedData = { leftHand: null, rightHand: null };

        // Process each detected hand
        for (let i = 0; i < handResults.landmarks.length; i++) {
            const landmarks = handResults.landmarks[i];
            const handedness = handResults.handedness[i];
            
            // Determine if this is left or right hand
            const isLeftHand = handedness && handedness[0] && handedness[0].categoryName === 'Left';
            const handKey = isLeftHand ? 'leftHand' : 'rightHand';
            
            // Extract finger curl values
            const fingerCurls = this.extractFingerCurls(landmarks);
            
            // Apply smoothing
            const smoothedCurls = this.applySmoothingFilter(fingerCurls, handKey);
            
            processedData[handKey] = {
                fingerCurls: smoothedCurls,
                landmarks: landmarks,
                isTracked: true
            };
        }

        return processedData;
    }

    /**
     * Extract finger curl values from hand landmarks.
     * 
     * @param {Array} landmarks - Array of 21 hand landmarks from MediaPipe
     * @returns {number[]} Array of 5 finger curl values (0 = extended, 1 = curled)
     */
    static extractFingerCurls(landmarks) {
        const fingerCurls = [];

        for (const fingerConfig of this.FINGER_CONFIGS) {
            const curl = this.calculateFingerCurl(landmarks, fingerConfig.joints);
            fingerCurls.push(curl);
        }

        return fingerCurls;
    }

    /**
     * Calculate curl value for a single finger.
     * 
     * @param {Array} landmarks - Hand landmarks
     * @param {number[]} joints - Array of joint indices for this finger
     * @returns {number} Curl value from 0 (extended) to 1 (fully curled)
     */
    static calculateFingerCurl(landmarks, joints) {
        if (joints.length < 4) return 0;

        // Special handling for thumb (first finger)
        if (joints[0] === 1) { // Thumb starts at landmark index 1
            return this.calculateThumbCurl(landmarks);
        }

        // Method 2: Distance-based curl calculation (for other fingers)
        const baseJoint = landmarks[joints[0]]; // MCP joint
        const tipJoint = landmarks[joints[3]]; // Tip
        const wrist = landmarks[this.LANDMARK_INDICES.WRIST];

        // Calculate distance from fingertip to wrist
        const tipToWristDistance = Math.sqrt(
            Math.pow(tipJoint.x - wrist.x, 2) +
            Math.pow(tipJoint.y - wrist.y, 2) +
            Math.pow(tipJoint.z - wrist.z, 2)
        );

        // Calculate distance from base joint to wrist (reference distance)
        const baseToWristDistance = Math.sqrt(
            Math.pow(baseJoint.x - wrist.x, 2) +
            Math.pow(baseJoint.y - wrist.y, 2) +
            Math.pow(baseJoint.z - wrist.z, 2)
        );

        if (baseToWristDistance === 0) return 0;

        // When finger is extended, tip is far from wrist
        // When finger is curled, tip is closer to wrist
        const ratio = tipToWristDistance / baseToWristDistance;
        
        // Typical values: extended ≈ 2.0-2.5, curled ≈ 1.0-1.3
        // Map this to 0-1 range
        const extendedRatio = 2.2; // Calibrated for typical hand
        const curledRatio = 1.1;
        
        let curl = (extendedRatio - ratio) / (extendedRatio - curledRatio);
        
        // Clamp to 0-1 range
        curl = Math.max(0, Math.min(1, curl));
        
        return curl;
    }

    /**
     * Special calculation for thumb curl since thumbs move differently.
     * 
     * @param {Array} landmarks - Hand landmarks
     * @returns {number} Thumb curl value from 0 (extended) to 1 (curled)
     */
    static calculateThumbCurl(landmarks) {
        const thumbTip = landmarks[this.LANDMARK_INDICES.THUMB_TIP];
        const thumbMcp = landmarks[this.LANDMARK_INDICES.THUMB_MCP];
        const indexMcp = landmarks[this.LANDMARK_INDICES.INDEX_MCP];
        const middleMcp = landmarks[this.LANDMARK_INDICES.MIDDLE_MCP];

        // Calculate distance from thumb tip to the palm center (between index and middle MCP)
        const palmCenterX = (indexMcp.x + middleMcp.x) / 2;
        const palmCenterY = (indexMcp.y + middleMcp.y) / 2;
        const palmCenterZ = (indexMcp.z + middleMcp.z) / 2;

        const tipToPalmDistance = Math.sqrt(
            Math.pow(thumbTip.x - palmCenterX, 2) +
            Math.pow(thumbTip.y - palmCenterY, 2) +
            Math.pow(thumbTip.z - palmCenterZ, 2)
        );

        // Calculate reference distance (thumb MCP to palm center)
        const mcpToPalmDistance = Math.sqrt(
            Math.pow(thumbMcp.x - palmCenterX, 2) +
            Math.pow(thumbMcp.y - palmCenterY, 2) +
            Math.pow(thumbMcp.z - palmCenterZ, 2)
        );

        if (mcpToPalmDistance === 0) return 0;

        // When thumb is extended (pointing away), tip is far from palm
        // When thumb is curled (touching palm), tip is close to palm
        const ratio = tipToPalmDistance / mcpToPalmDistance;
        
        // Typical values for thumb: extended ≈ 1.8-2.2, curled ≈ 0.3-0.7
        const extendedRatio = 2.0;
        const curledRatio = 0.5;
        
        let curl = (extendedRatio - ratio) / (extendedRatio - curledRatio);
        
        // Clamp to 0-1 range
        curl = Math.max(0, Math.min(1, curl));
        
        return curl;
    }

    /**
     * Apply low-pass filter to smooth finger curl values.
     * 
     * @param {number[]} currentCurls - Current frame's finger curl values
     * @param {string} handKey - 'leftHand' or 'rightHand'
     * @returns {number[]} Smoothed finger curl values
     */
    static applySmoothingFilter(currentCurls, handKey) {
        const previousCurls = this.previousCurls.get(handKey) || currentCurls;
        const smoothedCurls = [];

        for (let i = 0; i < currentCurls.length; i++) {
            const smoothed = previousCurls[i] * this.smoothingFactor + 
                            currentCurls[i] * (1 - this.smoothingFactor);
            smoothedCurls.push(smoothed);
        }

        // Store for next frame
        this.previousCurls.set(handKey, smoothedCurls);
        
        return smoothedCurls;
    }

    /**
     * Get the palm position and orientation from hand landmarks.
     * 
     * @param {Array} landmarks - Hand landmarks
     * @returns {Object} Palm position and orientation data
     */
    static getPalmData(landmarks) {
        if (!landmarks || landmarks.length < 21) return null;

        const wrist = landmarks[this.LANDMARK_INDICES.WRIST];
        const indexMcp = landmarks[this.LANDMARK_INDICES.INDEX_MCP];
        const middleMcp = landmarks[this.LANDMARK_INDICES.MIDDLE_MCP];
        const ringMcp = landmarks[this.LANDMARK_INDICES.RING_MCP];

        // Calculate palm center
        const palmCenter = new THREE.Vector3(
            (wrist.x + indexMcp.x + middleMcp.x + ringMcp.x) / 4,
            (wrist.y + indexMcp.y + middleMcp.y + ringMcp.y) / 4,
            (wrist.z + indexMcp.z + middleMcp.z + ringMcp.z) / 4
        );

        // Calculate palm normal (simplified)
        const palmDirection = new THREE.Vector3(
            middleMcp.x - wrist.x,
            middleMcp.y - wrist.y,
            middleMcp.z - wrist.z
        ).normalize();

        return {
            position: palmCenter,
            direction: palmDirection,
            landmarks: landmarks
        };
    }

    /**
     * Check if hand tracking quality is sufficient for reliable control.
     * 
     * @param {Object} handData - Processed hand data
     * @returns {boolean} True if tracking quality is good
     */
    static isTrackingQualityGood(handData) {
        if (!handData || !handData.fingerCurls) return false;

        // Check if all finger curl values are within reasonable range
        return handData.fingerCurls.every(curl => 
            curl >= 0 && curl <= 1 && !isNaN(curl)
        );
    }

    /**
     * Reset smoothing filters (useful when hand tracking is lost and regained).
     */
    static resetSmoothingFilters() {
        this.previousCurls.clear();
    }
} 