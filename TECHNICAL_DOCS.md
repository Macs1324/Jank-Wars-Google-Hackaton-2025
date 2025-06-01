# 🔧 Jank Wars - Technical Documentation

## 🏗️ Architecture Overview

### Technology Stack
- **3D Graphics**: Three.js (WebGL 2.0)
- **Hand Tracking**: MediaPipe Hands
- **Physics Engine**: Cannon-ES
- **Build System**: Vite
- **Language**: Vanilla JavaScript (ES6+)

### System Flow
```
Camera (30fps) → MediaPipe → Hand Landmarks → Gesture Analysis → IK Solver → Spider Physics (60fps)
```

### Performance Targets
- **Rendering**: 60 FPS stable
- **Hand Tracking**: 30 FPS consistent
- **Input Latency**: <50ms finger to spider response
- **Memory Usage**: <100MB total

## 📦 Core Systems

### 1. Hand Tracking Pipeline

**MediaPipe Integration**:
```javascript
const hands = new Hands({
  locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
});

hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.5,
  minTrackingConfidence: 0.5
});
```

**Data Processing**:
```javascript
function onResults(results) {
  results.multiHandLandmarks.forEach((landmarks, index) => {
    const handedness = results.multiHandedness[index].label;
    const fingerPoses = calculateFingerPoses(landmarks);
    updateSpiderFromHand(fingerPoses, handedness);
  });
}
```

**Finger Pose Calculation**:
```javascript
function calculateFingerPoses(landmarks) {
  return {
    thumb: calculateFingerBend(landmarks, [1, 2, 3, 4]),
    index: calculateFingerBend(landmarks, [5, 6, 7, 8]),
    middle: calculateFingerBend(landmarks, [9, 10, 11, 12]),
    ring: calculateFingerBend(landmarks, [13, 14, 15, 16]),
    pinky: calculateFingerBend(landmarks, [17, 18, 19, 20])
  };
}
```

### 2. Spider Control System

**Spider Entity Structure**:
```javascript
class Spider {
  constructor() {
    this.body = new THREE.Group();
    this.legs = Array(8).fill().map(() => new SpiderLeg());
    this.physicsBody = new CANNON.Body({ mass: 1 });
    this.ikTargets = new Array(8);
  }
  
  updateFromHand(fingerPoses, handPosition) {
    // Update IK targets based on finger positions
    this.legs.forEach((leg, index) => {
      const fingerData = this.getFingerForLeg(index, fingerPoses);
      this.ikTargets[index] = this.calculateLegTarget(fingerData, handPosition);
    });
  }
}
```

**Inverse Kinematics Solver**:
```javascript
function solveLegIK(legBones, target) {
  const chain = new IKChain();
  legBones.forEach(bone => chain.addBone(bone));
  chain.solveForTarget(target);
  return chain.getBoneRotations();
}
```

### 3. Physics Integration

**Cannon-ES Setup**:
```javascript
const world = new CANNON.World();
world.gravity.set(0, -9.82, 0);
world.broadphase = new CANNON.NaiveBroadphase();
world.solver.iterations = 10;

// Spider body physics
const spiderShape = new CANNON.Sphere(0.5);
const spiderBody = new CANNON.Body({ mass: 1 });
spiderBody.addShape(spiderShape);
world.add(spiderBody);
```

**Physics-Graphics Sync**:
```javascript
function updatePhysics(deltaTime) {
  world.step(deltaTime);
  
  // Sync Three.js objects with Cannon.js bodies
  spiders.forEach(spider => {
    spider.mesh.position.copy(spider.body.position);
    spider.mesh.quaternion.copy(spider.body.quaternion);
  });
}
```

### 4. Rendering System

**Three.js Scene Setup**:
```javascript
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.enabled = true;
```

**Animation Loop**:
```javascript
function animate() {
  requestAnimationFrame(animate);
  
  const deltaTime = clock.getDelta();
  
  // Update systems
  updateHandTracking();
  updateSpiderControl(deltaTime);
  updatePhysics(deltaTime);
  updateRendering();
  
  // Performance monitoring
  performanceMonitor.update();
}
```

## ⚡ Performance Optimization

### Memory Management
```javascript
// Object pooling for frequent allocations
const vectorPool = {
  vectors: [],
  acquire() { return this.vectors.pop() || new THREE.Vector3(); },
  release(vector) { vector.set(0, 0, 0); this.vectors.push(vector); }
};

// Proper cleanup
function dispose() {
  scene.traverse((object) => {
    if (object.geometry) object.geometry.dispose();
    if (object.material) object.material.dispose();
  });
}
```

### Rendering Optimization
```javascript
// Frustum culling
camera.updateMatrixWorld();
const frustum = new THREE.Frustum();
frustum.setFromProjectionMatrix(camera.projectionMatrix);

// LOD system
const lod = new THREE.LOD();
lod.addLevel(highDetailMesh, 0);
lod.addLevel(lowDetailMesh, 50);
scene.add(lod);
```

### Frame Rate Management
```javascript
class PerformanceMonitor {
  constructor() {
    this.frameTimes = [];
    this.targetFPS = 60;
  }
  
  update() {
    const frameTime = performance.now() - this.lastTime;
    this.frameTimes.push(frameTime);
    if (this.frameTimes.length > 60) this.frameTimes.shift();
    
    // Auto-adjust quality if needed
    if (this.getAverageFPS() < 50) {
      this.reduceQuality();
    }
  }
}
```

## 🔧 Configuration

### Hand Tracking Settings
```javascript
const handTrackingConfig = {
  maxNumHands: 2,
  modelComplexity: 1,           // 0-1, higher = better accuracy
  minDetectionConfidence: 0.5,   // 0-1, lower = more detections
  minTrackingConfidence: 0.5,    // 0-1, lower = less jitter
  smoothingFactor: 0.1          // Temporal smoothing
};
```

### Physics Configuration
```javascript
const physicsConfig = {
  gravity: [0, -9.82, 0],
  timeStep: 1/60,
  maxSubSteps: 3,
  solver: {
    iterations: 10,
    tolerance: 0.0001
  }
};
```

### Control Mapping
```javascript
const fingerMapping = {
  leftHand: {
    thumb: 0,   // Front-right leg
    index: 1,   // Front-left leg
    middle: 2,  // Middle-right leg
    ring: 3,    // Middle-left leg
    pinky: 4    // Back leg
  },
  rightHand: {
    // Mirror mapping for player 2
  }
};
```

## 🛠️ Development Tools

### Debug Visualization
```javascript
function drawHandLandmarks(landmarks, canvas) {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  landmarks.forEach((landmark, index) => {
    const x = landmark.x * canvas.width;
    const y = landmark.y * canvas.height;
    
    ctx.fillStyle = index < 5 ? 'red' : 'blue'; // Thumb = red, others = blue
    ctx.fillRect(x - 3, y - 3, 6, 6);
    ctx.fillText(index, x + 5, y);
  });
}
```

### Error Handling
```javascript
// Graceful degradation
async function initializeGame() {
  try {
    await initHandTracking();
    console.log('Hand tracking initialized');
  } catch (error) {
    console.warn('Hand tracking failed, using keyboard controls:', error);
    enableKeyboardFallback();
  }
  
  try {
    initPhysics();
    initRendering();
    startGameLoop();
  } catch (error) {
    console.error('Critical initialization failure:', error);
    showErrorMessage('Failed to start game. Please refresh and try again.');
  }
}
```

### Performance Profiling
```javascript
// Custom timing utilities
const Timer = {
  start(label) {
    this.times = this.times || {};
    this.times[label] = performance.now();
  },
  
  end(label) {
    if (this.times && this.times[label]) {
      const duration = performance.now() - this.times[label];
      console.log(`${label}: ${duration.toFixed(2)}ms`);
      delete this.times[label];
    }
  }
};

// Usage in game loop
Timer.start('handTracking');
updateHandTracking();
Timer.end('handTracking');
```

## 🌐 Browser Compatibility

### Feature Detection
```javascript
const browserSupport = {
  webgl: !!window.WebGLRenderingContext,
  camera: !!navigator.mediaDevices?.getUserMedia,
  webassembly: !!window.WebAssembly,
  workers: !!window.Worker,
  
  async checkCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      stream.getTracks().forEach(track => track.stop());
      return true;
    } catch {
      return false;
    }
  }
};
```

### Cross-Browser Testing
- **Chrome 90+**: Full support, optimal performance
- **Firefox 88+**: Full support, good performance  
- **Edge 90+**: Full support, optimal performance
- **Safari 14+**: Full support, HTTPS required for camera

## 🚀 Deployment

### Build Process
```bash
# Development
npm run dev              # Start dev server with hot reload

# Production
npm run build           # Create optimized build
npm run preview         # Test production build locally
```

### Static Hosting Setup
```javascript
// vite.config.js
export default {
  base: './',              // Relative paths for static hosting
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,      // Disable for production
    minify: 'terser'       // Optimize JavaScript
  }
};
```

### CDN Configuration
```javascript
// MediaPipe models from CDN
const MEDIAPIPE_CDN = 'https://cdn.jsdelivr.net/npm/@mediapipe/hands/';

// Asset loading with fallbacks
async function loadAssets() {
  try {
    await loadFromCDN();
  } catch (error) {
    console.warn('CDN failed, loading from local');
    await loadFromLocal();
  }
}
```

## 🔮 Future Enhancements

### Web Workers Integration
```javascript
// Background processing for heavy computations
const worker = new Worker('physics-worker.js');
worker.postMessage({ type: 'PHYSICS_UPDATE', data: physicsData });
worker.onmessage = (event) => {
  if (event.data.type === 'PHYSICS_RESULT') {
    updateSpiderPositions(event.data.positions);
  }
};
```

### WebXR Support
```javascript
// VR/AR hand tracking preparation
if ('xr' in navigator) {
  const xrSession = await navigator.xr.requestSession('immersive-vr');
  const inputSources = xrSession.inputSources;
  // Enhanced hand tracking in VR environment
}
```

### Advanced Networking
```javascript
// WebRTC peer-to-peer for multiplayer
const peerConnection = new RTCPeerConnection();
const dataChannel = peerConnection.createDataChannel('gameData');

dataChannel.onmessage = (event) => {
  const gameState = JSON.parse(event.data);
  updateRemoteSpider(gameState);
};
```