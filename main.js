function getComputerChoice() {
  let choice = ["Rock", "Paper", "Scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

function capitaliseWord(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  let player = capitaliseWord(playerSelection);
  let result;
  let playerWin;

  if (player == computerSelection) {
    result = `It's A Tie. Both players played ${player}`;
    playerWin = 0;
  } else if (
    (player == "Rock" && computerSelection == "Scissors") ||
    (player == "Paper" && computerSelection == "Rock") ||
    (player == "Scissors" && computerSelection == "Paper")
  ) {
    result = `You Win! ${player} beats ${computerSelection}`;
    playerWin = 1;
  } else {
    result = `You Lose! ${computerSelection} beats ${player}`;
    playerWin = -1;
  }
  console.log(result);
  return playerWin;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let round = 5;

  while (round--) {
    let playerChoice = prompt("Please enter your play");
    let result = playRound(playerChoice, getComputerChoice());
    if (result > 0) {
      playerScore++;
    } else if (result < 0) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! Humanity will live on!");
  } else if (playerScore < computerScore) {
    console.log(
      "Too bad! The fate of humanity has fallen into the hands of the robots."
    );
  } else {
    console.log("It's a tie! I guess humans and robots shall co-exist.");
  }
}

game();
