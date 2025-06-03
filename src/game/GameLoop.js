import * as THREE from 'three';
import * as CANNON from 'cannon-es';

/**
 * Game states enum
 */
export const GameState = {
    WAITING_FOR_HANDS: 'waiting_for_hands',
    SPAWNING: 'spawning',
    PLAYING: 'playing',
    COUNTDOWN: 'countdown',
    GAME_OVER: 'game_over'
};

/**
 * GameLoop class manages the core game mechanics including:
 * - Platform creation and physics
 * - Game state transitions
 * - Spider spawning and positioning
 * - Fall detection and countdown
 * - Winner determination and display
 */
export class GameLoop {
    /** @type {GameState} */
    currentState = GameState.WAITING_FOR_HANDS;
    
    /** @type {THREE.Scene} */
    scene;
    
    /** @type {import('../core/PhysicsController.js').PhysicsController} */
    physicsController;
    
    /** @type {THREE.Mesh} Platform mesh */
    platformMesh;
    
    /** @type {CANNON.Body} Platform physics body */
    platformBody;
    
    /** @type {Object} References to both spiders */
    spiders = {
        player1: null,
        player2: null
    };
    
    /** @type {Object} UI elements */
    ui = {
        countdownElement: null,
        winnerElement: null,
        waitingElement: null,
        logoElement: null
    };
    
    /** @type {Object} Countdown state */
    countdown = {
        timeLeft: 0,
        fallenPlayer: null,
        isActive: false
    };
    
    /** @type {Object} Game over state */
    gameOver = {
        winner: null,
        displayStartTime: 0
    };
    
    /** @type {Object} Platform configuration */
    static PLATFORM_CONFIG = {
        radius: 3.0,
        height: 0.2,
        position: { x: 0, y: -0.1, z: 0 }
    };
    
    /** @type {Object} Spider spawn configuration */
    static SPAWN_CONFIG = {
        distance: 1.5, // Distance from center
        height: 0.6,   // Height above platform
        player1Position: { x: -1.5, y: 0.5, z: 0 },
        player2Position: { x: 1.5, y: 0.5, z: 0 }
    };
    
    /** @type {number} Countdown duration in seconds */
    static COUNTDOWN_DURATION = 4;
    
    /** @type {number} Winner display duration in seconds */
    static WINNER_DISPLAY_DURATION = 5;
    
    /** @type {number} Fall threshold Y position */
    static FALL_THRESHOLD = -2.0;

    /**
     * @param {THREE.Scene} scene - Three.js scene
     * @param {import('../core/PhysicsController.js').PhysicsController} physicsController - Physics controller
     */
    constructor(scene, physicsController) {
        this.scene = scene;
        this.physicsController = physicsController;
        
        this.createPlatform();
        this.createUI();
        this.setupEventListeners();
    }
    
    /**
     * Creates the circular platform mesh and physics body
     */
    createPlatform() {
        // Create visual platform
        const platformGeometry = new THREE.CylinderGeometry(
            GameLoop.PLATFORM_CONFIG.radius,
            GameLoop.PLATFORM_CONFIG.radius,
            GameLoop.PLATFORM_CONFIG.height,
            32
        );
        
        const platformMaterial = new THREE.MeshStandardMaterial({
            color: 0x8B4513, // SaddleBrown
            roughness: 0.8,
            metalness: 0.1,
        });
        
        this.platformMesh = new THREE.Mesh(platformGeometry, platformMaterial);
        this.platformMesh.position.set(
            GameLoop.PLATFORM_CONFIG.position.x,
            GameLoop.PLATFORM_CONFIG.position.y,
            GameLoop.PLATFORM_CONFIG.position.z
        );
        this.platformMesh.receiveShadow = true;
        this.platformMesh.castShadow = true;
        this.scene.add(this.platformMesh);
        
        // Create physics platform
        const platformShape = new CANNON.Cylinder(
            GameLoop.PLATFORM_CONFIG.radius,
            GameLoop.PLATFORM_CONFIG.radius,
            GameLoop.PLATFORM_CONFIG.height,
            8
        );
        
        this.platformBody = new CANNON.Body({
            mass: 0, // Static
            shape: platformShape,
            position: new CANNON.Vec3(
                GameLoop.PLATFORM_CONFIG.position.x,
                GameLoop.PLATFORM_CONFIG.position.y,
                GameLoop.PLATFORM_CONFIG.position.z
            ),
            material: this.physicsController.groundMaterial,
            collisionFilterGroup: 1, // Ground group
            collisionFilterMask: -1  // Collide with everything
        });
        
        this.physicsController.world.addBody(this.platformBody);
    }
    
    /**
     * Creates UI elements for countdown, winner display, and waiting message
     */
    createUI() {
        // Create logo element
        this.ui.logoElement = document.createElement('img');
        this.ui.logoElement.id = 'game-logo';
        this.ui.logoElement.src = '/logo.png';
        this.ui.logoElement.alt = 'Jank Wars Logo';
        this.ui.logoElement.style.cssText = `
            position: fixed;
            top: 20px;
            left: 20px;
            height: 120px;
            width: auto;
            z-index: 1002;
            opacity: 0.9;
            pointer-events: none;
            user-select: none;
        `;
        document.body.appendChild(this.ui.logoElement);
        
        // Create countdown element
        this.ui.countdownElement = document.createElement('div');
        this.ui.countdownElement.id = 'countdown-display';
        this.ui.countdownElement.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 72px;
            font-weight: bold;
            color: #FF4444;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
            z-index: 1000;
            display: none;
            font-family: Arial, sans-serif;
        `;
        document.body.appendChild(this.ui.countdownElement);
        
        // Create winner display element
        this.ui.winnerElement = document.createElement('div');
        this.ui.winnerElement.id = 'winner-display';
        this.ui.winnerElement.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 96px;
            font-weight: bold;
            text-shadow: 3px 3px 6px rgba(0,0,0,0.8);
            z-index: 1001;
            display: none;
            font-family: Arial, sans-serif;
            text-align: center;
            background: rgba(0,0,0,0.7);
            padding: 40px 60px;
            border-radius: 20px;
            border: 4px solid #FFF;
        `;
        document.body.appendChild(this.ui.winnerElement);
        
        // Create waiting message element
        this.ui.waitingElement = document.createElement('div');
        this.ui.waitingElement.id = 'waiting-display';
        this.ui.waitingElement.style.cssText = `
            position: fixed;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 36px;
            font-weight: bold;
            color: #FFFFFF;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
            z-index: 999;
            display: block;
            font-family: Arial, sans-serif;
            text-align: center;
            background: rgba(0,0,0,0.6);
            padding: 20px 40px;
            border-radius: 15px;
        `;
        this.ui.waitingElement.textContent = 'Show both hands to start the game!';
        document.body.appendChild(this.ui.waitingElement);
    }
    
    /**
     * Sets up keyboard event listeners for testing/fallback
     */
    setupEventListeners() {
        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyR' && this.currentState === GameState.GAME_OVER) {
                this.restartGame();
            }
        });
    }
    
    /**
     * Sets references to the spider objects
     * @param {import('./Spider.js').Spider} player1Spider 
     * @param {import('./Spider.js').Spider} player2Spider 
     */
    setSpiders(player1Spider, player2Spider) {
        this.spiders.player1 = player1Spider;
        this.spiders.player2 = player2Spider;
    }
    
    /**
     * Main update loop - should be called every frame
     * @param {number} deltaTime - Time since last frame in seconds
     * @param {Object} handTrackingData - Current hand tracking results
     */
    update(deltaTime, handTrackingData) {
        switch (this.currentState) {
            case GameState.WAITING_FOR_HANDS:
                this.updateWaitingForHands(handTrackingData);
                break;
                
            case GameState.SPAWNING:
                this.updateSpawning(deltaTime);
                break;
                
            case GameState.PLAYING:
                this.updatePlaying(deltaTime);
                break;
                
            case GameState.COUNTDOWN:
                this.updateCountdown(deltaTime);
                break;
                
            case GameState.GAME_OVER:
                this.updateGameOver(deltaTime);
                break;
        }
    }
    
    /**
     * Updates waiting for hands state
     * @param {Object} handTrackingData 
     */
    updateWaitingForHands(handTrackingData) {
        if (handTrackingData && handTrackingData.leftHand && handTrackingData.rightHand) {
            this.transitionToSpawning();
        }
    }
    
    /**
     * Updates spawning state
     * @param {number} deltaTime 
     */
    updateSpawning(deltaTime) {
        // Spawning is instant, immediately transition to playing
        this.transitionToPlaying();
    }
    
    /**
     * Updates playing state - checks for fallen spiders
     * @param {number} deltaTime 
     */
    updatePlaying(deltaTime) {
        const player1Fallen = this.isSpiderFallen(this.spiders.player1);
        const player2Fallen = this.isSpiderFallen(this.spiders.player2);
        
        if (player1Fallen && !player2Fallen) {
            this.startCountdown('player1');
        } else if (player2Fallen && !player1Fallen) {
            this.startCountdown('player2');
        } else if (player1Fallen && player2Fallen) {
            // Both fallen - no winner, restart
            this.restartGame();
        }
    }
    
    /**
     * Updates countdown state
     * @param {number} deltaTime 
     */
    updateCountdown(deltaTime) {
        this.countdown.timeLeft -= deltaTime;
        
        // Update countdown display
        const secondsLeft = Math.ceil(this.countdown.timeLeft);
        this.ui.countdownElement.textContent = secondsLeft.toString();
        
        // Check if fallen player got back up
        const fallenPlayer = this.spiders[this.countdown.fallenPlayer];
        if (!this.isSpiderFallen(fallenPlayer)) {
            this.cancelCountdown();
            return;
        }
        
        // Check if countdown elapsed
        if (this.countdown.timeLeft <= 0) {
            const winner = this.countdown.fallenPlayer === 'player1' ? 'player2' : 'player1';
            this.transitionToGameOver(winner);
        }
    }
    
    /**
     * Updates game over state
     * @param {number} deltaTime 
     */
    updateGameOver(deltaTime) {
        const timeElapsed = (performance.now() - this.gameOver.displayStartTime) / 1000;
        
        if (timeElapsed >= GameLoop.WINNER_DISPLAY_DURATION) {
            this.restartGame();
        }
    }
    
    /**
     * Checks if a spider has fallen off the platform
     * @param {import('./Spider.js').Spider} spider 
     * @returns {boolean}
     */
    isSpiderFallen(spider) {
        if (!spider || !spider.physicsBody) return false;
        
        const spiderPosition = spider.physicsBody.position;
        
        // Check Y threshold
        if (spiderPosition.y < GameLoop.FALL_THRESHOLD) {
            return true;
        }
        
        // Check distance from platform center
        const distanceFromCenter = Math.sqrt(
            spiderPosition.x * spiderPosition.x + 
            spiderPosition.z * spiderPosition.z
        );
        
        return distanceFromCenter > GameLoop.PLATFORM_CONFIG.radius + 1.0; // Give some margin
    }
    
    /**
     * Transitions to spawning state
     */
    transitionToSpawning() {
        this.currentState = GameState.SPAWNING;
        
        // Hide all UI elements to ensure clean start
        this.ui.waitingElement.style.display = 'none';
        this.ui.winnerElement.style.display = 'none';
        this.ui.countdownElement.style.display = 'none';
        
        this.respawnSpiders();
    }
    
    /**
     * Transitions to playing state
     */
    transitionToPlaying() {
        this.currentState = GameState.PLAYING;
    }
    
    /**
     * Starts the countdown for a fallen player
     * @param {string} fallenPlayer - 'player1' or 'player2'
     */
    startCountdown(fallenPlayer) {
        this.currentState = GameState.COUNTDOWN;
        this.countdown.fallenPlayer = fallenPlayer;
        this.countdown.timeLeft = GameLoop.COUNTDOWN_DURATION;
        this.countdown.isActive = true;
        
        this.ui.countdownElement.style.display = 'block';
        this.ui.countdownElement.textContent = GameLoop.COUNTDOWN_DURATION.toString();
    }
    
    /**
     * Cancels the countdown when player gets back up
     */
    cancelCountdown() {
        this.currentState = GameState.PLAYING;
        this.countdown.isActive = false;
        this.countdown.fallenPlayer = null;
        
        this.ui.countdownElement.style.display = 'none';
    }
    
    /**
     * Transitions to game over state
     * @param {string} winner - 'player1' or 'player2'
     */
    transitionToGameOver(winner) {
        this.currentState = GameState.GAME_OVER;
        this.gameOver.winner = winner;
        this.gameOver.displayStartTime = performance.now();
        
        // Hide countdown
        this.ui.countdownElement.style.display = 'none';
        
        // Make losing spider gray
        const loser = winner === 'player1' ? this.spiders.player2 : this.spiders.player1;
        this.makeSpiderGray(loser);
        
        // Show winner message
        const winnerColor = winner === 'player1' ? 'Red' : 'Blue';
        const winnerColorHex = winner === 'player1' ? '#FF4444' : '#4444FF';
        
        this.ui.winnerElement.style.color = winnerColorHex;
        this.ui.winnerElement.textContent = `${winnerColor} Wins!`;
        this.ui.winnerElement.style.display = 'block';
    }
    
    /**
     * Makes a spider appear gray (dead)
     * @param {import('./Spider.js').Spider} spider 
     */
    makeSpiderGray(spider) {
        if (!spider) return;
        
        spider.gameObject.traverse((child) => {
            if (child.isMesh && child.material) {
                child.material = child.material.clone();
                child.material.color.setHex(0x666666);
                child.material.opacity = 0.7;
                child.material.transparent = true;
            }
        });
    }
    
    /**
     * Respawns both spiders at starting positions
     */
    respawnSpiders() {
        if (this.spiders.player1) {
            this.resetSpiderPosition(this.spiders.player1, GameLoop.SPAWN_CONFIG.player1Position);
            this.resetSpiderAppearance(this.spiders.player1, 0xff0000); // Red
            this.reinitializeSpiderPhysics(this.spiders.player1);
        }
        
        if (this.spiders.player2) {
            this.resetSpiderPosition(this.spiders.player2, GameLoop.SPAWN_CONFIG.player2Position);
            this.resetSpiderAppearance(this.spiders.player2, 0x0000ff); // Blue
            this.reinitializeSpiderPhysics(this.spiders.player2);
        }
    }
    
    /**
     * Reinitializes spider leg physics after position reset
     * @param {import('./Spider.js').Spider} spider 
     */
    reinitializeSpiderPhysics(spider) {
        if (!spider || !this.physicsController) return;
        
        // Clean up existing leg physics bodies and constraints
        this.cleanupSpiderLegPhysics(spider);
        
        // Reinitialize leg physics with clean state
        spider.initializeLegPhysics(this.physicsController);
        
        // Update scene matrices to ensure everything is in sync
        this.scene.updateMatrixWorld(true);
    }
    
    /**
     * Cleans up existing spider leg physics bodies and constraints
     * @param {import('./Spider.js').Spider} spider 
     */
    cleanupSpiderLegPhysics(spider) {
        if (!spider || !this.physicsController) return;
        
        const world = this.physicsController.world;
        
        // Remove thigh bodies and their constraints
        if (spider.thighBodies) {
            for (const thighBody of spider.thighBodies) {
                if (thighBody) {
                    // Remove constraint if it exists
                    if (thighBody.constraint) {
                        world.removeConstraint(thighBody.constraint);
                    }
                    // Remove body from world
                    world.removeBody(thighBody);
                }
            }
            spider.thighBodies = [];
        }
        
        // Remove tibia bodies and their constraints  
        if (spider.tibiaBodies) {
            for (const tibiaBody of spider.tibiaBodies) {
                if (tibiaBody) {
                    // Remove constraint if it exists
                    if (tibiaBody.constraint) {
                        world.removeConstraint(tibiaBody.constraint);
                    }
                    // Remove body from world
                    world.removeBody(tibiaBody);
                }
            }
            spider.tibiaBodies = [];
        }
        
        // Remove foot bodies
        if (spider.footBodies) {
            for (const footBody of spider.footBodies) {
                if (footBody) {
                    world.removeBody(footBody);
                }
            }
            spider.footBodies = [];
        }
    }
    
    /**
     * Resets spider position and physics
     * @param {import('./Spider.js').Spider} spider 
     * @param {Object} position - {x, y, z}
     */
    resetSpiderPosition(spider, position) {
        if (!spider || !spider.physicsBody) return;
        
        // Reset main spider body
        this.resetPhysicsBody(spider.physicsBody, position.x, position.y, position.z);
        
        // Reset all leg physics bodies
        for (let i = 0; i < spider.thighBodies.length; i++) {
            if (spider.thighBodies[i]) {
                // Reset thigh body to a position relative to spider
                const thighOffset = this.calculateLegOffset(i, 'thigh');
                this.resetPhysicsBody(
                    spider.thighBodies[i], 
                    position.x + thighOffset.x, 
                    position.y + thighOffset.y, 
                    position.z + thighOffset.z
                );
            }
            
            if (spider.tibiaBodies[i]) {
                // Reset tibia body to a position relative to spider
                const tibiaOffset = this.calculateLegOffset(i, 'tibia');
                this.resetPhysicsBody(
                    spider.tibiaBodies[i], 
                    position.x + tibiaOffset.x, 
                    position.y + tibiaOffset.y, 
                    position.z + tibiaOffset.z
                );
            }
            
            if (spider.footBodies[i]) {
                // Reset foot body to a position relative to spider
                const footOffset = this.calculateLegOffset(i, 'foot');
                this.resetPhysicsBody(
                    spider.footBodies[i], 
                    position.x + footOffset.x, 
                    position.y + footOffset.y, 
                    position.z + footOffset.z
                );
            }
        }
        
        // Reset leg impulse cooldowns and ground contact tracking
        spider.wasGroundContact = new Array(spider.legGroups.length).fill(false);
        spider.legImpulseCooldowns = new Array(spider.legGroups.length).fill(0);
        
        // Reset visual object
        spider.gameObject.position.set(position.x, position.y, position.z);
        spider.gameObject.quaternion.set(0, 0, 0, 1);
        
        // Reset finger curls to neutral position
        spider.fingerCurls = new Array(spider.fingerCurls.length).fill(0);
    }
    
    /**
     * Resets a single physics body completely
     * @param {CANNON.Body} body 
     * @param {number} x 
     * @param {number} y 
     * @param {number} z 
     */
    resetPhysicsBody(body, x, y, z) {
        if (!body) return;
        
        // Reset position and rotation
        body.position.set(x, y, z);
        body.quaternion.set(0, 0, 0, 1);
        
        // Reset velocities
        body.velocity.set(0, 0, 0);
        body.angularVelocity.set(0, 0, 0);
        
        // Clear accumulated forces and torques
        body.force.set(0, 0, 0);
        body.torque.set(0, 0, 0);
        
        // Reset physics state
        body.sleepState = CANNON.Body.AWAKE;
        body.timeLastSleepy = 0;
        
        // Clear any accumulated impulses
        if (body.vlambda) body.vlambda.set(0, 0, 0);
        if (body.wlambda) body.wlambda.set(0, 0, 0);
    }
    
    /**
     * Calculates appropriate offset position for leg segments
     * @param {number} legIndex 
     * @param {string} segmentType - 'thigh', 'tibia', or 'foot'
     * @returns {Object} {x, y, z} offset
     */
    calculateLegOffset(legIndex, segmentType) {
        const legAngle = (legIndex / 5) * 2 * Math.PI;
        const baseRadius = 0.25; // Distance from spider center
        
        const baseX = Math.sin(legAngle) * baseRadius;
        const baseZ = Math.cos(legAngle) * baseRadius;
        
        switch (segmentType) {
            case 'thigh':
                return { x: baseX, y: 0.2, z: baseZ };
            case 'tibia':
                return { x: baseX * 1.5, y: -0.1, z: baseZ * 1.5 };
            case 'foot':
                return { x: baseX * 2, y: -0.3, z: baseZ * 2 };
            default:
                return { x: 0, y: 0, z: 0 };
        }
    }
    
    /**
     * Resets spider appearance to original color
     * @param {import('./Spider.js').Spider} spider 
     * @param {number} color - Hex color
     */
    resetSpiderAppearance(spider, color) {
        if (!spider) return;
        
        spider.gameObject.traverse((child) => {
            if (child.isMesh && child.material && child.material.color) {
                child.material.color.setHex(color);
                child.material.opacity = 0.9;
                child.material.transparent = true;
            }
        });
    }
    
    /**
     * Restarts the entire game
     */
    restartGame() {
        this.currentState = GameState.WAITING_FOR_HANDS;
        
        // Clear physics world solver state to ensure no residual forces
        this.clearPhysicsWorldState();
        
        // Hide all UI elements
        this.ui.countdownElement.style.display = 'none';
        this.ui.winnerElement.style.display = 'none';
        this.ui.waitingElement.style.display = 'block';
        this.ui.waitingElement.textContent = 'Show both hands to start the game!';
        
        // Reset countdown state
        this.countdown.isActive = false;
        this.countdown.fallenPlayer = null;
        this.countdown.timeLeft = 0;
        
        // Reset game over state
        this.gameOver.winner = null;
        this.gameOver.displayStartTime = 0;
        
        // Reset spider positions will happen when hands are detected
    }
    
    /**
     * Clears residual physics world state to prevent accumulated forces
     */
    clearPhysicsWorldState() {
        // Clear contact equations and solver state
        if (this.physicsController && this.physicsController.world) {
            const world = this.physicsController.world;
            
            // Clear any accumulated contacts (these are the correct properties in Cannon-ES)
            if (world.contacts) {
                world.contacts.length = 0;
            }
            
            // Clear constraint equations if they exist
            if (world.constraints) {
                world.constraints.length = 0;
            }
            
            // Reset all bodies to clean state
            for (const body of world.bodies) {
                if (body) {
                    // Clear accumulated forces and torques
                    if (body.force) body.force.set(0, 0, 0);
                    if (body.torque) body.torque.set(0, 0, 0);
                    
                    // Clear velocities
                    if (body.velocity) body.velocity.set(0, 0, 0);
                    if (body.angularVelocity) body.angularVelocity.set(0, 0, 0);
                    
                    // Clear accumulated impulses if they exist
                    if (body.vlambda) body.vlambda.set(0, 0, 0);
                    if (body.wlambda) body.wlambda.set(0, 0, 0);
                    
                    // Wake up sleeping bodies
                    if (body.sleepState !== undefined && body.sleepState !== CANNON.Body.AWAKE) {
                        body.wakeUp();
                    }
                }
            }
            
            // Clear broadphase pairs if accessible
            if (world.broadphase && world.broadphase.collisionPairs) {
                world.broadphase.collisionPairs.length = 0;
            }
        }
    }
    
    /**
     * Cleanup method to remove UI elements
     */
    dispose() {
        if (this.ui.logoElement) {
            document.body.removeChild(this.ui.logoElement);
        }
        if (this.ui.countdownElement) {
            document.body.removeChild(this.ui.countdownElement);
        }
        if (this.ui.winnerElement) {
            document.body.removeChild(this.ui.winnerElement);
        }
        if (this.ui.waitingElement) {
            document.body.removeChild(this.ui.waitingElement);
        }
        
        if (this.platformMesh) {
            this.scene.remove(this.platformMesh);
        }
        
        if (this.platformBody) {
            this.physicsController.world.removeBody(this.platformBody);
        }
    }
} 