'use strict';

//query Elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScorePlyerOneEl = document.querySelector('#current--0');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;
//random dice roll number

btnRoll.addEventListener('click', function () {
  const dice = Math.floor(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  diceEl.src = `/07-Pig-Game/starter/dice-${dice}.png`;
  //score0El.textContent = dice;
  if (currentScore !== 1) {
    currentScore += dice;
    currentScorePlyerOneEl.textContent = currentScore;
  } else {
  }
});
