var prompt = require('prompt-sync')();
var Board = require('./board');

// initialization
var board = new Board();
var player = 'X';
var gameState = 'active';

while(gameState === 'active') {
  board.displayBoard();

  let winner = board.checkWinner();
  if(winner) {
    console.log('Player ' + winner + ' is the winner!');
    process.exit();
  } else if (board.tilesMarked() === 9) {
    console.log('The game ends in a stalemate!');
    process.exit();
  }

  let nextMove = promptPlayerInput(player);
  board.toggle(nextMove.row, nextMove.col, player);
  switchPlayer();
}

function promptPlayerInput(player) {
  console.log('It is your turn, Player ' + player + '.');
  var row = prompt('Please input a row between 0 - 2: ');
  var col = prompt('Please input a column between 0 - 2: ');
  return {row: row, col: col};
};

function switchPlayer() {
  if(player === 'X') {
    player = 'O';
  } else {
    player = 'X';
  }
};
