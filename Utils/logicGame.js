const { BOARD_SIZE, EMPTY_CELL } = require("/utils/index.js");



function checkWin(board, player) {
    for (let i = 0; i < BOARD_SIZE; i++) {
        if (
            board[i][0] === player &&
            board[i][1] === player &&
            board[i][2] === player
        ) {
        return true;
        }
    }

    for (let j = 0; j < BOARD_SIZE; j++) {
        if (
            board[0][j] === player &&
            board[1][j] === player &&
            board[2][j] === player
        ) {
        return true;
        }
    }

    if (
        board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player
    ) {
      return true;
    }

    if (
        board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player
    ) {
      return true;
    }
    
    return false
}


function checkTie(board) {
    for (let i = 0; i < BOARD_SIZE; i++) {
        for (let j = 0; j < BOARD_SIZE; j++) {
            if (board[i][j] === EMPTY_CELL) {
                return false;
            }
        }
    }
    return true;
}


module.exports = {
            checkWin,
            checkTie,
            };
