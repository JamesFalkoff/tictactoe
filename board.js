function Board(tiles) {
  if(!tiles) {
    this.tiles = [];
    this.tiles[0] = ['-', '-', '-'];
    this.tiles[1] = ['-', '-', '-'];
    this.tiles[2] = ['-', '-', '-'];
  } else {
    this.tiles = tiles;
  }
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
  // check rows
  for(let i = 0; i < this.tiles.length; i++) {
    if(this.tiles[i][0] === this.tiles[i][1]
      && this.tiles[i][1] === this.tiles[i][2]) {
      if(this.tiles[i][0] !== '-') {
        return this.tiles[i][0];
      }
    }
  }

  // check columns
  for(let i = 0; i < this.tiles[0].length; i++) {
    if(this.tiles[0][i] === this.tiles[1][i]
      && this.tiles[1][i] === this.tiles[2][i]) {
      if(this.tiles[0][i] !== '-') {
        return this.tiles[0][i];
      }
    }
  }

  // check diagonals
  if(this.tiles[0][0] === this.tiles[1][1]
    && this.tiles[1][1] === this.tiles[2][2]) {
      if(this.tiles[0][0] !== '-') {
        return this.tiles[0][0];
      }    
  }
  if(this.tiles[0][2] === this.tiles[1][1]
    && this.tiles[1][1] === this.tiles[2][0]) {
      if(this.tiles[0][2] !== '-') {
        return this.tiles[0][2];
      }    
  }

  // no winner yet
  return null;
}

module.exports = Board;

