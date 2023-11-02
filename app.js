const gameBoard = document.querySelector("#gameBoard");


const startElements = [
    "","","","","","","",
    "","","","","","","",
    "","","","","","","",
    "","","",generator,"","","",
    "","","","","","","",
    "","","","","","","",
    "","","","","","","",
];

function createBoard() {
    startElements.forEach((startElement, i)=> {
        const square = document.createElement('div');
        square.classList.add('square');
        square.setAttribute('squareid' , i)
        square.innerHTML = startElement;
        gameBoard.append(square);

    })
}

const gameElements = document.querySelector("#elementsBoard");
const gamePieces = [generator, solarPanel, wire, windTurbine, connector];


function initialElements(){
    gamePieces.forEach((gamePiece)=> {
       const piece = document.createElement('div');
       piece.classList.add('square');
       piece.innerHTML = gamePiece;
        gameElements.append(piece);

    })
    
}


createBoard();
initialElements();

const allSquares = document.querySelectorAll("#gameBoard .square");

allSquares.forEach(square => {
    square.addEventListener('dragstart' , dragStart);
})

let startPositionId

function dragStart(e) {
    console.log(e.target.getAttribute(squareid));
}