import { Hands } from '@mediapipe/hands'
import { Camera } from '@mediapipe/camera_utils'

// HandTrackingSystem: Manages MediaPipe hand tracking and gesture processing
// Following LoB: All hand tracking functionality stays together
export class HandTrackingSystem {
  constructor(gameState) {
    this.gameState = gameState
    this.isInitialized = false
    this.camera = null
    this.videoElement = null
    this.canvasElement = null
    
    // Hand connection data for visualization
    this.HAND_CONNECTIONS = [
      [0, 1], [1, 2], [2, 3], [3, 4],
      [0, 5], [5, 6], [6, 7], [7, 8],
      [0, 9], [9, 10], [10, 11], [11, 12],
      [0, 13], [13, 14], [14, 15], [15, 16],
      [0, 17], [17, 18], [18, 19], [19, 20],
      [5, 9], [9, 13], [13, 17]
    ]
  }

  async init() {
    try {
      console.log('Starting hand tracking initialization...')
      
      this.setupDOMElements()
      console.log('DOM elements set up successfully')
      
      await this.initializeMediaPipe()
      console.log('MediaPipe initialized successfully')
      
      await this.setupCamera()
      console.log('Camera setup completed successfully')
      
      this.gameState.isHandTrackingActive = true
      console.log('HandTrackingSystem initialized successfully')
    } catch (error) {
      console.error('Hand tracking initialization failed:', error)
      this.handleInitializationFailure(error)
      throw error
    }
  }

  setupDOMElements() {
    this.videoElement = document.getElementById('webcam')
    this.canvasElement = document.getElementById('output_canvas')
    const placeholder = document.getElementById('camera_placeholder')
    
    if (!this.videoElement || !this.canvasElement) {
      throw new Error('Required DOM elements not found')
    }
    
    // Setup canvas properties
    this.canvasElement.width = 320
    this.canvasElement.height = 240
    this.canvasElement.style.position = 'fixed'
    this.canvasElement.style.top = '20px'
    this.canvasElement.style.right = '20px'
    this.canvasElement.style.width = '320px'
    this.canvasElement.style.height = '240px'
    this.canvasElement.style.zIndex = '160'
    this.canvasElement.style.pointerEvents = 'none'
    this.canvasElement.style.border = '2px solid rgba(0, 255, 136, 0.5)'
    this.canvasElement.style.borderRadius = '10px'
    this.canvasElement.style.transform = 'scaleX(-1)' // Mirror to match camera
  }

  async initializeMediaPipe() {
    const config = this.gameState.config.handTracking
    
    // Initialize MediaPipe Hands
    this.gameState.hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
      }
    })

    this.gameState.hands.setOptions({
      maxNumHands: config.maxNumHands,
      modelComplexity: config.modelComplexity,
      minDetectionConfidence: config.minDetectionConfidence,
      minTrackingConfidence: config.minTrackingConfidence
    })

    // Set up results handler
    this.gameState.hands.onResults((results) => this.onHandResults(results))
  }

  async setupCamera() {
    try {
      console.log('Requesting camera access...')
      
      // Check if getUserMedia is available
      if (!navigator.mediaDevices) {
        throw new Error('MediaDevices API not supported in this browser')
      }
      if (!navigator.mediaDevices.getUserMedia) {
        throw new Error('getUserMedia not supported in this browser')
      }
      console.log('Camera API available, requesting permissions...')
      
      // Get webcam stream
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          width: { ideal: 640 },
          height: { ideal: 480 },
          facingMode: 'user'
        } 
      })
      
      console.log('Camera access granted, stream tracks:', stream.getTracks().length)
      console.log('Video track settings:', stream.getVideoTracks()[0]?.getSettings())
      
      this.videoElement.srcObject = stream
      this.videoElement.style.transform = 'scaleX(-1)' // Mirror horizontally
      
      await new Promise((resolve, reject) => {
        this.videoElement.onloadedmetadata = resolve
        this.videoElement.onerror = reject
        // Add timeout to prevent hanging
        setTimeout(() => reject(new Error('Video load timeout')), 10000)
      })
      
      console.log('Video element ready, setting up MediaPipe camera...')
      
      // Setup MediaPipe camera
      this.camera = new Camera(this.videoElement, {
        onFrame: async () => {
          try {
            if (this.gameState.hands) {
              await this.gameState.hands.send({ image: this.videoElement })
            }
          } catch (frameError) {
            console.warn('Frame processing error:', frameError)
          }
        },
        width: 640,
        height: 480
      })
      
      await this.camera.start()
      
      console.log('Camera started successfully')
      
      // Show video and canvas, hide placeholder
      const placeholder = document.getElementById('camera_placeholder')
      if (placeholder) {
        placeholder.style.display = 'none'
        console.log('Camera placeholder hidden - camera working')
      }
      this.videoElement.style.display = 'block'
      this.canvasElement.style.display = 'block'
      console.log('Video and canvas elements shown')
      
    } catch (error) {
      console.error('Camera setup failed:', error)
      throw new Error(`Camera initialization failed: ${error.message}`)
    }
  }

  handleInitializationFailure(error) {
    this.gameState.isHandTrackingActive = false
    
    const placeholder = document.getElementById('camera_placeholder')
    if (placeholder) {
      let message = '❌ Camera unavailable - use WASD keys'
      if (error && error.message.includes('Permission denied')) {
        message = '❌ Camera permission denied - use WASD keys'
      } else if (error && error.message.includes('not supported')) {
        message = '❌ Camera not supported - use WASD keys'
      } else if (error && error.message.includes('not found')) {
        message = '❌ No camera found - use WASD keys'
      }
      placeholder.textContent = message
      placeholder.style.display = 'flex'
      placeholder.style.background = 'rgba(80, 50, 50, 0.8)'
      placeholder.style.border = '2px solid rgba(255, 100, 100, 0.5)'
      placeholder.style.color = '#ffaaaa'
      console.log('Camera placeholder shown with error:', message)
    }
    
    // Hide video elements on failure
    if (this.videoElement) this.videoElement.style.display = 'none'
    if (this.canvasElement) this.canvasElement.style.display = 'none'
    
    console.log('Hand tracking system will use fallback mode')
  }

  onHandResults(results) {
    console.log('Hand tracking results received:', {
      handCount: results.multiHandLandmarks?.length || 0,
      handedness: results.multiHandedness?.map(h => h.label) || []
    })
    
    // Process hand landmarks
    this.processHandLandmarks(results)
    
    // Update UI status
    this.updateTrackingStatus(results)
    
    // Draw visualization
    this.drawHandLandmarks(results)
  }

  processHandLandmarks(results) {
    this.gameState.handLandmarks = []
    
    if (results.multiHandLandmarks && results.multiHandedness) {
      console.log('Processing', results.multiHandLandmarks.length, 'hands')
      
      for (let i = 0; i < results.multiHandLandmarks.length; i++) {
        const landmarks = results.multiHandLandmarks[i]
        const handedness = results.multiHandedness[i].label
        const playerId = handedness === 'Left' ? 0 : 1
        
        // Process gestures for this hand
        const gestures = this.detectGestures(landmarks)
        
        // Calculate finger curls for spider control
        const fingerCurls = this.calculateFingerCurls(landmarks)
        
        console.log(`Hand ${i}: ${handedness} -> Player ${playerId}, landmarks count:`, landmarks.length)
        
        this.gameState.handLandmarks.push({
          landmarks,
          handedness,
          playerId,
          gestures,
          fingerCurls,
          confidence: results.multiHandedness[i].score
        })
      }
      
      console.log('Final handLandmarks array length:', this.gameState.handLandmarks.length)
    } else {
      console.log('No hand landmarks to process')
    }
  }

  detectGestures(landmarks) {
    const gestures = {}
    
    // Pinch detection (thumb tip close to index tip)
    const thumbTip = landmarks[4]
    const indexTip = landmarks[8]
    const pinchDistance = Math.sqrt(
      Math.pow(thumbTip.x - indexTip.x, 2) + 
      Math.pow(thumbTip.y - indexTip.y, 2)
    )
    gestures.pinch = pinchDistance < 0.05
    
    // Fist detection (all fingers curled)
    const fingersCurled = [
      landmarks[4].y > landmarks[3].y,  // Thumb
      landmarks[8].y > landmarks[6].y,  // Index
      landmarks[12].y > landmarks[10].y, // Middle
      landmarks[16].y > landmarks[14].y, // Ring
      landmarks[20].y > landmarks[18].y  // Pinky
    ]
    gestures.fist = fingersCurled.filter(Boolean).length >= 4
    
    // Open hand detection (all fingers extended)
    const fingersExtended = [
      landmarks[4].y < landmarks[3].y,  // Thumb
      landmarks[8].y < landmarks[6].y,  // Index
      landmarks[12].y < landmarks[10].y, // Middle
      landmarks[16].y < landmarks[14].y, // Ring
      landmarks[20].y < landmarks[18].y  // Pinky
    ]
    gestures.openHand = fingersExtended.filter(Boolean).length >= 4
    
    // Peace sign detection (index and middle extended, others curled)
    gestures.peace = fingersExtended[1] && fingersExtended[2] && 
                     fingersCurled[0] && fingersCurled[3] && fingersCurled[4]
    
    return gestures
  }

  calculateFingerCurls(landmarks) {
    // Calculate finger curl values for spider control
    // Returns array of curl values [thumb, index, middle, ring, pinky]
    const wrist = landmarks[0]
    
    const fingerData = [
      { tip: landmarks[4], mcp: landmarks[2], pip: landmarks[3] },   // Thumb
      { tip: landmarks[8], mcp: landmarks[5], pip: landmarks[6] },   // Index
      { tip: landmarks[12], mcp: landmarks[9], pip: landmarks[10] }, // Middle
      { tip: landmarks[16], mcp: landmarks[13], pip: landmarks[14] }, // Ring
      { tip: landmarks[20], mcp: landmarks[17], pip: landmarks[18] }  // Pinky
    ]
    
    return fingerData.map((finger, index) => {
      return this.calculateSingleFingerCurl(finger, index, wrist)
    })
  }

  calculateSingleFingerCurl(fingerData, fingerIndex, wristLandmark) {
    const { tip, mcp, pip } = fingerData
    let curl = 0
    
    if (fingerIndex === 0) { // Thumb
      // For thumb: improved detection for full range
      const wristToMcp = {
        x: mcp.x - wristLandmark.x,
        y: mcp.y - wristLandmark.y
      }
      const wristToTip = {
        x: tip.x - wristLandmark.x,
        y: tip.y - wristLandmark.y
      }
      
      const mcpDistance = Math.sqrt(wristToMcp.x * wristToMcp.x + wristToMcp.y * wristToMcp.y)
      const tipDistance = Math.sqrt(wristToTip.x * wristToTip.x + wristToTip.y * wristToTip.y)
      
      // Enhanced thumb curl detection for full 0-1 range
      const ratio = tipDistance / mcpDistance
      curl = Math.max(0, Math.min(1, (1.5 - ratio) * 1.2)) // Amplify range
      
      // Add horizontal compression check
      const tipToMcp = {
        x: tip.x - mcp.x,
        y: tip.y - mcp.y
      }
      const directDistance = Math.sqrt(tipToMcp.x * tipToMcp.x + tipToMcp.y * tipToMcp.y)
      const compressionCurl = Math.max(0, Math.min(1, 1 - (directDistance / 0.12))) // Expected thumb length
      
      curl = Math.max(curl, compressionCurl * 0.8)
      
    } else {
      // For other fingers: enhanced detection for full 0-1 range
      const mcpToTip = {
        x: tip.x - mcp.x,
        y: tip.y - mcp.y
      }
      
      const mcpToPip = {
        x: pip.x - mcp.x,
        y: pip.y - mcp.y
      }
      
      const pipToTip = {
        x: tip.x - pip.x,
        y: tip.y - pip.y
      }
      
      const directDistance = Math.sqrt(mcpToTip.x * mcpToTip.x + mcpToTip.y * mcpToTip.y)
      const mcpPipLength = Math.sqrt(mcpToPip.x * mcpToPip.x + mcpToPip.y * mcpToPip.y)
      const pipTipLength = Math.sqrt(pipToTip.x * pipToTip.x + pipToTip.y * pipToTip.y)
      
      if (mcpPipLength > 0 && pipTipLength > 0) {
        // Primary: compression-based curl detection (amplified)
        const extendedLength = mcpPipLength + pipTipLength
        const compressionCurl = Math.max(0, Math.min(1, (1 - (directDistance / extendedLength)) * 1.4))
        
        // Secondary: Y-axis bending detection (enhanced)
        const yDiff = tip.y - mcp.y
        const yBasedCurl = Math.max(0, Math.min(1, yDiff * 12)) // Increased sensitivity
        
        // Tertiary: angle-based detection
        const mcpAngle = Math.atan2(mcpToPip.y, mcpToPip.x)
        const tipAngle = Math.atan2(pipToTip.y, pipToTip.x)
        const angleDiff = Math.abs(tipAngle - mcpAngle)
        const angleCurl = Math.min(1, angleDiff / (Math.PI * 0.7))
        
        // Combine all measurements for full range
        curl = Math.max(compressionCurl, yBasedCurl * 0.8, angleCurl * 0.6)
        
        // Apply power curve to increase sensitivity in mid-range
        curl = Math.pow(curl, 0.7)
      }
    }
    
    // Ensure full 0-1 range with slight amplification
    curl = Math.max(0, Math.min(1, curl * 1.1))
    
    return curl
  }

  updateTrackingStatus(results) {
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      const handCount = results.multiHandLandmarks.length
      const handTypes = results.multiHandedness.map(h => h.label).join(', ')
      this.updateStatus(`✅ Tracking ${handCount} hand(s): ${handTypes}`)
    } else {
      this.updateStatus('👋 Show your hands to control the spiders!')
    }
  }

  drawHandLandmarks(results) {
    if (!this.canvasElement) return
    
    const ctx = this.canvasElement.getContext('2d')
    ctx.clearRect(0, 0, this.canvasElement.width, this.canvasElement.height)
    
    if (results.multiHandLandmarks && results.multiHandedness) {
      for (let i = 0; i < results.multiHandLandmarks.length; i++) {
        const landmarks = results.multiHandLandmarks[i]
        const handedness = results.multiHandedness[i].label
        
        // Color code by hand
        const handColor = handedness === 'Left' ? '#FF4444' : '#4444FF'
        const connectionColor = handedness === 'Left' ? '#FF8888' : '#8888FF'
        
        // Draw hand structure
        this.drawConnectors(ctx, landmarks, this.HAND_CONNECTIONS, { 
          color: connectionColor, 
          lineWidth: 3 
        })
        this.drawLandmarks(ctx, landmarks, { 
          color: handColor, 
          lineWidth: 2, 
          radius: 4 
        })
        
        // Draw hand info
        this.drawHandInfo(ctx, landmarks, handedness, handColor, i)
      }
    }
  }

  drawConnectors(ctx, landmarks, connections, style) {
    ctx.strokeStyle = style.color
    ctx.lineWidth = style.lineWidth
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    
    for (const connection of connections) {
      const start = landmarks[connection[0]]
      const end = landmarks[connection[1]]
      
      ctx.beginPath()
      ctx.moveTo(start.x * 320, start.y * 240)
      ctx.lineTo(end.x * 320, end.y * 240)
      ctx.stroke()
    }
  }

  drawLandmarks(ctx, landmarks, style) {
    ctx.fillStyle = style.color
    ctx.strokeStyle = '#FFFFFF'
    ctx.lineWidth = style.lineWidth
    
    for (let i = 0; i < landmarks.length; i++) {
      const landmark = landmarks[i]
      const x = landmark.x * 320
      const y = landmark.y * 240
      
      ctx.beginPath()
      ctx.arc(x, y, style.radius, 0, 2 * Math.PI)
      ctx.fill()
      ctx.stroke()
      
      // Highlight fingertips with curl-based colors
      if (i === 4 || i === 8 || i === 12 || i === 16 || i === 20) {
        // Calculate curl for visual feedback
        const fingerIndex = [4, 8, 12, 16, 20].indexOf(i)
        let curl = 0.5 // default neutral
          
        if (fingerIndex >= 0) {
          if (fingerIndex === 0) { // Thumb
            const thumb = landmarks[4]
            const thumbMcp = landmarks[2]
            const horizontalDist = Math.abs(thumb.x - thumbMcp.x)
            const verticalDist = thumb.y - thumbMcp.y
            curl = Math.max(0, Math.min(1, (verticalDist + horizontalDist * 0.5) * 2))
          } else {
            const tip = landmarks[i]
            const mcp = landmarks[[5, 9, 13, 17][fingerIndex - 1]]
            const fingerHeight = mcp.y - tip.y
            curl = Math.max(0, Math.min(1, 1 - fingerHeight * 1.5))
          }
        }
          
        ctx.beginPath()
        ctx.arc(x, y, style.radius + 3, 0, 2 * Math.PI)
          
        // Color based on curl: yellow = neutral, green = extended, red = curled
        if (curl < 0.3) {
          ctx.strokeStyle = '#00FF00' // Green for extended
        } else if (curl > 0.7) {
          ctx.strokeStyle = '#FF0000' // Red for curled
        } else {
          ctx.strokeStyle = '#FFFF00' // Yellow for neutral
        }
          
        ctx.lineWidth = 3
        ctx.stroke()
        ctx.strokeStyle = '#FFFFFF'
        ctx.lineWidth = style.lineWidth
      }
    }
  }

  drawHandInfo(ctx, landmarks, handedness, handColor, handIndex) {
    const wrist = landmarks[0]
    ctx.fillStyle = handColor
    ctx.font = '12px Arial'
    ctx.fillText(`${handedness} Hand - Spider ${handIndex}`, wrist.x * 320 + 10, wrist.y * 240 - 10)
    
    // Calculate and show finger curl values for better feedback
    const fingerData = [
      { tip: landmarks[4], mcp: landmarks[2], name: 'T' },   // Thumb
      { tip: landmarks[8], mcp: landmarks[5], name: 'I' },   // Index
      { tip: landmarks[12], mcp: landmarks[9], name: 'M' }, // Middle
      { tip: landmarks[16], mcp: landmarks[13], name: 'R' }, // Ring
      { tip: landmarks[20], mcp: landmarks[17], name: 'P' }  // Pinky
    ]
    
    // Draw finger curl indicators
    for (let f = 0; f < fingerData.length; f++) {
      const finger = fingerData[f]
      let curl = 0
      
      if (f === 0) { // Thumb
        const horizontalDist = Math.abs(finger.tip.x - finger.mcp.x)
        const verticalDist = finger.tip.y - finger.mcp.y
        curl = Math.max(0, Math.min(1, (verticalDist + horizontalDist * 0.5) * 2))
      } else {
        const fingerHeight = finger.mcp.y - finger.tip.y
        curl = Math.max(0, Math.min(1, 1 - fingerHeight * 1.5))
      }
      
      // Color code curl value: blue = extended, red = curled
      const curlColor = curl > 0.5 ? `rgb(${Math.floor(255 * curl)}, 0, 0)` : 
                                     `rgb(0, 0, ${Math.floor(255 * (1 - curl))})`
      ctx.fillStyle = curlColor
      ctx.fillText(
        `${finger.name}:${curl.toFixed(2)}`, 
        wrist.x * 320 + 10, 
        wrist.y * 240 + 10 + f * 12
      )
    }
    
    // Reset color for other text
    ctx.fillStyle = handColor
    
    // Show active gestures
    const handData = this.gameState.handLandmarks[handIndex]
    if (handData && handData.gestures) {
      const activeGestures = Object.entries(handData.gestures)
        .filter(([_, active]) => active)
        .map(([gesture, _]) => gesture)
      
      if (activeGestures.length > 0) {
        ctx.fillText(
          `Gestures: ${activeGestures.join(', ')}`, 
          wrist.x * 320 + 10, 
          wrist.y * 240 + 70
        )
      }
    }
    
    // Show leg mapping info
    ctx.font = '10px Arial'
    ctx.fillStyle = '#FFFF00'
    ctx.fillText('Fingers → Spider Legs', wrist.x * 320 + 10, wrist.y * 240 + 90)
  }

  updateStatus(message, type = 'success') {
    console.log('HandTracking:', message)
    // Status updates are handled by the main game coordinator
  }

  update() {
    // Hand tracking updates are handled by MediaPipe callbacks
    // This method is here for consistency with other systems
  }

  destroy() {
    // Stop camera
    if (this.camera) {
      this.camera.stop()
    }
    
    // Stop video stream
    if (this.videoElement && this.videoElement.srcObject) {
      const tracks = this.videoElement.srcObject.getTracks()
      tracks.forEach(track => track.stop())
    }
    
    // Clean up MediaPipe
    if (this.gameState.hands) {
      this.gameState.hands.close()
    }
    
    this.gameState.isHandTrackingActive = false
    console.log('HandTrackingSystem destroyed')
  }
}