var expect = require('chai').expect;
var Board = require('../board');

describe('Board', function() {

  it('should calculate the winner based on board state', function() {
    // test row victory
    let b = new Board([['X','X','X'],['0','0','-'],['-','-','-']]);
    expect(b.checkWinner()).to.equal('X');

    // test column victory
    b = new Board([['X','-','O'],['X','-','O'],['-','X','O']]);
    expect(b.checkWinner()).to.equal('O');      

    // test forward diagonal victory
    b = new Board([['X','O','O'],['-','X','-'],['-','-','X']]);
    expect(b.checkWinner()).to.equal('X');

    // test backward diagonal victory
    b = new Board([['X','X','O'],['-','O','-'],['O','-','X']]);
    expect(b.checkWinner()).to.equal('O');    
  
    // test no victory
    b = new Board();
    expect(b.checkWinner()).to.equal(null);
  });

  it('should calculate the number of markers on the board', function() {
    let b = new Board();
    expect(b.tilesMarked()).to.equal(0);

    b = new Board([['X','X','O'],['X','O','X'],['O','O','X']]);
    expect(b.tilesMarked()).to.equal(9);    
  });

});