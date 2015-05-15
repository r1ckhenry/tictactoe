var board = [
            [ undefined, undefined, undefined ],
            [ undefined, undefined, undefined ],
            [ undefined, undefined, undefined ]
            ];

var playerOneName = "";
var playerTwoName = "";

// get each row array
function rowWin() {
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    checkRow(row);
  }
}

// check each row array
function checkRow(rowData) {
  var xCount = 0;
  var oCount = 0;
  for (var i = 0; i < rowData.length; i++) {
    if (rowData[i] === 1) {
      xCount += 1;
    } else if (rowData[i] === 2) {
      oCount += 2;
    }
  }
  testForWin(xCount);
  testForWin(oCount);
}

// get each col 'array'
function colWin() {
  var countA = 0;
  var countB = 0;
  var countC = 0;
  for (var i = 0; i < board.length; i++) {
    countA += board[i][0];
    countB += board[i][1];
    countC += board[i][2];
  }
  testForWin(countA);
  testForWin(countB);
  testForWin(countC);
}

// get each col 'array'
function diagonalWin() {
  var diagonal1 = board[0][0] + board[1][1] + board[2][2];
  var diagonal2 = board[0][2] + board[1][1] + board[2][0];
  testForWin(diagonal1);
  testForWin(diagonal2);
}

var getGameWrapper = $('.game-wrapper');
// test for win
function testForWin(val) {
  if (val === 3) {
    winner(playerOneName);
    $('.game-wrapper').addClass('js-allow-no-click');
  } else if (val === 6) {
    winner(playerTwoName);
    $('.game-wrapper').addClass('js-allow-no-click');
  } 
}

var clickCount = 0;
getGameWrapper.on('click', function(){
  clickCount += 1;
  if (clickCount === 9) {
    $(this).prepend("<div class='opacity-overlay'><h1 class='winner-text'>IT'S A TIE</h1></div>");
  }
});
  
function winner(name) {
  getGameWrapper.prepend('<div class="opacity-overlay"><h1 class="winner-text">' + name + ' WINS</h1></div>');
}

var alternate = 'x';

// function to get score and change player
function getScorePointAndChangePlayer() {
  if (alternate === 'x') {
    alternate = 'o';
    return 1;
  } else {
    alternate = 'x';
    return 2;
  }
}

// Start of DOM interactions 
$(document).ready(function(){

  // start game event listener
  $('#start').on('click', function(){
    $('.user-details').css('display', 'none');
    getGameWrapper.show();
    playerOneName = $('#playerOne').val();
    playerTwoName = $('#playerTwo').val();
  });

  // game-box event listner
  $('.game-box').on('click', function(){
    applySymbolToBoard($(this));
    var thisElement = $('.game-box').index($(this));;
    applyPointsToArray(thisElement);
    rowWin();
    colWin();
    diagonalWin();
  });

  function applySymbolToBoard(currentItem) {
    if (alternate === 'x') {
      currentItem.html('<div class="js-square"></div>');
    } else {
      currentItem.html('<div class="js-circle"></div>');
    }
    currentItem.addClass('js-allow-no-click');
  };

  // apply points to array
  function applyPointsToArray(gameBoxPosition) {
    var pos1 = undefined;
    var pos2 = undefined;
    if (gameBoxPosition <= 2) {
      pos1 = 0;
    } else if (gameBoxPosition <= 5) {
      pos1 = 1;
    } else {
      pos1 = 2;
    }
    board[pos1][getPositionTwo(pos1, gameBoxPosition)] = getScorePointAndChangePlayer();
  }

  // get position of the box and convert to notation
  function getPositionTwo(firstPos, boxPos) {
    if (firstPos === 0) {
      return boxPos;
    } else if (firstPos === 1) {
      return boxPos - 3;
    } else {
      return boxPos - 6;
    }
  }
}); // End of doc ready
