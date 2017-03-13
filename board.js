function Board() {
    this.tiles = [];
    this.tiles[0] = ['-', '-', '-'];
    this.tiles[1] = ['-', '-', '-'];
    this.tiles[2] = ['-', '-', '-'];
};

Board.prototype.displayBoard = function() {
  console.log('Current board state:')
  for(let i = 0; i < this.tiles.length; i++) {
    console.log(this.tiles[i][0] + ' ' + this.tiles[i][1] + ' ' + this.tiles[i][2]);
  }
};

Board.prototype.toggle = function(row, col, marker) {
  this.tiles[row][col] = marker;
};

Board.prototype.tilesMarked = function() {
  let tilesMarked = 0;
  for(let i = 0; i < this.tiles.length; i++) {
    for(let j = 0; j < this.tiles[i].length; j++) {
      if(this.tiles[i][j] !== '-') {
        tilesMarked++;
      }
    }
  }
  return tilesMarked;
};

Board.prototype.checkWinner = function() {
  return null;
}

module.exports = Board;

