#!/bin/sh
set -e

echo "🤖 Downloading PINTO Model Zoo Hand Detection ONNX Models 0309 ONNX Models for Hand Tracking"
echo "======================================================"

# Create models directory
mkdir -p models
cd models

# PINTO0309 Palm Detection Model (ONNX)
echo "📥 Downloading palm detection model ONNX..."
if [ ! -f "palm_detection.onnx" ]; then
    curl -L -o palm_detection.onnx \
        'https://github.com/PINTO0309/hand-gesture-recognition-using-onnx/raw/main/model/palm_detection/palm_detection_Nx3x128x128.onnx'
    echo "✅ Palm detection ONNX model downloaded"
else
    echo "✅ Palm detection ONNX model already exists"
fi

# PINTO0309 Hand Landmark Model (ONNX)
echo "📥 Downloading hand landmark model ONNX..."
if [ ! -f "hand_landmark.onnx" ]; then
    curl -L -o hand_landmark.onnx \
        'https://github.com/PINTO0309/hand-gesture-recognition-using-onnx/raw/main/model/hand_landmark/hand_landmark_sparse_Nx3x224x224.onnx'
    echo "✅ Hand landmark ONNX model downloaded"
else
    echo "✅ Hand landmark ONNX model already exists"
fi

# Backup: Keep TensorFlow Lite models for reference
echo "📥 Downloading TensorFlow Lite models backup..."
if [ ! -f "hand_landmark.tflite" ]; then
    curl -L -o hand_landmark.tflite \
        "https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task"
    echo "✅ TensorFlow Lite backup downloaded"
else
    echo "✅ TensorFlow Lite backup already exists"
fi

cd ..

echo ""
echo "🎉 All PINTO0309 ONNX models downloaded successfully!"
echo ""
echo "📋 Models available:"
echo "   - models/palm_detection.onnx     Palm detection - ONNX"
echo "   - models/hand_landmark.onnx      Hand landmarks - ONNX"
echo "   - models/hand_landmark.tflite    TensorFlow Lite backup"
echo ""
echo "🚀 You can now run: cargo run"
echo "   The hand tracking system will use PINTO0309 ONNX models compatible with ORT 1.16"
