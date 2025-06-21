# 🕷️ Jank Wars

**The world's first finger-controlled spider fighting game!** Control ragdoll spiders using real-time hand tracking - each finger controls a spider leg.

## 🚀 Quick Start

```bash
npm install
npm run dev
# Open http://localhost:5173 and allow camera access
```

**Requirements**: Modern browser with webcam (Chrome/Firefox/Edge/Safari)

## 🎮 How to Play

1. **Show hands to camera** - you'll see tracking overlays
2. **Move hands** - spiders move in 3D space
3. **Curl/extend fingers** - individual spider legs respond
4. **Left hand** controls red spider, **right hand** controls blue spider

### Hand Mapping
```
👍 Thumb  → Front leg
👆 Index  → Front leg  
🖕 Middle → Middle leg
💍 Ring   → Middle leg
🤙 Pinky  → Back leg
```

### Movement Tips
- **Walk**: Alternate finger movements like real spider steps
- **Jump**: Quick finger extension
- **Turn**: Rotate your palm
- **Balance**: Spread fingers for stability

**Fallback**: Use arrow keys if hand tracking fails

## ✨ Features

**Currently Working:**
- Real-time hand tracking (30 FPS)
- 3D spider physics (60 FPS)
- Dual player support
- Cross-platform web deployment

**In Development:**
- Combat system with gesture-based attacks
- Special moves and advanced gestures
- Game modes (training, versus, challenges)
- Audio and visual effects

## 🛠️ Tech Stack

- **3D Graphics**: Three.js
- **Hand Tracking**: MediaPipe
- **Physics**: Cannon-ES
- **Build**: Vite

## 🎯 Project Vision

Jank Wars pioneers **finger puppetry as a competitive sport**. By creating direct finger-to-limb control, we're establishing a new gaming category that's simultaneously intuitive (fingers control legs) and incredibly challenging (coordinating 5+ fingers for locomotion).

The result: genuine skill development, emergent comedy, and unforgettable gaming moments through digital marionette control.

## 🤝 Contributing

1. Fork and clone the repository
2. Test changes with actual hand tracking
3. Maintain 60 FPS performance
4. Document new features clearly

**Priority areas**: Combat mechanics, gesture recognition, visual polish, audio integration

---

**🕷️ Ready to puppeteer spiders with your fingers? `npm run dev` and let the finger ballet begin!**
