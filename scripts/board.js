import { dragElement } from './elements.js';
import { arraySquareDragged } from './main.js';

export function createBoard(startElements) {
    
    const gameBoard = document.querySelector("#gameBoard")
   
    startElements.forEach((startElement, i) => {
      const square = document.createElement('div')
      square.classList.add('square')
      square.setAttribute('squareid', i)
      square.innerHTML = startElement
      gameBoard.append(square)
  
      // Dragenter for each square
      square.addEventListener('dragenter', e => {
        console.log('Drag enter on square ' + i)
      });
  
      // Dragleave for each square
      square.addEventListener('dragleave', e => {
      });
  
      square.addEventListener('dragover', e => {
        e.preventDefault();
      });
      
  
      square.addEventListener('drop', e => {
       

       

        
        
        
        let elementCopy
        if (dragElement === 'solarPanel' && checksquare(i, arraySquareDragged)) {
          elementCopy = document.createElement('img')
          elementCopy.src = 'img/solarpanel.png'
        } else if (dragElement === 'wire') {
          elementCopy = document.createElement('img')
          elementCopy.src = 'img/wire.png'
        } else if (dragElement === 'windTurbine') {
          elementCopy = document.createElement('img')
          elementCopy.src = 'img/windturbine.png'
        } else if (dragElement === 'connector') {
          elementCopy = document.createElement('img')
          elementCopy.src = 'img/connector.png'
        }

        if (elementCopy) {
          square.appendChild(elementCopy)
          arraySquareDragged.push(i)
        }

      })
    })
  }

  function checksquare(i, arraySquareDragged) {
    
    var lastDropSquare = arraySquareDragged[arraySquareDragged.length -1]
    console.log(lastDropSquare)

    var leftEdge = [0,7,14,21,28,35,42]
    var rightEdge = [6,13,20,27,34,41,48]
    var topEdge = [0, 1, 2, 3, 4, 5,6]
    var bottomEdge = [42,43,44,45,46,47,48]

    if (lastDropSquare === leftEdge) {
      option arguments,  
      if (i ===) {
          
        }
    // } if (i === ) {
      
    // }if (i === ) {
      
    // }if (i === ) {
      
    // }else {
      
    }


    var checkedsquare = true
    return checkedsquare
  }
  
  export function initializeBoard() {}