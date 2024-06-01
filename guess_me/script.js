"use strict";

// let hilqia = 300;
// let highScore = hilqia;
// document.querySelector('.highscore').textContent = highScore;

/*
console.log(
    document.querySelector('.number').textContent = 13;
  (document.querySelector('.message').textContent = '🎉Correct Number')
);

document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  // score--;
  document.querySelector(".score").textContent = score;
};

const changeBackground = function (body, number) {
  document.querySelector("body").style.backgroundColor = body;
  document.querySelector(".number").style.width = number;
};

const displaSecret = function (secretNumber) {
  document.querySelector(".number").textContent = secretNumber;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  console.log(guess);

  //When there is no Number
  if (!guess) {
    displayMessage("🚫 No Numbeer! ⛔");
    score--;
    displayScore(score);
    if (score === 1) {
      displayMessage("❌🛑GAME OVER😖😞");
      changeBackground("#da1616");
    }

    //When it's correct
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number 🎉");
    displaSecret(secretNumber);

    changeBackground("#60b347", "32rem");
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When is wrong
  } else if (guess != secretNumber) {
    changeBackground("#222", "15rem");
    document.querySelector(".number").textContent = "?";
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈To High📈" : "📉To Low📉");
      score--;
      displayScore(score);
    } else {
      displayMessage("❌🛑GAME OVER😖😞");
      changeBackground("#da1616");
      displayScore(0);
    }
    // } else if (guess < secretNumber) {
    //   document.querySelector("body").style.backgroundColor = "#222";
    //   document.querySelector(".number").style.width = "15rem";
    //   document.querySelector(".number").textContent = "?";
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "📉To Low📉";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "❌🛑GAME OVER😖😞";
    //     document.querySelector("body").style.backgroundColor = "#da1616";
    //     document.querySelector(".score").textContent = 0;
    //   }

    //   //when it's high
    // } else if (guess > secretNumber) {
    //   document.querySelector("body").style.backgroundColor = "#222";
    //   document.querySelector(".number").style.width = "15rem";
    //   document.querySelector(".number").textContent = "?";
    //   if (score > 1) {
    //     document.querySelector(".message").textContent = "📈To High📈";
    //     score--;
    //     document.querySelector(".score").textContent = score;
    //   } else {
    //     document.querySelector(".message").textContent = "❌🛑GAME OVER😖😞";
    //     document.querySelector("body").style.backgroundColor = "#da1616";
    //     document.querySelector(".score").textContent = 0;
    //   }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  changeBackground("#222", "15rem");
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  displayScore(score);
});
