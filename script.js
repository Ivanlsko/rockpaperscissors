let playerSign = "unknown";
let computerSign = "unknown";
let signs = ["rock", "paper", "scissors"];
let randomNum = 0;

// function for getting the computer' sign
function getComputerSign() {
  randomNum = Math.floor(Math.random() * 2);
  document.querySelector("#player2").classList.remove("rock");
  document.querySelector("#player2").classList.remove("paper");
  document.querySelector("#player2").classList.remove("scissors");

  // Assignes random number to the array as a position = class
  document.querySelector("#player2").classList.add(signs[randomNum]);

  // Conditions to consider computer's chosen sign (based on number)

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

// button function
function showAnimation() {
  // screen is cleared off win/lose/draw screen from past round (if there was any)
  clearScreen();
  // call function
  getComputerSign();
  // do the shaking animation
  document.querySelectorAll(".player").forEach((e) => {
    e.classList.add("shake");
    e.addEventListener("animationend", () => {
      console.log("animationended");
      // Remove shake animation so it can be assigned again in next round
      e.classList.remove("shake");
      // after animation end determine winner function should run
      determineWinner();
    });
  });

  // Determine which button was pressed
  console.log(this.classList);
  if (this.classList == "paper") {
    console.log("you pressed paper");
    document.querySelector("#player1").classList.remove("rock");
    document.querySelector("#player1").classList.remove("scissors");
    document.querySelector("#player1").classList.add("paper");
    // Assign player's sign so it can be compared in order to choose a winner
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

// compare computerSign and playerSign as a condition in order to choose the winner
function determineWinner() {
  if (computerSign == "rock" && playerSign == "rock") {
    console.log("we have a draw");
    // show the final screen based on a result
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
  //remove all of the classes so only the right one is shown
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

//function for clearing all of the final screens before start of the upcoming rounds
function clearScreen() {
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
}
