var board = [
            [ undefined, undefined, undefined ],
            [ undefined, undefined, undefined ],
            [ undefined, undefined, undefined ]
            ];


// get each row array
function rowWin() {
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    checkRow(row);
  }
}
rowWin();

// check each row array
function checkRow(rowData) {
  var xCount = 0;
  var oCount = 0;
  for (var i = 0; i < rowData.length; i++) {
    if (rowData[i] === 1) {
      xCount += 1
    } else if (rowData[i] === 2) {
      oCount += 2
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
colWin();

// get each col 'array'
function diagonalWin() {
  var diagonal1 = board[0][0] + board[1][1] + board[2][2];
  var diagonal2 = board[0][2] + board[1][1] + board[2][0];
  testForWin(diagonal1);
  testForWin(diagonal2);
}
diagonalWin();

// test for win
function testForWin(val) {
  if (val === 3) {
    console.log('X WINS');
  } else if (val === 6) {
    console.log('O WINS');
  }
}

$(document).ready(function(){

  $('.game-box').on('click', function(){
    var thisElement = $('.game-box').index($(this));;
    applyPointsToArray(thisElement);
  });

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
    board[pos1][getPositionTwo(pos1)] = 1;
  }

  function getPositionTwo(firstPos) {
    
  }


});
