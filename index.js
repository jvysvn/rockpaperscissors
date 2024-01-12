function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let choice = choices[Math.floor(Math.random() * choices.length)];

  return choice;
}

function getPlayerChoice() {
  let playerChoice = prompt('Enter a selection').toLowerCase();
  return playerChoice;
}

const playerScorecard = document.querySelector('.player-scorecard');
const computerScorecard = document.querySelector('.cpu-scorecard');
const alertBox = document.querySelector('.alert');

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
  if (playerScore >= 5 || computerScore >= 5) {
    endGame();
    return;
  }

  if (playerChoice === computerChoice) {
    alertBox.innerHTML = "It's a tie!";
    // alert("It's a tie!");
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    alertBox.innerHTML = `You win! ${playerChoice
      .charAt(0)
      .toUpperCase()}${playerChoice.slice(1)} beats ${computerChoice
      .charAt(0)
      .toUpperCase()}${computerChoice.slice(1)}`;
    playerScore++;
  } else {
    alertBox.innerHTML = `You lose! ${computerChoice
      .charAt(0)
      .toUpperCase()}${computerChoice.slice(1)} beats ${playerChoice
      .charAt(0)
      .toUpperCase()}${playerChoice.slice(1)}`;
    computerScore++;
  }

  playerScorecard.innerHTML = playerScore;
  computerScorecard.innerHTML = computerScore;

  if (playerScore >= 5 || computerScore >= 5) {
    endGame();
    return;
  }
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', function () {
  playRound('rock', getComputerChoice());
});

paper.addEventListener('click', function () {
  playRound('paper', getComputerChoice());
});

scissors.addEventListener('click', function () {
  playRound('scissors', getComputerChoice());
});

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScorecard = playerScore;
  computerScorecard = computerScore;
  alertBox.innerHTML = '';
}

function endGame() {
  alertBox.innerHTML = 'Game Over! Play again!';
  resetGame();
}

// function playGame() {
//   playRound(getPlayerChoice(), getComputerChoice());
//   playRound(getPlayerChoice(), getComputerChoice());
//   playRound(getPlayerChoice(), getComputerChoice());
//   playRound(getPlayerChoice(), getComputerChoice());
//   playRound(getPlayerChoice(), getComputerChoice());
// }

// playGame();
