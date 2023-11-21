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
var boton = document.getElementById('deleteLastElement');

document.addEventListener('DOMContentLoaded', () => {
  initializeElements()
  createBoard(startElements, piecesDropped)
  boton.addEventListener('click', deletelastpiece)


})

function deletelastpiece(){

  let lastPiece = arraySquareDragged[arraySquareDragged.length -1]

  let penultimateSquare = document.querySelector('[squareid="' + lastPiece + '"]');
  

  if (lastPiece !== 24) {
    arraySquareDragged.pop()
    piecesDropped.pop()
    if (lastPiece !== 0 && lastPiece !== 6 && lastPiece !== 42 && lastPiece !== 48) {
      penultimateSquare.removeChild(penultimateSquare.firstChild)
    }
  }
}

