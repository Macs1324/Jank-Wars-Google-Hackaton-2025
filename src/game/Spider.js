import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { IKSolver } from '../utils/IKSolver.js';

/**
 * @fileoverview Defines the Spider class for the game.
 * Spiders are the player-controlled characters with a \"lucid gummy\" appearance.
 * Uses IK-based leg control for precise finger-to-leg mapping.
 */

export class Spider {
    /** @type {THREE.Group} The main Three.js group for the entire spider. */
    gameObject;
    /** @type {THREE.Mesh} The mesh for the spider's body. */
    bodyMesh;
    /** @type {THREE.Group[]} Array holding the THREE.Group objects for each leg's visual assembly. */
    legGroups = [];
    /** @type {THREE.MeshPhysicalMaterial} The shared material for the spider. */
    _gummyMaterial;

    /** @type {CANNON.Body | null} The main physics body for the spider. */
    physicsBody = null;
    /** @type {CANNON.Body[]} Kinematic physics bodies for foot collisions. */
    footBodies = [];

    // IK Control State
    /** @type {THREE.Vector3[]} Target positions for each foot in leg-local space */
    footTargets = [];
    /** @type {number[]} Current finger curl values (0-1) for each leg */
    fingerCurls = [];

    // Debug objects
    debugFootTargets = [];
    debugFootPositions = [];

    // --- Constants ---
    static LEG_COUNT = 5;
    static BODY_RADIUS = 0.20;

    static THIGH_RADIUS = 0.035;
    static THIGH_LENGTH = 0.18;

    static TIBIA_RADIUS = 0.03;
    static TIBIA_LENGTH = 0.28;

    // Target Y position for the center of the spider's body
    static INITIAL_BODY_Y = 0.33;

    /**
     * Creates a new Spider instance.
     * @param {number} color The color of the spider.
     * @param {import('../core/PhysicsController.js').PhysicsController} physicsController Instance of the physics controller.
     * @param {THREE.Vector3} [initialPosition] Optional initial position.
     */
    constructor(color, physicsController, initialPosition) {
        this.gameObject = new THREE.Group();
        this.gameObject.name = "SpiderGameObject"; 
        const actualInitialPosition = initialPosition ? initialPosition.clone() : new THREE.Vector3(0, Spider.INITIAL_BODY_Y, 0);
        this.gameObject.position.copy(actualInitialPosition);

        this._gummyMaterial = new THREE.MeshPhysicalMaterial({
            color: color,
            metalness: 0.0,
            roughness: 0.2,
            ior: 1.45,
            transmission: 0.95,
            thickness: Spider.BODY_RADIUS * 1.2,
            transparent: true,
            opacity: 0.9,
            side: THREE.FrontSide,
        });

        // Initialize IK control state
        this.fingerCurls = new Array(Spider.LEG_COUNT).fill(0);
        this.footTargets = [];
        
        // Debug objects
        this.debugFootTargets = [];
        this.debugFootPositions = [];

        this._createBody(); // Create visual body
        this._createLegs(); // Create visual legs
        this._createDebugVisualization(); // Create debug objects

        // Create main physics body (dynamic)
        if (physicsController) {
            const bodyShape = new CANNON.Sphere(Spider.BODY_RADIUS);
            this.physicsBody = new CANNON.Body({
                mass: 1,
                position: new CANNON.Vec3().copy(actualInitialPosition),
                shape: bodyShape,
                material: physicsController.createDefaultMaterial(),
                angularDamping: 0.5,
            });
            this.physicsBody.quaternion.copy(this.gameObject.quaternion);
            
            // DON'T add the bodyMesh to physicsController tracking - we'll handle it manually
            // This prevents conflicts between gameObject and bodyMesh positioning
            physicsController.world.addBody(this.physicsBody);
        }
        
        // Make all visual meshes cast shadows
        this.gameObject.traverse(child => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = false;
            }
        });
    }

    _createBody() {
        const bodyGeometry = new THREE.SphereGeometry(Spider.BODY_RADIUS, 24, 16);
        this.bodyMesh = new THREE.Mesh(bodyGeometry, this._gummyMaterial);
        this.bodyMesh.name = "SpiderBodyMesh";
        this.gameObject.add(this.bodyMesh);
    }

    _createLegs() {
        const thighGeometry = new THREE.CapsuleGeometry(Spider.THIGH_RADIUS, Spider.THIGH_LENGTH, 6, 10);
        const tibiaGeometry = new THREE.CapsuleGeometry(Spider.TIBIA_RADIUS, Spider.TIBIA_LENGTH, 6, 10);

        const legAttachmentAngles = [
            0,                    // Leg 0: Front (0°)
            2 * Math.PI / 5,      // Leg 1: 72°
            4 * Math.PI / 5,      // Leg 2: 144° 
            6 * Math.PI / 5,      // Leg 3: 216°
            8 * Math.PI / 5       // Leg 4: 288°
        ];

        const thighUpwardTilt = Math.PI / 20; // ~9 degrees upward from horizontal

        for (let i = 0; i < Spider.LEG_COUNT; i++) {
            const legGroup = new THREE.Group();
            legGroup.name = `leg_group_${i}`;
            legGroup.userData.legIndex = i; // Store for IK solver

            const angle = legAttachmentAngles[i];
            const attachX = Spider.BODY_RADIUS * Math.sin(angle);
            const attachZ = Spider.BODY_RADIUS * Math.cos(angle);
            legGroup.position.set(attachX, 0, attachZ);

            // Orient legGroup: local Y-axis points radially out, then tilts up
            legGroup.lookAt(this.bodyMesh.position);
            legGroup.rotateY(Math.PI);
            legGroup.rotateX(Math.PI / 2 + thighUpwardTilt); // Combined base rotation and upward tilt

            this.gameObject.add(legGroup);

            // Thigh Mesh
            const thighMesh = new THREE.Mesh(thighGeometry, this._gummyMaterial);
            thighMesh.name = `thigh_${i}`;
            thighMesh.position.y = Spider.THIGH_LENGTH / 2 + Spider.THIGH_RADIUS;
            legGroup.add(thighMesh);

            // Knee Group (controls tibia orientation relative to thigh)
            const kneeGroup = new THREE.Group();
            kneeGroup.name = `knee_group_${i}`;
            kneeGroup.position.y = Spider.THIGH_LENGTH + Spider.THIGH_RADIUS;
            legGroup.add(kneeGroup);

            // Tibia Mesh
            const tibiaMesh = new THREE.Mesh(tibiaGeometry, this._gummyMaterial);
            tibiaMesh.name = `tibia_${i}`;
            tibiaMesh.position.y = Spider.TIBIA_LENGTH / 2 + Spider.TIBIA_RADIUS;
            kneeGroup.add(tibiaMesh);

            this.legGroups.push(legGroup);
            
            // Initialize foot target for this leg
            this.footTargets.push(IKSolver.fingerCurlToFootTarget(0, i, Spider.THIGH_LENGTH, Spider.TIBIA_LENGTH));
        }
    }

    /**
     * Create debug visualization objects for IK debugging
     * @private
     */
    _createDebugVisualization() {
        const targetGeometry = new THREE.SphereGeometry(0.02, 8, 6);
        const positionGeometry = new THREE.SphereGeometry(0.015, 8, 6);
        
        const targetMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red for targets
        const positionMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Green for actual positions

        for (let i = 0; i < Spider.LEG_COUNT; i++) {
            // Debug foot target (where IK is trying to reach)
            const targetSphere = new THREE.Mesh(targetGeometry, targetMaterial);
            targetSphere.name = `debug_target_${i}`;
            this.gameObject.add(targetSphere);
            this.debugFootTargets.push(targetSphere);
            
            // Debug foot position (where the foot actually is)
            const positionSphere = new THREE.Mesh(positionGeometry, positionMaterial);
            positionSphere.name = `debug_position_${i}`;
            this.gameObject.add(positionSphere);
            this.debugFootPositions.push(positionSphere);
        }
    }

    /**
     * Initializes kinematic foot colliders for ground interaction.
     * @param {import('../core/PhysicsController.js').PhysicsController} physicsController
     */
    initializeLegPhysics(physicsController) {
        if (!physicsController || !this.physicsBody) {
            console.warn("Spider: Cannot initialize leg physics without physicsController or main physicsBody.");
            return;
        }

        this.footBodies = [];

        for (let i = 0; i < Spider.LEG_COUNT; i++) {
            // Create small sphere colliders for feet
            const footShape = new CANNON.Sphere(Spider.TIBIA_RADIUS * 1.5);
            const footBody = new CANNON.Body({
                mass: 0, // Kinematic body
                shape: footShape,
                material: physicsController.createDefaultMaterial(),
                type: CANNON.Body.KINEMATIC,
                collisionFilterGroup: 4, // Foot collision group
                collisionFilterMask: 1,  // Collide with ground
            });

            this.footBodies.push(footBody);
            physicsController.world.addBody(footBody);
        }

        console.log("Spider: Initialized kinematic foot colliders.");
    }

    /**
     * Update spider based on hand tracking data.
     * @param {Object} handData - Hand tracking data with finger positions
     */
    update(handData) {
        if (!handData) return;

        // Sync visual gameObject position with physics body
        if (this.physicsBody) {
            this.gameObject.position.copy(this.physicsBody.position);
            this.gameObject.quaternion.copy(this.physicsBody.quaternion);
        }

        // Extract finger curl values from hand data
        if (handData.fingerCurls && handData.fingerCurls.length >= Spider.LEG_COUNT) {
            for (let i = 0; i < Spider.LEG_COUNT; i++) {
                this.fingerCurls[i] = handData.fingerCurls[i];
                
                // Update foot target based on finger curl
                this.footTargets[i] = IKSolver.fingerCurlToFootTarget(
                    this.fingerCurls[i], 
                    i, 
                    Spider.THIGH_LENGTH, 
                    Spider.TIBIA_LENGTH
                );
            }
            
            // Debug: Log finger curls for first spider only
            if (this.gameObject.position.x < 0) { // Left spider (red)
                console.log('Finger curls:', handData.fingerCurls.map(c => c.toFixed(2)).join(', '));
            }
        }

        // Apply IK to all legs
        this._updateLegIK();
        
        // Update foot collider positions
        this._updateFootColliders();
        
        // Apply ground reaction forces
        this._applyGroundForces();
    }

    /**
     * Apply IK calculations to update leg visual positions.
     * @private
     */
    _updateLegIK() {
        for (let i = 0; i < Spider.LEG_COUNT; i++) {
            const legGroup = this.legGroups[i];
            const target = this.footTargets[i];

            // Update debug target visualization
            if (this.debugFootTargets[i]) {
                // Make sure matrices are up to date
                this.gameObject.updateMatrixWorld(true);
                
                // Convert target from leg-local space to world space for visualization
                const targetWorldPos = target.clone();
                targetWorldPos.applyMatrix4(legGroup.matrixWorld);
                
                // Convert from world space to gameObject local space for positioning
                const gameObjectWorldMatrixInverse = new THREE.Matrix4().copy(this.gameObject.matrixWorld).invert();
                targetWorldPos.applyMatrix4(gameObjectWorldMatrixInverse);
                
                this.debugFootTargets[i].position.copy(targetWorldPos);
            }

            // Solve IK for this leg
            const ikSolution = IKSolver.solve2BoneIK(
                target,
                Spider.THIGH_LENGTH,
                Spider.TIBIA_LENGTH,
                false // Don't flip elbow direction
            );

            // Debug logging for first leg only
            if (i === 0 && this.gameObject.position.x < 0 && Math.random() < 0.1) { // Only log 10% of the time
                // Get actual foot position for comparison
                const actualFootPos = IKSolver.getFootWorldPosition(legGroup, Spider.THIGH_LENGTH, Spider.TIBIA_LENGTH);
                const targetWorldPos = target.clone();
                targetWorldPos.applyMatrix4(legGroup.matrixWorld);
                
                console.log(`Leg ${i}:`);
                console.log(`  fingerCurl: ${this.fingerCurls[i].toFixed(2)}`);
                console.log(`  target (leg-local): (${target.x.toFixed(2)}, ${target.y.toFixed(2)}, ${target.z.toFixed(2)})`);
                console.log(`  target (world): (${targetWorldPos.x.toFixed(2)}, ${targetWorldPos.y.toFixed(2)}, ${targetWorldPos.z.toFixed(2)})`);
                console.log(`  actual (world): (${actualFootPos.x.toFixed(2)}, ${actualFootPos.y.toFixed(2)}, ${actualFootPos.z.toFixed(2)})`);
                console.log(`  distance: ${targetWorldPos.distanceTo(actualFootPos).toFixed(3)}`);
                console.log(`  IK angles: thigh=${ikSolution.thighAngle.toFixed(2)}, tibia=${ikSolution.tibiaAngle.toFixed(2)}, reachable=${ikSolution.reachable}`);
                console.log('---');
            }

            // Apply the solution to the visual leg
            IKSolver.applyIKToLeg(legGroup, ikSolution.thighAngle, ikSolution.tibiaAngle);
            
            // Update debug position visualization
            if (this.debugFootPositions[i]) {
                const footWorldPos = IKSolver.getFootWorldPosition(
                    legGroup, 
                    Spider.THIGH_LENGTH, 
                    Spider.TIBIA_LENGTH
                );
                
                // Convert from world space to gameObject local space for positioning
                const gameObjectWorldMatrixInverse = new THREE.Matrix4().copy(this.gameObject.matrixWorld).invert();
                footWorldPos.applyMatrix4(gameObjectWorldMatrixInverse);
                
                this.debugFootPositions[i].position.copy(footWorldPos);
            }
        }
    }

    /**
     * Update kinematic foot collider positions to match visual feet.
     * @private
     */
    _updateFootColliders() {
        if (!this.footBodies || this.footBodies.length === 0) return;

        for (let i = 0; i < Spider.LEG_COUNT; i++) {
            const footBody = this.footBodies[i];
            const legGroup = this.legGroups[i];

            if (footBody && legGroup) {
                // Calculate foot world position
                const footWorldPos = IKSolver.getFootWorldPosition(
                    legGroup, 
                    Spider.THIGH_LENGTH, 
                    Spider.TIBIA_LENGTH
                );

                // Update kinematic body position
                footBody.position.copy(footWorldPos);
            }
        }
    }

    /**
     * Apply ground reaction forces to the main body when feet contact ground.
     * @private
     */
    _applyGroundForces() {
        if (!this.physicsBody || !this.footBodies) return;

        // TEMPORARILY DISABLED - debugging the flying issue
        return;

        // Check each foot for ground contact and apply reaction forces
        for (let i = 0; i < this.footBodies.length; i++) {
            const footBody = this.footBodies[i];
            
            // Check if foot is touching or near the ground
            if (footBody.position.y <= 0.15) { // Slightly above ground to account for foot radius
                // Calculate force based on finger position and body weight
                const fingerExtension = 1 - this.fingerCurls[i]; // More force when finger is extended
                const footPenetration = Math.max(0, 0.15 - footBody.position.y); // How far "into" ground
                
                // Upward force to counteract gravity and support the body
                const baseForce = 2.0; // Base support force per foot
                const pressureForce = fingerExtension * 8.0; // Additional force from finger pressure
                const penetrationForce = footPenetration * 20.0; // Force to push out of ground
                
                const totalForceMagnitude = baseForce + pressureForce + penetrationForce;
                const forceDirection = new CANNON.Vec3(0, totalForceMagnitude, 0);
                
                // Apply force at the foot position to create realistic torques
                const footPosition = new CANNON.Vec3().copy(footBody.position);
                this.physicsBody.applyForce(forceDirection, footPosition);
                
                // Add some damping to prevent oscillation
                if (this.physicsBody.velocity.y > 0) {
                    this.physicsBody.velocity.y *= 0.95;
                }
            }
        }
    }

    getObject3D() {
        return this.gameObject;
    }

    setVisible(visible) {
        this.gameObject.visible = visible;
    }
}