import * as THREE from 'three';
import * as CANNON from 'cannon-es';

/**
 * @fileoverview Defines the Spider class for the game.
 * Spiders are the player-controlled characters with a \"lucid gummy\" appearance.
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
    /** @type {THREE.MeshPhysicalMaterial | null} A shared material for highlighting. */
    _highlightMaterial = null;

    /** @type {CANNON.Body | null} The main physics body for the spider. */
    physicsBody = null;
    /** @type {CANNON.Body[]} Physics bodies for the thigh segments. */
    thighBodies = [];
    /** @type {CANNON.Body[]} Physics bodies for the tibia segments. */
    tibiaBodies = [];
    /** @type {CANNON.Constraint[]} Constraints used for the legs. */
    legConstraints = [];

    // --- Constants ---
    static LEG_COUNT = 5;
    static BODY_RADIUS = 0.20;

    static THIGH_RADIUS = 0.035;
    static THIGH_LENGTH = 0.18;

    static TIBIA_RADIUS = 0.03;
    static TIBIA_LENGTH = 0.28;

    // Target Y position for the center of the spider's body
    static INITIAL_BODY_Y = 0.33; // Adjusted to prevent visual sinking with body-only physics

    /**
     * Creates a new Spider instance.
     * @param {number} color The color of the spider.
     * @param {import('../core/PhysicsController.js').PhysicsController} physicsController Instance of the physics controller.
     * @param {THREE.Vector3} [initialPosition] Optional initial position.
     */
    constructor(color, physicsController, initialPosition) {
        this.gameObject = new THREE.Group();
        this.gameObject.name = "SpiderGameObject";

        // Define a highlight material (e.g., emissive white)
        this._highlightMaterial = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            emissive: 0xdddddd, // Make it glow a bit to stand out
            roughness: 0.5,
            metalness: 0.0,
            transparent: false,
        });
        
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

        this._createBody(); // Create visual body
        this._createLegs(); // Create visual legs

        // Create main physics body
        if (physicsController) {
            const bodyShape = new CANNON.Sphere(Spider.BODY_RADIUS);
            this.physicsBody = new CANNON.Body({
                mass: 1,
                position: new CANNON.Vec3().copy(actualInitialPosition),
                shape: bodyShape,
                material: physicsController.createDefaultMaterial(),
                angularDamping: 0.5,
            });
            this.physicsBody.quaternion.copy(this.gameObject.quaternion); // Match initial visual orientation
            physicsController.addBody(this.bodyMesh, this.physicsBody); // Link visual bodyMesh to physicsBody
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

    _createLegs() { // Creates the visual structure of the legs
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
        const kneeBend = Math.PI / 1.75;      // ~102.8 degrees bend at the knee

        for (let i = 0; i < Spider.LEG_COUNT; i++) {
            const legGroup = new THREE.Group(); // Controls overall thigh orientation and base position
            legGroup.name = `leg_group_${i}`;

            const angle = legAttachmentAngles[i];
            const attachX = Spider.BODY_RADIUS * Math.sin(angle);
            const attachZ = Spider.BODY_RADIUS * Math.cos(angle);
            legGroup.position.set(attachX, 0, attachZ); // Position on body equator

            // Orient legGroup: local Y-axis (thigh direction) points radially out, then tilts up
            legGroup.lookAt(this.bodyMesh.position); // -Z towards body center
            legGroup.rotateY(Math.PI);               // +Z radially outward
            legGroup.rotateX(Math.PI / 2);           // +Y radially outward (was +Z)
            legGroup.rotateZ(thighUpwardTilt);       // Tilt +Y (thigh) upwards around local Z

            this.gameObject.add(legGroup); // Add to main spider assembly

            // Thigh Mesh
            const thighMesh = new THREE.Mesh(thighGeometry, this._gummyMaterial);
            thighMesh.name = `thigh_${i}`;
            thighMesh.position.y = Spider.THIGH_LENGTH / 2 + Spider.THIGH_RADIUS; // Along legGroup's local Y
            legGroup.add(thighMesh);

            // Knee Group (controls tibia orientation relative to thigh)
            const kneeGroup = new THREE.Group();
            kneeGroup.name = `knee_group_${i}`;
            kneeGroup.position.y = Spider.THIGH_LENGTH + Spider.THIGH_RADIUS; // At tip of thigh
            legGroup.add(kneeGroup);

            // Tibia Mesh
            const tibiaMesh = new THREE.Mesh(tibiaGeometry, this._gummyMaterial);
            tibiaMesh.name = `tibia_${i}`;
            tibiaMesh.position.y = Spider.TIBIA_LENGTH / 2 + Spider.TIBIA_RADIUS; // Along kneeGroup's local Y
            kneeGroup.add(tibiaMesh);
            
            kneeGroup.rotateX(kneeBend); // Apply knee bend

            this.legGroups.push(legGroup); // Store for physics initialization
        }
    }

    /**
     * Initializes the physics bodies and constraints for the spider's legs.
     * Call this *after* the spider's gameObject is in the scene and matrices are updated.
     * @param {import('../core/PhysicsController.js').PhysicsController} physicsController
     */
    initializeLegPhysics(physicsController) {
        if (!physicsController || !this.physicsBody) {
            console.warn("Spider: Cannot initialize leg physics without physicsController or main physicsBody.");
            return;
        }

        this.thighBodies = []; // Clear any previous (e.g. from multiple calls)
        this.tibiaBodies = [];
        this.legConstraints = [];

        for (let i = 0; i < Spider.LEG_COUNT; i++) {
            const legGroup = this.legGroups[i];
            const thighMesh = legGroup.getObjectByName(`thigh_${i}`);
            const kneeGroup = legGroup.getObjectByName(`knee_group_${i}`);
            const tibiaMesh = kneeGroup ? kneeGroup.getObjectByName(`tibia_${i}`) : null;

            if (!thighMesh || !kneeGroup || !tibiaMesh) {
                console.error(`Spider: Could not find all visual leg parts for leg ${i} for physics. Thigh: ${!!thighMesh}, KneeGroup: ${!!kneeGroup}, Tibia: ${!!tibiaMesh}`);
                continue;
            }

            // --- Thigh Physics ---
            const thighHalfExtents = new CANNON.Vec3(Spider.THIGH_RADIUS, Spider.THIGH_LENGTH / 2, Spider.THIGH_RADIUS);
            const thighShape = new CANNON.Box(thighHalfExtents);

            const thighWorldPosition = new THREE.Vector3();
            thighMesh.getWorldPosition(thighWorldPosition);
            const thighWorldQuaternion = new THREE.Quaternion();
            thighMesh.getWorldQuaternion(thighWorldQuaternion);

            const thighCannonBody = new CANNON.Body({
                mass: 0.1,
                position: new CANNON.Vec3().copy(thighWorldPosition),
                quaternion: new CANNON.Quaternion().copy(thighWorldQuaternion),
                shape: thighShape,
                material: physicsController.createDefaultMaterial(),
                angularDamping: 0.8, linearDamping: 0.8, // Increased damping
                collisionFilterGroup: 2, collisionFilterMask: 1 
            });
            this.thighBodies.push(thighCannonBody);
            physicsController.addBody(thighMesh, thighCannonBody);

            const pivotOnBody = new CANNON.Vec3().copy(legGroup.position); // In body's local space
            const bodyToThighPivotOnThigh = new CANNON.Vec3(0, -Spider.THIGH_LENGTH / 2, 0); // Thigh's local base

            const bodyToThighConstraint = new CANNON.PointToPointConstraint(
                this.physicsBody, pivotOnBody,
                thighCannonBody, bodyToThighPivotOnThigh
            );
            physicsController.world.addConstraint(bodyToThighConstraint);
            this.legConstraints.push(bodyToThighConstraint);

            // --- Tibia Physics ---
            const tibiaHalfExtents = new CANNON.Vec3(Spider.TIBIA_RADIUS, Spider.TIBIA_LENGTH / 2, Spider.TIBIA_RADIUS);
            const tibiaShape = new CANNON.Box(tibiaHalfExtents);

            const tibiaWorldPosition = new THREE.Vector3();
            tibiaMesh.getWorldPosition(tibiaWorldPosition);
            const tibiaWorldQuaternion = new THREE.Quaternion();
            tibiaMesh.getWorldQuaternion(tibiaWorldQuaternion);

            const tibiaCannonBody = new CANNON.Body({
                mass: 0.08,
                position: new CANNON.Vec3().copy(tibiaWorldPosition),
                quaternion: new CANNON.Quaternion().copy(tibiaWorldQuaternion),
                shape: tibiaShape,
                material: physicsController.createDefaultMaterial(),
                angularDamping: 0.8, linearDamping: 0.8, // Increased damping
                collisionFilterGroup: 2, collisionFilterMask: 1
            });
            this.tibiaBodies.push(tibiaCannonBody);
            physicsController.addBody(tibiaMesh, tibiaCannonBody);

            const thighToTibiaPivotOnThigh = new CANNON.Vec3(0, Spider.THIGH_LENGTH / 2, 0); // Thigh's local tip
            const thighToTibiaPivotOnTibia = new CANNON.Vec3(0, -Spider.TIBIA_LENGTH / 2, 0); // Tibia's local base
            const hingeAxisLocal = new CANNON.Vec3(1, 0, 0); // Hinge around local X

            const kneeConstraint = new CANNON.HingeConstraint(
                thighCannonBody, tibiaCannonBody,
                {
                    pivotA: thighToTibiaPivotOnThigh, pivotB: thighToTibiaPivotOnTibia,
                    axisA: hingeAxisLocal.clone(), axisB: hingeAxisLocal.clone(),
                }
            );
            physicsController.world.addConstraint(kneeConstraint);
            this.legConstraints.push(kneeConstraint);
        }
    }

    update(handData) {
        // TODO: Implement spider control logic based on handData
        // This will involve applying forces/torques to physicsBody, thighBodies, tibiaBodies
        // or setting target positions/rotations for constraints.
    }

    getObject3D() {
        return this.gameObject;
    }

    setVisible(visible) {
        this.gameObject.visible = visible;
    }

    /**
     * Highlights or unhighlights a specific leg.
     * @param {number} legIndex The index of the leg to modify (0 to LEG_COUNT - 1).
     * @param {boolean} highlighted True to highlight, false to revert to original material.
     */
    highlightLeg(legIndex, highlighted) {
        if (legIndex < 0 || legIndex >= this.legGroups.length) {
            // console.warn(`Spider.highlightLeg: Invalid legIndex ${legIndex}`);
            return;
        }

        const legGroup = this.legGroups[legIndex];
        const thighMesh = legGroup.getObjectByName(`thigh_${legIndex}`);
        const kneeGroup = legGroup.getObjectByName(`knee_group_${legIndex}`);
        const tibiaMesh = kneeGroup ? kneeGroup.getObjectByName(`tibia_${legIndex}`) : null;

        const materialToApply = highlighted ? this._highlightMaterial : this._gummyMaterial;

        if (thighMesh && thighMesh.isMesh) {
            thighMesh.material = materialToApply;
        }
        if (tibiaMesh && tibiaMesh.isMesh) {
            tibiaMesh.material = materialToApply;
        }
    }
}