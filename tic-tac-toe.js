document.addEventListener("DOMContentLoaded", (event) => {
    const board = document.getElementById("board");
    const gameState = [];
    let currentPlayer = "X";
  
    for (let i = 0; i < board.children.length; i++) {
      const square = board.children[i];
      square.classList.add("square");
  
      square.addEventListener("click", () => {
        if (!gameState.includes("X") && !gameState.includes("O")) {
          if (!square.classList.contains("X") && !square.classList.contains("O")) {
            square.classList.add(currentPlayer);
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            gameState.push(square.classList.contains("X") ? "X" : "O");
          }
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
  