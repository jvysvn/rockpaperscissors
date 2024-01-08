function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let choice = choices[Math.floor(Math.random() * choices.length)];

  return choice;
}

function getPlayerChoice() {
  let playerChoice = prompt('Enter a selection').toLowerCase();
  return playerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    alert("It's a tie!");
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    alert(
      `You win! ${playerChoice.charAt(0).toUpperCase()}${playerChoice.slice(
        1
      )} beats ${computerChoice.charAt(0).toUpperCase()}${computerChoice.slice(
        1
      )}`
    );
    playerScore++;
  } else {
    alert(
      `You lose! ${computerChoice
        .charAt(0)
        .toUpperCase()}${computerChoice.slice(1)} beats ${playerChoice
        .charAt(0)
        .toUpperCase()}${playerChoice.slice(1)}`
    );
    computerScore++;
  }
  console.log(
    `Current Scores: Player - ${playerScore} -- Computer - ${computerScore}`
  );
}

function playGame() {
  playRound(getPlayerChoice(), getComputerChoice());
  playRound(getPlayerChoice(), getComputerChoice());
  playRound(getPlayerChoice(), getComputerChoice());
  playRound(getPlayerChoice(), getComputerChoice());
  playRound(getPlayerChoice(), getComputerChoice());
}

playGame();
