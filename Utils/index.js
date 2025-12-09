const BOARD_SIZE = 3;
const EMPTY_CELL = " ";

function createBoard() {
const board = [];
for (let i = 0; i < BOARD_SIZE; i++) {
const row = [];
for (let j = 0; j < BOARD_SIZE; j++) {
row.push(EMPTY_CELL);
}
board.push(row);
}
return board;
}

function printBoard(board) {
const dividerLine = "-------------";
console.log(dividerLine);
for (let i = 0; i < BOARD_SIZE; i++) {
let rowString = "";
for (let j = 0; j < BOARD_SIZE; j++) {
rowString += " " + board[i][j] + " ";
if (j < BOARD_SIZE - 1) {
rowString += "|";
}
}
console.log("|" + rowString + "|");
console.log(dividerLine);
}
}

// printBoard(createBoard())

module.exports = {
                BOARD_SIZE,
                EMPTY_CELL,
                createBoard,
                printBoard,
                };
