let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("[data-choice]");
const result = document.querySelector(".result");
const modal = document.querySelector(".modal");
const resetGameBtn = document.querySelector(".modal-btn button");

function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function capitaliseWord(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitaliseWord(playerSelection);
  let result;
  let playerWin;

  if (playerSelection == computerSelection) {
    result = `It's A Tie. Both players played ${playerSelection}`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
  } else {
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
  }
  displayScore();
  return result;
}

function checkScore() {
  if (computerScore < 5 && playerScore < 5) return;
  let finalWinner =
    computerScore == 5
      ? "Better luck next time."
      : "Congratulations, you are the winner.";
  document.querySelector(".modal-text").textContent = finalWinner;
  document.querySelector(".modal").style.display = "block";
}

modal.addEventListener("click", (e) => {
  if (e.target.className == "modal") {
    modal.style.display = "none";
  }
});

resetGameBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  modal.style.display = "none";
  displayScore();
  result.textContent = "";
});

function displayScore() {
  document.querySelector(".player .score").textContent = playerScore;
  document.querySelector(".computer .score").textContent = computerScore;
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (playerScore !== 5 && computerScore !== 5) {
      result.textContent = playRound(
        e.target.dataset.choice,
        getComputerChoice()
      );
    }
    checkScore();
  });
});
