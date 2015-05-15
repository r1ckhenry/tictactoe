Noughts & Crosses

This game was built using JavaScript and the jQuery library.

Code

The board is represented by a 'board' array. This has 3 arrays within it, one for each row. The three arrays have 3 values each of 'undefined' to represent the 9 spaces on the board.

Each player takes it in turn and assigns a 1 or 2 to the array of arrays depending on the position.

It then tests for a win by row, diagonal and column. If these amount to 3 or 6 then a winner is declared.

Download files and open index.html in browser to play.