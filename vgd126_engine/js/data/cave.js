/**
 * @file data/cave.js
 * @description Tile layout + sprite states for the cave layers.
 *
 * Layout uses numbers to pick sprite "states", and "x" or false to skip.
 */

/* =====================================================================
   ✏️ STUDENT EDIT ZONE: TILESET IMAGE
   Replace src with your tileset; tiles are 64x64 in the current data.
   Add more states or remove states as each state represents a tile.
   ===================================================================== */
var x = false;
var caveData = {
  info: {
    layout: [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1],
      [1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1],
      [1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4,x,x,x,x,x,x,x,x,x,x,x,4,1],
      [x,x,x,x,x,x,x,x,x,x,x,x,4,x,x,x,x,x,x,x,4,4,x,x,x,x,x,x,x,x,x,x,4,4,1],
      [x,x,x,x,x,x,x,x,x,x,x,x,4,x,x,x,x,x,x,4,4,4,x,x,x,x,x,x,x,x,x,4,4,4,1],
      [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]
    ],
    src: `images/Circus_TileSet-sheet-sheet.png`
  },
  states: [
    { fps: 5, cycle: false, frames: [ { width: 64, height: 64, startX: 0,   startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 64,  startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 128, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 192, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 256, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 320, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 384, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 448, startY: 0 } ] },
    { fps: 1, cycle: false, frames: [ { width: 64, height: 64, startX: 512, startY: 0 } ] }
  ]
};

var caveBackData = {
  info: {
    layout: [
      [0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8],
      [2,2,2,6,2,2,6,2,2,6,2,2,6,2,2,6,2,2,6,2,2,6,2,2,6,2,2,6,2,2,6,2,2,6,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
      [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    ],
    src: `images/Circus_TileSet-sheet-sheet.png`
  },
  states: caveData.states
};

var caveHitData = {
  info: {
    layout: [
      [0,8,1,8,1,1,8,1,1,1,1,1,1,8,8,1,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
      [2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
      [8,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
      [8,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2],
      [x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,1,2],
      [x,x,x,x,x,x,x,x,x,x,x,x,1,x,x,x,x,x,x,x,1,1,x,x,x,x,x,x,x,x,x,x,1,1,2],
      [x,x,x,x,x,x,x,x,x,x,x,x,1,x,x,x,x,x,x,1,1,1,x,x,x,x,x,x,x,x,x,1,1,1,2]
    ],
    src: `images/Circus_TileSet-sheet-sheet.png`
  },
  states: caveData.states
};