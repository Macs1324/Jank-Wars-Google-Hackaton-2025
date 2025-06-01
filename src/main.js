import * as THREE from 'three';
import { DebugDisplay } from './utils/DebugDisplay.js';
import { WebcamController } from './core/WebcamController.js';
import { HandTrackingController } from './core/HandTrackingController.js';
import { HandDebugRenderer } from './utils/HandDebugRenderer.js';
import { Spider } from './game/Spider.js';

/**
 * @fileoverview Main entry point for the Jank Wars game.
 * Initializes the Three.js scene, camera, renderer, and basic game loop.
 */

class Game {
    /** @type {THREE.WebGLRenderer} */
    renderer;
    /** @type {THREE.Scene} */
    scene;
    /** @type {THREE.PerspectiveCamera} */
    camera;
    /** @type {DebugDisplay} */
    debugDisplay;
    /** @type {WebcamController} */
    webcamController;
    /** @type {HandTrackingController | null} */
    handTrackingController = null;
    /** @type {HandDebugRenderer | null} */
    handDebugRenderer = null;
    /** @type {Spider | null} */
    player1Spider = null; // Red spider, typically left hand
    /** @type {Spider | null} */
    player2Spider = null; // Blue spider, typically right hand

    constructor() {
        this.debugDisplay = new DebugDisplay('debug-info');
        this.debugDisplay.update('Jank Wars - Initializing...');

        this.initThreeJS();
        this.setupScene();
        
        this.debugDisplay.append('Scene initialized.');

        this.webcamController = new WebcamController('webcam-feed');
        // initWebcam will now also handle hand tracking initialization
        this.initWebcamAndHandTracking(); 

        this.animate = this.animate.bind(this); // Bind once
        this.animate();

        window.addEventListener('resize', this.onWindowResize.bind(this), false);
    }

    initThreeJS() {
        // Renderer
        this.renderer = new THREE.WebGLRenderer({
            canvas: document.getElementById('game-canvas'),
            antialias: true,
        });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB); // Sky blue background

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            75, // fov
            window.innerWidth / window.innerHeight, // aspect
            0.1, // near
            1000 // far
        );
        this.camera.position.set(0, 1.5, 4); // Position camera slightly above and back
        this.camera.lookAt(0, 0, 0);
    }

    setupScene() {
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Brighter ambient light
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6); // Softer directional light
        directionalLight.position.set(10, 15, 10); // Adjusted position for potentially better shadow angles
        directionalLight.castShadow = true;
        // Configure shadow properties
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 50;
        directionalLight.shadow.camera.left = -10;
        directionalLight.shadow.camera.right = 10;
        directionalLight.shadow.camera.top = 10;
        directionalLight.shadow.camera.bottom = -10;
        this.scene.add(directionalLight);

        // Ground plane
        const groundGeometry = new THREE.PlaneGeometry(20, 20);
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: 0x98FB98, // PaleGreen, for a more cheerful ground
            roughness: 0.9,  // More matte
            metalness: 0.0,  // Non-metallic, cartoonish
        });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2; // Rotate to be horizontal
        ground.receiveShadow = true;
        this.scene.add(ground);

        // Example Cube (optional, for testing)
        // const cubeGeometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        // const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        // cube.position.set(0, 0.25, 0);
        // cube.castShadow = true;
        // this.scene.add(cube);

        // Create Spiders
        const spiderYPosition = Spider.BODY_RADIUS; // Place them on the ground

        // Player 1 (Red Spider)
        this.player1Spider = new Spider(0xff0000, new THREE.Vector3(-1.5, spiderYPosition, 0));
        this.scene.add(this.player1Spider.getObject3D());
        this.debugDisplay.append('Player 1 Spider (Red) created.');

        // Player 2 (Blue Spider)
        this.player2Spider = new Spider(0x0000ff, new THREE.Vector3(1.5, spiderYPosition, 0));
        this.scene.add(this.player2Spider.getObject3D());
        this.debugDisplay.append('Player 2 Spider (Blue) created.');
    }

    async initWebcamAndHandTracking() {
        this.debugDisplay.append('Attempting to start webcam...');
        try {
            await this.webcamController.start();
            this.debugDisplay.append('Webcam started successfully.');

            if (this.webcamController.videoElement) {
                this.debugDisplay.append('Initializing Hand Tracking...');
                this.handTrackingController = new HandTrackingController(this.webcamController.videoElement);
                
                // Optional: Set a callback for results directly if needed elsewhere
                // this.handTrackingController.setOnResultsCallback((results) => {
                //     if (results.landmarks && results.landmarks.length > 0) {
                //         // console.log(`HandTrackingController Results: ${results.landmarks.length} hands detected.`);
                //     }
                // });
                //
                await this.handTrackingController.initialize();
                this.debugDisplay.append('Hand Tracking initialized successfully.');

                this.debugDisplay.append('Initializing Hand Debug Renderer...');
                try {
                    this.handDebugRenderer = new HandDebugRenderer('webcam-overlay-canvas');
                    this.debugDisplay.append('Hand Debug Renderer initialized.');
                } catch (e) {
                    console.error("Failed to initialize HandDebugRenderer:", e);
                    this.debugDisplay.append(`Error initializing Hand Debug Renderer: ${e.message}`);
                    // Continue without it if it fails
                }

            } else {
                throw new Error("Webcam video element not available for Hand Tracking.");
            }

        } catch (error) {
            console.error("Failed to start webcam or hand tracking:", error);
            this.debugDisplay.append(`Error during setup: ${error.message}`);
            this.debugDisplay.append('Proceeding without webcam/hand tracking.');
            // Potentially hide the video element if it failed
            if (this.webcamController.videoElement) {
                this.webcamController.videoElement.style.display = 'none';
            }
        }
    }

    animate() {
        requestAnimationFrame(this.animate);

        // Update game logic here (e.g., spider movements, physics)
        if (this.handTrackingController && this.handTrackingController.isInitialized &&
            this.webcamController && this.webcamController.isStarted) {
            this.handTrackingController.detectHands();
            const results = this.handTrackingController.getLatestResults();

            if (this.handDebugRenderer) {
                // HandDebugRenderer\'s drawHands method will clear the canvas
                // if results are null or no landmarks are present.
                this.handDebugRenderer.drawHands(results);
            }

            // TODO: Pass hand data to spiders for updates
            // if (results && results.landmarks) {
            //     if (this.player1Spider && results.handedness[0] && results.handedness[0][0].categoryName === 'Left') {
            //         this.player1Spider.update(results.landmarks[0]); // Assuming first detected hand is left
            //     } else if (this.player1Spider && results.handedness[1] && results.handedness[1][0].categoryName === 'Left') {
            //         this.player1Spider.update(results.landmarks[1]);
            //     }
            //     // Add similar logic for player2Spider and 'Right' hand
            // }


        } else {
            // Hand tracking is not active, clear the debug overlay
            if (this.handDebugRenderer) {
                this.handDebugRenderer.clear();
            }
        }

        // Example: Make spiders do a little dance if no hand tracking for testing
        // if (this.player1Spider) this.player1Spider.getObject3D().rotation.y += 0.005;
        // if (this.player2Spider) this.player2Spider.getObject3D().rotation.x -= 0.005;


        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    cleanup() {
        console.log("Cleaning up game resources...");
        this.debugDisplay.append("Cleaning up resources...");
        if (this.webcamController) {
            this.webcamController.stop();
        }
        if (this.handTrackingController) {
            this.handTrackingController.dispose().catch(err => console.error("Error disposing hand tracker:", err));
        }
        // Additional cleanup for Three.js resources might be needed if not automatically handled
        // For example, disposing geometries, materials, textures if they are not garbage collected.
        // renderer.dispose(); // if renderer itself needs cleanup.
    }
}

// Initialize the game
let gameInstance = null;
document.addEventListener('DOMContentLoaded', () => {
    gameInstance = new Game();
});

// Handle page unload for cleanup
window.addEventListener('beforeunload', () => {
    if (gameInstance) {
        gameInstance.cleanup();
    }
});