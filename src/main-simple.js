import './style.css'
import { GameWorldSystem } from './systems/GameWorldSystem.js'
import { GameState } from './core/GameState.js'

console.log('Starting Jank Wars - Simple 3D Test...')

// Simplified game for debugging 3D scene
class SimpleJankWars {
  constructor() {
    this.gameState = new GameState()
    this.world = null
    this.isRunning = false
  }

  async init() {
    try {
      console.log('Initializing Simple GameWorldSystem...')
      
      this.world = new GameWorldSystem(this.gameState)
      await this.world.init()
      
      // Debug: Check if everything exists
      console.log('Post-init status:')
      console.log('- Renderer exists:', !!this.gameState.renderer)
      console.log('- Scene exists:', !!this.gameState.scene)
      console.log('- Camera exists:', !!this.gameState.camera)
      console.log('- Scene children count:', this.gameState.scene?.children?.length || 0)
      console.log('- Spider count:', this.gameState.spiders.length)
      
      if (this.gameState.renderer) {
        console.log('- Canvas size:', this.gameState.renderer.domElement.width, 'x', this.gameState.renderer.domElement.height)
        console.log('- Canvas in DOM:', document.contains(this.gameState.renderer.domElement))
        console.log('- Canvas visible:', this.gameState.renderer.domElement.offsetWidth > 0)
        
        // Force canvas to be visible
        const canvas = this.gameState.renderer.domElement
        canvas.style.position = 'absolute'
        canvas.style.top = '0'
        canvas.style.left = '0'
        canvas.style.zIndex = '1'
        canvas.style.display = 'block'
        canvas.style.width = '100vw'
        canvas.style.height = '100vh'
      }
      
      console.log('Starting render loop...')
      this.startLoop()
      
      this.isRunning = true
      console.log('Simple game initialized successfully!')
      
      this.updateStatus('✅ 3D Scene running - use WASD keys to move spider')
      
      // Force a render after a short delay
      setTimeout(() => {
        console.log('Force render check...')
        if (this.world) {
          this.world.render()
          console.log('Forced render completed')
        }
      }, 500)
      
    } catch (error) {
      console.error('Failed to initialize simple game:', error)
      this.updateStatus('❌ 3D Scene failed to start: ' + error.message, 'error')
    }
  }

  startLoop() {
    let frameCount = 0
    let lastTime = performance.now()
    
    const animate = (currentTime) => {
      if (!this.isRunning) return
      
      requestAnimationFrame(animate)
      
      frameCount++
      
      if (this.world) {
        this.world.update()
        this.world.render()
      }
      
      // Log every 120 frames (about 2 seconds at 60fps)
      if (frameCount % 120 === 0) {
        const deltaTime = currentTime - lastTime
        const fps = Math.round(120 / (deltaTime / 1000))
        console.log(`Frame ${frameCount}: FPS ~${fps}`)
        lastTime = currentTime
        
        // Additional debug info
        if (this.gameState.renderer) {
          console.log('Canvas visible:', this.gameState.renderer.domElement.offsetWidth > 0)
          console.log('Scene objects:', this.gameState.scene?.children?.length || 0)
        }
      }
    }
    
    animate(performance.now())
  }

  updateStatus(message, type = 'success') {
    console.log('Status:', message)
    const statusElement = document.getElementById('status')
    if (statusElement) {
      statusElement.textContent = message
      statusElement.className = type
    }
  }

  destroy() {
    this.isRunning = false
    if (this.world) {
      this.world.destroy()
    }
  }
}

// Start the simple game
const game = new SimpleJankWars()

window.addEventListener('load', () => {
  console.log('DOM ready, starting simple 3D game...')
  game.init()
})

window.addEventListener('beforeunload', () => {
  game.destroy()
})

window.addEventListener('resize', () => {
  if (game.world && game.world.handleResize) {
    game.world.handleResize()
  }
})

// Export for debugging
window.simpleGame = game