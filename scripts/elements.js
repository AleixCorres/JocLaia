// elements.js

// Define los elementos del juego
export const generator = '<img src="img/generator.png">'
// const solarPanel = '<img src="img/solarPanel.png">'
// const wire = '<img src="img/wire.png">'
// const windTurbine = '<img src="img/windTurbine.png">'
// const connector = '<img src="img/connector.png">'
export let dragElement


// funcion para hacer el drag and drop con los elementos del div elementsBoard
export function initializeElements() {
  const gamePieces = document.querySelectorAll(".piece");

  gamePieces.forEach((piece) => {
    piece.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', piece.id);
      dragElement = piece.id
      console.log('Adios ' + dragElement)
    });

    piece.addEventListener('dragend', (e) => {
      // Aquí puedes agregar el código necesario después de soltar el elemento
    });
  });
}

