import * as THREE from 'three'
import * as CANNON from 'cannon-es'

// GameWorldSystem: Manages 3D scene, physics, and rendering
// Following LoB: All world-related functionality stays together
export class GameWorldSystem {
  constructor(gameState) {
    this.gameState = gameState
    this.isInitialized = false
  }

  async init() {
    try {
      this.initThreeJS()
      this.initPhysics()
      this.createEnvironment()
      this.createSpiders()
      this.setupEventListeners()
      this.isInitialized = true
      console.log('GameWorldSystem initialized')
    } catch (error) {
      console.error('GameWorldSystem initialization failed:', error)
      throw error
    }
  }

  initThreeJS() {
    console.log('Setting up Three.js scene...')
    
    // Scene setup
    this.gameState.scene = new THREE.Scene()
    this.gameState.scene.background = new THREE.Color(0x2a1810)
    this.gameState.scene.fog = new THREE.Fog(0x2a1810, 5, 30)
    console.log('Scene created with background color')

    // Camera setup
    this.gameState.camera = new THREE.PerspectiveCamera(
      75, 
      window.innerWidth / window.innerHeight, 
      0.1, 
      1000
    )
    this.gameState.camera.position.set(0, 5, 10)
    this.gameState.camera.lookAt(0, 0, 0)
    console.log('Camera positioned at:', this.gameState.camera.position)

    // Renderer setup
    this.gameState.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.gameState.renderer.setSize(window.innerWidth, window.innerHeight)
    this.gameState.renderer.shadowMap.enabled = true
    this.gameState.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    
    // Style the canvas properly
    this.gameState.renderer.domElement.style.position = 'absolute'
    this.gameState.renderer.domElement.style.top = '0'
    this.gameState.renderer.domElement.style.left = '0'
    this.gameState.renderer.domElement.style.zIndex = '1'
    this.gameState.renderer.domElement.style.display = 'block'
    
    console.log('Renderer created with size:', window.innerWidth, 'x', window.innerHeight)
    
    // Add to DOM
    const appElement = document.getElementById('app')
    if (!appElement) {
      throw new Error('App element not found')
    }
    appElement.appendChild(this.gameState.renderer.domElement)
    console.log('Canvas added to DOM successfully')

    this.setupLighting()
  }

  setupLighting() {
    // Ambient lighting for overall illumination
    const ambientLight = new THREE.AmbientLight(0x505050, 1.2)
    this.gameState.scene.add(ambientLight)

    // Main directional light with shadows
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.8)
    directionalLight.position.set(10, 10, 5)
    directionalLight.castShadow = true
    directionalLight.shadow.mapSize.width = 2048
    directionalLight.shadow.mapSize.height = 2048
    directionalLight.shadow.camera.near = 0.5
    directionalLight.shadow.camera.far = 50
    directionalLight.shadow.camera.left = -10
    directionalLight.shadow.camera.right = 10
    directionalLight.shadow.camera.top = 10
    directionalLight.shadow.camera.bottom = -10
    this.gameState.scene.add(directionalLight)

    // Atmospheric point lights for visual appeal
    const redLight = new THREE.PointLight(0xff4444, 1.2, 20)
    redLight.position.set(-5, 3, -5)
    this.gameState.scene.add(redLight)

    const blueLight = new THREE.PointLight(0x4444ff, 1.2, 20)
    blueLight.position.set(5, 3, 5)
    this.gameState.scene.add(blueLight)
  }

  initPhysics() {
    const config = this.gameState.config.physics
    
    this.gameState.world = new CANNON.World()
    this.gameState.world.gravity.set(0, config.gravity, 0)
    this.gameState.world.broadphase = new CANNON.NaiveBroadphase()
    
    // Enhanced solver configuration for better spider foot contact
    this.gameState.world.solver.iterations = 15
    this.gameState.world.solver.tolerance = 1e-6
    this.gameState.world.defaultContactMaterial.friction = 1.2
    this.gameState.world.defaultContactMaterial.restitution = 0.1
    this.gameState.world.defaultContactMaterial.contactEquationStiffness = 1e8
    this.gameState.world.defaultContactMaterial.contactEquationRelaxation = 3

    // Create enhanced ground physics body for spider walking
    const groundShape = new CANNON.Plane()
    const groundBody = new CANNON.Body({ 
      mass: 0,
      type: CANNON.Body.KINEMATIC
    })
    groundBody.addShape(groundShape)
    groundBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1, 0, 0), -Math.PI / 2)
    
    // Enhanced ground material for optimal spider foot grip
    const groundMaterial = new CANNON.Material('groundMaterial')
    groundMaterial.friction = 2.0
    groundMaterial.restitution = 0.05
    groundMaterial.contactEquationStiffness = 1e8
    groundMaterial.contactEquationRelaxation = 3
    groundMaterial.frictionEquationStiffness = 1e7
    groundMaterial.frictionEquationRelaxation = 3
    
    groundBody.material = groundMaterial
    this.gameState.world.addBody(groundBody)
    
    // Store ground material for foot contact setup
    this.gameState.groundMaterial = groundMaterial
  }

  createEnvironment() {
    console.log('Creating game environment...')
    this.createArena()
    this.createGround()
    this.createAtmosphericElements()
    console.log('Environment created successfully')
  }

  createArena() {
    // Arena ring boundary
    const ringGeometry = new THREE.RingGeometry(15, 18, 32)
    const ringMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x444444, 
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.3 
    })
    const arena = new THREE.Mesh(ringGeometry, ringMaterial)
    arena.rotation.x = -Math.PI / 2
    arena.position.y = 0.01
    this.gameState.scene.add(arena)
  }

  createGround() {
    // Main ground plane
    const groundGeometry = new THREE.PlaneGeometry(30, 30)
    const groundMaterial = new THREE.MeshLambertMaterial({ 
      color: 0x2a1810,
      transparent: true,
      opacity: 0.9
    })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    this.gameState.scene.add(ground)
  }

  createAtmosphericElements() {
    // Hexagonal pattern on ground for visual interest
    for (let i = 0; i < 50; i++) {
      const hexGeometry = new THREE.CylinderGeometry(0.3, 0.3, 0.05, 6)
      const hexMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x444444,
        transparent: true,
        opacity: 0.2
      })
      const hex = new THREE.Mesh(hexGeometry, hexMaterial)
      hex.position.x = (Math.random() - 0.5) * 25
      hex.position.z = (Math.random() - 0.5) * 25
      hex.position.y = 0.02
      hex.rotation.y = Math.random() * Math.PI
      this.gameState.scene.add(hex)
    }
  }

  createSpiders() {
    console.log('Creating spiders...')
    const config = this.gameState.config.spiders
    
    for (let i = 0; i < 2; i++) {
      const spider = this.createSpider(config.colors[i], config.positions[i])
      spider.playerId = i
      this.gameState.addSpider(spider)
      console.log(`Spider ${i} created at position:`, config.positions[i])
      console.log(`Spider ${i} has ${spider.legs.length} legs`)
      
      // Debug each leg
      spider.legs.forEach((leg, legIndex) => {
        console.log(`Leg ${legIndex} userData:`, !!leg.userData, leg.userData ? Object.keys(leg.userData) : 'none')
      })
    }
  }

  createSpider(color, position) {
    const spider = new THREE.Group()

    // Create spider body
    const bodyGeometry = new THREE.SphereGeometry(0.5, 8, 6)
    const bodyMaterial = new THREE.MeshLambertMaterial({ color })
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
    body.castShadow = true
    spider.add(body)

    // Create physics body
    const bodyShape = new CANNON.Sphere(0.5)
    const bodyBody = new CANNON.Body({ mass: this.gameState.config.spiders.bodyMass })
    bodyBody.addShape(bodyShape)
    bodyBody.position.set(position.x, 0.5, position.z)
    bodyBody.material = new CANNON.Material({ friction: 0.8, restitution: 0.1 })
    bodyBody.linearDamping = 0.8  // High damping to prevent excessive movement
    bodyBody.angularDamping = 0.9  // High angular damping for stability
    this.gameState.world.addBody(bodyBody)
    
    spider.physicsBody = bodyBody
    spider.legs = []
    spider.legBodies = []
    spider.footBodies = []
    spider.constraints = []
    
    // Create 8 spider legs with proper spider anatomy
    for (let i = 0; i < 8; i++) {
      const leg = this.createSpiderLeg(color, spider.physicsBody, i)
      const angle = (i / 8) * Math.PI * 2
      const radius = 0.6
      
      // Position legs outward from body with spider-like angling
      leg.position.set(
        Math.cos(angle) * radius,
        -0.3, // Attach lower on body
        Math.sin(angle) * radius
      )
      
      // Angle legs outward like a real spider (45 degrees down and out)
      leg.rotation.y = angle
      leg.rotation.z = Math.PI * 0.25 // Angle legs outward and down
      spider.add(leg)
      spider.legs.push(leg)
      // Track foot physics bodies for locomotion
      if (leg.userData.footBody) {
        spider.footBodies.push(leg.userData.footBody)
      }
      // DISABLED: No physics bodies or constraints for legs
      // spider.legBodies.push(leg.userData.physicsBody)
      // spider.constraints.push(...leg.userData.constraints)
    }

    spider.position.set(position.x, 0.5, position.z)
    
    // Position foot physics bodies relative to spider's actual position
    spider.legs.forEach((leg, legIndex) => {
      if (leg.userData.footBody) {
        const legAngle = (legIndex / 8) * Math.PI * 2
        const legReach = 1.2
        const footX = position.x + Math.cos(legAngle) * legReach
        const footZ = position.z + Math.sin(legAngle) * legReach
        leg.userData.footBody.position.set(footX, 0.08, footZ)
        
        // Add constraint to loosely connect foot to spider body for walking forces
        const footConstraint = new CANNON.DistanceConstraint(
          spider.physicsBody,
          leg.userData.footBody,
          legReach * 1.5 // Maximum distance foot can be from body
        )
        this.gameState.world.addConstraint(footConstraint)
        leg.userData.footConstraint = footConstraint
      }
    })
    
    return spider
  }

  createSpiderLeg(color, bodyPhysics, legIndex) {
    const leg = new THREE.Group()

    // Upper leg segment (thigh)
    const upperGroup = new THREE.Group()
    const upperGeometry = new THREE.CylinderGeometry(0.06, 0.04, 1.0)
    const upperMaterial = new THREE.MeshLambertMaterial({ color })
    const upper = new THREE.Mesh(upperGeometry, upperMaterial)
    upper.position.set(0, -0.5, 0)
    upper.castShadow = true
    upperGroup.add(upper)

    // DISABLED: Upper leg physics - causing floating issues
    // const upperShape = new CANNON.Cylinder(0.06, 0.04, 1.0, 8)
    // const upperBody = new CANNON.Body({ mass: this.gameState.config.spiders.legMass })
    // upperBody.addShape(upperShape)
    // upperBody.material = new CANNON.Material({ friction: 0.6, restitution: 0.2 })
    // this.gameState.world.addBody(upperBody)
    const upperBody = null // Placeholder for visual-only leg

    // Knee joint
    const kneeJoint = new THREE.Group()
    kneeJoint.position.set(0, -1.0, 0)
    const kneeGeometry = new THREE.SphereGeometry(0.08)
    const kneeMaterial = new THREE.MeshLambertMaterial({ color: color * 0.7 })
    const knee = new THREE.Mesh(kneeGeometry, kneeMaterial)
    knee.castShadow = true
    kneeJoint.add(knee)

    // Lower leg segment (shin)
    const lowerGeometry = new THREE.CylinderGeometry(0.04, 0.03, 0.8)
    const lowerMaterial = new THREE.MeshLambertMaterial({ color: color * 0.8 })
    const lower = new THREE.Mesh(lowerGeometry, lowerMaterial)
    lower.position.set(0, -0.4, 0)
    lower.castShadow = true
    kneeJoint.add(lower)

    // DISABLED: Lower leg physics - causing floating issues
    // const lowerShape = new CANNON.Cylinder(0.04, 0.03, 0.8, 8)
    // const lowerBody = new CANNON.Body({ mass: 0.1 })
    // lowerBody.addShape(lowerShape)
    // lowerBody.material = new CANNON.Material({ friction: 0.8, restitution: 0.1 })
    // this.gameState.world.addBody(lowerBody)
    const lowerBody = null // Placeholder for visual-only leg

    // Foot
    const footGeometry = new THREE.SphereGeometry(0.06)
    const footMaterial = new THREE.MeshLambertMaterial({ color: color * 0.5 })
    const foot = new THREE.Mesh(footGeometry, footMaterial)
    foot.position.set(0, -0.8, 0)
    foot.castShadow = true
    kneeJoint.add(foot)

    // Enhanced foot physics for proper ground collision and walking
    const footShape = new CANNON.Sphere(0.1) // Larger contact area for stability
    const footBody = new CANNON.Body({
      mass: 0.2, // Increased mass for better ground contact
      type: CANNON.Body.DYNAMIC,
      allowSleep: false // Prevent sleeping for responsive control
    })
    footBody.addShape(footShape)

    // Specialized ground contact material
    const footPhysicsMaterial = new CANNON.Material('footMaterial')
    footPhysicsMaterial.friction = 1.5      // High friction for grip without sliding
    footPhysicsMaterial.restitution = 0.1   // Slight bounce for natural movement
    footPhysicsMaterial.contactEquationStiffness = 1e7
    footPhysicsMaterial.contactEquationRelaxation = 3
    footPhysicsMaterial.frictionEquationStiffness = 1e7
    footPhysicsMaterial.frictionEquationRelaxation = 3

    footBody.material = footPhysicsMaterial

    // Position foot relative to spider body with proper spider leg reach
    const legAngle = (legIndex / 8) * Math.PI * 2
    const legReach = 1.2 // How far legs extend from body
    const footX = Math.cos(legAngle) * legReach
    const footZ = Math.sin(legAngle) * legReach
    footBody.position.set(footX, 0.15, footZ) // Start slightly above ground for proper settling
    
    this.gameState.world.addBody(footBody)
    
    // Create optimized contact material between foot and ground
    if (this.gameState.groundMaterial) {
      const footGroundContact = new CANNON.ContactMaterial(
        footPhysicsMaterial,
        this.gameState.groundMaterial,
        {
          friction: 2.5,
          restitution: 0.0,
          contactEquationStiffness: 1e8,
          contactEquationRelaxation: 3,
          frictionEquationStiffness: 1e7,
          frictionEquationRelaxation: 3
        }
      )
      this.gameState.world.addContactMaterial(footGroundContact)
    }
    
    // Add constraint to prevent foot from flying away from leg
    const maxFootDistance = new CANNON.DistanceConstraint(
      bodyPhysics, footBody, 1.8 // Maximum leg extension
    )
    this.gameState.world.addConstraint(maxFootDistance)

    // DISABLED: Physics constraints - causing floating and gravitating issues
    // Let visual animation control leg positions instead of physics constraints
    // const shoulderConstraint = new CANNON.PointToPointConstraint(
    //   bodyPhysics,
    //   new CANNON.Vec3(Math.cos(legIndex / 8 * Math.PI * 2) * 0.5, -0.2, Math.sin(legIndex / 8 * Math.PI * 2) * 0.5),
    //   upperBody,
    //   new CANNON.Vec3(0, 0.5, 0)
    // )
    // this.gameState.world.addConstraint(shoulderConstraint)

    // const kneeConstraint = new CANNON.PointToPointConstraint(
    //   upperBody,
    //   new CANNON.Vec3(0, -0.5, 0),
    //   lowerBody,
    //   new CANNON.Vec3(0, 0.4, 0)
    // )
    // this.gameState.world.addConstraint(kneeConstraint)

    // const ankleConstraint = new CANNON.PointToPointConstraint(
    //   lowerBody,
    //   new CANNON.Vec3(0, -0.4, 0),
    //   footBody,
    //   new CANNON.Vec3(0, 0, 0)
    // )
    // this.gameState.world.addConstraint(ankleConstraint)

    // Assemble leg hierarchy
    upperGroup.add(kneeJoint)
    leg.add(upperGroup)

    // Store references for animation and physics sync
    leg.userData = { 
      upperGroup, 
      kneeJoint, 
      upper, 
      knee, 
      lower, 
      foot,
      physicsBody: upperBody,
      lowerBody,
      footBody,
      constraints: [maxFootDistance], // Active physics constraints
      legAngle: legAngle, // Store for consistent positioning
      legIndex: legIndex  // Store for debugging
    }

    return leg
  }

  setupEventListeners() {
    // Bind event handlers to preserve 'this' context
    this.boundHandleResize = this.handleResize.bind(this)
    this.boundHandleKeyboard = this.handleKeyboard.bind(this)
    
    // Handle window resize
    window.addEventListener('resize', this.boundHandleResize, false)
    
    // Keyboard fallback controls
    document.addEventListener('keydown', this.boundHandleKeyboard)
  }

  handleResize() {
    if (!this.gameState.camera || !this.gameState.renderer) return
    
    this.gameState.camera.aspect = window.innerWidth / window.innerHeight
    this.gameState.camera.updateProjectionMatrix()
    this.gameState.renderer.setSize(window.innerWidth, window.innerHeight)
  }

  handleKeyboard(event) {
    if (this.gameState.spiders.length === 0) return
    
    const spider = this.gameState.spiders[0]
    const force = new CANNON.Vec3(0, 0, 0)
    const forceStrength = 20
    
    switch (event.key) {
      case 'ArrowUp':
      case 'w':
      case 'W':
        force.z = -forceStrength
        break
      case 'ArrowDown':
      case 's':
      case 'S':
        force.z = forceStrength
        break
      case 'ArrowLeft':
      case 'a':
      case 'A':
        force.x = -forceStrength
        break
      case 'ArrowRight':
      case 'd':
      case 'D':
        force.x = forceStrength
        break
    }
    
    if (force.length() > 0) {
      spider.physicsBody.applyForce(force)
    }
  }

  update() {
    if (!this.isInitialized) return

    // Update performance metrics
    this.gameState.updatePerformance()
    
    // Step physics simulation
    const config = this.gameState.config.physics
    this.gameState.world.fixedStep(config.timeStep, undefined, config.maxSubSteps)
    
    // Sync physics to visual objects
    this.syncPhysicsToVisuals()
  }

  syncPhysicsToVisuals() {
    this.gameState.spiders.forEach(spider => {
      // Sync spider body from physics to visuals
      spider.position.copy(spider.physicsBody.position)
      spider.quaternion.copy(spider.physicsBody.quaternion)
      
      // Handle foot physics sync for locomotion while keeping leg visuals independent
      spider.legs.forEach((leg, legIndex) => {
        const userData = leg.userData
        if (!userData || !userData.footBody) return
        
        // Apply ground contact forces for walking when feet touch ground
        const footPos = userData.footBody.position
        if (footPos.y < 0.15) { // Foot is near or on ground
          // Transfer foot contact forces to spider body for locomotion
          const forceToSpider = new CANNON.Vec3(
            (footPos.x - spider.physicsBody.position.x) * 0.2,
            0,
            (footPos.z - spider.physicsBody.position.z) * 0.2
          )
          spider.physicsBody.applyForce(forceToSpider)
        }
        
        // Sync foot visual position to physics for ground contact feedback
        if (userData.foot) {
          userData.foot.position.copy(userData.footBody.position)
          userData.foot.position.sub(spider.position) // Make relative to spider
        }
      })
    })
  }

  render() {
    if (!this.isInitialized || !this.gameState.renderer || !this.gameState.scene || !this.gameState.camera) {
      if (!this.isInitialized) console.warn('GameWorldSystem not initialized')
      if (!this.gameState.renderer) console.warn('Renderer not available')
      if (!this.gameState.scene) console.warn('Scene not available')
      if (!this.gameState.camera) console.warn('Camera not available')
      return
    }
    
    this.gameState.renderer.render(this.gameState.scene, this.gameState.camera)
  }

  destroy() {
    // Clean up event listeners
    if (this.boundHandleResize) {
      window.removeEventListener('resize', this.boundHandleResize)
    }
    if (this.boundHandleKeyboard) {
      document.removeEventListener('keydown', this.boundHandleKeyboard)
    }
    
    // Clean up Three.js resources
    if (this.gameState.renderer) {
      this.gameState.renderer.dispose()
      this.gameState.renderer.domElement?.remove()
    }
    
    // Clean up physics world
    if (this.gameState.world) {
      // Remove all bodies and constraints
      this.gameState.world.bodies.forEach(body => {
        this.gameState.world.removeBody(body)
      })
      this.gameState.world.constraints.forEach(constraint => {
        this.gameState.world.removeConstraint(constraint)
      })
    }
    
    this.isInitialized = false
    console.log('GameWorldSystem destroyed')
  }
}