import * as THREE from 'three';
import { DebugDisplay } from './utils/DebugDisplay.js';
import { WebcamController } from './core/WebcamController.js';
import { HandTrackingController } from './core/HandTrackingController.js';
import { HandDebugRenderer } from './utils/HandDebugRenderer.js';
import { Spider } from './game/Spider.js';
import { PhysicsController } from './core/PhysicsController.js';
import { GameLoop } from './game/GameLoop.js';
import cannonDebugger from 'cannon-es-debugger';
import { HandDataProcessor } from './utils/HandDataProcessor.js';

// Post-processing imports
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { Sky } from 'three/examples/jsm/objects/Sky.js';

// Custom saturation shader
const SaturationShader = {
    uniforms: {
        'tDiffuse': { value: null },
        'saturation': { value: 1.3 }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float saturation;
        varying vec2 vUv;
        
        void main() {
            vec4 color = texture2D( tDiffuse, vUv );
            
            // Convert to grayscale
            float gray = dot( color.rgb, vec3( 0.299, 0.587, 0.114 ) );
            
            // Mix grayscale with original color based on saturation
            vec3 saturated = mix( vec3( gray ), color.rgb, saturation );
            
            gl_FragColor = vec4( saturated, color.a );
        }
    `
};

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
    /** @type {GameLoop | null} */
    gameLoop = null;
    /** @type {EffectComposer | null} */
    composer = null;
    /** @type {Sky | null} */
    sky = null;

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

        // Initialize GameLoop after scene setup
        this.gameLoop = new GameLoop(this.scene, this.physicsController);
        this.gameLoop.setSpiders(this.player1Spider, this.player2Spider);
        this.debugDisplay.append('Game loop initialized.');

        // Initialize physics debugger
        // if (this.scene && this.physicsController) {
        //     this.physicsDebugger = cannonDebugger(this.scene, this.physicsController.world, {
        //         // options...
        //         color: 0xff0000, // Default color for shapes
        //         scale: 1, // Scale of the debug meshes
        //         onInit: (body, mesh, shape) => {
        //             // You can customize the mesh here if needed
        //             // For example, make constraints invisible by default
        //             if (mesh.isLineSegments) { // Constraints are often LineSegments
        //                 // mesh.visible = false;
        //             }
        //         },
        //     });
        //     this.debugDisplay.append('Physics debugger initialized.');
        // }
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
        // Background is now handled by the Sky object

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
        // Create sky background
        this.createSky();
        
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

        // Note: Ground plane is now handled by GameLoop with the platform
        // No need to create a separate ground plane here

        // Create Spiders at initial positions (they will be repositioned by GameLoop)
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
        
        // Initialize post-processing after scene setup
        this.initPostProcessing();
    }
    
    createSky() {
        // Create sky
        this.sky = new Sky();
        this.sky.scale.setScalar(450000);
        this.scene.add(this.sky);

        // Sky uniforms - adjusted for brighter, more blue sky
        const skyUniforms = this.sky.material.uniforms;
        skyUniforms['turbidity'].value = 2;      // Reduced from 10 for clearer, bluer sky
        skyUniforms['rayleigh'].value = 4;       // Increased from 2 for more blue scattering
        skyUniforms['mieCoefficient'].value = 0.002; // Reduced for less haze
        skyUniforms['mieDirectionalG'].value = 0.7;  // Slightly reduced

        // Sun position - higher elevation for brighter sky
        const sun = new THREE.Vector3();
        const phi = THREE.MathUtils.degToRad(82); // Higher elevation (was 88)
        const theta = THREE.MathUtils.degToRad(45); // Azimuth angle

        sun.setFromSphericalCoords(1, phi, theta);
        skyUniforms['sunPosition'].value.copy(sun);

        this.debugDisplay.append('Sky background created.');
    }
    
    initPostProcessing() {
        // Create effect composer
        this.composer = new EffectComposer(this.renderer);

        // Render pass - renders the scene
        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);

        // Saturation pass - makes colors more vibrant
        const saturationPass = new ShaderPass(SaturationShader);
        this.composer.addPass(saturationPass);

        // Bloom pass - much more subtle now (80% reduction)
        const bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            0.08, // strength reduced from 0.4 to 0.08 (80% reduction)
            0.8,  // radius  
            0.15  // threshold increased slightly to affect fewer areas
        );
        this.composer.addPass(bloomPass);

        // Output pass - ensures proper color space
        const outputPass = new OutputPass();
        this.composer.addPass(outputPass);

        this.debugDisplay.append('Post-processing effects initialized.');
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

        // if (this.physicsDebugger) {
        //     this.physicsDebugger.update();
        // }

        let processedHandData = null;

        if (this.handTrackingController && this.handTrackingController.isInitialized &&
            this.webcamController && this.webcamController.isStarted) {
            this.handTrackingController.detectHands();
            const results = this.handTrackingController.getLatestResults();

            if (this.handDebugRenderer) {
                this.handDebugRenderer.drawHands(results);
            }

            // Process hand tracking data and update spiders
            if (results) {
                processedHandData = HandDataProcessor.processHandResults(results);

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

        // Update game loop with processed hand data
        if (this.gameLoop) {
            this.gameLoop.update(deltaTime, processedHandData);
        }

        // Render with post-processing
        if (this.composer) {
            this.composer.render();
        } else {
            this.renderer.render(this.scene, this.camera);
        }
    }

    onWindowResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        
        // Also resize the composer
        if (this.composer) {
            this.composer.setSize(window.innerWidth, window.innerHeight);
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
        if (this.gameLoop) {
            this.gameLoop.dispose();
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
