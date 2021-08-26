window.addEventListener("DOMContentLoaded", start);

function start() {}

function getPlayerChoice() {}

function getComputerChoice() {}

const button = document.querySelectorAll("button");
button.forEach((e) => {
  e.addEventListener("click", showAnimation);
});
function showAnimation() {
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
  }

  if (this.classList == "rock") {
    console.log("you pressed rock");
    document.querySelector("#player1").classList.remove("paper");
    document.querySelector("#player1").classList.remove("scissors");
    document.querySelector("#player1").classList.add("rock");
  }

  if (this.classList == "scissors") {
    console.log("you pressed scissors");
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.remove("paper");
    document.querySelector("#player1").classList.add("scissors");
  }
}

function determineWinner() {}

function showWin() {}

function showLose() {}

function showDraw() {}
