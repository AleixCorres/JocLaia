import { dragElement } from './elements.js';

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
        console.log('Drag leave on square ' + i)
      });
  
      square.addEventListener('dragover', e => {
        e.preventDefault();
        console.log('Drag over on square ' + i)
      });
      
      //comprovar donde puedo poner las fichas*
      //
  
      square.addEventListener('drop', e => {
        console.log('Drop on square ' + i)
        checksquare()

        let elementCopy
        
        // let lastPiece = 24
        // if (firstpiece) {
          
        // }else
        
        if (dragElement === 'solarPanel' && checksquare()) {
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
          
        }

      })
    })
  }

  function checksquare() {
    let checkedsquare =true

    // if () {
      
    // }


    return checkedsquare
  }
  
  export function initializeBoard() {}