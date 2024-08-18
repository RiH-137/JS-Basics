let currentPlayer = 'X';
let array = Array(9).fill(null);


function checkWinner() {
  // Use strict equality for null checks
  if (
    (array[0] === array[1] && array[1] === array[2] && array[0] !== null) ||
    (array[3] === array[4] && array[4] === array[5] && array[3] !== null) ||
    (array[6] === array[7] && array[7] === array[8] && array[6] !== null) ||
    (array[0] === array[3] && array[3] === array[6] && array[0] !== null) ||
    (array[1] === array[4] && array[4] === array[7] && array[1] !== null) ||
    (array[2] === array[5] && array[5] === array[8] && array[2] !== null) ||
    (array[0] === array[4] && array[4] === array[8] && array[0] !== null) ||
    (array[2] === array[4] && array[4] === array[6] && array[2] !== null)
  ) {
    // document.write(`Winner is ${currentPlayer}`);
    if (currentPlayer === 'O')   {
        document.getElementById('result-text').textContent = 'X Wins!';
    }
    else {
        document.getElementById('result-text').textContent = 'O Wins!';
    }
  } else if (
    array[0] !== null &&
    array[1] !== null &&
    array[2] !== null &&
    array[3] !== null &&
    array[4] !== null &&
    array[5] !== null &&
    array[6] !== null &&
    array[7] !== null &&
    array[8] !== null
  ) {
    document.write("Game is Draw");
  }
}

function handleClick(el) {
  const id = Number(el.id);

  // Check if cell is empty before updating and use alert instead of return
  if (array[id] !== null) {
    alert("Cell is already filled!");
    return;
  }

  array[id] = currentPlayer;
  el.innerText = currentPlayer;
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  // calling checkWinner function after each move
  checkWinner();
}


// Function to reset the game
function resetGame() {
    // Reload the entire page
    window.location.reload();
}

// Add an event listener to the reset button
document.getElementById('resetButton').addEventListener('click', resetGame);


