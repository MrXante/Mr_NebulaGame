/**
 * @file data/player.js
 * @description Player sprite sheet & animation data.
 */

/* =====================================================================
   ✏️ STUDENT EDIT ZONE: PLAYER SPRITESHEET PATH
   - Put your PNG/JPG in /images and change the path below.
   - Each frame is currently 128x128 laid out horizontally.
   - Idle must be present and is required for the engine to work
   ===================================================================== */
var playerData = {
  info: {
    src: `images/snale.png` // ← replace with your asset, e.g., 'images/hero.png'
  },
  states: {
    // idle
    idle: {
      fps: 15, cycle: true,
      frames: [
        { width: 128, height: 128, startX: 0,   startY: 0 },
        { width: 128, height: 128, startX: 128, startY: 0 }
      ]
    },
    // walk
    walk: {
      fps: 1, cycle: true,
      frames: [
        { width: 128, height: 128, startX: 0,   startY: 0 },
        { width: 128, height: 128, startX: 128, startY: 0 },
        { width: 128, height: 128, startX: 256, startY: 0 },
        { width: 128, height: 128, startX: 384, startY: 0 },
        { width: 128, height: 128, startX: 512, startY: 0 }
      ]
    },
    // jump
    jump: {
      fps: 15, cycle: false,
      frames: [ { width: 128, height: 128, startX: 640, startY: 0 } ]
    },
    // crouch
    crouch: {
      fps: 15, cycle: true,
      frames: [
        { width: 128, height: 128, startX: 768, startY: 0 },
        { width: 128, height: 128, startX: 768, startY: 0 },
        { width: 128, height: 128, startX: 768, startY: 0 },
        { width: 128, height: 128, startX: 768, startY: 0 },
        { width: 128, height: 128, startX: 896, startY: 0 }
      ]
    },
    // attack
    attack: {
      fps: 3, cycle: false,
      frames: [
        { width: 128, height: 128, startX: 1024, startY: 0 },
        { width: 128, height: 128, startX: 1024, startY: 0 },
        { width: 128, height: 128, startX: 1024, startY: 0 },
        { width: 128, height: 128, startX: 1152, startY: 0 },
        { width: 128, height: 128, startX: 1152, startY: 0 },
        { width: 128, height: 128, startX: 1152, startY: 0 },
        { width: 128, height: 128, startX: 1152, startY: 0 }
      ]
    }
  }
}