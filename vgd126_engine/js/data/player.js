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
    src: `images/MR_Nebula_Spritesheet.png` // ← replace with your asset, e.g., 'images/hero.png'
  },
  states: {
    // idle
    idle: {
      fps: 15, cycle: true,
      frames: [
        { width: 64, height: 64, startX: 0,   startY: 0 },
        { width: 64, height: 64, startX: 128, startY: 0 }
      ]
    },
    // walk
    walk: {
      fps: 4, cycle: true,
      frames: [
        { width: 64, height: 64, startX: 0,   startY: 64 },
        { width: 64, height: 64, startX: 64, startY: 64 },
        { width: 64, height: 64, startX: 128, startY: 64 },
        { width: 64, height: 64, startX: 192, startY: 64 },
        { width: 64, height: 64, startX: 257, startY: 64 },
        { width: 64, height: 64, startX: 320, startY: 64 },
        { width: 64, height: 64, startX: 384, startY: 64 },
        { width: 64, height: 64, startX: 448, startY: 64 }
      ]
    },
    // jump
    jump: {
      fps: 15, cycle: false,
      frames: [ { width: 64, height: 64, startX: 0, startY: 128 } ]
    },
    // crouch
    crouch: {
      fps: 15, cycle: true,
      frames: [
        { width: 64, height: 64, startX: 64, startY: 128 },
        { width: 64, height: 64, startX: 64, startY: 128 }
      ]
    },
    // attack
    attack: {
      fps: 3, cycle: false,
      frames: [
        { width: 64, height: 64, startX: 128, startY: 128 },
        { width: 64, height: 64, startX: 128, startY: 128 }
      ]
    }
  }
}