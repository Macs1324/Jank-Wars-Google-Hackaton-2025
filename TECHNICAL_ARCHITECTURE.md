# 🔧 **Jank Wars - Technical Architecture**

## **🏗️ System Overview**

Jank Wars is built on a modular architecture that separates concerns between game logic, physics simulation, hand tracking, and rendering. The system is designed for 60 FPS gameplay with real-time hand tracking at 30+ FPS.

### **Core Technology Stack**
- **Game Engine**: Bevy (Rust) - ECS architecture with excellent performance
- **Physics**: bevy_rapier3d - Realistic ragdoll simulation and collision detection
- **Hand Tracking**: Computer vision pipeline (implementation agnostic)
- **Inverse Kinematics**: Custom IK solver for finger-to-leg mapping
- **Platform**: Cross-platform with primary focus on desktop (Windows, Linux, macOS)

## **🎯 Architecture Principles**

### **Modularity**
- **Separation of Concerns**: Hand tracking, game logic, and rendering are independent modules
- **Plugin Architecture**: Each major system implemented as Bevy plugin
- **Hot-Swappable Components**: Hand tracking backend can be replaced without affecting game logic
- **Configuration-Driven**: All mappings and parameters externally configurable

### **Performance**
- **60 FPS Target**: Stable game loop regardless of hand tracking performance
- **Async Processing**: Hand tracking runs in parallel threads
- **Efficient IK**: Fast inverse kinematics solving for real-time response
- **LOD Systems**: Quality scaling based on performance requirements

### **Robustness**
- **Graceful Degradation**: Game remains playable if hand tracking fails
- **Error Recovery**: Automatic recovery from tracking loss or hardware issues
- **Calibration**: Adaptive system that learns individual hand characteristics
- **Fallback Controls**: Keyboard/gamepad backup for development and accessibility

## **📦 System Components**

### **1. Game Core**
```
├── Entity Component System (Bevy ECS)
├── Physics Simulation (Rapier3D)
├── Rendering Pipeline (Bevy Render)
├── Audio System (Bevy Audio)
└── Input Management (Unified input abstraction)
```

**Responsibilities**:
- Spider ragdoll entity management
- Physics simulation and collision detection
- Scene rendering and camera management
- Game state management (menus, gameplay, settings)
- Performance monitoring and optimization

### **2. Hand Tracking Pipeline**
```
├── Camera Interface (Hardware abstraction)
├── Image Processing (Frame preprocessing)
├── Gesture Recognition (Hand landmark detection)
├── Pose Analysis (Finger position and angle calculation)
└── Data Filtering (Smoothing and noise reduction)
```

**Responsibilities**:
- Camera initialization and frame capture
- Real-time hand landmark detection
- Finger pose analysis and gesture recognition
- Confidence scoring and quality metrics
- Temporal smoothing and prediction

### **3. Control Mapping System**
```
├── Finger Pose Processor (Raw data interpretation)
├── IK Target Calculator (3D target position generation)
├── Constraint Solver (Physical limitation handling)
├── Smoothing Filter (Movement interpolation)
└── Fallback Handler (Alternative input processing)
```

**Responsibilities**:
- Finger pose to 3D space transformation
- Inverse kinematics target calculation
- Movement smoothing and stabilization
- Handling tracking loss and recovery
- Integration with traditional input methods

### **4. Spider Control System**
```
├── IK Solver (Inverse kinematics engine)
├── Physics Integration (Force application)
├── Animation Blending (IK + physics combination)
├── Constraint Management (Joint limits and collision)
└── Behavioral Layer (High-level movement patterns)
```

**Responsibilities**:
- Real-time IK solving for spider legs
- Physics force application and integration
- Collision response and environmental interaction
- Joint constraint enforcement
- Emergent movement behavior generation

## **🔄 Data Flow Architecture**

### **Input Processing Pipeline**
```
Camera Frame → Hand Detection → Finger Poses → IK Targets → Spider Movement
     ↓              ↓              ↓              ↓              ↓
  30-60 FPS      Processing     Smoothing      IK Solve    Physics Sim
   (RGB)         (Landmarks)   (Filtering)    (Targets)    (Forces)
```

### **Real-Time Processing Flow**
1. **Frame Capture** (30-60 Hz): Camera provides RGB frames
2. **Hand Detection** (30 Hz): Computer vision extracts hand landmarks
3. **Pose Processing** (60 Hz): Convert landmarks to finger joint angles
4. **IK Calculation** (60 Hz): Generate 3D targets for spider legs
5. **Physics Update** (60 Hz): Apply forces and simulate spider movement
6. **Rendering** (60 Hz): Display updated spider positions

### **Threading Model**
```
Main Thread (Game Loop):
├── Physics Simulation (60 FPS)
├── Rendering (60 FPS)
├── Input Processing (60 FPS)
└── Game Logic (60 FPS)

Background Threads:
├── Hand Tracking Thread (30-60 FPS)
├── IK Solving Thread (60 FPS)
├── Audio Processing Thread
└── Network Thread (Future: Multiplayer)
```

## **🎮 Core Systems Detail**

### **Spider Ragdoll System**
**Components**:
- `SpiderBody`: Central body with mass and collision
- `SpiderLeg`: Individual leg with joint chain
- `IKChain`: Inverse kinematics solver data
- `FingerMapping`: Links leg to specific finger

**Behavior**:
- Physics-driven body with realistic weight and momentum
- 6 articulated legs with proper joint constraints
- Individual leg control through IK targeting
- Natural spider locomotion through coordinated leg movement

### **Hand Tracking System**
**Data Structures**:
```rust
struct HandPose {
    wrist: Vec3,
    fingers: [FingerChain; 5],
    confidence: f32,
    timestamp: f64,
}

struct FingerChain {
    joints: [Vec3; 4],      // Joint positions
    angles: [f32; 3],       // Bend angles
    confidence: f32,        // Tracking quality
}
```

**Processing Pipeline**:
1. **Camera Interface**: Abstract camera access across platforms
2. **Hand Detection**: Extract 21 landmarks per hand
3. **Pose Calculation**: Convert to joint angles and positions
4. **Quality Assessment**: Confidence scoring and filtering
5. **Temporal Smoothing**: Reduce jitter and predict movement

### **Inverse Kinematics System**
**Approach**: Hybrid analytical/numerical IK solving
- **Analytical Solutions**: For simple 2-3 joint chains
- **Numerical Methods**: FABRIK algorithm for complex poses
- **Constraint Handling**: Joint limits and collision avoidance
- **Performance Optimization**: Cached solutions and early termination

**IK Chain Configuration**:
```rust
struct IKChain {
    joints: Vec<Entity>,         // Joint entities in order
    target: Vec3,               // Desired end position
    max_iterations: u32,        // Solver iteration limit
    tolerance: f32,             // Convergence threshold
    constraints: JointLimits,   // Physical limitations
}
```

## **⚡ Performance Optimization**

### **Frame Rate Targets**
- **Game Loop**: 60 FPS (16.67ms budget)
- **Hand Tracking**: 30+ FPS (33ms budget)
- **IK Solving**: 60 FPS (sub-millisecond per leg)
- **Total Latency**: <50ms finger movement to spider response

### **Optimization Strategies**
**Multithreading**:
- Hand tracking runs on dedicated thread
- IK solving parallelized across spider legs
- Physics simulation uses internal threading
- Rendering pipeline fully async

**Algorithmic Optimization**:
- Spatial partitioning for collision detection
- LOD for distant or occluded spiders
- Predictive tracking to reduce perceived latency
- Adaptive quality based on performance metrics

**Memory Management**:
- Object pooling for frequent allocations
- Streaming for large assets
- Garbage collection optimization
- Cache-friendly data structures

### **Quality Scaling**
**High Performance Mode**:
- Full resolution hand tracking (640x480+)
- 10+ IK solver iterations
- Advanced physics simulation
- High-quality visual effects

**Balanced Mode**:
- Medium resolution tracking (320x240)
- 5-7 IK solver iterations
- Standard physics quality
- Reduced visual effects

**Performance Mode**:
- Low resolution tracking (160x120)
- 3-5 IK solver iterations
- Simplified physics
- Minimal visual effects

## **🔧 Configuration & Extensibility**

### **Finger Mapping Configuration**
```toml
[finger_mapping.left_hand]
thumb = "front_right_leg"
index = "front_left_leg"
middle = "middle_right_leg"
ring = "middle_left_leg"
pinky = "back_right_leg"
palm = "body_control"

[tracking_settings]
confidence_threshold = 0.7
smoothing_factor = 0.3
prediction_frames = 2
dead_zone_radius = 0.05
```

### **IK Configuration**
```toml
[inverse_kinematics]
max_iterations = 10
convergence_tolerance = 0.001
joint_limit_enforcement = true
collision_avoidance = true
interpolation_speed = 0.8
```

### **Performance Tuning**
```toml
[performance]
target_fps = 60
tracking_fps = 30
ik_lod_distance = 10.0
physics_substeps = 4
render_scale = 1.0
```

## **🛠️ Development & Testing**

### **Debugging Tools**
- **Physics Visualization**: Wireframe collision shapes and force vectors
- **IK Debug Display**: Target positions and joint chains
- **Hand Tracking Overlay**: Landmark visualization and confidence metrics
- **Performance Profiler**: Frame time breakdown and bottleneck identification

### **Testing Framework**
- **Unit Tests**: Individual component testing
- **Integration Tests**: System interaction testing
- **Performance Tests**: Frame rate and latency benchmarks
- **Hardware Tests**: Compatibility across different cameras and systems

### **Development Workflow**
1. **Rapid Prototyping**: Fast iteration on core mechanics
2. **Incremental Testing**: Continuous validation of hand tracking accuracy
3. **Performance Monitoring**: Real-time performance metrics during development
4. **User Testing**: Regular feedback sessions with actual hand tracking

## **🌐 Platform Considerations**

### **Camera Support**
- **Windows**: DirectShow and Windows Media Foundation
- **Linux**: V4L2 (Video4Linux2) interface
- **macOS**: AVFoundation framework
- **Unified Interface**: Hardware abstraction layer for cross-platform compatibility

### **Performance Characteristics**
- **CPU Requirements**: Modern quad-core processor
- **RAM Requirements**: 4GB+ for smooth operation
- **Camera Requirements**: USB 2.0+ webcam, 720p minimum
- **Storage**: <500MB for base installation

### **Deployment Strategy**
- **Primary Platform**: Desktop (Windows/Linux/macOS)
- **Distribution**: Steam, itch.io, direct download
- **Future Platforms**: Console (with motion controllers), mobile (AR)
- **Cloud Gaming**: Streaming-compatible architecture

---

**This architecture provides a solid foundation for implementing the finger-to-spider-leg control system while maintaining flexibility for future enhancements and platform expansion.**