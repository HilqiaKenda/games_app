"use strict";

// Selecting Element By Id

const player0Elem = document.querySelector(".player--0");
const player1Elem = document.querySelector(".player--1");
const score0Elem = document.getElementById("score--0");
const score1Elem = document.getElementById("score--1");
const current0Elem = document.getElementById("current--0");
const current1Elem = document.getElementById("current--1");

// Selcting classes
const diceElem = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
let playing = true;

// Starting Conditions
score0Elem.textContent = 0;
score1Elem.textContent = 0;
diceElem.classList.add("hidden");

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Elem.classList.toggle("player--active");
  player1Elem.classList.toggle("player--active");
};

let scores, currentScore, activePlayer;

const reset = function () {
  // Starting Conditions
  score0Elem.textContent = 0;
  score1Elem.textContent = 0;
  current0Elem.textContent = 0;
  current1Elem.textContent = 0;
  playing = true;

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  diceElem.classList.add("hidden");
  player0Elem.classList.remove("player--winner");
  player1Elem.classList.remove("player--winner");
  player0Elem.classList.add("player--active");
  player1Elem.classList.remove("player--active");
};
reset();
// Rolling Functionality
btnRoll.addEventListener("click", function () {
  if (playing) {
    // 1. Geerate a random Dice number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice number
    diceElem.classList.remove("hidden");
    diceElem.src = `dice-${dice}.png`;

    // 3. Check for rolled
    if (dice != 1) {
      // Add dice to current Score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      // 2. Check if palyes's score >= 100  if true finish the game
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      diceElem.classList.add("hidden");
    } else {
      //3. switch palyers
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", reset);
