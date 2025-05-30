# 🤲 Jank Wars - Hand Tracking Setup Guide

## **🎯 Overview**

Jank Wars uses **MediaPipe + TensorFlow Lite** for precise 21-landmark hand tracking that enables finger-to-spider-leg control. This guide will help you set up the hand tracking system.

## **🚀 Quick Setup**

### **Step 1: Download MediaPipe Models**
```bash
cd jank_wars
./download_models.sh
```

This downloads the required TensorFlow Lite models:
- `hand_landmark.tflite` - 21-point hand landmark detection
- `palm_detection.tflite` - Hand detection and localization  
- `gesture_recognizer.tflite` - Gesture classification (optional)

### **Step 2: Run the Game**
```bash
cargo run
```

The hand tracking system will automatically initialize if models are found.

## **📁 Model Files**

### **Required Models**
- **`models/hand_landmark.tflite`** (Primary)
  - 21 precise hand landmarks per hand
  - ~2.8MB file size
  - Real-time finger joint tracking

- **`models/palm_detection.tflite`** (Supporting)
  - Initial hand detection and bounding box
  - ~1.5MB file size
  - Optimizes landmark detection performance

### **Optional Models**
- **`models/gesture_recognizer.tflite`** (Future)
  - Gesture classification (fist, open hand, point, etc.)
  - ~3.1MB file size
  - For advanced gesture recognition features

## **🔧 Technical Details**

### **Hand Landmark Layout**
MediaPipe provides 21 landmarks per hand in this order:

```
0:  WRIST

1-4:   THUMB  (CMC, MCP, IP, TIP)
5-8:   INDEX  (MCP, PIP, DIP, TIP)  
9-12:  MIDDLE (MCP, PIP, DIP, TIP)
13-16: RING   (MCP, PIP, DIP, TIP)
17-20: PINKY  (MCP, PIP, DIP, TIP)
```

### **Coordinate System**
- **X**: 0.0 (left) to 1.0 (right) 
- **Y**: 0.0 (top) to 1.0 (bottom)
- **Z**: Depth relative to wrist (negative = closer to camera)

### **Performance Specifications**
- **Detection Rate**: 30 FPS hand tracking
- **Accuracy**: Sub-pixel landmark precision
- **Latency**: <50ms from camera to landmarks
- **Max Hands**: 2 hands simultaneously

## **🎮 Integration with Jank Wars**

### **Finger-to-Leg Mapping**
```
Left Hand → Player 1 (Red Spider):
  Thumb  → Front-right leg
  Index  → Front-left leg
  Middle → Middle-right leg
  Ring   → Middle-left leg
  Pinky  → Back-right leg
  Palm   → Body orientation

Right Hand → Player 2 (Blue Spider):
  [Same mapping for second player]
```

### **Finger Pose Analysis**
- **Bend Angles**: 0.0 = straight, 1.0 = fully curled
- **Spread Angles**: Separation between adjacent fingers
- **Palm Normal**: Direction palm is facing for body control

## **🛠️ Development Features**

### **Mock Data System**
When models are missing, the system automatically uses animated mock data:
- Sine/cosine wave finger animations
- Realistic joint movement patterns
- Continuous testing without camera

### **Debug Output**
Real-time console logging shows:
```
🤲 Hand Tracking: 2 hands detected, 2 finger poses
   Hand 0: Thumb bend: 0.34, Index bend: 0.67
   Hand 1: Thumb bend: 0.89, Index bend: 0.12
```

### **Configuration Options**
```rust
HandTrackingConfig {
    max_hands: 2,                    // Maximum hands to track
    detection_confidence: 0.7,       // Minimum confidence for detection
    tracking_confidence: 0.5,        // Minimum confidence for tracking
    model_path: "models/hand_landmark.tflite",
    palm_model_path: "models/palm_detection.tflite",
}
```

## **🔍 Troubleshooting**

### **Models Not Found**
```
⚠️ Hand tracking model not found: models/hand_landmark.tflite
   Download MediaPipe models to enable hand tracking
   For now, hand tracking will be disabled
```
**Solution**: Run `./download_models.sh` to download models

### **TensorFlow Lite Errors**
```
❌ Hand tracking setup failed: Failed to load model
   Game will continue with keyboard controls only
```
**Solutions**:
- Check model file integrity: `ls -la models/`
- Verify file permissions: `chmod 644 models/*.tflite`
- Re-download models: `rm -rf models && ./download_models.sh`

### **Performance Issues**
- **Low FPS**: Reduce `max_hands` to 1 in configuration
- **High CPU**: Increase detection interval (reduce from 30 FPS)
- **Memory usage**: Models loaded once at startup (~8MB total)

## **📊 System Requirements**

### **Hardware**
- **CPU**: Modern quad-core processor (for real-time inference)
- **RAM**: 4GB+ available memory
- **Camera**: USB webcam, 720p minimum resolution
- **Platform**: Linux, Windows, macOS (cross-platform)

### **Software Dependencies**
```toml
tflite = "0.9"          # TensorFlow Lite runtime
ndarray = "0.15"        # N-dimensional arrays
candle-core = "0.7"     # ML framework (backup)
```

## **🚀 Future Enhancements**

### **Planned Features**
- **GPU Acceleration**: TensorFlow Lite GPU delegate support
- **Custom Gestures**: Train custom gesture recognition
- **Multi-Camera**: Support for multiple camera angles
- **Hand Calibration**: Personal hand size adaptation

### **Advanced Gestures**
- **Pinch Detection**: Thumb + index finger contact
- **Fist Recognition**: All fingers curled simultaneously  
- **Pointing**: Single finger extended
- **Spread**: All fingers extended wide

## **📚 Resources**

### **MediaPipe Documentation**
- [MediaPipe Hands](https://developers.google.com/mediapipe/solutions/vision/hand_landmarker)
- [TensorFlow Lite](https://www.tensorflow.org/lite)
- [Hand Landmark Model](https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task)

### **Model Sources**
All models are official Google MediaPipe models distributed under Apache 2.0 license:
- Hand Landmark: `storage.googleapis.com/mediapipe-models/hand_landmarker/`
- Palm Detection: `storage.googleapis.com/mediapipe-models/palm_detection/`
- Gesture Recognition: `storage.googleapis.com/mediapipe-models/gesture_recognizer/`

---

**With MediaPipe hand tracking, Jank Wars transforms from keyboard-controlled ragdolls into the world's first finger-puppeteered spider combat game!** 🕷️✨