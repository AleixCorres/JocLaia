import { createBoard, initializeBoard } from './board.js';
import { initializeElements } from './elements.js';
import { initializeCaja } from './caja.js';
import { generator } from './elements.js';

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
  createBoard(startElements);
  initializeElements();
  //initializeCaja();
  initializeBoard(); 
});