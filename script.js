window.addEventListener("DOMContentLoaded", start);
let playerSign = "unknown";
let computerSign = "unknown";
let signs = ["rock", "paper", "scissors"];
let randomNum = 0;

function start() {}

function getPlayerChoice() {}

function getComputerSign() {
  randomNum = Math.floor(Math.random() * 2);
  document.querySelector("#player2").classList.remove("rock");
  document.querySelector("#player2").classList.remove("paper");
  document.querySelector("#player2").classList.remove("scissors");

  document.querySelector("#player2").classList.add(signs[randomNum]);
  if (randomNum == 0) {
    computerSign = "rock";
    console.log("computer chose rock");
  }

  if (randomNum == 1) {
    computerSign = "paper";
    console.log("computer chose paper");
  }

  if (randomNum == 2) {
    computerSign = "scissors";
    console.log("computer chose scissors");
  }
}

const button = document.querySelectorAll("button");
button.forEach((e) => {
  e.addEventListener("click", showAnimation);
});
function showAnimation() {
  getComputerSign();
  // do the actual animation
  document.querySelectorAll(".player").forEach((e) => {
    e.classList.add("shake");
    e.addEventListener("animationend", () => {
      console.log("animationended");
      e.classList.remove("shake");
    });
  });
  // do the actual animation
  console.log(this.classList);
  if (this.classList == "paper") {
    console.log("you pressed paper");
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.remove("scissors");
    document.querySelector("#player1").classList.add("paper");
    playerSign = "paper";
  }

  if (this.classList == "rock") {
    console.log("you pressed rock");
    document.querySelector("#player1").classList.remove("paper");
    document.querySelector("#player1").classList.remove("scissors");
    document.querySelector("#player1").classList.add("rock");
    playerSign = "rock";
  }

  if (this.classList == "scissors") {
    console.log("you pressed scissors");
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.remove("paper");
    document.querySelector("#player1").classList.add("scissors");
    playerSign = "scissors";
  }
  determineWinner();
}

function determineWinner() {
  if (computerSign == "rock" && playerSign == "rock") {
    console.log("we have a draw");
  }

  if (computerSign == "rock" && playerSign == "paper") {
    console.log("player wins");
  }

  if (computerSign == "rock" && playerSign == "scissors") {
    console.log("player lose");
  }

  if (computerSign == "paper" && playerSign == "scissors") {
    console.log("player wins");
  }

  if (computerSign == "paper" && playerSign == "rock") {
    console.log("player lose");
  }

  if (computerSign == "paper" && playerSign == "paper") {
    console.log("we have a draw");
  }

  if (computerSign == "scissors" && playerSign == "rock") {
    console.log("player wins");
  }

  if (computerSign == "scissors" && playerSign == "paper") {
    console.log("player lose");
  }

  if (computerSign == "scissors" && playerSign == "scissors") {
    console.log("we have a draw");
  }
}

function showWin() {}

function showLose() {}

function showDraw() {}
