'use strict';
// console.log('p tag', document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'correct number!!';
// document.querySelector('.number').textContent = 40;
// document.querySelector('.guess').value = 60;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess === secretNumber) {
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'too high';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'you lost';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'too low';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'you lost the game!';
    }
  }

  //   if (guess === secretNumber) {
  //     score + 1;
  //   } else {
  //     score - 1;
  //   }
});
