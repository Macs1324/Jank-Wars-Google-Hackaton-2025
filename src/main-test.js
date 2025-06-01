import './style.css'
import * as THREE from 'three'
import * as CANNON from 'cannon-es'

console.log('Starting minimal test...')

// Minimal GameState for testing
class TestGameState {
  constructor() {
    this.scene = null
    this.camera = null
    this.renderer = null
    this.world = null
    this.spiders = []
    this.config = {
      physics: {
        gravity: -9.82,
        timeStep: 1/60,
        maxSubSteps: 3
      },
      spiders: {
        colors: [0xff4444, 0x4444ff],
        positions: [{ x: -3, z: 0 }, { x: 3, z: 0 }],
        bodyMass: 2,
        legMass: 0.2
      }
    }
  }

  addSpider(spider) {
    this.spiders.push(spider)
    if (this.scene) {
      this.scene.add(spider)
    }
  }

  updatePerformance() {
    // Empty for test
  }
}

// Minimal GameWorld for testing
class TestGameWorld {
  constructor(gameState) {
    this.gameState = gameState
  }

  init() {
    console.log('Initializing Three.js...')
    
    // Scene
    this.gameState.scene = new THREE.Scene()
    this.gameState.scene.background = new THREE.Color(0x2a1810)

    // Camera
    this.gameState.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    this.gameState.camera.position.set(0, 5, 10)
    this.gameState.camera.lookAt(0, 0, 0)

    // Renderer
    this.gameState.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.gameState.renderer.setSize(window.innerWidth, window.innerHeight)
    
    // Add to DOM
    const appElement = document.getElementById('app')
    if (!appElement) {
      throw new Error('App element not found')
    }
    appElement.appendChild(this.gameState.renderer.domElement)

    // Basic lighting
    const ambientLight = new THREE.AmbientLight(0x505050, 1.2)
    this.gameState.scene.add(ambientLight)

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(30, 30)
    const groundMaterial = new THREE.MeshLambertMaterial({ color: 0x2a1810 })
    const ground = new THREE.Mesh(groundGeometry, groundMaterial)
    ground.rotation.x = -Math.PI / 2
    this.gameState.scene.add(ground)

    // Physics
    this.gameState.world = new CANNON.World()
    this.gameState.world.gravity.set(0, -9.82, 0)

    // Test cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
    const cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xff4444 })
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    cube.position.set(0, 2, 0)
    this.gameState.scene.add(cube)

    console.log('Three.js initialized successfully')
  }

  update() {
    this.gameState.updatePerformance()
    if (this.gameState.world) {
      this.gameState.world.fixedStep(1/60)
    }
  }

  render() {
    if (this.gameState.renderer && this.gameState.scene && this.gameState.camera) {
      this.gameState.renderer.render(this.gameState.scene, this.gameState.camera)
    }
  }
}

// Test game
class TestGame {
  constructor() {
    this.gameState = new TestGameState()
    this.world = null
    this.isRunning = false
  }

  async init() {
    try {
      console.log('Initializing test game...')
      this.world = new TestGameWorld(this.gameState)
      this.world.init()
      this.startLoop()
      this.isRunning = true
      console.log('Test game started successfully!')
    } catch (error) {
      console.error('Test game failed:', error)
    }
  }

  startLoop() {
    const animate = () => {
      if (!this.isRunning) return
      requestAnimationFrame(animate)
      
      if (this.world) {
        this.world.update()
        this.world.render()
      }
    }
    animate()
  }
}

// Start test
const testGame = new TestGame()
window.addEventListener('load', () => {
  testGame.init()
})

window.testGame = testGame