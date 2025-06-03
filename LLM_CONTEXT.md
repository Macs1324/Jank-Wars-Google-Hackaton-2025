# LLM_CONTEXT.md

## Project: Jank Wars – Digital Puppeteering Spider Game

---

## 1. Project Overview

**Jank Wars** is a proof-of-concept game exploring "digital puppeteering" using hand tracking (MediaPipe) to control spider-like creatures. Each finger on the player's hand directly controls one leg of the spider, with the goal of creating a QWOP-like, physically challenging, and emergently funny movement system. The game is built with Three.js for rendering and Cannon-ES for physics.

**Core Vision**: Transform finger movement into competitive spider combat, creating an unprecedented connection between human gesture and avatar control where "fingers control legs" is both intuitive and impossibly challenging to master.

---

## 2. Technical Architecture

### Current Tech Stack
- **Frontend**: Vanilla JavaScript with Vite build system
- **3D Graphics**: Three.js for rendering and scene management
- **Hand Tracking**: MediaPipe for real-time finger/palm detection
- **Physics**: Cannon-ES for ragdoll physics and collision detection
- **Deployment**: Web-based, requires webcam-enabled browser

### Project Structure
```
jank_wars/
├── src/
│   ├── core/          # Core engine systems
│   ├── game/          # Game-specific logic
│   ├── utils/         # Utility functions
│   └── main.js        # Entry point
├── public/            # Static assets
├── index.html         # Main HTML file
└── package.json       # Dependencies and scripts
```

### Key Systems
- **Hand Tracking**: MediaPipe integration with 30 FPS tracking
- **Spider Control**: Direct finger-to-leg mapping system
- **Physics Simulation**: 60 FPS Cannon-ES physics world
- **Input Processing**: Low-pass filtering for signal smoothing
- **Debug Visualization**: Palm axes and leg highlighting for calibration

---

## 3. Design Evolution and Key Decisions

### Initial Vision (Achieved)
- **Direct Mapping**: Each finger controls one spider leg; palm position/orientation does NOT control the spider's body
- **Cartoonish Visuals**: Inspired by "Fall Guys"—bright, gummy, bouncy, and approachable
- **Dual Player Support**: Left hand controls red spider, right hand controls blue spider
- **Physics-Driven Comedy**: Emergent humor from failed coordination attempts

### Major Technical Milestones
1. **Three.js Scene Setup**: Bright, cartoonish lighting and materials implemented
2. **MediaPipe Integration**: Successful webcam feed and hand tracking with landmark extraction
3. **Palm Coordinate System**: Stable, smoothed local frame calculation using world landmarks
4. **Spider Construction**: Modular spider with body and five two-segment legs built from Three.js group hierarchy
5. **Input Mapping**: Robust finger-to-leg mapping with calibrated sensitivity

### Critical Technical Discovery: The Ragdoll Physics Problem

**The Challenge**: Initial approach used full ragdoll physics for spider body and legs, with Cannon-ES hinge motors at knee joints driven by finger input.

**The Issues Discovered**:
- **Motor Control Limitations**: Cannon-ES hinge motors could not reliably drive legs to target poses and stop
- **Unpredictable Behavior**: Motors led to unstable, "flailing" movement that felt disconnected from finger input
- **Control Indirection**: The system was too indirect for the desired "puppeteering" feel
- **Input Smoothing Insufficient**: Low-pass filtering reduced jitter but couldn't solve fundamental control instability

**The Revelation**: Ragdoll-only control is not sufficient for the game's core vision of precise, finger-driven leg control.

---

## 4. Current State and Architecture

### What Works Well
- **Visual System**: Cartoonish spiders with modular, pluggable body and leg components
- **Hand Tracking**: Stable, smoothed palm coordinate system with reliable finger landmark extraction
- **Input Processing**: Robust finger-to-leg mapping that's well-calibrated and responsive
- **Debug Tools**: Visual axes for palm orientation and leg highlighting for development
- **Core Physics**: Dynamic spider body physics working smoothly

### Current Control System
- **Spider Body**: Dynamic Cannon-ES physics body for realistic weight and momentum
- **Leg Mapping**: Direct finger curl/extension mapped to leg target positions
- **Input Smoothing**: Low-pass filtering to reduce tracking jitter
- **Dual Player**: Both hands can control separate spiders simultaneously

### Known Limitations
- **Leg Physics**: Current ragdoll leg constraints are too unstable for precise control
- **Ground Interaction**: Legs need better contact resolution with surfaces
- **Combat System**: Gesture-based combat mechanics not yet implemented
- **Performance**: Some optimization needed for mobile devices

---

## 5. The IK Solution: Future Technical Direction

### Core Problem Analysis
The ragdoll approach, while physically plausible, proved too unstable and indirect for the desired "puppeteering" feel. Direct, reliable finger-to-leg mapping requires a different approach.

### Proposed IK-Based Architecture

**Philosophy**: Use Inverse Kinematics (IK) to pose the legs directly, with kinematic colliders for ground interaction

**Technical Implementation**:
1. **Remove Ragdoll Constraints**: Legs no longer use dynamic physics chains
2. **2-Bone IK Solver**: Implement analytical IK for thigh/tibia angles to reach finger-derived foot targets
3. **Kinematic Leg Colliders**: Update Cannon-ES bodies kinematically to match IK solutions
4. **Ground Reaction Forces**: Apply calculated forces to main body when feet contact ground
5. **Hybrid Physics**: Dynamic body + kinematic legs + force feedback = best of both worlds

**Benefits**:
- **Direct Control**: Immediate, predictable response to finger input
- **Physical Interaction**: Legs can still collide with environment
- **Stable Locomotion**: No more uncontrollable flailing
- **Force Feedback**: Ground contact still affects body movement realistically

---

## 6. Development Roadmap

### Phase 1: IK Implementation (Next Priority)
- **Remove Dynamic Leg Physics**: Refactor Spider.js to make legs kinematic
- **Implement 2-Bone IK Solver**: Analytical solution for thigh/tibia angles
- **Map Finger Input to Foot Targets**: Convert finger positions to spider-local space coordinates
- **Update Kinematic Colliders**: Drive leg colliders with IK solutions
- **Ground Reaction Forces**: Apply contact forces to spider body for movement

### Phase 2: Combat System
- **Combat Mechanics**: Collision between spiders, health/damage system
- **Victory Conditions**: A spider that gets flipped over and remains on its back for too long, loses

### Phase 3: Game Modes and Polish
- **Versus Mode**: Complete competitive spider combat with rounds
- **Visual Effects**: Enhanced feedback for impacts and gestures

### Phase 4: Advanced Features
- **Online Multiplayer**: Network synchronization for remote play
- **Tournament System**: Rankings and competitive matchmaking
- **Replay System**: Record and share epic spider moments

---

## 7. Technical Considerations and Constraints

### Performance Requirements
- **60 FPS Physics**: Cannon-ES simulation must maintain smooth performance
- **30 FPS Hand Tracking**: MediaPipe tracking sufficient for responsive control
- **Cross-Platform**: Must work on desktop and mobile browsers
- **Memory Management**: Efficient cleanup of physics bodies and Three.js objects

### Browser Compatibility
- **WebRTC**: Requires camera access permissions
- **WebGL**: Modern browser with hardware acceleration
- **JavaScript ES6+**: Modern syntax and features used throughout
- **HTTPS**: Required for camera access in production

### Input Challenges
- **Lighting Conditions**: Hand tracking quality varies with camera/lighting
- **Hand Occlusion**: Tracking lost when hands leave camera view
- **Calibration**: Different hand sizes require input scaling
- **Latency**: Minimize delay between finger movement and spider response

---

## 8. Design Philosophy and Goals

### Core Principles
- **Intuitive yet Challenging**: "Fingers control legs" is instantly understandable but difficult to master
- **Physics-Driven**: No scripted animations—everything emerges from realistic physics
- **Emergent Comedy**: Failed coordination creates genuine entertainment moments
- **Skill Development**: Genuine improvement possible through practice

### Target Experience
- **Wonder Phase**: "I can't believe this actually works!"
- **Learning Phase**: Developing basic finger coordination
- **Mastery Phase**: Advanced techniques and competitive play
- **Flow State**: Perfect finger-spider synchronization

### Success Metrics
- **Learning Curve**: 80% achieve basic locomotion within 3 minutes
- **Engagement**: Average session duration >15 minutes
- **Retention**: 60% return within 24 hours
- **Viral Potential**: High rate of gameplay video sharing

---

## 9. Known Issues and Technical Debt

### Current Problems
- **Ragdoll Instability**: Primary blocker for precise control
- **Performance Optimization**: Some frame drops on lower-end devices
- **Hand Tracking Edge Cases**: Lost tracking when hands move off-screen
- **Mobile Touch Fallback**: Arrow key controls need improvement
- **Audio Missing**: No sound effects or music implemented yet

### Code Quality Concerns
- **Modular Architecture**: Some systems need better separation of concerns
- **Error Handling**: More robust fallbacks for tracking failures
- **Configuration Management**: Hard-coded values should be parameterized
- **Testing Framework**: No automated tests for complex hand tracking scenarios


## 10. Development Guidelines and Best Practices

### Code Standards
- **Modular Design**: Components should be easily pluggable and testable
- **Performance First**: Always profile changes that affect render/physics loops
- **Debug Accessibility**: Maintain visual debugging tools for all major systems
- **Cross-Platform Testing**: Verify functionality on desktop and mobile regularly

### Input Processing Rules
- **Smooth Filtering**: Always apply appropriate smoothing to raw hand tracking data
- **Graceful Degradation**: Handle tracking loss without breaking game state
- **Calibration Support**: Allow users to adjust sensitivity and mapping
- **Fallback Controls**: Maintain keyboard/touch alternatives for accessibility

### Physics Guidelines
- **Deterministic Behavior**: Physics should be predictable and debuggable
- **Performance Budgets**: Monitor physics step time and collision detection costs
- **Visual Consistency**: Physics behavior should match visual representation
- **Constraint Stability**: Test physics constraints under extreme input conditions

---

**This document represents the authoritative understanding of Jank Wars as of the current development phase. The transition from ragdoll physics to IK-based control represents the next major milestone in achieving the project's vision of precise, intuitive finger-to-spider control.**

**Key Takeaway**: The project has successfully proven the concept of finger-controlled spiders with stable hand tracking and engaging physics. The IK implementation represents the critical next step to achieve the responsive, precise control necessary for competitive gameplay.*
