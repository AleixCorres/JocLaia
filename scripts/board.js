export function createBoard(startElements) {
    const gameBoard = document.querySelector("#gameBoard");
  
    startElements.forEach((startElement, i) => {
      const square = document.createElement('div');
      square.classList.add('square');
      square.setAttribute('squareid', i);
      square.innerHTML = startElement;
      gameBoard.append(square);
  
      // Dragenter for each square
      square.addEventListener('dragenter', e => {
        console.log('Drag enter on square ' + i);
      });
  
      // Dragleave for each square
      square.addEventListener('dragleave', e => {
        console.log('Drag leave on square ' + i);
      });
  
      square.addEventListener('dragover', e => {
        e.preventDefault();
        console.log('Drag over on square ' + i);
      });
  
      square.addEventListener('drop', e => {
        console.log('Drop on square ' + i);
        
        let elementCopy;
        let dropElement = windTurbine
        if (dropElement === solarPanel) {
          elementCopy = solarPanel.cloneNode(true);
        } else if (dropElement === wire) {
          elementCopy = wire.cloneNode(true);
        } else if (dropElement === windTurbine) {
          elementCopy = windTurbine.cloneNode(true);
        } else if (dropElement === connector) {
          elementCopy = connector.cloneNode(true);
        }

        if (elementCopy) {
          square.appendChild(elementCopy);
        }

      });
    });
  }
  
  export function initializeBoard() {}