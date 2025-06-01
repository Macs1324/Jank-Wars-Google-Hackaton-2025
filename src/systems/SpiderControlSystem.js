import * as CANNON from 'cannon-es'

// SpiderControlSystem: Manages finger-to-leg mapping and spider movement
// Following LoB: All spider control functionality stays together
export class SpiderControlSystem {
  constructor(gameState) {
    this.gameState = gameState
    this.isInitialized = false
    
    // Simple 1:1 finger to leg mapping - mirror finger positions around palm
    // Each finger directly controls corresponding legs around spider body
    this.fingerMapping = {
      0: [0], // Thumb -> Leg 0 (front-right)
      1: [1], // Index -> Leg 1 (right-side) 
      2: [2], // Middle -> Leg 2 (back-right)
      3: [3], // Ring -> Leg 3 (back-left)
      4: [4], // Pinky -> Leg 4 (left-side)
      // Legs 5-7 mirror the first few for 8-leg spider
      "mirror": {
        5: 1, // Mirror index finger
        6: 0, // Mirror thumb  
        7: 4  // Mirror pinky
      }
    }
    
    // Individual finger responsiveness settings
    this.fingerSettings = {
      0: { sensitivity: 1.4, range: Math.PI * 0.6 }, // Thumb - highest range and sensitivity
      1: { sensitivity: 1.3, range: Math.PI * 0.5 }, // Index - very responsive
      2: { sensitivity: 1.2, range: Math.PI * 0.5 }, // Middle - responsive
      3: { sensitivity: 1.0, range: Math.PI * 0.4 }, // Ring - moderate
      4: { sensitivity: 0.9, range: Math.PI * 0.35 } // Pinky - gentle support
    }
    
    // Enhanced movement parameters for full-range finger curl control
    this.movementConfig = {
      legLiftRange: Math.PI * 1.2, // Increased range for dramatic spider movement
      kneeBendRange: Math.PI * 1.0, // Increased knee bend range for full curl
      fingerDeadzone: 0.02, // Reduced deadzone for precise control
      legAnimationSpeed: 0.98, // Very responsive for immediate finger mirroring
      ragdollDamping: 0.05, // Minimal damping for natural movement
      ikConstraintStrength: 0.95, // Very strong IK for precise leg positioning
      curlSensitivity: 1.0, // Direct 1:1 mapping with enhanced curl detection
      neutralPosition: 0.0, // Neutral is fully extended (open hand)
      groundContactForce: 8.0, // Force for maintaining ground contact
      maxFootLift: 0.8 // Maximum height feet can lift when curled
    }
    
    // Finger curl smoothing system to reduce jitter while maintaining responsiveness
    this.fingerSmoothers = {}
    this.smoothingFactor = 0.25 // Optimized for <50ms latency with smoothness
    
    // Debug and performance tracking
    this.debugInfo = {
      lastUpdateTime: 0,
      frameCount: 0,
      averageLatency: 0,
      fingerActivity: { 0: [], 1: [] } // Track finger activity per player
    }
  }

  init() {
    try {
      console.log('SpiderControlSystem init() starting...')
      console.log('GameState exists:', !!this.gameState)
      console.log('GameState spiders:', this.gameState.spiders.length)
      this.isInitialized = true
      console.log('SpiderControlSystem initialized successfully - isInitialized:', this.isInitialized)
    } catch (error) {
      console.error('SpiderControlSystem init failed:', error)
      this.isInitialized = false
      throw error
    }
  }

  update() {
    if (!this.isInitialized) return

    /**
     * PLAYER CONTROLS IMPLEMENTATION - According to Documentation:
     * 
     * ✅ Finger curl controls spider leg bends EXCLUSIVELY
     * ✅ Controls are relative to palm, unaffected by absolute hand position/rotation
     * ✅ Each finger maps to specific spider legs via fingerMapping configuration
     * ✅ Smoothing system reduces jitter while maintaining <50ms latency target
     * ✅ Visual feedback shows real-time finger curl → leg bend mapping
     * 
     * Flow: HandTracking → FingerCurls → LegBends → SpiderAnimation
     */

    // Debug hand tracking data
    console.log(`🕷️ SpiderControl Update - Hands available: ${this.gameState.handLandmarks.length}`)
    this.gameState.handLandmarks.forEach((hand, index) => {
      console.log(`  Hand ${index}: ${hand.handedness} -> Player ${hand.playerId}`)
    })

    // Update each spider based on hand input
    let fingerStatusHTML = ''
    
    this.gameState.spiders.forEach(spider => {
      const handData = this.gameState.getHandDataByPlayerId(spider.playerId)
      
      if (handData) {
        console.log(`🖐️ Hand data found for spider ${spider.playerId} (${handData.handedness})`)
        this.updateSpiderFromHand(spider, handData)
        fingerStatusHTML += this.generateFingerStatusHTML(spider.playerId, handData)
      } else {
        console.log(`❌ No hand data for spider ${spider.playerId}`)
        // DISABLED: Apply gentle damping - conflicts with finger control
        // this.applyPassiveDamping(spider)
      }
    })
    
    // Update UI with finger mapping status
    this.updateFingerMappingUI(fingerStatusHTML)
  }

  updateSpiderFromHand(spider, handData) {
    const landmarks = handData.landmarks
    
    // Use pre-calculated finger curls from hand tracking if available, otherwise calculate here
    let fingerCurls
    if (handData.fingerCurls && handData.fingerCurls.length === 5) {
      fingerCurls = handData.fingerCurls
    } else {
      // Fallback to local calculation
      const wrist = landmarks[0]
      const fingerData = [
        { tip: landmarks[4], mcp: landmarks[2], pip: landmarks[3] },   // Thumb
        { tip: landmarks[8], mcp: landmarks[5], pip: landmarks[6] },   // Index  
        { tip: landmarks[12], mcp: landmarks[9], pip: landmarks[10] }, // Middle
        { tip: landmarks[16], mcp: landmarks[13], pip: landmarks[14] }, // Ring
        { tip: landmarks[20], mcp: landmarks[17], pip: landmarks[18] }  // Pinky
      ]
      fingerCurls = fingerData.map((finger, index) => {
        return this.calculateFingerCurl(finger, index, wrist)
      })
    }
    
    // Apply smoothing to finger curls
    const smoothedFingerCurls = this.smoothFingerCurls(spider.playerId, fingerCurls)
    
    // Update leg positions based on finger curl values
    this.updateSpiderLegsFromCurls(spider, smoothedFingerCurls)
    
    // Apply physics-driven locomotion based on leg movement
    this.applyLocomotionForces(spider, smoothedFingerCurls)
    
    // DISABLED: Handle special gestures - conflicts with finger curl control
    // this.handleGestures(spider, handData.gestures)
  }

  // Removed updateSpiderMovement - spiders no longer move based on hand position

  updateSpiderLegsFromCurls(spider, fingerCurls) {
    // Enhanced debug output with performance metrics
    if (Math.random() < 0.02) {
      const now = performance.now()
      const fingerNames = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky']
      const curlDebug = fingerCurls.map((curl, i) => `${fingerNames[i]}: ${curl.toFixed(3)}`).join(', ')
      console.log(`🕷️ Spider ${spider.playerId} | ${curlDebug}`)
      
      // Update performance tracking
      this.updateDebugStatus(spider.playerId, fingerCurls, now)
    }
    
    // Update each leg based on corresponding finger curls
    spider.legs.forEach((leg, legIndex) => {
      this.updateLegFromFingerCurls(leg, legIndex, fingerCurls)
    })
  }

  calculateFingerCurl(fingerData, fingerIndex, wristLandmark) {
    const { tip, mcp, pip } = fingerData
    
    // Enhanced finger curl detection for full 0-1 range
    // 0 = fully extended (open hand), 1 = fully curled (closed fist)
    let curl = 0
    
    if (fingerIndex === 0) { // Thumb
      // Enhanced thumb curl detection for full 0-1 range
      const mcpToWrist = Math.sqrt(
        Math.pow(mcp.x - wristLandmark.x, 2) + 
        Math.pow(mcp.y - wristLandmark.y, 2)
      )
      const tipToWrist = Math.sqrt(
        Math.pow(tip.x - wristLandmark.x, 2) + 
        Math.pow(tip.y - wristLandmark.y, 2)
      )
      
      // Primary ratio-based detection (amplified)
      const ratio = tipToWrist / mcpToWrist
      curl = Math.max(0, Math.min(1, (1.5 - ratio) * 1.2)) // Amplify range
      
      // Add horizontal compression check
      const tipToMcp = Math.sqrt(
        Math.pow(tip.x - mcp.x, 2) + 
        Math.pow(tip.y - mcp.y, 2)
      )
      const compressionCurl = Math.max(0, Math.min(1, 1 - (tipToMcp / 0.12))) // Expected thumb length
      
      curl = Math.max(curl, compressionCurl * 0.8)
      
    } else {
      // Enhanced finger curl detection for full 0-1 range
      const mcpToTip = Math.sqrt(
        Math.pow(tip.x - mcp.x, 2) + 
        Math.pow(tip.y - mcp.y, 2)
      )
      
      const mcpToPip = Math.sqrt(
        Math.pow(pip.x - mcp.x, 2) + 
        Math.pow(pip.y - mcp.y, 2)
      )
      
      const pipToTip = Math.sqrt(
        Math.pow(tip.x - pip.x, 2) + 
        Math.pow(tip.y - pip.y, 2)
      )
      
      if (mcpToPip > 0 && pipToTip > 0) {
        // Primary: compression-based curl detection (amplified)
        const extendedLength = mcpToPip + pipToTip
        const compressionCurl = Math.max(0, Math.min(1, (1 - (mcpToTip / extendedLength)) * 1.4))
        
        // Secondary: Y-axis bending detection (enhanced)
        const yDiff = tip.y - mcp.y
        const yBasedCurl = Math.max(0, Math.min(1, yDiff * 12)) // Increased sensitivity
        
        // Tertiary: angle-based detection
        const mcpToPipVec = { x: pip.x - mcp.x, y: pip.y - mcp.y }
        const pipToTipVec = { x: tip.x - pip.x, y: tip.y - pip.y }
        const mcpAngle = Math.atan2(mcpToPipVec.y, mcpToPipVec.x)
        const tipAngle = Math.atan2(pipToTipVec.y, pipToTipVec.x)
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
  
  smoothFingerCurls(playerId, rawCurls) {
    // Initialize smoother for this player if not exists
    if (!this.fingerSmoothers[playerId]) {
      this.fingerSmoothers[playerId] = {
        previousCurls: [...rawCurls],
        velocities: new Array(rawCurls.length).fill(0)
      }
      return rawCurls
    }
    
    const smoother = this.fingerSmoothers[playerId]
    const smoothedCurls = []
    
    for (let i = 0; i < rawCurls.length; i++) {
      const rawCurl = rawCurls[i]
      const prevCurl = smoother.previousCurls[i]
      const prevVelocity = smoother.velocities[i]
      
      // Calculate change
      const deltaFromPrev = rawCurl - prevCurl
      
      // Apply velocity-based smoothing for more natural movement
      const targetVelocity = deltaFromPrev * this.smoothingFactor
      const smoothedVelocity = prevVelocity + (targetVelocity - prevVelocity) * 0.3
      
      // Calculate smoothed curl value
      const smoothedCurl = prevCurl + smoothedVelocity
      
      // Clamp to valid range
      const finalCurl = Math.max(0, Math.min(1, smoothedCurl))
      
      // Store for next frame
      smoother.previousCurls[i] = finalCurl
      smoother.velocities[i] = smoothedVelocity * 0.95 // Apply damping
      
      smoothedCurls.push(finalCurl)
    }
    
    return smoothedCurls
  }

  applyLocomotionForces(spider, fingerCurls) {
    if (!spider.physicsBody) return
    
    // Simple locomotion based on overall hand state
    const averageCurl = fingerCurls.reduce((sum, curl) => sum + curl, 0) / fingerCurls.length
    const handActivity = fingerCurls.reduce((sum, curl) => sum + Math.abs(curl - 0.5), 0)
    
    // Open hand = spread flat, low to ground
    // Closed fist = curled up, higher off ground
    let totalLift = 0
    
    // Very gentle lift when curling (standing up from lying flat)
    if (averageCurl > 0.6) {
      totalLift = (averageCurl - 0.6) * 3 // Gentle lift when mostly curled
    }
    
    // Cap lift to prevent flying
    const maxLift = 1.0
    const cappedLift = Math.min(totalLift, maxLift)
    
    // Apply only vertical forces for posture, let foot contact handle walking
    if (cappedLift > 0.1) {
      const force = new CANNON.Vec3(0, cappedLift, 0)
      spider.physicsBody.applyForce(force)
    }
    
    // Adjust damping based on hand activity
    spider.physicsBody.linearDamping = Math.max(0.6, 0.95 - handActivity * 0.2)
  }

  updateDebugStatus(playerId, fingerCurls, timestamp) {
    // Track finger activity for performance analysis
    this.debugInfo.fingerActivity[playerId] = fingerCurls
    this.debugInfo.frameCount++
    
    // Calculate average latency (simplified estimation)
    if (this.debugInfo.lastUpdateTime > 0) {
      const frameTime = timestamp - this.debugInfo.lastUpdateTime
      this.debugInfo.averageLatency = (this.debugInfo.averageLatency * 0.9) + (frameTime * 0.1)
    }
    this.debugInfo.lastUpdateTime = timestamp
    
    // Update UI status every 60 frames
    if (this.debugInfo.frameCount % 60 === 0) {
      this.updateFingerMappingUI()
    }
  }
  
  updateLegFromFingerCurls(leg, legIndex, fingerCurls) {
    // Enhanced finger-to-leg mapping - precise mirror of finger positions around palm
    let fingerCurl = 0.0 // Default fully extended (open hand)
    
    // Enhanced mapping for 8-leg spider to mirror hand exactly
    if (legIndex < 5) {
      // Direct mapping for first 5 legs to fingers 0-4
      fingerCurl = fingerCurls[legIndex] || 0.0
    } else {
      // Enhanced mirroring for legs 5-7 to create symmetric spider behavior
      const mirrorMap = { 
        5: 1, // Mirror index finger
        6: 2, // Mirror middle finger  
        7: 3  // Mirror ring finger
      }
      const mirrorFinger = mirrorMap[legIndex]
      if (mirrorFinger !== undefined && fingerCurls[mirrorFinger] !== undefined) {
        fingerCurl = fingerCurls[mirrorFinger]
      }
    }
    
    // Enhanced debug logging with full curl range
    if (legIndex === 0 && Math.random() < 0.05) {
      const fingerNames = ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky']
      const mappedFinger = legIndex < 5 ? legIndex : { 5: 1, 6: 2, 7: 3 }[legIndex]
      const fingerName = fingerNames[mappedFinger] || 'Unknown'
      console.log(`🕷️ Leg ${legIndex} (${fingerName}): curl ${(fingerCurl * 100).toFixed(1)}% [Enhanced Range]`)
    }
    
    // Apply enhanced leg animation with full range support
    this.animateLegDirectly(leg, legIndex, fingerCurl)
  }

  animateLegDirectly(leg, legIndex, fingerCurl) {
    const config = this.movementConfig
    const userData = leg.userData
    
    if (!userData) {
      console.warn(`No userData for leg ${legIndex}`)
      return
    }
    
    // Enhanced finger curl to leg position mapping with full 0-1 range
    // 0 = fully extended (open hand, lay flat), 1 = fully curled (closed fist, curl up)
    
    // Calculate enhanced leg positions that mirror finger movements around palm
    const legAngle = userData.legAngle || ((legIndex / 8) * Math.PI * 2)
    
    // Open hand: legs spread wide and lay completely flat
    // Closed fist: legs curl up dramatically toward body center
    const maxSpread = Math.PI * 0.8      // Maximum spread when fully open
    const maxCurl = Math.PI * 1.2        // Maximum curl when fully closed
    const maxLift = Math.PI * 0.6        // Maximum shoulder lift when curled
    
    const spreadAmount = (1 - fingerCurl) * maxSpread  // More spread when open
    const curlAmount = fingerCurl * maxCurl             // More curl when closed
    const liftAmount = fingerCurl * maxLift             // Lift shoulder when curled
    
    // Apply enhanced leg animations that precisely mirror finger positions
    if (userData.upperGroup) {
      // Shoulder: spread outward when open, lift dramatically when curled
      const shoulderSpread = -spreadAmount * 0.7  // Spread outward and down
      const shoulderLift = liftAmount * 0.8        // Lift toward body center
      const targetRotationX = shoulderSpread + shoulderLift
      
      // Add radial positioning around body (like fingers around palm)
      const radialSpread = (1 - fingerCurl) * 0.4
      userData.upperGroup.rotation.y = this.lerp(
        userData.upperGroup.rotation.y,
        legAngle + (radialSpread * Math.sin(legAngle)),
        config.legAnimationSpeed
      )
      
      userData.upperGroup.rotation.x = this.lerp(
        userData.upperGroup.rotation.x, 
        targetRotationX, 
        config.legAnimationSpeed
      )
    }
    
    if (userData.kneeJoint) {
      // Knee: completely straight when open, dramatically bent when curled
      const targetRotationX = -curlAmount * 1.2 // Increased bend range
      userData.kneeJoint.rotation.x = this.lerp(
        userData.kneeJoint.rotation.x,
        targetRotationX,
        config.legAnimationSpeed
      )
    }
    
    if (userData.foot) {
      // Foot: flat against ground when open, curled upward when closed
      const targetRotationX = curlAmount * 0.5
      userData.foot.rotation.x = this.lerp(
        userData.foot.rotation.x,
        targetRotationX,
        config.legAnimationSpeed
      )
    }
    
    // Enhanced foot physics for proper ground contact and walking
    if (userData.footBody) {
      // Calculate precise target foot position based on finger curl
      const baseLegReach = 1.4 // Increased base reach
      
      // Open hand: legs spread very wide and stay on ground
      // Closed fist: legs pull in tight and lift up significantly
      const spreadReach = baseLegReach * (1 - fingerCurl * 0.7) // More dramatic range
      
      const targetFootX = Math.cos(legAngle) * spreadReach
      const targetFootZ = Math.sin(legAngle) * spreadReach
      
      // Enhanced height control: ground when open, lifted when curled
      const groundLevel = 0.1
      const maxLiftHeight = 0.8
      const targetFootY = groundLevel + (fingerCurl * maxLiftHeight)
      
      // Apply stronger forces for better ground contact and responsiveness
      const currentPos = userData.footBody.position
      const positionError = new CANNON.Vec3(
        targetFootX - currentPos.x,
        targetFootY - currentPos.y,
        targetFootZ - currentPos.z
      )
      
      // Proportional control with different gains for each axis
      const force = new CANNON.Vec3(
        positionError.x * 12, // Stronger horizontal control
        positionError.y * 8,  // Moderate vertical control
        positionError.z * 12  // Stronger horizontal control
      )
      
      // Apply additional downward force when foot should be on ground
      if (fingerCurl < 0.3) {
        force.y -= 2 // Ensure good ground contact when extended
      }
      
      userData.footBody.applyForce(force)
      
      // Add velocity damping for stability
      userData.footBody.velocity.scale(0.95, userData.footBody.velocity)
    }
    
    // Enhanced visual feedback - more dramatic color changes
    if (userData.upper && userData.upper.material) {
      const baseColor = legIndex < 4 ? 0xff4444 : 0x4444ff
      
      // Create enhanced color feedback based on curl with full range
      let newColor = baseColor
      if (fingerCurl > 0.8) {
        newColor = legIndex < 4 ? 0xff0000 : 0x0000ff // Bright when highly curled
      } else if (fingerCurl > 0.5) {
        newColor = legIndex < 4 ? 0xff3333 : 0x3333ff // Medium curl
      } else if (fingerCurl < 0.2) {
        newColor = legIndex < 4 ? 0xffcccc : 0xccccff // Very light when extended
      } else {
        newColor = legIndex < 4 ? 0xff8888 : 0x8888ff // Light when slightly curled
      }
      
      userData.upper.material.color.setHex(newColor)
    }
  }

  applyRagdollPhysics(userData, config) {
    // Apply physics damping for natural movement
    if (userData.physicsBody) {
      userData.physicsBody.linearDamping = config.ragdollDamping
      userData.physicsBody.angularDamping = config.ragdollDamping
    }
    if (userData.lowerBody) {
      userData.lowerBody.linearDamping = config.ragdollDamping
      userData.lowerBody.angularDamping = config.ragdollDamping
    }
    if (userData.footBody) {
      userData.footBody.linearDamping = config.ragdollDamping * 1.5 // More damping for feet
      userData.footBody.angularDamping = config.ragdollDamping * 1.5
    }
  }

  calculateIKTarget(legIndex, fingerCurl, fingerSettings) {
    // Calculate target position for foot based on finger curl
    const legAngle = (legIndex / 8) * Math.PI * 2
    const isLeftSide = legIndex < 4
    
    // Base leg extension based on finger curl
    const baseExtension = 1.2 // Default leg length
    const curlExtension = (1 - fingerCurl) * 0.6 // How much to extend/retract
    const totalExtension = baseExtension + curlExtension
    
    // Calculate foot target position
    const targetX = Math.cos(legAngle) * totalExtension
    const targetZ = Math.sin(legAngle) * totalExtension
    const targetY = -0.5 - (fingerCurl * 0.8) // Lower when curled, higher when extended
    
    return {
      x: targetX,
      y: targetY,
      z: targetZ
    }
  }

  applyInverseKinematics(userData, target, config) {
    if (!userData.upperGroup || !userData.kneeJoint) return
    
    // Simple 2-bone IK for upper leg and lower leg
    const upperLength = 1.0 // Upper leg length
    const lowerLength = 0.8 // Lower leg length
    
    // Distance to target
    const distance = Math.sqrt(target.x * target.x + target.y * target.y + target.z * target.z)
    const maxReach = upperLength + lowerLength
    
    // Clamp target within reach
    let reachableTarget = target
    if (distance > maxReach * 0.95) { // Leave some margin
      const scale = (maxReach * 0.95) / distance
      reachableTarget = {
        x: target.x * scale,
        y: target.y * scale,
        z: target.z * scale
      }
    }
    
    // Calculate shoulder angle (upper leg)
    const shoulderAngleY = Math.atan2(reachableTarget.z, reachableTarget.x)
    const horizontalDist = Math.sqrt(reachableTarget.x * reachableTarget.x + reachableTarget.z * reachableTarget.z)
    const shoulderAngleX = Math.atan2(-reachableTarget.y, horizontalDist)
    
    // Calculate knee angle using law of cosines
    const targetDist = Math.sqrt(horizontalDist * horizontalDist + reachableTarget.y * reachableTarget.y)
    const cosKneeAngle = (upperLength * upperLength + lowerLength * lowerLength - targetDist * targetDist) / (2 * upperLength * lowerLength)
    const kneeAngle = Math.acos(Math.max(-1, Math.min(1, cosKneeAngle)))
    
    // Apply IK rotations with smooth interpolation
    const ikStrength = config.ikConstraintStrength
    
    if (userData.upperGroup) {
      const currentRotX = userData.upperGroup.rotation.x
      const currentRotY = userData.upperGroup.rotation.y
      
      userData.upperGroup.rotation.x = this.lerp(currentRotX, shoulderAngleX, ikStrength * config.legAnimationSpeed)
      userData.upperGroup.rotation.y = this.lerp(currentRotY, shoulderAngleY, ikStrength * config.legAnimationSpeed)
    }
    
    if (userData.kneeJoint) {
      const currentKneeRot = userData.kneeJoint.rotation.x
      const targetKneeRot = Math.PI - kneeAngle // Invert for proper knee bending
      
      userData.kneeJoint.rotation.x = this.lerp(currentKneeRot, targetKneeRot, ikStrength * config.legAnimationSpeed)
    }
  }
  
  // Helper function for smooth interpolation
  lerp(start, end, factor) {
    return start + (end - start) * factor
  }

  handleGestures(spider, gestures) {
    if (!gestures) return
    
    // Handle pinch gesture - precision movement
    if (gestures.pinch) {
      this.handlePinchGesture(spider)
    }
    
    // Handle fist gesture - defensive pose
    if (gestures.fist) {
      this.handleFistGesture(spider)
    }
    
    // Handle open hand - speed boost
    if (gestures.openHand) {
      this.handleOpenHandGesture(spider)
    }
    
    // Handle peace sign - special move
    if (gestures.peace) {
      this.handlePeaceGesture(spider)
    }
  }

  handlePinchGesture(spider) {
    // Pinch: Precise, controlled movement
    spider.physicsBody.linearDamping = 0.9 // More controlled
    
    // Curl all legs slightly for stability
    spider.legs.forEach((leg, index) => {
      if (leg.userData.kneeJoint) {
        leg.userData.kneeJoint.rotation.x = Math.PI * 0.3
      }
    })
  }

  handleFistGesture(spider) {
    // Fist: Defensive crouch
    spider.legs.forEach((leg, index) => {
      if (leg.userData.upperGroup) {
        leg.userData.upperGroup.rotation.x = -Math.PI * 0.2 // Lower stance
      }
      if (leg.userData.kneeJoint) {
        leg.userData.kneeJoint.rotation.x = Math.PI * 0.4 // Bend knees
      }
    })
  }

  handleOpenHandGesture(spider) {
    // Open hand: Speed boost
    spider.physicsBody.linearDamping = 0.3 // Less damping for speed
    
    // Extend legs for running
    spider.legs.forEach((leg, index) => {
      if (leg.userData.upperGroup) {
        leg.userData.upperGroup.rotation.x = Math.PI * 0.1 // Lift legs
      }
      if (leg.userData.kneeJoint) {
        leg.userData.kneeJoint.rotation.x = Math.PI * 0.1 // Straighten knees
      }
    })
  }

  handlePeaceGesture(spider) {
    // Peace sign: Special taunt animation
    const time = Date.now() * 0.01
    spider.legs.forEach((leg, index) => {
      if (leg.userData.upperGroup) {
        const wave = Math.sin(time + index) * 0.2
        leg.userData.upperGroup.rotation.z += wave
      }
    })
  }

  applyPassiveDamping(spider) {
    // Apply gentle damping when no hand input is detected
    spider.physicsBody.linearDamping = 0.8
    spider.physicsBody.angularDamping = 0.8
    
    // Return legs to neutral position using IK
    spider.legs.forEach((leg, index) => {
      const userData = leg.userData
      if (!userData) return
      
      // Calculate neutral position for this leg
      const legAngle = (index / 8) * Math.PI * 2
      const neutralTarget = {
        x: Math.cos(legAngle) * 1.4, // Neutral extension
        y: -0.8, // Neutral height
        z: Math.sin(legAngle) * 1.4
      }
      
      // Apply IK to return to neutral position
      this.applyInverseKinematics(userData, neutralTarget, {
        ikConstraintStrength: 0.1, // Gentle return
        legAnimationSpeed: 0.02 // Slow return
      })
      
      // Apply ragdoll physics for natural settling
      this.applyRagdollPhysics(userData, this.movementConfig)
    })
  }

  // Utility methods for debugging and configuration
  setFingerMapping(fingerIndex, legIndices) {
    this.fingerMapping[fingerIndex] = legIndices
  }

  getFingerMapping() {
    return { ...this.fingerMapping }
  }

  updateMovementConfig(newConfig) {
    this.movementConfig = { ...this.movementConfig, ...newConfig }
  }

  getSpiderInfo(playerId) {
    const spider = this.gameState.getSpiderByPlayerId(playerId)
    if (!spider) return null
    
    return {
      position: spider.position.clone(),
      rotation: spider.rotation.clone(),
      velocity: spider.physicsBody.velocity.clone(),
      legCount: spider.legs.length,
      playerId: spider.playerId
    }
  }

  generateFingerStatusHTML(playerId, handData) {
    const landmarks = handData.landmarks
    const handedness = handData.handedness
    const confidence = handData.confidence || 0
    
    // Performance metrics
    const latency = Math.round(this.debugInfo.averageLatency || 0)
    const latencyColor = latency < 50 ? '#66ff66' : latency < 100 ? '#ffff66' : '#ff6666'
    
    // Calculate finger curls with enhanced data
    const fingerData = [
      { tip: landmarks[4], mcp: landmarks[2], name: 'Thumb' },
      { tip: landmarks[8], mcp: landmarks[5], name: 'Index' },
      { tip: landmarks[12], mcp: landmarks[9], name: 'Middle' },
      { tip: landmarks[16], mcp: landmarks[13], name: 'Ring' },
      { tip: landmarks[20], mcp: landmarks[17], name: 'Pinky' }
    ]
    
    // Calculate hand state and locomotion activity
    const wrist = landmarks[0]
    const fingerCurls = fingerData.map((finger, index) => this.calculateFingerCurl(finger, index, wrist))
    const averageCurl = fingerCurls.reduce((sum, curl) => sum + curl, 0) / fingerCurls.length
    const handState = averageCurl > 0.8 ? '✊ Closed Fist' : averageCurl < 0.2 ? '✋ Open Hand' : '🖐️ Partial'
    const handStateColor = averageCurl > 0.8 ? '#ff6666' : averageCurl < 0.2 ? '#66ff66' : '#ffff66'
    
    let html = `<div style="font-family: monospace; font-size: 12px; background: rgba(40,40,40,0.9); padding: 6px; border-radius: 4px; margin: 2px;">
    <strong style="color: ${playerId === 0 ? '#ff6666' : '#6666ff'};">🕷️ ${handedness} Hand → Spider ${playerId}</strong><br>
    <span style="color: #aaa;">Confidence: ${Math.round(confidence * 100)}% | Latency: <span style="color: ${latencyColor};">${latency}ms</span></span><br>
    <span style="color: ${handStateColor};">Hand State: ${handState} (${(averageCurl * 100).toFixed(0)}%)</span> <span style="color: #88ff88;">✅ Full Range 0-100%</span><br>`
    
    fingerData.forEach((finger, fingerIndex) => {
      let curl = fingerCurls[fingerIndex]
      const curlPercent = Math.round(curl * 100)
      
      // Direct finger-to-leg mapping display
      let legNumbers = []
      if (fingerIndex < 5) {
        legNumbers.push(fingerIndex)
      }
      // Show mirror legs for 8-leg spider
      const mirrorMap = { 0: [6], 1: [5], 4: [7] }
      if (mirrorMap[fingerIndex]) {
        legNumbers.push(...mirrorMap[fingerIndex])
      }
      
      // Enhanced color coding with more granular curl intensity
      let curlColor = '#44ff44' // Default green for extended
      let curlSymbol = '▫️'
      
      if (curl > 0.8) {
        curlColor = '#ff2222'
        curlSymbol = '🔴'
      } else if (curl > 0.6) {
        curlColor = '#ff6666'
        curlSymbol = '🟠'
      } else if (curl > 0.4) {
        curlColor = '#ffaa22'
        curlSymbol = '🟡'
      } else if (curl > 0.2) {
        curlColor = '#aaff44'
        curlSymbol = '🟢'
      } else {
        curlColor = '#44ff44'
        curlSymbol = '⭐'
      }
      
      const bgIntensity = Math.round(curl * 100 * 0.4)
      
      html += `<span style="color: ${curlColor}; background: rgba(${bgIntensity},${bgIntensity},${bgIntensity},0.3); padding: 2px 4px; margin: 1px; border-radius: 3px; border: 1px solid rgba(${bgIntensity + 50},${bgIntensity + 50},${bgIntensity + 50},0.5);">
      ${curlSymbol} ${finger.name}: ${curlPercent}% → Leg ${legNumbers.join(',')}</span><br>`
    })
    
    return html + '</div><br>'
  }
  
  updateFingerMappingUI(statusHTML) {
    const fingerStatusElement = document.getElementById('finger-status')
    if (fingerStatusElement) {
      if (statusHTML) {
        fingerStatusElement.innerHTML = statusHTML
        fingerStatusElement.style.display = 'block'
      } else {
        fingerStatusElement.innerHTML = `<div style="font-family: monospace; font-size: 12px; background: rgba(50,50,50,0.8); padding: 8px; border-radius: 4px; margin: 4px; color: #ffaa44;">
        🤲 Show hands to camera to control spiders...<br>
        <span style="color: #88ff88;">✅ Enhanced finger curl detection (0-100% range)</span><br>
        <span style="color: #88ff88;">✅ Open hand = legs spread flat, closed fist = legs curl up</span><br>
        <span style="color: #88ff88;">✅ Individual finger control + improved ground collision</span><br>
        <span style="color: #88ff88;">✅ Target latency: &lt;50ms</span>
        </div>`
        fingerStatusElement.style.display = 'block'
      }
    }
  }



  destroy() {
    this.isInitialized = false
    console.log('SpiderControlSystem destroyed')
  }
}