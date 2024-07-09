'use strict';

const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
let holdPoint = 0;
let randomNumber;
rollDiceBtn.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector('.current-score').textContent = randomNumber;
  // holdPoint = randomNumber;
  console.log('clicked!');
});

holdBtn.addEventListener('click', function () {
  holdPoint += randomNumber;
  document.querySelector('.score').textContent = holdPoint;
  console.log('hold Button clicked');
});

const sum = function (a, b) {
  return a + b;
};
