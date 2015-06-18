/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.makeEmptyMatrix = function(n){
  var empty = [];
  for (var i = 0; i < n; i++) {
    var newRow = [];
    for (var j = 0; j < n; j++) {
      newRow.push(0);
    }
    empty.push(newRow);
  }
  return empty;
}

window.findNRooksSolution = function(n) {
  var solutions = [];

  var board = new Board({n:n});

  var recursiveHelper = function(indexOfLastRowAdded, arr) {
    var tempBoard = board.rows();

    for (var row = 0; row < n; row++){
      for (var col = 0; col < n; col++) {
        if (arr[row][col] !== tempBoard[row][col]){
          board.togglePiece(row, col);
        }
      }
    }

    if (!board.hasAnyColConflicts()){
      if (indexOfLastRowAdded === n-1) {
        solutions.push(arr);
      } else {
        for (var i = 0; i < n; i++){
          //var newArr = arr.slice(0);
          var newArr = arr.map(function(item){ return item.slice(0);});
          newArr[indexOfLastRowAdded+1][i] = 1;
          recursiveHelper(indexOfLastRowAdded+1, newArr);
        }
      }
    }
  };

  recursiveHelper(-1, makeEmptyMatrix(n));

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solutions[0]));
  return solutions[0] ? solutions[0] : makeEmptyMatrix(n);
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutions = [];

  var board = new Board({n:n});

  var recursiveHelper = function(indexOfLastRowAdded, arr) {
    var tempBoard = board.rows();

    for (var row = 0; row < n; row++){
      for (var col = 0; col < n; col++) {
        if (arr[row][col] !== tempBoard[row][col]){
          board.togglePiece(row, col);
        }
      }
    }

    if (!board.hasAnyColConflicts()){
      if (indexOfLastRowAdded === n-1) {
        solutions.push(arr);
      } else {
        for (var i = 0; i < n; i++){
          //var newArr = arr.slice(0);
          var newArr = arr.map(function(item){ return item.slice(0);});
          newArr[indexOfLastRowAdded+1][i] = 1;
          recursiveHelper(indexOfLastRowAdded+1, newArr);
        }
      }
    }
  };

  recursiveHelper(-1, makeEmptyMatrix(n));

  console.log('Number of solutions for ' + n + ' rooks:', solutions.length);
  return solutions.length;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solutions = [];

  var board = new Board({n:n});

  var recursiveHelper = function(indexOfLastRowAdded, arr) {
    var tempBoard = board.rows();

    for (var row = 0; row < n; row++){
      for (var col = 0; col < n; col++) {
        if (arr[row][col] !== tempBoard[row][col]){
          board.togglePiece(row, col);
        }
      }
    }

    if (!board.hasAnyColConflicts() && !board.hasAnyMajorDiagonalConflicts() && !board.hasAnyMinorDiagonalConflicts()){
      if (indexOfLastRowAdded === n-1) {
        solutions.push(arr);
      } else {
        for (var i = 0; i < n; i++){
          //var newArr = arr.slice(0);
          var newArr = arr.map(function(item){ return item.slice(0);});
          newArr[indexOfLastRowAdded+1][i] = 1;
          recursiveHelper(indexOfLastRowAdded+1, newArr);
        }
      }
    }
  };


  recursiveHelper(-1, makeEmptyMatrix(n));

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solutions[0]));
  return solutions[0] ? solutions[0] : makeEmptyMatrix(n);
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutions = [];

  var board = new Board({n:n});

  var recursiveHelper = function(indexOfLastRowAdded, arr) {
    var tempBoard = board.rows();

    for (var row = 0; row < n; row++){
      for (var col = 0; col < n; col++) {
        if (arr[row][col] !== tempBoard[row][col]){
          board.togglePiece(row, col);
        }
      }
    }

    if (!board.hasAnyColConflicts() && !board.hasAnyMajorDiagonalConflicts() && !board.hasAnyMinorDiagonalConflicts()){
      if (indexOfLastRowAdded === n-1) {
        solutions.push(arr);
      } else {
        for (var i = 0; i < n; i++){
          //var newArr = arr.slice(0);
          var newArr = arr.map(function(item){ return item.slice(0);});
          newArr[indexOfLastRowAdded+1][i] = 1;
          recursiveHelper(indexOfLastRowAdded+1, newArr);
        }
      }
    }
  };


  recursiveHelper(-1, makeEmptyMatrix(n));

  console.log('Number of solutions for ' + n + ' queens:', solutions.length);
  return solutions.length;
};
