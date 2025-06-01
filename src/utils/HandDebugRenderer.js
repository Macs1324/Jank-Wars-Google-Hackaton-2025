// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// BASIC LANDMARK DRAWING UTILITY FROM MEDIAPIPE EXAMPLES
// Reference: https://github.com/googlesamples/mediapipe/blob/main/mediapipe/web/solutions/drawing_utils.js

/**
 * @fileoverview Provides utility functions for drawing hand landmarks and connectors.
 * This is a simplified version inspired by MediaPipe's drawing_utils.
 */

export const HAND_CONNECTIONS = [
    [0, 1], [1, 2], [2, 3], [3, 4],         // Thumb
    [0, 5], [5, 6], [6, 7], [7, 8],         // Index finger
    [5, 9], [9, 10], [10, 11], [11, 12],    // Middle finger
    [9, 13], [13, 14], [14, 15], [15, 16],   // Ring finger
    [0, 17], [13, 17], [17, 18], [18, 19], [19, 20], // Pinky & Palm
];

/**
 * Draws landmarks on a canvas.
 * @param {CanvasRenderingContext2D} ctx The canvas rendering context.
 * @param {Array<object>} landmarks The landmarks to draw. Each landmark is an object {x, y, z}.
 * @param {object} [options] Drawing options.
 * @param {string} [options.color='white'] Color of the landmarks.
 * @param {number} [options.radius=3] Radius of the landmark circles.
 * @param {number} [options.lineWidth=2] Line width for landmark outline (if fill is false).
 * @param {boolean} [options.fill=true] Whether to fill the landmark circles.
 */
export function drawLandmarks(ctx, landmarks, options = {}) {
    const {
        color = 'white',
        radius = 3,
        lineWidth = 2,
        fill = true,
    } = options;

    if (!landmarks) {
        return;
    }

    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    for (const landmark of landmarks) {
        ctx.beginPath();
        ctx.arc(landmark.x * ctx.canvas.width, landmark.y * ctx.canvas.height, radius, 0, 2 * Math.PI);
        if (fill) {
            ctx.fill();
        } else {
            ctx.stroke();
        }
    }
}

/**
 * Draws connectors between landmarks on a canvas.
 * @param {CanvasRenderingContext2D} ctx The canvas rendering context.
 * @param {Array<object>} landmarks The landmarks to connect. Each landmark is {x, y, z}.
 * @param {Array<Array<number>>} connections An array of [startIndex, endIndex] pairs.
 * @param {object} [options] Drawing options.
 * @param {string} [options.color='white'] Color of the connectors.
 * @param {number} [options.lineWidth=2] Line width of the connectors.
 */
export function drawConnectors(ctx, landmarks, connections, options = {}) {
    const {
        color = 'white',
        lineWidth = 2,
    } = options;

    if (!landmarks || !connections) {
        return;
    }

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;

    for (const connection of connections) {
        const start = landmarks[connection[0]];
        const end = landmarks[connection[1]];

        if (start && end) {
            ctx.beginPath();
            ctx.moveTo(start.x * ctx.canvas.width, start.y * ctx.canvas.height);
            ctx.lineTo(end.x * ctx.canvas.width, end.y * ctx.canvas.height);
            ctx.stroke();
        }
    }
}


/**
 * @class HandDebugRenderer
 * @description Manages the rendering of hand tracking data onto a 2D canvas for debugging.
 */
export class HandDebugRenderer {
    /** @type {HTMLCanvasElement} */
    canvas;
    /** @type {CanvasRenderingContext2D} */
    ctx;

    /**
     * @param {string} canvasId The ID of the HTMLCanvasElement to draw on.
     */
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            throw new Error(`HandDebugRenderer: Canvas with ID "${canvasId}" not found.`);
        }
        this.ctx = this.canvas.getContext('2d');
        if (!this.ctx) {
            throw new Error(`HandDebugRenderer: Could not get 2D context from canvas "${canvasId}".`);
        }
        // Ensure canvas is scaled correctly if CSS dimensions differ from attribute dimensions
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
    }

    /**
     * Clears the canvas.
     */
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    /**
     * Draws the hand tracking results (landmarks and connectors).
     * @param {object} handResults The HandLandmarkerResult from MediaPipe.
     * Typically includes `landmarks` (an array of arrays of landmarks, one for each hand)
     * and `handedness` (an array indicating 'Left' or 'Right' for each hand).
     */
    drawHands(handResults) {
        if (!handResults || !handResults.landmarks || handResults.landmarks.length === 0) {
            this.clear(); // Clear if no hands are detected
            return;
        }
        
        this.clear();

        for (let i = 0; i < handResults.landmarks.length; i++) {
            const originalLandmarks = handResults.landmarks[i];
            const handedness = handResults.handedness && handResults.handedness[i] && handResults.handedness[i][0] ? handResults.handedness[i][0].categoryName : 'Unknown';

            // Since the webcam video feed is mirrored (transform: scaleX(-1);) and the overlay canvas is not,
            // we need to flip the X-coordinates of the landmarks provided by MediaPipe (which are for the non-mirrored image)
            // to make the drawing on the overlay canvas align correctly with the mirrored video.
            const processedLandmarks = originalLandmarks.map(lm => ({
                x: 1.0 - lm.x, // Flip the X-coordinate
                y: lm.y,
                z: lm.z, // Z might also need flipping depending on interpretation, but usually not for 2D overlay
                visibility: lm.visibility // Keep visibility if available
            }));
            
            // Choose color based on handedness
            const color = handedness === 'Left' ? 'rgba(255, 0, 0, 0.8)' : 'rgba(0, 0, 255, 0.8)'; // Red for Left, Blue for Right
            const landmarkColor = handedness === 'Left' ? 'rgba(255, 100, 100, 0.9)' : 'rgba(100, 100, 255, 0.9)';

            drawConnectors(this.ctx, processedLandmarks, HAND_CONNECTIONS, {
                color: color,
                lineWidth: 3,
            });
            drawLandmarks(this.ctx, processedLandmarks, {
                color: landmarkColor,
                radius: 4,
                lineWidth: 2,
                fill: true,
            });

            // Optionally, draw handedness text
            if (processedLandmarks[0]) { // Draw text near the wrist landmark (landmark 0)
                this.ctx.fillStyle = color;
                this.ctx.font = "bold 14px Arial";
                
                // Adjust text alignment for better readability after flipping
                const textX = processedLandmarks[0].x * this.canvas.width;
                const textY = processedLandmarks[0].y * this.canvas.height + 15;
                
                // Set textBaseline and textAlign for more precise positioning
                this.ctx.textBaseline = "top";
                if (handedness === 'Left') { // If original 'Left' hand, now appears on right side of its local space
                    this.ctx.textAlign = "left"; // Draw text to the right of the point
                    this.ctx.fillText(handedness, textX + 5, textY - 7); // Adjust offset
                } else { // Original 'Right' hand, now appears on left side of its local space
                    this.ctx.textAlign = "right"; // Draw text to the left of the point
                    this.ctx.fillText(handedness, textX - 5, textY - 7); // Adjust offset
                }
            }
        }
    }

    /**
     * Resizes the canvas. Should be called if the source video/display size changes.
     * @param {number} width The new width.
     * @param {number} height The new height.
     */
    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        // Context properties might reset, re-apply if necessary
        // e.g., this.ctx.font, this.ctx.lineWidth, etc.
    }
}