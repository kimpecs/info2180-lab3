document.addEventListener("DOMContentLoaded", (event) => {
    const board = document.getElementById("board");
    const gameState = Array(9).fill(""); 
    let currentPlayer = "X";
    let gameEnded = false;

    
    const winCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
  
    const status = document.getElementById("status");
    const newGameButton = document.getElementById("newGameButton");

    function resetGame() {
      for (let i = 0; i < gameState.length; i++) {
        gameState[i] = "";
        const square = board.children[i];
        square.classList.remove("X", "O");
        square.innerHTML = "";
      }
  
      status.innerHTML = "Move your mouse over a square and click to play an X or an O.";
      status.classList.remove("you-won");
      currentPlayer = "X";
      gameEnded = false;
    }
  
    newGameButton.addEventListener("click", () => {
      resetGame();
    });
  
    for (let i = 0; i < board.children.length; i++) {
      const square = board.children[i];
      square.classList.add("square");
  
      square.addEventListener("click", () => {
        if (!gameState[i] && !gameEnded) {
          square.classList.add(currentPlayer);
          gameState[i] = currentPlayer;
          square.innerHTML = currentPlayer;
  
          for (const combination of winCombinations) {
            const [a, b, c] = combination;
            if (
              gameState[a] === currentPlayer &&
              gameState[b] === currentPlayer &&
              gameState[c] === currentPlayer
            ) {
              gameEnded = true;
              status.innerHTML = `Congratulations! ${currentPlayer} is the Winner!`;
              status.classList.add("you-won");
            }
          }
          currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
      });
  
      square.addEventListener("mouseover", () => {
        square.classList.add("hover");
      });
  
      square.addEventListener("mouseleave", () => {
        square.classList.remove("hover");
      });
    }
  });
  