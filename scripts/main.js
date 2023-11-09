import { createBoard, initializeBoard } from './board.js'
import { initializeElements } from './elements.js'
import { generator } from './elements.js'

//Map 
const startElements = [
    "","","","","","","",
    "","","","","","","",
    "","","","","","","",
    "","","",generator,"","","",
    "","","","","","","",
    "","","","","","","",
    "","","","","","","",
];

document.addEventListener('DOMContentLoaded', () => {
  initializeElements()
  createBoard(startElements)
  
  // initializeBoard()
  
});