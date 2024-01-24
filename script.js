'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
// document.querySelector('.number').textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = "😒 Haven't entered yet!";
  } else if (guess > 20 || guess < 1) {
    // document.querySelector('.message').textContent =
    //   '🫥 Have problems with your reading skill?';
    displayMessage('🫥 Invalid Number!');
    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '😙 Pretty Good!';
    displayMessage('😙 Pretty Good!');

    if (highscore < score) {
      document.querySelector('.highscore').textContent = score;
      highscore = score;
    }

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score === 20) {
      document.querySelector('.my-message').textContent =
        "🤖 K-id: You're lucky! 🤬";
    } else if (score <= 19 && score >= 16) {
      document.querySelector('.my-message').textContent =
        "🤖 K-id: Aww! Can't get 20 points? 🥱";
    } else if (score <= 15 && score >= 1) {
      document.querySelector(
        '.my-message'
      ).textContent = `🤖 K-id: ${score}! Too bad! Gimme 100$ for that bad🤑`;
    } else {
      document.querySelector('.my-message').textContent =
        '🤖 K-id: GET OUT OF HERE!!!';
    }
  }
  // When guess is too low
  else if (secretNumber !== guess) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '😏 Too high!!!' : '😜 Too low!!!';
      displayMessage(guess > secretNumber ? '😏 Too high!!!' : '😜 Too low!!!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   "💥 You've lost the game!";
      displayMessage("💥 You've lost the game!");

      document.querySelector('.score').textContent = 0;
    }
  }
  // }else if (secretNumber > guess) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '😜 Too low!!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       "💥 You've lost the game!";
  //   }

  //   // When guess is too high
  // } else if (secretNumber < guess) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '😏 Too high!!!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       "💥 You've lost the game!";
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.my-message').textContent = '';
  document.querySelector('.guess').value = null;
});
