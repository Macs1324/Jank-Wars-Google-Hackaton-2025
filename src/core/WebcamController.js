/**
 * @fileoverview Manages webcam access and streaming.
 */

/**
 * Controls the webcam feed for the game.
 */
export class WebcamController {
    /**
     * The HTMLVideoElement used to display the webcam feed.
     * @type {HTMLVideoElement | null}
     * @public
     */
    videoElement = null;

    /**
     * The media stream from the webcam.
     * @type {MediaStream | null}
     * @private
     */
    _stream = null;

    /**
     * Indicates whether the webcam has been successfully started.
     * @type {boolean}
     * @public
     */
    isStarted = false;

    /**
     * Creates a new WebcamController instance.
     * @param {string} videoElementId The ID of the HTML video element to use.
     */
    constructor(videoElementId) {
        this.videoElement = document.getElementById(videoElementId);
        if (!this.videoElement) {
            console.error(`WebcamController: Video element with ID "${videoElementId}" not found.`);
            throw new Error(`Video element with ID "${videoElementId}" not found.`);
        }
    }

    /**
     * Requests access to the webcam and starts streaming the feed.
     * @param {object} [constraints] - Optional constraints for `getUserMedia`.
     * @returns {Promise<void>} A promise that resolves when the webcam is started, or rejects on error.
     */
    async start(constraints = { video: true, audio: false }) {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
            const errorMsg = "WebcamController: getUserMedia not supported in this browser.";
            console.error(errorMsg);
            this.isStarted = false;
            throw new Error(errorMsg);
        }

        if (!this.videoElement) {
            const errorMsg = "WebcamController: Video element not initialized.";
            console.error(errorMsg);
            this.isStarted = false;
            throw new Error(errorMsg);
        }

        try {
            this._stream = await navigator.mediaDevices.getUserMedia(constraints);
            this.videoElement.srcObject = this._stream;
            await new Promise((resolve) => {
                this.videoElement.onloadedmetadata = () => {
                    this.videoElement.play();
                    this.isStarted = true;
                    console.log("WebcamController: Webcam stream started.");
                    resolve();
                };
            });
        } catch (err) {
            let errorMsg = "WebcamController: Error accessing webcam: ";
            if (err.name === "NotFoundError" || err.name === "DevicesNotFoundError") {
                errorMsg += "No camera found on this device.";
            } else if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError") {
                errorMsg += "Permission to access camera was denied.";
            } else if (err.name === "OverconstrainedError" || err.name === "ConstraintNotSatisfiedError") {
                errorMsg += `The constraints ${JSON.stringify(constraints)} could not be satisfied by the available devices.`;
            } else if (err.name === "NotReadableError" || err.name === "TrackStartError") {
                errorMsg += "The webcam is already in use by another application or system process.";
            } else {
                errorMsg += `${err.name}: ${err.message}`;
            }
            console.error(errorMsg, err);
            this.isStarted = false;
            throw new Error(errorMsg); // Re-throw for the caller to handle
        }
    }

    /**
     * Stops the webcam stream and releases the camera.
     */
    stop() {
        if (this._stream) {
            this._stream.getTracks().forEach(track => track.stop());
            this._stream = null;
            console.log("WebcamController: Webcam stream stopped.");
        }
        if (this.videoElement) {
            this.videoElement.srcObject = null;
        }
        this.isStarted = false;
    }

    /**
     * Gets the HTMLVideoElement.
     * @returns {HTMLVideoElement | null} The video element.
     */
    getVideoElement() {
        return this.videoElement;
    }
}