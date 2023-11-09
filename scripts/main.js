import { createBoard} from './board.js'
import { initializeElements } from './elements.js'
import { generator, house1, house2, house3, house4 } from './elements.js'

//Map 
const startElements = [
    "",house3,"","",house4,"","",
    "","","","","","","",
    "","","","","","","",
    "","","",generator,"","","",
    "","","","","",house2,"",
    "","","","","","","",
    house1,"","","","","",""
];

document.addEventListener('DOMContentLoaded', () => {
  initializeElements()
  createBoard(startElements)
  
  // initializeBoard()
  
});