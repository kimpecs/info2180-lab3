document.addEventListener("DOMContentLoaded", () => {
    const boardCells = document.querySelectorAll(".square");
    const gameState = [];
    let currentPlayer = "X";
  
    boardCells.forEach((cell) => {
      cell.addEventListener("click", () => {
        if (!cell.classList.contains("X") && !cell.classList.contains("O")) {
          cell.classList.add(currentPlayer);
          currentPlayer = currentPlayer === "X" ? "O" : "X";
          gameState.push(cell.classList.contains("X") ? "X" : "O");
        }
      });
    });
  });
  