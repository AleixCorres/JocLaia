// elements.js

// Define los elementos del juego
export const generator = '<div class="piece" id="generator"><img src="img/generator.png"></div>';
const solarPanel = '<div class="piece" id="solarPanel"><img src="img/solarPanel.png"></div>';
const wire = '<div class="piece" id="wire"><img src="img/wire.png"></div>';
const windTurbine = '<div class="piece" id="windTurbine"><img src="img/windTurbine.png"></div>';
const connector = '<div class="piece" id="connector"><img src="img/connector.png"></div>';

export const gamePieces = [solarPanel, wire, windTurbine, connector];

// Función para inicializar los elementos del juego
export function initializeElements() {
  const gameElements = document.querySelector("#elementsBoard");

  gamePieces.forEach((gamePiece) => {
    const piece = document.createElement('div');
    piece.innerHTML = gamePiece;
    piece.classList.add('game-piece');
    piece.querySelector('.piece').setAttribute('draggable', true);

    gameElements.append(piece);

    piece.addEventListener('dragstart', e => {
      const draggedElement = e.target.querySelector('.piece');
      if (draggedElement) {
        const value = draggedElement.getAttribute('id');
        console.log("Element being dragged: " + value);
      }
    });
    
    

    piece.addEventListener('dragend', e => {
      const elementId = e.target.querySelector('.piece').getAttribute('id'); // Para asegurarte de que obtienes el ID correctamente
      console.log('Drag End on ' + elementId);
    });
  });
}
