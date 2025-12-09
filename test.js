async function getPlayers() {
  const player1Name = await askQuestion("הכנס שם לשחקן 1: ");
  let player1Symbol;

  while (true) {
    player1Symbol = await askQuestion('הכנס סימן עבור שחקן 1 (x/o): ');
    player1Symbol = player1Symbol.toLowerCase();

    if (player1Symbol === "x" || player1Symbol === "o") {
      break;
    }
    console.log("שגיאה: יש להכניס רק x או o.");
  }

  const player2Name = await askQuestion("הכנס שם לשחקן 2: ");
  const player2Symbol = player1Symbol === "x" ? "o" : "x";

  console.log(
    `${player1Name} משחק עם ${player1Symbol}, ${player2Name} משחק עם ${player2Symbol}`
  );

  return [
    { name: player1Name, symbol: player1Symbol },
    { name: player2Name, symbol: player2Symbol },
  ];
}
