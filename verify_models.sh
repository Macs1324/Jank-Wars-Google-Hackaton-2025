#!/bin/bash

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo "🔍 Verifying ONNX models for Jank Wars hand tracking..."
echo

# Check if models directory exists
if [ ! -d "models" ]; then
    echo -e "${RED}❌ Models directory not found!${NC}"
    echo "   Please run: bash download_models.sh"
    exit 1
fi

# Check hand landmark model
HAND_MODEL="models/hand_landmark_lite.onnx"
if [ -f "$HAND_MODEL" ]; then
    SIZE=$(stat -c%s "$HAND_MODEL" 2>/dev/null || stat -f%z "$HAND_MODEL" 2>/dev/null)
    if [ "$SIZE" -gt 1000000 ]; then
        echo -e "${GREEN}✅ Hand landmark model found${NC}"
        echo "   Size: $(($SIZE / 1024 / 1024)) MB"
        
        # Check if it's actually an ONNX file (has ONNX magic bytes)
        if head -c 8 "$HAND_MODEL" | grep -q "ONNX"; then
            echo -e "${GREEN}   Valid ONNX format detected${NC}"
        else
            echo -e "${YELLOW}   ⚠️  File doesn't appear to be in ONNX format${NC}"
            echo "   First 100 bytes:"
            head -c 100 "$HAND_MODEL" | od -c
        fi
    else
        echo -e "${RED}❌ Hand landmark model is too small (${SIZE} bytes)${NC}"
        echo "   This might be an error page or incomplete download"
    fi
else
    echo -e "${RED}❌ Hand landmark model not found at: $HAND_MODEL${NC}"
fi

echo

# Check palm detection model
PALM_MODEL="models/palm_detection_lite.onnx"
if [ -f "$PALM_MODEL" ]; then
    SIZE=$(stat -c%s "$PALM_MODEL" 2>/dev/null || stat -f%z "$PALM_MODEL" 2>/dev/null)
    if [ "$SIZE" -gt 1000000 ]; then
        echo -e "${GREEN}✅ Palm detection model found${NC}"
        echo "   Size: $(($SIZE / 1024 / 1024)) MB"
        
        # Check if it's actually an ONNX file
        if head -c 8 "$PALM_MODEL" | grep -q "ONNX"; then
            echo -e "${GREEN}   Valid ONNX format detected${NC}"
        else
            echo -e "${YELLOW}   ⚠️  File doesn't appear to be in ONNX format${NC}"
            echo "   First 100 bytes:"
            head -c 100 "$PALM_MODEL" | od -c
        fi
    else
        echo -e "${RED}❌ Palm detection model is too small (${SIZE} bytes)${NC}"
        echo "   This might be an error page or incomplete download"
    fi
else
    echo -e "${YELLOW}⚠️  Palm detection model not found at: $PALM_MODEL${NC}"
    echo "   (This is optional - hand tracking can work without it)"
fi

echo
echo "📋 Summary:"
ls -lh models/*.onnx 2>/dev/null || echo "No ONNX files found in models directory"