 var player1 = "x";
 var player2 = "o";
 var xMoves = [];
 var oMoves = [];
 var turn = 0;
var winningLines =[
 ["b1", "b2", "b3"], ["b4", "b5", "b6"], ["b7", "b8", "b9"], ["b1", "b4", "b7"], ["b2", "b5", "b8"], ["b3", "b6", "b9"], ["b1", "b5", "b9"], ["b3", "b5", "b7"]
 ];

$(document).ready(function() {
  var inputBox = $('.game-box').on('click', function() {
    if (turn % 2 === 0) {
      inputBox = player1; 
      xMoves.push(this.id);
    } else {
      inputBox = player2;
      oMoves.push(this.id);
    }
    turn++;
    $(this).html(inputBox);
    winners();
  });

function winners(xMoves) {
  for (var i = 0; i < winningLines.length; i++) {
    if(xMoves === winningLines) {
      alert(inputBox + " WON!")
    }
  }
}


}); // End of doc reeady