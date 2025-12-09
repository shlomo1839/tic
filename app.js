import input from "analiza-sync";

function getPlayers(){
    const player1Name = input("Enter your number: ")
    let player1Symbol;

    while(true) {
        player1Symbol = input("Enter yor symbol for player1 (x/o):  ")
        player1Symbol = player1Symbol.toLowerCase();

        if (player1Symbol === 'x' || player1Symbol === 'o') {
            break;
        } else {
            console.log("Eror! Enter x/o only: ")
        }
        
    }
    const player2Name = input("Enter your number: ")
    const player2Symbol = input("Enter yor symbol for player1 (x/o):  ")

    console.log(`${player1Name} is ${player1Symbol}, ${player2Name} is ${player2Symbol}`)

    return [
        {name: player1Name, symbol: player1Symbol},
        {name: player2Name, symbol: player2Symbol},
    ];
}


function playerMove(board, player) {
  while (true) {
    const rowInput = input(
      player.name + " (" + player.symbol + ") - הכנס שורה (1-3): "
    );
    const colInput = input(
      player.name + " (" + player.symbol + ") - הכנס עמודה (1-3): "
    );

    const row = parseInt(rowInput, 10) - 1;
    const col = parseInt(colInput, 10) - 1;

    // בדיקת חוקיות אינדקסים
    if (
      isNaN(row) ||
      isNaN(col) ||
      row < 0 ||
      row >= BOARD_SIZE ||
      col < 0 ||
      col >= BOARD_SIZE
    ) {
      console.log("שגיאה: מיקום לא חוקי. נסה שוב.");
      continue;
    }

    // בדיקת תא פנוי
    if (board[row][col] !== EMPTY_CELL) {
      console.log("שגיאה: התא תפוס. בחר תא אחר.");
      continue;
    }

    board[row][col] = player.symbol;
    break;
  }
}

function main() {
  const board = createBoard();
  const players = getPlayers();
  let currentPlayerIndex = 0;

  while (true) {
    printBoard(board);

    const currentPlayer = players[currentPlayerIndex];
    playerMove(board, currentPlayer);

    if (checkWin(board, currentPlayer.symbol)) {
      printBoard(board);
      console.log("כל הכבוד " + currentPlayer.name + ", ניצחת!");
      break;
    }

    if (checkTie(board)) {
      printBoard(board);
      console.log("תיקו!");
      break;
    }

    // החלפת שחקן: 0 -> 1, 1 -> 0
    currentPlayerIndex = 1 - currentPlayerIndex;
  }
}

// הפעלת המשחק
main();