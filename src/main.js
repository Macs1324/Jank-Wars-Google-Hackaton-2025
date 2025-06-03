import * as THREE from 'three';
import { DebugDisplay } from './utils/DebugDisplay.js';
import { WebcamController } from './core/WebcamController.js';
import { HandTrackingController } from './core/HandTrackingController.js';
import { HandDebugRenderer } from './utils/HandDebugRenderer.js';
import { Spider } from './game/Spider.js';
import { PhysicsController } from './core/PhysicsController.js';
import cannonDebugger from 'cannon-es-debugger';
import { HandDataProcessor } from './utils/HandDataProcessor.js';

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
    /** @type {PhysicsController | null} */
    physicsController = null;
    /** @type {ReturnType<typeof cannonDebugger> | null} */
    physicsDebugger = null;
    /** @type {Spider | null} */
    player1Spider = null;
    /** @type {Spider | null} */
    player2Spider = null;

    /** @type {number} */
    lastFrameTime = 0;

    constructor() {
        this.debugDisplay = new DebugDisplay('debug-info');
        this.debugDisplay.update('Jank Wars - Initializing...');

        this.lastFrameTime = performance.now();

        this.initThreeJS();

        this.physicsController = new PhysicsController();
        this.debugDisplay.append('Physics controller initialized.');

        this.setupScene(); // Spiders will be created here, need physicsController available

        // Initialize physics debugger
        if (this.scene && this.physicsController) {
            this.physicsDebugger = cannonDebugger(this.scene, this.physicsController.world, {
                // options...
                color: 0xff0000, // Default color for shapes
                scale: 1, // Scale of the debug meshes
                onInit: (body, mesh, shape) => {
                    // You can customize the mesh here if needed
                    // For example, make constraints invisible by default
                    if (mesh.isLineSegments) { // Constraints are often LineSegments
                        // mesh.visible = false;
                    }
                },
            });
            this.debugDisplay.append('Physics debugger initialized.');
        }
        this.debugDisplay.append('Scene initialized.');

        this.webcamController = new WebcamController('webcam-feed');
        this.initWebcamAndHandTracking();

        this.animate = this.animate.bind(this);
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
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Scene
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x87CEEB); // Sky blue

        // Camera
        this.camera = new THREE.PerspectiveCamera(
            75, // fov
            window.innerWidth / window.innerHeight, // aspect
            0.1, // near
            1000 // far
        );
        this.camera.position.set(0, 1.5, 4);
        this.camera.lookAt(0, 0, 0);
    }

    setupScene() {
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
        this.scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
        directionalLight.position.set(10, 15, 10);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 1024;
        directionalLight.shadow.mapSize.height = 1024;
        directionalLight.shadow.camera.near = 0.5;
        directionalLight.shadow.camera.far = 50;
        directionalLight.shadow.camera.left = -10;
        directionalLight.shadow.camera.right = 10;
        directionalLight.shadow.camera.top = 10;
        directionalLight.shadow.camera.bottom = -10;
        this.scene.add(directionalLight);

        // Ground plane (Visual)
        const groundGeometry = new THREE.PlaneGeometry(20, 20);
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: 0x98FB98, // PaleGreen
            roughness: 0.9,
            metalness: 0.0,
        });
        const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
        groundMesh.rotation.x = -Math.PI / 2;
        groundMesh.receiveShadow = true;
        this.scene.add(groundMesh);

        // Create Spiders
        const initialFallHeightOffset = 0.6;
        const spiderBaseY = Spider.INITIAL_BODY_Y;

        // Player 1 (Red Spider)
        this.player1Spider = new Spider(0xff0000, this.physicsController, new THREE.Vector3(-1.0, spiderBaseY + initialFallHeightOffset, 0));
        this.scene.add(this.player1Spider.getObject3D());
        this.debugDisplay.append('Player 1 Spider (Red) created.');

        // Player 2 (Blue Spider)
        this.player2Spider = new Spider(0x0000ff, this.physicsController, new THREE.Vector3(1.0, spiderBaseY + initialFallHeightOffset, 0));
        this.scene.add(this.player2Spider.getObject3D());
        this.debugDisplay.append('Player 2 Spider (Blue) created.');

        // Ensure world matrices are updated before initializing leg physics
        this.scene.updateMatrixWorld(true);

        if (this.player1Spider) {
            this.player1Spider.initializeLegPhysics(this.physicsController);
        }
        if (this.player2Spider) {
            this.player2Spider.initializeLegPhysics(this.physicsController);
        }
        this.debugDisplay.append('Spider leg physics initialization attempted.');
    }

    async initWebcamAndHandTracking() {
        this.debugDisplay.append('Attempting to start webcam...');
        try {
            await this.webcamController.start();
            this.debugDisplay.append('Webcam started successfully.');

            if (this.webcamController.videoElement) {
                this.debugDisplay.append('Initializing Hand Tracking...');
                this.handTrackingController = new HandTrackingController(this.webcamController.videoElement);

                await this.handTrackingController.initialize();
                this.debugDisplay.append('Hand Tracking initialized successfully.');

                this.debugDisplay.append('Initializing Hand Debug Renderer...');
                try {
                    this.handDebugRenderer = new HandDebugRenderer('webcam-overlay-canvas');
                    this.debugDisplay.append('Hand Debug Renderer initialized.');
                } catch (e) {
                    console.error("Failed to initialize HandDebugRenderer:", e);
                    this.debugDisplay.append(`Error initializing Hand Debug Renderer: ${e.message}`);
                }

            } else {
                throw new Error("Webcam video element not available for Hand Tracking.");
            }

        } catch (error) {
            console.error("Failed to start webcam or hand tracking:", error);
            this.debugDisplay.append(`Error during setup: ${error.message}`);
            this.debugDisplay.append('Proceeding without webcam/hand tracking.');
            if (this.webcamController.videoElement) {
                this.webcamController.videoElement.style.display = 'none';
            }
        }
    }

    animate() {
        const now = performance.now();
        const deltaTime = (now - this.lastFrameTime) / 1000;
        this.lastFrameTime = now;

        requestAnimationFrame(this.animate);

        if (this.physicsController) {
            this.physicsController.update(deltaTime);
        }

        if (this.physicsDebugger) {
            this.physicsDebugger.update();
        }

        if (this.handTrackingController && this.handTrackingController.isInitialized &&
            this.webcamController && this.webcamController.isStarted) {
            this.handTrackingController.detectHands();
            const results = this.handTrackingController.getLatestResults();

            if (this.handDebugRenderer) {
                this.handDebugRenderer.drawHands(results);
            }

            // Process hand tracking data and update spiders
            if (results) {
                const processedHandData = HandDataProcessor.processHandResults(results);

                // Update spider 1 (Red) with left hand data
                if (this.player1Spider && processedHandData.leftHand) {
                    this.player1Spider.update(processedHandData.leftHand);
                }

                // Update spider 2 (Blue) with right hand data
                if (this.player2Spider && processedHandData.rightHand) {
                    this.player2Spider.update(processedHandData.rightHand);
                }
            }
        } else {
            if (this.handDebugRenderer) {
                this.handDebugRenderer.clear();
            }
        }
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
        // Future: Dispose Three.js resources, physics resources if necessary
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
