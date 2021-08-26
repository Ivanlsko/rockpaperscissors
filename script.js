let playerSign = "unknown";
let computerSign = "unknown";
let signs = ["rock", "paper", "scissors"];
let randomNum = 0;

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
  clearScreen();
  getComputerSign();
  // do the actual animation
  document.querySelectorAll(".player").forEach((e) => {
    e.classList.add("shake");
    e.addEventListener("animationend", () => {
      console.log("animationended");
      e.classList.remove("shake");
      determineWinner();
    });
  });

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
}

function determineWinner() {
  if (computerSign == "rock" && playerSign == "rock") {
    console.log("we have a draw");
    showDraw();
  }

  if (computerSign == "rock" && playerSign == "paper") {
    console.log("player wins");
    showWin();
  }

  if (computerSign == "rock" && playerSign == "scissors") {
    console.log("player lose");
    showLose();
  }

  if (computerSign == "paper" && playerSign == "scissors") {
    console.log("player wins");
    showWin();
  }

  if (computerSign == "paper" && playerSign == "rock") {
    console.log("player lose");
    showLose();
  }

  if (computerSign == "paper" && playerSign == "paper") {
    console.log("we have a draw");
    showDraw();
  }

  if (computerSign == "scissors" && playerSign == "rock") {
    console.log("player wins");
    showWin();
  }

  if (computerSign == "scissors" && playerSign == "paper") {
    console.log("player lose");
    showLose();
  }

  if (computerSign == "scissors" && playerSign == "scissors") {
    console.log("we have a draw");
    showDraw();
  }
}

function showWin() {
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#win").classList.remove("hidden");
}

function showLose() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  document.querySelector("#lose").classList.remove("hidden");
}

function showDraw() {
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.remove("hidden");
}

function clearScreen() {
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
}
