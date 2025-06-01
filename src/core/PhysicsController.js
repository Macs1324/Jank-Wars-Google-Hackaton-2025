import * as CANNON from 'cannon-es';
import * as THREE from 'three';

/**
 * @fileoverview Manages the Cannon-ES physics world and interactions.
 */

export class PhysicsController {
    /**
     * The Cannon-ES physics world.
     * @type {CANNON.World}
     * @public
     */
    world;

    /**
     * A list of objects that need their Three.js meshes updated from physics bodies.
     * Each entry should be an object with `{ mesh: THREE.Object3D, body: CANNON.Body }`.
     * @type {Array<{mesh: THREE.Object3D, body: CANNON.Body}>}
     * @public
     */
    physicsObjects = [];

    /**
     * Time step for the physics simulation.
     * @type {number}
     * @private
     */
    _fixedTimeStep = 1 / 60; // 60 FPS

    /**
     * Maximum number of substeps to perform per physics update.
     * @type {number}
     * @private
     */
    _maxSubSteps = 10; // Increased for potentially better stability with complex constraints

    /**
     * Creates a new PhysicsController instance.
     */
    constructor() {
        this.world = new CANNON.World();
        this.world.gravity.set(0, -9.82, 0); // Standard gravity
        this.world.broadphase = new CANNON.SAPBroadphase(this.world); // SAP is generally good
        this.world.solver.iterations = 15; // Increased for better constraint solving
        // this.world.allowSleep = true; // Allows bodies to "sleep" when not moving, improving performance

        this._createGroundPlane();
        console.log("PhysicsController: Cannon-ES world initialized.");
    }

    /**
     * Creates a static ground plane in the physics world.
     * @private
     */
    _createGroundPlane() {
        const groundShape = new CANNON.Plane();
        // Define collision groups
        const GROUP1_GROUND = 1;
        // const GROUP2_LEGS = 2; // Example for future use

        const groundBody = new CANNON.Body({
            mass: 0, // Mass 0 makes it static
            shape: groundShape,
            material: this.createDefaultMaterial(), // Assign a material for contact properties
            collisionFilterGroup: GROUP1_GROUND,
            collisionFilterMask: -1 // Collide with everything by default (or specify groups like GROUP2_LEGS)
        });
        // The plane is infinite and defined by its normal vector (0,1,0) by default,
        // so it's at y=0. We rotate it to face upwards along the Y axis.
        groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0); // Rotate to be horizontal
        this.world.addBody(groundBody);
        console.log("PhysicsController: Static ground plane created at y=0 in collision group 1.");

        // Example contact material (if needed, e.g. spider legs vs ground)
        // const legMaterial = new CANNON.Material("legMaterial");
        // this.addContactMaterial(this.world.defaultMaterial, legMaterial, {
        //     friction: 0.5,
        //     restitution: 0.1
        // });
    }

    /**
     * Adds a physics body and its corresponding Three.js mesh for synchronization.
     * @param {THREE.Object3D} mesh The Three.js mesh.
     * @param {CANNON.Body} body The Cannon-ES physics body.
     */
    addBody(mesh, body) {
        if (!mesh || !body) {
            console.error("PhysicsController: Both mesh and body are required to add an object.");
            return;
        }
        this.world.addBody(body);
        this.physicsObjects.push({ mesh, body });
    }

    /**
     * Removes a body from the physics world and the synchronization list.
     * @param {CANNON.Body} body The Cannon-ES body to remove.
     */
    removeBody(body) {
        if (!body) return;
        this.world.removeBody(body);
        this.physicsObjects = this.physicsObjects.filter(obj => obj.body !== body);
    }


    /**
     * Steps the physics world forward in time.
     * @param {number} deltaTime The time elapsed since the last frame, in seconds.
     */
    update(deltaTime) {
        this.world.step(this._fixedTimeStep, deltaTime, this._maxSubSteps);

        // Synchronize Three.js meshes with their physics bodies
        for (const obj of this.physicsObjects) {
            if (obj.mesh && obj.body) {
                if (obj.mesh.parent) {
                    // Convert physics world transform to mesh's local transform
                    const worldPosition = new THREE.Vector3();
                    const worldQuaternion = new THREE.Quaternion();

                    worldPosition.copy(obj.body.position);
                    worldQuaternion.copy(obj.body.quaternion);

                    // Create a matrix for the target world transform of the mesh
                    const physicsMatrixWorld = new THREE.Matrix4();
                    // Assume scale is not changed by physics, use mesh's current local scale
                    // when composing the world matrix. If physics *did* control scale, this would be different.
                    physicsMatrixWorld.compose(worldPosition, worldQuaternion, obj.mesh.scale);

                    // Get parent's world matrix inverse
                    const parentMatrixWorldInverse = new THREE.Matrix4();
                    obj.mesh.parent.updateMatrixWorld(true); // Ensure parent's matrixWorld is up-to-date
                    parentMatrixWorldInverse.copy(obj.mesh.parent.matrixWorld).invert();

                    // Calculate mesh's new local matrix
                    const localMatrix = new THREE.Matrix4();
                    localMatrix.multiplyMatrices(parentMatrixWorldInverse, physicsMatrixWorld);

                    // Decompose local matrix to set mesh's local transform
                    obj.mesh.position.setFromMatrixPosition(localMatrix);
                    obj.mesh.quaternion.setFromRotationMatrix(localMatrix);
                    // obj.mesh.scale.setFromMatrixScale(localMatrix); // Only if physics could change scale

                } else {
                    // Mesh is a direct child of the scene, direct copy is fine
                    obj.mesh.position.copy(obj.body.position);
                    obj.mesh.quaternion.copy(obj.body.quaternion);
                }

                // Debug: Log Y position of dynamic spider bodies
                if (obj.body.mass > 0 && obj.mesh.name === 'SpiderGameObject') { 
                    // This log was for the main gameObject group, which is no longer directly in physicsObjects.
                    // console.log(`Spider ${obj.mesh.name} (body ${obj.body.id}) Y: ${obj.body.position.y.toFixed(3)}`);
                } else if (obj.body.mass > 0 && obj.mesh.name === 'Sphere') { // Assuming bodyMesh is a Sphere
                     // console.log(`Spider Body Mesh Y: ${obj.body.position.y.toFixed(3)}`);
                } else if (obj.body.mass > 0 && obj.mesh.name && obj.mesh.name.startsWith('thigh_')) {
                     // console.log(`Thigh Mesh ${obj.mesh.name} Y: ${obj.body.position.y.toFixed(3)}`);
                }
            }
        }
    }

    /**
     * Creates a simple sphere physics body.
     * @param {number} radius
     * @param {CANNON.Vec3} position
     * @param {number} mass
     * @param {CANNON.Material} [material] Optional physics material.
     * @returns {CANNON.Body}
     */
    createSphereBody(radius, position, mass, material) {
        const sphereShape = new CANNON.Sphere(radius);
        const sphereBody = new CANNON.Body({
            mass: mass,
            position: position,
            shape: sphereShape,
            material: material,
        });
        return sphereBody;
    }

    /**
     * Creates a capsule physics body.
     * Note: CANNON.Capsule is not a built-in shape. This is a common way to approximate it
     * using a cylinder and two spheres, or by directly using the (experimental or community-provided)
     * CANNON.Cylinder shape if available and suitable (though Cannon-ES's Cylinder is along Z by default).
     * For simplicity, we'll use CANNON.Particle for leg tips or Box/Sphere for segments if available.
     * True ragdolls often use compound shapes or multiple constrained simple shapes.
     *
     * For this version, we'll use `Box` for leg segments as a simpler alternative to capsules.
     * @param {CANNON.Vec3} halfExtents For a Box shape (width/2, height/2, depth/2)
     * @param {CANNON.Vec3} position
     * @param {number} mass
     * @param {CANNON.Material} [material]
     * @returns {CANNON.Body}
     */
    createBoxBody(halfExtents, position, mass, material) {
        const boxShape = new CANNON.Box(halfExtents);
        const boxBody = new CANNON.Body({
            mass: mass,
            position: position,
            shape: boxShape,
            material: material,
        });
        return boxBody;
    }

    /**
     * Creates a default physics material.
     * @returns {CANNON.Material}
     */
    createDefaultMaterial() {
        return new CANNON.Material("defaultMaterial");
    }

    /**
     * Adds a contact material between two materials.
     * @param {CANNON.Material} mat1
     * @param {CANNON.Material} mat2
     * @param {object} options Contact properties (friction, restitution, etc.)
     */
    addContactMaterial(mat1, mat2, options) {
        const contactMaterial = new CANNON.ContactMaterial(mat1, mat2, options);
        this.world.addContactMaterial(contactMaterial);
    }
}