import * as THREE from 'three';
import { DebugDisplay } from './utils/DebugDisplay.js';
import { WebcamController } from './core/WebcamController.js';
import { HandTrackingController } from './core/HandTrackingController.js';
import { HandDebugRenderer } from './utils/HandDebugRenderer.js';
import { Spider } from './game/Spider.js';
import { PhysicsController } from './core/PhysicsController.js';
import { SpiderController } from './game/SpiderController.js'; // Added import
import { calculatePalmCoordinateSystem } from './utils/PalmCoordinateSystem.js'; // For debug
import { CoordsFilter } from './utils/SimpleLowPassFilter.js'; // For smoothing
import cannonDebugger from 'cannon-es-debugger';

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
    /** @type {SpiderController | null} */
    player1Controller = null; // Added controller for player 1
    /** @type {Spider | null} */
    player2Spider = null;
    /** @type {SpiderController | null} */
    player2Controller = null; // Added controller for player 2

    /** @type {THREE.Group | null} */
    palmDebugGroup = null; // Main group for all palm debug visuals
    /** @type {Array<THREE.Group>} */
    palmDebugAxisSets = []; // To hold axis visuals for each hand (up to 2)
    /** @type {Array<CoordsFilter>} */
    palmCoordFilters = []; // To hold filters for each hand's palm coordinates

    /** @type {number} */
    lastFrameTime = 0;

    constructor() {
        this.debugDisplay = new DebugDisplay('debug-info');
        this.debugDisplay.update('Jank Wars - Initializing...');

        this.lastFrameTime = performance.now();

        this.initThreeJS();

        // For palm coordinate system debug
        this.palmDebugGroup = new THREE.Group();
        this.palmDebugGroup.name = "PalmDebugHelpers";
        this.scene.add(this.palmDebugGroup);
        this._initPalmDebugVisuals(2); // Initialize for up to 2 hands
        for (let i = 0; i < 2; i++) { // Assuming max 2 hands
            this.palmCoordFilters.push(new CoordsFilter(0.2, 0.3)); // Alpha for pos, alpha for rot
        }

        this.physicsController = new PhysicsController();
        this.debugDisplay.append('Physics controller initialized.');

        this.setupScene(); // Spiders will be created here, need physicsController available
        
        // Initialize physics debugger
        /*
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
        */
        
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

        // Initialize Spider Controllers
        if (this.player1Spider && this.physicsController) {
            this.player1Controller = new SpiderController(this.player1Spider, this.physicsController);
            this.debugDisplay.append('Player 1 SpiderController created.');
        }
        if (this.player2Spider && this.physicsController) {
            this.player2Controller = new SpiderController(this.player2Spider, this.physicsController);
            this.debugDisplay.append('Player 2 SpiderController created.');
        }

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

        /*
        if (this.physicsDebugger) {
            this.physicsDebugger.update();
        }
        */

        const useWorldLandmarks = true; // Prefer MediaPipe's world landmarks for 3D control

        if (this.handTrackingController && this.handTrackingController.isInitialized &&
            this.webcamController && this.webcamController.isStarted) {
            this.handTrackingController.detectHands();
            const results = this.handTrackingController.getLatestResults();
            console.log("MediaPipe Results:", results); // Added for debugging

            if (this.handDebugRenderer) {
                this.handDebugRenderer.drawHands(results);
            }

            // Pass hand data to SpiderControllers
            if (results && results.landmarks && results.landmarks.length > 0) { // Check landmarks for general hand detection, but use worldLandmarks if available
                const landmarksToUse = useWorldLandmarks ? results.worldLandmarks : results.landmarks;

                if (landmarksToUse && landmarksToUse.length > 0) {
                    const numHandsDetected = Math.min(landmarksToUse.length, this.palmDebugAxisSets.length);

                    for (let i = 0; i < numHandsDetected; i++) {
                        const handLandmarks = landmarksToUse[i];
                        const handedness = results.handedness[i][0].categoryName;
                        const axisSet = this.palmDebugAxisSets[i];
                        const coordFilter = this.palmCoordFilters[i];

                        if (useWorldLandmarks && axisSet && coordFilter) {
                            let rawPalmCoords = calculatePalmCoordinateSystem(handLandmarks, handedness);
                            let palmCoords = rawPalmCoords;
                            if (rawPalmCoords) {
                                palmCoords = coordFilter.apply(rawPalmCoords);
                            }
                            
                            // console.log(`Hand ${i} (${handedness}) Palm Coords:`, palmCoords);
                            if (palmCoords) {
                                // 0: originSphere, 1: forwardArrow, 2: upArrow, 3: rightArrow
                                const originSphere = axisSet.children[0];
                                const forwardArrow = axisSet.children[1];
                                const upArrow = axisSet.children[2];
                                const rightArrow = axisSet.children[3];

                                originSphere.position.copy(palmCoords.origin);
                                forwardArrow.position.copy(palmCoords.origin);
                                forwardArrow.setDirection(palmCoords.forward);
                                upArrow.position.copy(palmCoords.origin);
                                upArrow.setDirection(palmCoords.up);
                                rightArrow.position.copy(palmCoords.origin);
                                rightArrow.setDirection(palmCoords.right);
                                
                                axisSet.visible = true;
                            } else {
                                axisSet.visible = false;
                            }
                        } else if (axisSet) { // No landmarks or no filter
                            axisSet.visible = false;
                            if(coordFilter) coordFilter.reset(); // Reset filter if no data for this hand
                        }

                        if (handedness === 'Left' && this.player1Controller) {
                            this.player1Controller.update(handLandmarks, handedness, useWorldLandmarks);
                        } else if (handedness === 'Right' && this.player2Controller) {
                            this.player2Controller.update(handLandmarks, handedness, useWorldLandmarks);
                        }
                        // If only one hand detected, could try to assign it to P1 or based on last known
                    }
                     // Hide axis sets for hands not detected this frame
                    for (let i = numHandsDetected; i < this.palmDebugAxisSets.length; i++) {
                        this.palmDebugAxisSets[i].visible = false;
                    }
                } else { // No landmarksToUse (e.g. results.worldLandmarks was empty)
                    this.palmDebugAxisSets.forEach(axisSet => axisSet.visible = false);
                    this.palmCoordFilters.forEach(filter => filter.reset());
                }
            } else {
                // No hands detected at all by HandTrackingController, or not initialized
                this.palmDebugAxisSets.forEach(axisSet => axisSet.visible = false);
                this.palmCoordFilters.forEach(filter => filter.reset());
                if (this.player1Controller) {
                    this.player1Controller.update(null, 'Left', useWorldLandmarks);
                }
                if (this.player2Controller) {
                    this.player2Controller.update(null, 'Right', useWorldLandmarks);
                }
            }
        } else {
            // Hand tracking is not active, clear the debug overlay and inform controllers
            if (this.handDebugRenderer) {
                this.handDebugRenderer.clear();
            }
            if (this.player1Controller) {
                this.player1Controller.update(null, 'Left', true); // Assuming world landmarks if we had data
            }
            if (this.player2Controller) {
                this.player2Controller.update(null, 'Right', true);
            }
        }
        this.renderer.render(this.scene, this.camera);
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    _initPalmDebugVisuals(maxHands = 2) {
        const AXIS_LENGTH = 0.15; // Increased axis length
        const FWD_COLOR = 0x0000ff; // Blue for Z (Forward)
        const UP_COLOR = 0x00ff00;  // Green for Y (Up/Normal)
        const RIGHT_COLOR = 0xff0000; // Red for X (Right)

        for (let i = 0; i < maxHands; i++) {
            const axisSetGroup = new THREE.Group();
            axisSetGroup.name = `PalmAxisSet_${i}`;

            const originSphere = new THREE.Mesh(
                new THREE.SphereGeometry(0.012), // Increased sphere radius
                new THREE.MeshBasicMaterial({ color: 0xffffff, depthTest: false, depthWrite: false, transparent: true, opacity: 0.9 })
            );
            originSphere.renderOrder = 999; // Ensure it's rendered on top
            axisSetGroup.add(originSphere);

            // Create arrows once, then update position and direction
            const forwardArrow = new THREE.ArrowHelper(new THREE.Vector3(0,0,1), new THREE.Vector3(0,0,0), AXIS_LENGTH, FWD_COLOR, AXIS_LENGTH * 0.2, AXIS_LENGTH * 0.15);
            const upArrow = new THREE.ArrowHelper(new THREE.Vector3(0,1,0), new THREE.Vector3(0,0,0), AXIS_LENGTH, UP_COLOR, AXIS_LENGTH * 0.2, AXIS_LENGTH * 0.15);
            const rightArrow = new THREE.ArrowHelper(new THREE.Vector3(1,0,0), new THREE.Vector3(0,0,0), AXIS_LENGTH, RIGHT_COLOR, AXIS_LENGTH * 0.2, AXIS_LENGTH * 0.15);
            
            [forwardArrow, upArrow, rightArrow].forEach(arrow => {
                // Ensure all parts of the arrow helper are not depth tested and render on top
                arrow.line.material = new THREE.MeshBasicMaterial({ color: arrow.line.material.color, depthTest: false, depthWrite: false, transparent: true, opacity: 0.9 });
                arrow.cone.material = new THREE.MeshBasicMaterial({ color: arrow.cone.material.color, depthTest: false, depthWrite: false, transparent: true, opacity: 0.9 });
                arrow.renderOrder = 999;
                axisSetGroup.add(arrow);
            });
            
            axisSetGroup.visible = false; // Start hidden
            this.palmDebugAxisSets.push(axisSetGroup);
            this.palmDebugGroup.add(axisSetGroup);
        }
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