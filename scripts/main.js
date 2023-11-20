import { createBoard} from './board.js'
import { initializeElements } from './elements.js'
import { generator, house1, house2, house3, house4 } from './elements.js'

//Map 
const startElements = [
    house3,"","","","","",house4,
    "","","","","","","",
    "","","","","","","",
    "","","",generator,"","","",
    "","","","","","","",
    "","","","","","","",
    house1,"","","","","",house2
];
export let arraySquareDragged = [24]
let piecesDropped = []

document.addEventListener('DOMContentLoaded', () => {
  initializeElements()
  createBoard(startElements, piecesDropped)
  
})

export function deleteLastPiece(){

  let lastPiece = arraySquareDragged[arraySquareDragged.length -1]

  var penultimateSquare = document.querySelector('[squareid="' + lastPiece + '"]');
      penultimateSquare.removeChild(penultimateSquare.firstChild)


   arraySquareDragged.pop()
   piecesDropped.pop()

}
