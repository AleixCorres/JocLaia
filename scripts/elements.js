// elements.js

// Define los elementos del juego
export const generator = '<img src="img/generator.png">'
export const solarPanel = '<img src="img/solarPanel.png">'
export const wire = '<img src="img/wire.png">'
export const windTurbine = '<img src="img/windTurbine.png">'
export const connector = '<img src="img/connector.png>'

// funcion para hacer el drag and drop con los elementos del div elementsBoard
export function initializeElements() {
  const gamePieces = document.querySelectorAll(".piece");

  gamePieces.forEach((piece) => {
    piece.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', piece.id);
      console.log(piece.id)
    });

    piece.addEventListener('dragend', (e) => {
      // Aquí puedes agregar el código necesario después de soltar el elemento
    });
  });
}

