'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number! 🎉';

// console.log(document.querySelector('.message').textContent);

// // number

// console.log(document.querySelector('.number').textContent);
// document.querySelector('.number').textContent = 10;
// console.log(document.querySelector('.number').textContent);

// // score
// console.log(document.querySelector('.score').textContent);
// document.querySelector('.score').textContent = 11;
// console.log(document.querySelector('.score').textContent);

// // input

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

function repeatMSG(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.message').textContent = 'Correct Number! 🎉';
  if (!guess) {
    //   when input is not valid
    // document.querySelector('.message').textContent = 'No Number! 😢';
    repeatMSG('No Number! 😢😢');
  } else if (guess === secretNumber) {
    //   when wining the game.
    // document.querySelector('.message').textContent = 'Correct number!🎉';
    repeatMSG('Correct Number 😜😜');
    document.querySelector('.number').textContent = secretNumber;
    // change background color
    document.querySelector('body').style.backgroundColor = '#60b347';
    // size up the number
    document.querySelector('.number').style.width = '30rem';
    // highscore things;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!🎉' : 'Too low!🎉';
      score--;
      repeatMSG(guess > secretNumber ? 'Too high!🎉' : 'Too low!🎉');
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent =
      //   'Score is too low🎉 Game over!';
      repeatMSG('Score is too low🎉 Game over!');

      document.querySelector('.score').textContent = 0;
    }
  }

  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     // when score is too low.
  //     document.querySelector('.message').textContent = 'Too Low! Try again🎉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Score is too low🎉 Game over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     // when score is too high.
  //     document.querySelector('.message').textContent = 'Too high! Try again!🎉';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent =
  //       'Score is too low🎉 Game over!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing..🎉';
  repeatMSG('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
