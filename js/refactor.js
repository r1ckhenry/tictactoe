 var player1 = "x";
 var player2 = "o";
 var board = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined]
 var turn = 0;
 var winningLines =[
   [0, 1, 2], 
   [3, 4, 5], 
   [6, 7, 8], 
   [0, 3, 6], 
   [1, 4, 7], 
   [2, 5, 8], 
   [0, 4, 8], 
   [2, 4, 6]
 ];

$(document).ready(function() {
  
  var inputBox = $('.game-box').on('click', function() {
    if (turn === 0) {
      board[$(this).index()] = player1;
      $(this).html('<div class="js-square"></div>');
      testForWin(playerOneName);
      turn += 1;
    } else {
      board[$(this).index()] = player2;
      $(this).html('<div class="js-circle"></div>');
      testForWin(playerTwoName);
      turn -= 1;
    }
  });

function testForWin(name) {
  $.each(winningLines, function(i, e) {
    if(board[e[0]] == board[e[1]] && board[e[1]] == board[e[2]] && board[e[0]] !== undefined) {
      $('.game-wrapper').prepend('<div class="opacity-overlay"><h1 class="winner-text">' + name + ' WINS</h1></div>');
    }
  });
}

var clickCount = 0;
$('.game-wrapper').on('click', function(){
  clickCount += 1;
  if (clickCount === 9) {
    $(this).prepend("<div class='opacity-overlay'><h1 class='winner-text'>IT'S A TIE</h1></div>");
  }
});

$('#start').on('click', function(){
  $('.user-details').css('display', 'none');
    $('.game-wrapper').show();
    playerOneName = $('#playerOne').val();
    playerTwoName = $('#playerTwo').val();
});

}); // End of doc reeady


