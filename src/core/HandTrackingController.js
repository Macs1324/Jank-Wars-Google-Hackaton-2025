/**
 * @fileoverview Manages MediaPipe HandLandmarker for hand tracking.
 */

import { HandLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

/**
 * Controls the MediaPipe HandLandmarker initialization and real-time detection.
 */
export class HandTrackingController {
    /**
     * The MediaPipe HandLandmarker instance.
     * @type {HandLandmarker | null}
     * @private
     */
    _handLandmarker = null;

    /**
     * The HTMLVideoElement providing the webcam feed.
     * @type {HTMLVideoElement}
     * @private
     */
    _videoElement;

    /**
     * Resolver for MediaPipe vision task assets (models, WASM).
     * @type {FilesetResolver | null}
     * @private
     */
    _visionFilesetResolver = null;

    /**
     * Indicates whether the HandLandmarker has been successfully initialized.
     * @type {boolean}
     * @public
     */
    isInitialized = false;

    /**
     * Stores the latest hand tracking results from MediaPipe.
     * Type definition from MediaPipe: `HandLandmarkerResult`
     * @type {object | null}
     * @public
     */
    lastResults = null;

    /**
     * Timestamp of the last video frame processed.
     * @type {number}
     * @private
     */
    _lastVideoTime = -1;

    /**
     * Optional callback function to be invoked when new hand tracking results are available.
     * @type {function(object): void | null}
     * @private
     */
    _onResultsCallback = null;

    /**
     * Creates a new HandTrackingController instance.
     * @param {HTMLVideoElement} videoElement The HTMLVideoElement providing the webcam feed.
     */
    constructor(videoElement) {
        if (!videoElement) {
            throw new Error("HandTrackingController: HTMLVideoElement is required.");
        }
        this._videoElement = videoElement;
    }

    /**
     * Initializes the MediaPipe HandLandmarker.
     * This needs to be called before starting detection.
     * @param {string} [modelAssetPath='https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task']
     * Path to the hand_landmarker.task model file.
     * @returns {Promise<void>} A promise that resolves when initialization is complete, or rejects on error.
     */
    async initialize(modelAssetPath = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/latest/hand_landmarker.task') {
        if (this.isInitialized) {
            console.warn("HandTrackingController is already initialized.");
            return;
        }

        console.log("Initializing HandTrackingController...");

        try {
            this._visionFilesetResolver = await FilesetResolver.forVisionTasks(
                // Path to the MediaPipe WASM files.
                "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.14/wasm" // Using a specific version for stability
            );

            this._handLandmarker = await HandLandmarker.createFromOptions(
                this._visionFilesetResolver,
                {
                    baseOptions: {
                        modelAssetPath: modelAssetPath,
                        delegate: "GPU", // Use GPU if available, fallback to CPU
                    },
                    runningMode: "VIDEO", // Process video stream
                    numHands: 2,          // Max number of hands to detect
                    minHandDetectionConfidence: 0.5,
                    minHandPresenceConfidence: 0.5, // Confidence for hand presence
                    minTrackingConfidence: 0.5,     // Confidence for tracking landmarks
                }
            );
            this.isInitialized = true;
            console.log("HandTrackingController initialized successfully with HandLandmarker.");
        } catch (error) {
            console.error("Failed to initialize HandLandmarker:", error);
            this.isInitialized = false;
            // Propagate the error so the caller (e.g., Game class) can handle it
            throw new Error(`Failed to initialize HandLandmarker: ${error.message || error}`);
        }
    }

    /**
     * Performs hand detection on the current video frame.
     * This method should be called repeatedly (e.g., in the game's animation loop).
     */
    detectHands() {
        if (!this.isInitialized || !this._handLandmarker) {
            // Not yet initialized or initialization failed.
            return;
        }

        const video = this._videoElement;
        // Ensure video is ready and has data.
        if (video.readyState < video.HAVE_CURRENT_DATA || video.paused || video.ended) {
            // console.warn("Video not ready for hand detection.");
            return;
        }

        // MediaPipe's detectForVideo requires a timestamp.
        // Using performance.now() is generally more accurate for this.
        const nowInMs = performance.now();

        // Only process if the video frame has changed since the last detection.
        // This check is important for performance, especially if detectHands() is called more frequently than the video frame rate.
        if (video.currentTime !== this._lastVideoTime) {
            this._lastVideoTime = video.currentTime;
            try {
                // `detectForVideo` performs the hand landmark detection on the current video frame.
                // The third parameter `nowInMs` is the timestamp of the frame.
                this.lastResults = this._handLandmarker.detectForVideo(video, nowInMs);

                if (this._onResultsCallback && this.lastResults && this.lastResults.landmarks.length > 0) {
                    this._onResultsCallback(this.lastResults);
                }
            } catch (error) {
                console.error("Error during hand detection:", error);
                // Consider how to handle persistent errors, e.g., stop detection, notify user.
            }
        }
    }

    /**
     * Sets a callback function to be invoked when new hand tracking results are available.
     * The callback will receive the `HandLandmarkerResult` object.
     * @param {function(object): void | null} callback The function to call with results.
     */
    setOnResultsCallback(callback) {
        this._onResultsCallback = callback;
    }

    /**
     * Gets the latest hand tracking results.
     * @returns {object | null} The `HandLandmarkerResult` object or null if no results.
     */
    getLatestResults() {
        return this.lastResults;
    }

    /**
     * Cleans up resources used by the HandLandmarker.
     * Should be called when the controller is no longer needed (e.g., on game exit).
     * @returns {Promise<void>}
     */
    async dispose() {
        console.log("Disposing HandTrackingController...");
        if (this._handLandmarker) {
            try {
                await this._handLandmarker.close();
                this._handLandmarker = null;
                console.log("HandLandmarker closed successfully.");
            } catch (error) {
                console.error("Error closing HandLandmarker:", error);
            }
        }
        this.isInitialized = false;
        this.lastResults = null;
        this._onResultsCallback = null;
        this._visionFilesetResolver = null; // No explicit dispose method for FilesetResolver
    }
}