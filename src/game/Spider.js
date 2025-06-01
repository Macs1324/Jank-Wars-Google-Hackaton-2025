import * as THREE from 'three';

/**
 * @fileoverview Defines the Spider class for the game.
 * Spiders are the player-controlled characters with a "lucid gummy" appearance.
 */

export class Spider {
    /** @type {THREE.Group} The main Three.js group for the entire spider. */
    gameObject;
    /** @type {THREE.Mesh} The mesh for the spider's body. */
    bodyMesh;
    /** @type {THREE.Group[]} Array holding the THREE.Group objects for each leg. */
    legGroups = [];
    /** @type {THREE.MeshPhysicalMaterial} The shared material for the spider. */
    _gummyMaterial;

    // --- Constants ---
    static LEG_COUNT = 5;
    static BODY_RADIUS = 0.20; // Smaller body

    static THIGH_RADIUS = 0.035;
    static THIGH_LENGTH = 0.18;

    static KNEE_RADIUS = 0.04;

    static TIBIA_RADIUS = 0.03;
    static TIBIA_LENGTH = 0.28; // Length to reach ground

    // Target Y position for the center of the spider's body
    static INITIAL_BODY_Y = 0.25; // Adjusted based on leg geometry

    /**
     * Creates a new Spider instance.
     * @param {number} color The color of the spider (e.g., 0xff0000 for red).
     * @param {THREE.Vector3} [initialPosition] Optional initial position. Defaults to a standing height.
     */
    constructor(color, initialPosition) {
        this.gameObject = new THREE.Group();
        if (initialPosition) {
            this.gameObject.position.copy(initialPosition);
        } else {
            this.gameObject.position.set(0, Spider.INITIAL_BODY_Y, 0);
        }

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

        this._createBody();
        this._createLegs();

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
        this.gameObject.add(this.bodyMesh);
    }

    _createLegs() {
        const thighGeometry = new THREE.CapsuleGeometry(Spider.THIGH_RADIUS, Spider.THIGH_LENGTH, 6, 10);
        const kneeGeometry = new THREE.SphereGeometry(Spider.KNEE_RADIUS, 8, 6);
        const tibiaGeometry = new THREE.CapsuleGeometry(Spider.TIBIA_RADIUS, Spider.TIBIA_LENGTH, 6, 10);

        // Angles for leg distribution around the Y-axis (0 is +Z, right-hand rule: +Y up, angle increases counter-clockwise)
        const legAttachmentAngles = [ // Tuned for 5 legs: 2 front, 2 mid, 1 back
            -Math.PI / 3.5,    // Front-Right (~ -51 deg)
             Math.PI / 3.5,     // Front-Left (~  51 deg)
            -Math.PI * 0.75,   // Mid-Right (~ -135 deg)
             Math.PI * 0.75,    // Mid-Left  (~  135 deg)
             Math.PI           // Back (180 deg)
        ];

        // Angle for thighs to tilt slightly upwards from the horizontal plane
        const thighUpwardTilt = Math.PI / 20; // ~9 degrees

        // Angle for the knee to bend downwards
        const kneeBend = Math.PI / 1.8; // ~100 degrees relative to thigh direction

        for (let i = 0; i < Spider.LEG_COUNT; i++) {
            const legGroup = new THREE.Group(); // This group controls the thigh's base position and orientation
            legGroup.name = `leg_group_${i}`;

            // 1. Position legGroup on the body's equator
            const angle = legAttachmentAngles[i];
            const attachX = Spider.BODY_RADIUS * Math.sin(angle);
            const attachZ = Spider.BODY_RADIUS * Math.cos(angle);
            legGroup.position.set(attachX, 0, attachZ); // Relative to spider body center

            // 2. Orient legGroup (thigh direction)
            // The thigh (capsule) length is along its local Y-axis.
            // a. Aim local Y-axis radially outward in the XZ plane
            legGroup.lookAt(this.bodyMesh.position); // legGroup's -Z points to body center
            legGroup.rotateY(Math.PI);               // legGroup's +Z points radially outward
            legGroup.rotateX(Math.PI / 2);           // Now legGroup's +Y points radially outward (was +Z)

            // b. Apply slight upward tilt to the thigh
            // Rotate around legGroup's local Z-axis (which is now horizontal and tangential)
            legGroup.rotateZ(thighUpwardTilt);

            this.gameObject.add(legGroup);


            // 3. Create Thigh (upper leg segment)
            const thighMesh = new THREE.Mesh(thighGeometry, this._gummyMaterial);
            thighMesh.name = `thigh_${i}`;
            // Position thigh capsule along legGroup's local Y-axis
            thighMesh.position.y = Spider.THIGH_LENGTH / 2 + Spider.THIGH_RADIUS;
            legGroup.add(thighMesh);


            // 4. Create Knee Group (for knee joint and tibia)
            const kneeGroup = new THREE.Group();
            kneeGroup.name = `knee_group_${i}`;
            // Position kneeGroup at the tip of the thigh (in legGroup's local space)
            kneeGroup.position.y = Spider.THIGH_LENGTH + Spider.THIGH_RADIUS;
            legGroup.add(kneeGroup);
            // kneeGroup initially inherits legGroup's orientation. Its local Y points along thigh.


            // 5. Create Knee visual
            const kneeMesh = new THREE.Mesh(kneeGeometry, this._gummyMaterial);
            kneeMesh.name = `knee_${i}`;
            // Knee mesh is at the origin of kneeGroup
            kneeGroup.add(kneeMesh);


            // 6. Create Tibia (lower leg segment)
            const tibiaMesh = new THREE.Mesh(tibiaGeometry, this._gummyMaterial);
            tibiaMesh.name = `tibia_${i}`;
            // Position tibia capsule along kneeGroup's local Y-axis
            tibiaMesh.position.y = Spider.TIBIA_LENGTH / 2 + Spider.TIBIA_RADIUS;
            kneeGroup.add(tibiaMesh);

            // 7. Apply Knee Bend
            // Rotate kneeGroup around its local X-axis to bend the tibia downwards.
            // Positive rotation around local X bends local Y "backwards/downwards" using right-hand rule.
            kneeGroup.rotateX(kneeBend);

            this.legGroups.push(legGroup); // Store for potential future manipulation
        }
    }

    /**
     * Placeholder for updates from hand tracking.
     * @param {object} handData - Processed hand data.
     */
    update(handData) {
        // TODO: Implement spider control logic
    }

    /**
     * Returns the main Three.js object for this spider.
     * @returns {THREE.Group}
     */
    getObject3D() {
        return this.gameObject;
    }

    /**
     * Sets the visibility of the spider.
     * @param {boolean} visible
     */
    setVisible(visible) {
        this.gameObject.visible = visible;
    }
}