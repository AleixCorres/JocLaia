// caja.js

// Función para inicializar el elemento "caja"
export function initializeCaja() {
    const caja = document.querySelector('#connector');
  
    caja.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/plain', 'caja');
      console.log('Drag Start on caja');
    });
  
    caja.addEventListener('dragend', e => {
      console.log('Drag End on caja');
    });
  }
