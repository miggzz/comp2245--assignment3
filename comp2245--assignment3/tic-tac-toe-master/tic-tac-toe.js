document.addEventListener('DOMContentLoaded', function() {
  // Your code for styling the squares goes here
});
document.addEventListener('DOMContentLoaded', function() {
  var squares = document.querySelectorAll('.square');
  squares.forEach(function(square) {
    square.classList.add('square');
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var squares = document.querySelectorAll('.square');
  var currentPlayer = 'X';

  squares.forEach(function(square) {
    square.addEventListener('click', function() {
      if (!square.classList.contains('X') && !square.classList.contains('O')) {
        square.classList.add(currentPlayer);
        square.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    });

    square.addEventListener('mouseenter', function() {
      square.classList.add('hover');
    });

    square.addEventListener('mouseleave', function() {
      square.classList.remove('hover');
    });
  });
});
function checkForWinner() {
  var winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (var combo of winningCombos) {
    var [a, b, c] = combo;
    if (squares[a].classList.contains('X') && squares[b].classList.contains('X') && squares[c].classList.contains('X')) {
      status.textContent = 'Congratulations! X is the Winner!';
      status.classList.add('you-won');
      return;
    }
    if (squares[a].classList.contains('O') && squares[b].classList.contains('O') && squares[c].classList.contains('O')) {
      status.textContent = 'Congratulations! O is the Winner!';
      status.classList.add('you-won');
      return;
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  var squares = document.querySelectorAll('.square');
  var status = document.getElementById('status');

  squares.forEach(function(_square) {
    // ... Your previous code for click and hover events
  });
});
document.addEventListener('DOMContentLoaded', function() {
  var squares = document.querySelectorAll('.square');
  var status = document.getElementById('status');
  var newGameButton = document.querySelector('.btn');

  newGameButton.addEventListener('click', function() {
    squares.forEach(function(square) {
      square.classList.remove('X', 'O');
      square.textContent = '';
    });
    status.textContent = 'Move your mouse over a square and click to play an X or an O.';
    status.classList.remove('you-won');
  });

  squares.forEach(function(_square) {
    // ... Your previous code for click and hover events
  });
});
