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
      square.addEventListener('dragover', e => {
        e.preventDefault();
      });
  
      square.addEventListener('drop', e => {
        console.log('Drop on square ' + i);
        
        
        let elementCopy
        if (dragElement === 'solarPanel' && checksquare(i, arraySquareDragged)) {
          elementCopy = document.createElement('img')
          elementCopy.src = 'img/solarpanel.png'
        } else if (dragElement === 'wire' && checksquare(i, arraySquareDragged)) {
          elementCopy = document.createElement('img')
          elementCopy.src = 'img/wire.png'
        } else if (dragElement === 'windTurbine' && checksquare(i, arraySquareDragged)) {
          elementCopy = document.createElement('img')
          elementCopy.src = 'img/windturbine.png'
        } else if (dragElement === 'connector'  && checksquare(i, arraySquareDragged)) {
          elementCopy = document.createElement('img')
          elementCopy.src = 'img/connector.png'
        }

        checkPenultimate(i, arraySquareDragged)

        if (elementCopy) {
          square.appendChild(elementCopy)
          arraySquareDragged.push(i)
        }

        

      })
    })
  }

  function checkPenultimate(i, arraySquareDragged) {
    
    let antepenultimate = arraySquareDragged[arraySquareDragged.length -2]
    let penultimate = arraySquareDragged[arraySquareDragged.length -1]
    let ultimate = i
    //
    let goesToLeft = false
    let goesToRight = false
    let goesToTop = false
    let goesToBottom = false

    //
    let comesFromLeft = false
    let comesFromRight = false
    let comesFromTop = false
    let comesFromBottom = false

  if (ultimate + 1 === penultimate) {
      goesToLeft = true
    } else if(ultimate - 1 === penultimate){
      goesToRight = true
    } else if(ultimate + 7 === penultimate){
      goesToTop = true
    } else if(ultimate - 7 === penultimate){
      goesToBottom = true
    }

    if (penultimate + 1 === antepenultimate) {
      comesFromLeft = true
    } else if(penultimate - 1 === antepenultimate){
      comesFromRight = true
    } else if(penultimate + 7 === antepenultimate){
      comesFromTop = true
    } else if(penultimate - 7 === antepenultimate){
      comesFromBottom = true
    }

    if (goesToTop && comesFromRight || goesToRight && comesFromTop) {
      //quiero que esta funcion cambie la imagen que se ha puesto antes
      console.log("hola " + penultimate)
    } else if (goesToTop && comesFromBottom || goesToBottom && comesFromTop) {
      
    } else if (goesToTop && comesFromLeft || goesToBottom && comesFromTop ) {
      
    } else if (goesToBottom && comesFromLeft|| goesToLeft && comesFromBottom){

    }else if (goesToBottom && comesFromRight || goesToRight && comesFromBottom ) {
      
    }else if (goesToRight && comesFromLeft || goesToLeft && comesFromRight) {
      
    }


  }

  function checksquare(i, arraySquareDragged) {
    let checkedsquare = true
    let lastDropSquare = arraySquareDragged[arraySquareDragged.length -1]

    //
    const leftEdge = [7,14,21,28,35]
    const rightEdge = [13,20,27,34,41]
    const topEdge = [1, 2, 3, 4, 5]
    const bottomEdge = [43,44,45,46,47]

  
    let top = lastDropSquare-7
    let right = lastDropSquare+1
    let bottom = lastDropSquare+7
    let left = lastDropSquare-1
    
    if (leftEdge.includes(lastDropSquare)) { 
      let possibleOptions = [top, right, bottom]  
      console.log(possibleOptions) 
      if (possibleOptions.includes(i)) {
        
      }else{
        checkedsquare = false
      }
      } else if (rightEdge.includes(lastDropSquare)) {
      let possibleOptions = [top, left, bottom]
      if (possibleOptions.includes(i)) {
        
      }else{
        checkedsquare = false
      }
    } else if (topEdge.includes(lastDropSquare)) {
      let possibleOptions = [bottom, right, left]
      if (possibleOptions.includes(i)) {
        
      }else{
        checkedsquare = false
      }
    } else if (bottomEdge.includes(lastDropSquare)) {
      let possibleOptions = [top, right, left]
      if (possibleOptions.includes(i)) {
        
      }else{
        checkedsquare = false
      }
    }else {
      let possibleOptions = [top, right,bottom, left]
      if (possibleOptions.includes(i)) {
        
      }else{
        checkedsquare = false
      }
    }
    if (arraySquareDragged.includes(i)) {
      checkedsquare = false
    }



    return checkedsquare
  }
