// Shared game state for all systems following LoB principles
// This keeps all related state together rather than scattered across systems

export class GameState {
  constructor() {
    // Three.js rendering state
    this.scene = null
    this.camera = null
    this.renderer = null
    
    // Cannon-ES physics state
    this.world = null
    
    // Game entities
    this.spiders = []
    
    // Hand tracking state
    this.hands = null
    this.handLandmarks = []
    this.isHandTrackingActive = false
    
    // Game configuration
    this.config = {
      physics: {
        gravity: -9.82,
        timeStep: 1/60,
        maxSubSteps: 3
      },
      handTracking: {
        maxNumHands: 2,
        modelComplexity: 1,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5
      },
      spiders: {
        colors: [0xff4444, 0x4444ff],
        positions: [{ x: -8, z: 0 }, { x: 8, z: 0 }],
        bodyMass: 5,
        legMass: 0.2
      },
      controls: {
        deadzone: 0.1,
        forceMultiplier: 0.8,
        damping: 0.6
      }
    }
    
    // Performance monitoring
    this.performance = {
      frameCount: 0,
      lastFrameTime: 0,
      frameTimes: [],
      averageFPS: 60
    }
  }

  // Update performance metrics
  updatePerformance() {
    const now = performance.now()
    if (this.performance.lastFrameTime > 0) {
      const deltaTime = now - this.performance.lastFrameTime
      this.performance.frameTimes.push(deltaTime)
      
      // Keep only last 60 frames for average
      if (this.performance.frameTimes.length > 60) {
        this.performance.frameTimes.shift()
      }
      
      // Calculate average FPS
      const avgDelta = this.performance.frameTimes.reduce((a, b) => a + b, 0) / this.performance.frameTimes.length
      this.performance.averageFPS = Math.round(1000 / avgDelta)
    }
    
    this.performance.lastFrameTime = now
    this.performance.frameCount++
  }

  // Get spider by player ID
  getSpiderByPlayerId(playerId) {
    return this.spiders.find(spider => spider.playerId === playerId)
  }

  // Get hand data by player ID
  getHandDataByPlayerId(playerId) {
    return this.handLandmarks.find(hand => hand.playerId === playerId)
  }

  // Add spider to the game
  addSpider(spider) {
    this.spiders.push(spider)
    if (this.scene) {
      this.scene.add(spider)
    }
  }

  // Remove spider from the game
  removeSpider(spider) {
    const index = this.spiders.indexOf(spider)
    if (index !== -1) {
      this.spiders.splice(index, 1)
      if (this.scene) {
        this.scene.remove(spider)
      }
    }
  }

  // Clear all game entities
  clear() {
    this.spiders.forEach(spider => {
      if (this.scene) {
        this.scene.remove(spider)
      }
    })
    this.spiders = []
    this.handLandmarks = []
  }

  // Debug information
  getDebugInfo() {
    return {
      spiderCount: this.spiders.length,
      handCount: this.handLandmarks.length,
      fps: this.performance.averageFPS,
      frameCount: this.performance.frameCount,
      handTrackingActive: this.isHandTrackingActive,
      physicsActive: !!this.world
    }
  }
}