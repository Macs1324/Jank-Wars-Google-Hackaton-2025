import './style.css'
import { GameWorldSystem } from './systems/GameWorldSystem.js'
import { HandTrackingSystem } from './systems/HandTrackingSystem.js'
import { SpiderControlSystem } from './systems/SpiderControlSystem.js'
import { GameState } from './core/GameState.js'

console.log('Starting minimal Jank Wars...')
console.log('SpiderControlSystem import:', SpiderControlSystem)
console.log('SpiderControlSystem type:', typeof SpiderControlSystem)

// Ultra-minimal game for testing
class MinimalJankWars {
  constructor() {
    this.gameState = new GameState()
    this.world = null
    this.handTracking = null
    this.spiderControl = null
    this.isRunning = false
  }

  async init() {
    try {
      console.log('Initializing GameWorldSystem...')
      
      this.world = new GameWorldSystem(this.gameState)
      await this.world.init()
      
      // Debug: Check if renderer and canvas exist
      console.log('GameWorld initialized. Checking renderer...')
      console.log('Renderer exists:', !!this.gameState.renderer)
      console.log('Scene exists:', !!this.gameState.scene)
      console.log('Camera exists:', !!this.gameState.camera)
      
      if (this.gameState.renderer) {
        console.log('Canvas element:', this.gameState.renderer.domElement)
        console.log('Canvas in DOM:', document.contains(this.gameState.renderer.domElement))
        console.log('Canvas style:', this.gameState.renderer.domElement.style.cssText)
        
        // Force canvas to be visible (fix from simple version)
        const canvas = this.gameState.renderer.domElement
        canvas.style.position = 'absolute'
        canvas.style.top = '0'
        canvas.style.left = '0'
        canvas.style.zIndex = '1'
        canvas.style.display = 'block'
        canvas.style.width = '100vw'
        canvas.style.height = '100vh'
        console.log('Applied canvas visibility fixes')
      }
      
      console.log('Initializing HandTrackingSystem...')
      this.handTracking = new HandTrackingSystem(this.gameState)
      
      console.log('Initializing SpiderControlSystem...')
      try {
        this.spiderControl = new SpiderControlSystem(this.gameState)
        console.log('SpiderControlSystem constructor completed')
        this.spiderControl.init()
        console.log('SpiderControlSystem init() completed')
        console.log('SpiderControlSystem created:', !!this.spiderControl)
        console.log('SpiderControlSystem initialized:', this.spiderControl.isInitialized)
        console.log('SpiderControlSystem object:', this.spiderControl)
      } catch (spiderControlError) {
        console.error('SpiderControlSystem initialization failed:', spiderControlError)
        this.spiderControl = null
      }
      
      // Start render loop IMMEDIATELY - don't wait for anything
      console.log('Starting render loop immediately...')
      this.isRunning = true
      this.startLoop()
      console.log('Game initialized successfully!')
      console.log('Final systems check:', {
        world: !!this.world,
        handTracking: !!this.handTracking,
        spiderControl: !!this.spiderControl,
        spiderControlInitialized: this.spiderControl?.isInitialized
      })
      
      // Initialize hand tracking in background AFTER render loop is running
      setTimeout(() => {
        console.log('Starting hand tracking initialization in background...')
        this.handTracking.init().then(() => {
          console.log('Hand tracking initialization completed successfully')
          this.updateStatus('✅ Game running with hand tracking - show hands to camera!')
          const placeholder = document.getElementById('camera_placeholder')
          if (placeholder) placeholder.style.display = 'none'
        }).catch(handError => {
          console.warn('Hand tracking failed, using keyboard fallback:', handError)
          this.updateStatus('⚠️ Camera unavailable - using WASD keys to move spider')
          const placeholder = document.getElementById('camera_placeholder')
          if (placeholder) {
            placeholder.textContent = '❌ Camera unavailable - using keyboard'
            placeholder.style.display = 'flex'
            placeholder.style.background = 'rgba(80, 50, 50, 0.8)'
            placeholder.style.border = '2px solid rgba(255, 100, 100, 0.5)'
          }
        })
      }, 100)
      
      // Debug: Final render check and force render
      setTimeout(() => {
        console.log('Post-init render check:')
        console.log('Canvas visible:', this.gameState.renderer.domElement.offsetWidth > 0)
        console.log('Scene children count:', this.gameState.scene.children.length)
        console.log('Spider count:', this.gameState.spiders.length)
        
        // Force a render to ensure scene is displayed
        if (this.world) {
          this.world.render()
          console.log('Forced render completed')
        }
      }, 1000)
      
    } catch (error) {
      console.error('Failed to initialize game:', error)
      this.updateStatus('❌ Game failed to start', 'error')
    }
  }

  startLoop() {
    let frameCount = 0
    console.log('🔥🔥🔥 RENDER LOOP STARTING 🔥🔥🔥')
    
    const animate = () => {
      frameCount++
      console.log(`🎬 FRAME ${frameCount} - isRunning: ${this.isRunning}`)
      
      if (!this.isRunning) {
        console.log('❌ Not running, stopping render loop')
        return
      }
      
      requestAnimationFrame(animate)
      
      console.log('🌍 Checking world system...')
      if (this.world) {
        console.log('✅ World exists, updating and rendering')
        this.world.update()
        this.world.render()
      } else {
        console.log('❌ World does not exist')
      }
      
      console.log('👋 Checking hand tracking...')
      if (this.handTracking) {
        console.log('✅ Hand tracking exists, updating')
        this.handTracking.update()
      } else {
        console.log('❌ Hand tracking does not exist')
      }
      
      console.log('🕷️ Checking spider control...')
      console.log('SpiderControl exists:', !!this.spiderControl)
      console.log('SpiderControl type:', typeof this.spiderControl)
      console.log('SpiderControl isInitialized:', this.spiderControl?.isInitialized)
      
      if (this.spiderControl) {
        console.log('✅ SpiderControl exists, calling update...')
        try {
          this.spiderControl.update()
          console.log('✅ SpiderControl update completed')
        } catch (updateError) {
          console.error('❌ SpiderControl update error:', updateError)
        }
      } else {
        console.log('❌ SpiderControl is null/undefined!')
      }
      
      // Log every frame for now to debug
      console.log(`Frame ${frameCount} complete - Systems: world=${!!this.world}, hand=${!!this.handTracking}, spider=${!!this.spiderControl}`)
    }
    
    console.log('🚀 Starting animation loop...')
    animate()
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
    if (this.handTracking) {
      this.handTracking.destroy()
    }
    if (this.spiderControl) {
      this.spiderControl.destroy()
    }
  }
}

// Start the minimal game
const game = new MinimalJankWars()

window.addEventListener('load', () => {
  console.log('DOM ready, starting minimal game...')
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

window.minimalGame = game