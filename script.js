const board = document.getElementById('board');
const status = document.getElementById('status');
const restartBtn = document.getElementById('restart');
const xScoreDisplay = document.getElementById('x-score');
const oScoreDisplay = document.getElementById('o-score');
const modeInputs = document.querySelectorAll('input[name="mode"]');

let currentPlayer = "X";
let gameActive = true;
let boardState = Array(9).fill("");
let mode = "player"; 
let xScore = 0;
let oScore = 0;

modeInputs.forEach(input => {
  input.addEventListener('change', () => {
    mode = document.querySelector('input[name="mode"]:checked').value;
    restartGame();
  });
});

// Create cells
for (let i = 0; i < 9; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.dataset.index = i;
  board.appendChild(cell);
}

board.addEventListener('click', handleClick);
restartBtn.addEventListener('click', restartGame);

function handleClick(e) {
  const cell = e.target;
  const index = cell.dataset.index;

  if (!gameActive || !index || boardState[index] !== "") return;

  makeMove(index, currentPlayer);
  if (!gameActive || mode === "player") return;

  setTimeout(computerMove, 500);
}

function makeMove(index, player) {
  boardState[index] = player;
  document.querySelector(`.cell[data-index="${index}"]`).textContent = player;

  if (checkWinner(player)) {
    status.textContent = `${player} Wins!`;
    gameActive = false;
    updateScore(player);
  } else if (boardState.every(cell => cell !== "")) {
    status.textContent = "It's a Draw!";
    gameActive = false;
  } else {
    currentPlayer = player === "X" ? "O" : "X";
    status.textContent = `${currentPlayer}'s Turn`;
  }
}

function computerMove() {
  if (!gameActive) return;

  let emptyIndices = boardState.map((val, idx) => val === "" ? idx : null).filter(v => v !== null);
  let randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
  makeMove(randomIndex, "O");
}

function checkWinner(player) {
  const winCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  return winCombos.some(combo => 
    combo.every(index => boardState[index] === player)
  );
}

function updateScore(player) {
  if (player === "X") {
    xScore++;
    xScoreDisplay.textContent = xScore;
  } else {
    oScore++;
    oScoreDisplay.textContent = oScore;
  }
}

function restartGame() {
  boardState = Array(9).fill("");
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = "");
  gameActive = true;
  currentPlayer = "X";
  status.textContent = "X's Turn";
}
