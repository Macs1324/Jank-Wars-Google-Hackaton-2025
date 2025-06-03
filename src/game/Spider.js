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

    // Full leg physics bodies
    /** @type {CANNON.Body[]} Physics bodies for thigh segments. */
    thighBodies = [];
    /** @type {CANNON.Body[]} Physics bodies for tibia segments. */
    tibiaBodies = [];

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
                collisionFilterGroup: 16, // Spider body collision group
                collisionFilterMask: 1 | 8 | 16,  // Collide with ground, legs, and other spider bodies
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
     * Initializes kinematic leg segment colliders for full leg collision.
     * @param {import('../core/PhysicsController.js').PhysicsController} physicsController
     */
    initializeLegPhysics(physicsController) {
        if (!physicsController || !this.physicsBody) {
            console.warn("Spider: Cannot initialize leg physics without physicsController or main physicsBody.");
            return;
        }

        this.thighBodies = [];
        this.tibiaBodies = [];
        this.footBodies = []; // Keep for compatibility with ground force detection

        for (let i = 0; i < Spider.LEG_COUNT; i++) {
            // Create capsule collider for thigh segment
            // Note: Cannon-ES doesn't have native capsules, so we'll use a cylinder
            const thighShape = new CANNON.Cylinder(
                Spider.THIGH_RADIUS,    // radiusTop
                Spider.THIGH_RADIUS,    // radiusBottom  
                Spider.THIGH_LENGTH,    // height
                8                       // numSegments
            );
            
            const thighBody = new CANNON.Body({
                mass: 0.1, // Small mass - will be constrained to main body
                shape: thighShape,
                material: physicsController.createDefaultMaterial(),
                collisionFilterGroup: 8, // Leg collision group
                collisionFilterMask: 1 | 8 | 16,  // Collide with ground, other legs, and spider bodies
            });

            this.thighBodies.push(thighBody);
            physicsController.world.addBody(thighBody);

            // Create capsule collider for tibia segment  
            const tibiaShape = new CANNON.Cylinder(
                Spider.TIBIA_RADIUS,    // radiusTop
                Spider.TIBIA_RADIUS,    // radiusBottom
                Spider.TIBIA_LENGTH,    // height
                8                       // numSegments
            );
            
            const tibiaBody = new CANNON.Body({
                mass: 0.05, // Small mass - will be constrained to main body
                shape: tibiaShape,
                material: physicsController.createDefaultMaterial(),
                collisionFilterGroup: 8, // Leg collision group
                collisionFilterMask: 1 | 8 | 16,  // Collide with ground, other legs, and spider bodies
            });

            this.tibiaBodies.push(tibiaBody);
            physicsController.world.addBody(tibiaBody);

            // Create small sphere at foot tip for ground contact detection (invisible helper)
            const footShape = new CANNON.Sphere(Spider.TIBIA_RADIUS * 0.8);
            const footBody = new CANNON.Body({
                mass: 0,
                shape: footShape,
                material: physicsController.createDefaultMaterial(),
                type: CANNON.Body.KINEMATIC,
                collisionFilterGroup: 4, // Separate group for ground detection
                collisionFilterMask: 1,  // Only collide with ground
            });

            this.footBodies.push(footBody);
            physicsController.world.addBody(footBody);

            // Create constraints to bind leg segments to the main spider body
            const thighConstraint = new CANNON.PointToPointConstraint(
                this.physicsBody,
                new CANNON.Vec3(0, 0, 0), // Will be updated in _updateFootColliders
                thighBody,
                new CANNON.Vec3(0, 0, 0)
            );
            physicsController.world.addConstraint(thighConstraint);

            const tibiaConstraint = new CANNON.PointToPointConstraint(
                this.physicsBody,
                new CANNON.Vec3(0, 0, 0), // Will be updated in _updateFootColliders
                tibiaBody,
                new CANNON.Vec3(0, 0, 0)
            );
            physicsController.world.addConstraint(tibiaConstraint);

            // Store constraints for updating
            thighBody.constraint = thighConstraint;
            tibiaBody.constraint = tibiaConstraint;
        }

        console.log("Spider: Initialized leg segment colliders with physics constraints.");
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

                // Use the new debug utilities for better logging
                IKSolver.debugUtils.logIKSolution(i, target, ikSolution, actualFootPos);
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
     * Update kinematic leg segment colliders to match visual leg positions.
     * @private
     */
    _updateFootColliders() {
        if (!this.thighBodies || !this.tibiaBodies || !this.footBodies) return;
        if (this.thighBodies.length === 0) return;

        for (let i = 0; i < Spider.LEG_COUNT; i++) {
            const legGroup = this.legGroups[i];
            const thighBody = this.thighBodies[i];
            const tibiaBody = this.tibiaBodies[i];
            const footBody = this.footBodies[i];

            if (!legGroup || !thighBody || !tibiaBody || !footBody) continue;

            // Update matrices to get accurate world positions
            this.gameObject.updateMatrixWorld(true);

            // Get thigh mesh for positioning thigh collider
            const thighMesh = legGroup.getObjectByName(`thigh_${i}`);
            if (thighMesh) {
                const thighWorldPos = new THREE.Vector3();
                const thighWorldQuat = new THREE.Quaternion();
                
                thighMesh.getWorldPosition(thighWorldPos);
                thighMesh.getWorldQuaternion(thighWorldQuat);
                
                thighBody.position.copy(thighWorldPos);
                thighBody.quaternion.copy(thighWorldQuat);

                // Update constraint attachment point for thigh
                if (thighBody.constraint) {
                    const legAttachPoint = legGroup.position.clone();
                    legAttachPoint.applyMatrix4(this.gameObject.matrixWorld);
                    
                    // Calculate relative position from spider body to leg attachment
                    const relativePos = new CANNON.Vec3(
                        legAttachPoint.x - this.physicsBody.position.x,
                        legAttachPoint.y - this.physicsBody.position.y,
                        legAttachPoint.z - this.physicsBody.position.z
                    );
                    
                    thighBody.constraint.pivotA.copy(relativePos);
                    thighBody.constraint.pivotB.set(0, -Spider.THIGH_LENGTH/2, 0); // Attach at base of thigh
                }
            }

            // Get tibia mesh for positioning tibia collider
            const kneeGroup = legGroup.getObjectByName(`knee_group_${i}`);
            if (kneeGroup) {
                const tibiaMesh = kneeGroup.getObjectByName(`tibia_${i}`);
                if (tibiaMesh) {
                    const tibiaWorldPos = new THREE.Vector3();
                    const tibiaWorldQuat = new THREE.Quaternion();
                    
                    tibiaMesh.getWorldPosition(tibiaWorldPos);
                    tibiaMesh.getWorldQuaternion(tibiaWorldQuat);
                    
                    tibiaBody.position.copy(tibiaWorldPos);
                    tibiaBody.quaternion.copy(tibiaWorldQuat);

                    // Update constraint attachment point for tibia
                    if (tibiaBody.constraint) {
                        const kneeWorldPos = new THREE.Vector3();
                        kneeGroup.getWorldPosition(kneeWorldPos);
                        
                        // Calculate relative position from spider body to knee
                        const relativePos = new CANNON.Vec3(
                            kneeWorldPos.x - this.physicsBody.position.x,
                            kneeWorldPos.y - this.physicsBody.position.y,
                            kneeWorldPos.z - this.physicsBody.position.z
                        );
                        
                        tibiaBody.constraint.pivotA.copy(relativePos);
                        tibiaBody.constraint.pivotB.set(0, -Spider.TIBIA_LENGTH/2, 0); // Attach at base of tibia
                    }
                }
            }

            // Update foot detection sphere (at tip of tibia) - keep kinematic
            const footWorldPos = IKSolver.getFootWorldPosition(
                legGroup,
                Spider.THIGH_LENGTH,
                Spider.TIBIA_LENGTH
            );
            footBody.position.copy(footWorldPos);
        }
    }

    /**
     * Apply ground reaction forces to the main body when feet contact ground.
     * @private
     */
    _applyGroundForces() {
        if (!this.physicsBody || !this.footBodies) return;

        // New approach: Body stays as rigidbody, legs provide collision support
        // When legs touch ground, they act like extending the spider's collision shape
        
        const groundLevel = 0.0;
        const footRadius = Spider.TIBIA_RADIUS * 1.5;
        const contactThreshold = groundLevel + footRadius + 0.1; // Increased threshold for easier detection
        
        let supportForce = 0;
        let hasGroundContact = false;
        let debugInfo = [];
        
        // Check each leg for ground contact and apply upward support forces
        for (let i = 0; i < this.footBodies.length; i++) {
            const footBody = this.footBodies[i];
            const fingerExtension = 1 - this.fingerCurls[i]; // How extended this finger is
            
            const footY = footBody.position.y;
            const isNearGround = footY <= contactThreshold;
            const isExtended = fingerExtension > 0.1; // Lower threshold
            const shouldSupport = isNearGround && isExtended;
            
            debugInfo.push({
                leg: i,
                footY: footY.toFixed(3),
                nearGround: isNearGround,
                extended: isExtended,
                extension: fingerExtension.toFixed(2),
                supporting: shouldSupport
            });
            
            // Only provide support if finger is extended (player is "pressing down")
            if (shouldSupport) {
                hasGroundContact = true;
                
                // Calculate support force based on how extended the finger is
                const penetrationDepth = Math.max(0, contactThreshold - footY);
                const baseSupport = fingerExtension * 8.0; // Increased base support force
                const penetrationForce = penetrationDepth * 50.0; // Increased penetration force
                
                const legForce = baseSupport + penetrationForce;
                supportForce += legForce;
                
                // Apply upward force directly to body at the leg attachment point
                const legAttachmentPoint = this.legGroups[i].position.clone();
                legAttachmentPoint.applyMatrix4(this.gameObject.matrixWorld);
                
                // Convert to relative position from body center
                const relativePos = new CANNON.Vec3(
                    legAttachmentPoint.x - this.physicsBody.position.x,
                    legAttachmentPoint.y - this.physicsBody.position.y, 
                    legAttachmentPoint.z - this.physicsBody.position.z
                );
                
                const upwardForce = new CANNON.Vec3(0, legForce, 0);
                this.physicsBody.applyForce(upwardForce, relativePos);
                
                debugInfo[i].force = legForce.toFixed(1);
                debugInfo[i].penetration = penetrationDepth.toFixed(3);
            }
        }
        
        // Apply overall support to counteract gravity when legs are supporting
        if (hasGroundContact && supportForce > 0) {
            // Counter gravity plus extra for lift
            const gravityCounterForce = new CANNON.Vec3(0, 12.0 + supportForce * 0.8, 0); // Increased forces
            this.physicsBody.applyForce(gravityCounterForce);
            
            // Add some damping to prevent bouncing
            if (this.physicsBody.velocity.y > 0.2) {
                this.physicsBody.velocity.y *= 0.7;
            }
        }
        
        // Debug log for first spider - show all leg states
        if (Math.random() < 0.1 && this.gameObject.position.x < 0) {
            console.log(`🕷️ Body Y: ${this.physicsBody.position.y.toFixed(3)}, Vel Y: ${this.physicsBody.velocity.y.toFixed(3)}`);
            console.log(`Ground contact: ${hasGroundContact}, Total force: ${supportForce.toFixed(1)}`);
            console.log('Leg states:', debugInfo);
        }
    }

    getObject3D() {
        return this.gameObject;
    }

    setVisible(visible) {
        this.gameObject.visible = visible;
    }

    /**
     * Debug methods for IK development and testing
     */
    debug = {
        /**
         * Add visual axes to all legs or a specific leg for coordinate system debugging
         * @param {number} [legIndex] - Optional leg index, if not provided adds to all legs
         * @param {number} [size=0.1] - Size of the axes
         */
        addAxesToLegs: (legIndex, size = 0.1) => {
            if (legIndex !== undefined) {
                if (this.legGroups[legIndex]) {
                    IKSolver.debugUtils.addAxesToLeg(this.legGroups[legIndex], size);
                }
            } else {
                // Add to all legs
                this.legGroups.forEach(legGroup => {
                    IKSolver.debugUtils.addAxesToLeg(legGroup, size);
                });
            }
        },

        /**
         * Test the IK solver with a range of finger curl values
         * @param {number} [legIndex=0] - Index of the leg to test
         */
        testIKRange: (legIndex = 0) => {
            IKSolver.debugUtils.testFingerCurlRange(legIndex, Spider.THIGH_LENGTH, Spider.TIBIA_LENGTH);
        },

        /**
         * Set a specific finger curl value for testing
         * @param {number} legIndex - Index of the leg
         * @param {number} curlValue - Curl value from 0 to 1
         */
        setFingerCurl: (legIndex, curlValue) => {
            if (legIndex >= 0 && legIndex < Spider.LEG_COUNT) {
                this.fingerCurls[legIndex] = Math.max(0, Math.min(1, curlValue));
                this.footTargets[legIndex] = IKSolver.fingerCurlToFootTarget(
                    this.fingerCurls[legIndex],
                    legIndex,
                    Spider.THIGH_LENGTH,
                    Spider.TIBIA_LENGTH
                );
                console.log(`Set leg ${legIndex} finger curl to ${curlValue.toFixed(2)}`);
            }
        }
    };
}
