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
  
      square.addEventListener('drop', e => {
        console.log('Drop on square ' + i)
        
        let elementCopy
        console.log("Hola " + dragElement)
        elementCopy = document.createElement('img');
        if (dragElement === 'solarPanel') {
          elementCopy.src = 'img/solarpanel.png'
        } else if (dragElement === 'wire') {
          elementCopy.src = 'img/wire.png'
        } else if (dragElement === 'windTurbine') {
          elementCopy.src = 'img/windturbine.png'
        } else if (dragElement === 'connector') {
          elementCopy.src = 'img/connector.png';
        }

        if (elementCopy) {
          square.appendChild(elementCopy)
          
        }

      })
    })
  }
  
  export function initializeBoard() {}