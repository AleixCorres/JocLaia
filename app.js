const gameBoard = document.querySelector("#gameBoard");

const width=7;
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
    startElements.forEach((startElement)=> {
        const square = document.createElement('div');
        square.classList.add('square');
        gameBoard.append(square);
    })
}
createBoard()