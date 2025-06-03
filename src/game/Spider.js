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

        this._createBody(); // Create visual body
        this._createLegs(); // Create visual legs

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
            physicsController.addBody(this.bodyMesh, this.physicsBody);
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
            -Math.PI / 3.5,   // Front-Right
             Math.PI / 3.5,   // Front-Left
            -Math.PI * 0.75,  // Mid-Right
             Math.PI * 0.75,  // Mid-Left
             Math.PI          // Back
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
            legGroup.rotateX(Math.PI / 2);
            legGroup.rotateZ(thighUpwardTilt);

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
        
        // Update foot collider positions (disabled for debugging)
        this._updateFootColliders();
        
        // Apply ground reaction forces (disabled for debugging)
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

            // Solve IK for this leg
            const ikSolution = IKSolver.solve2BoneIK(
                target,
                Spider.THIGH_LENGTH,
                Spider.TIBIA_LENGTH,
                false // Don't flip elbow direction
            );

            // Apply the solution to the visual leg
            IKSolver.applyIKToLeg(legGroup, ikSolution.thighAngle, ikSolution.tibiaAngle);
        }
    }

    /**
     * Update kinematic foot collider positions to match visual feet.
     * @private
     */
    _updateFootColliders() {
        if (!this.footBodies || this.footBodies.length === 0) return;

        // TEMPORARILY DISABLED for debugging
        return;

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

        // TEMPORARILY DISABLED for debugging
        return;

        // Check each foot for ground contact and apply reaction forces
        for (let i = 0; i < this.footBodies.length; i++) {
            const footBody = this.footBodies[i];
            
            // Simple ground contact check (Y position near ground level)
            if (footBody.position.y <= 0.1) {
                // Calculate force based on finger pressure and body weight
                const fingerPressure = 1 - this.fingerCurls[i]; // More pressure when extended
                const forceDirection = new CANNON.Vec3(0, 1, 0); // Upward force
                const forceMagnitude = fingerPressure * 15; // Adjust for desired responsiveness

                // Apply force from foot position to body
                const footToBody = new CANNON.Vec3().copy(this.physicsBody.position).vsub(footBody.position);
                const forcePosition = footBody.position;

                this.physicsBody.applyForce(forceDirection.scale(forceMagnitude), forcePosition);
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