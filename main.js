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
  let winner = null;

  if (playerSelection == computerSelection) {
    result = `It's A Tie. Both players played ${playerSelection}`;
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    result = `You Win! ${playerSelection} beats ${computerSelection}`;
    winner = "player";
  } else {
    result = `You Lose! ${computerSelection} beats ${playerSelection}`;
    winner = "computer";
  }
  console.log(result);
  return winner;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 5;

  while (round) {
    let playerChoice = prompt("Please enter your play");
    let winner = playRound(playerChoice, getComputerChoice());
    if (!winner) {
      continue;
    }
    if (winner == "player") {
      playerScore++;
    } else if (winner == "computer") {
      computerScore++;
    }
    round--;
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! Humanity will live on!");
  } else if (playerScore < computerScore) {
    console.log(
      "Too bad! The fate of humanity has fallen into the hands of the robots."
    );
  }
}

game();
