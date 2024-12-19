// pseudocode for getComputerChoice function:
// 1. generate a random number
// store number in a variable
// assign each value to either rock, paper or scissors.

function getComputerChoice(number, choice) {
  number = Math.floor(Math.random() * 10);
  if (number == 1 || number == 2 || number == 3) {
    choice = 'rock';
    return choice;
  } else if (number == 4 || number == 5 || number == 6) {
    choice = 'scissors';
    return choice;
  } else if (number == 7 || number == 8 || number == 9) {
    choice = 'paper';
    return choice;
  } else {
    return getComputerChoice();
  }
}

let humanScore = 0;
let computerScore = 0;

// let choice = prompt('rock, paper or scissors?');
let choice = 'rock';

function playRound(humanChoice, computerChoice) {
  humanChoice = choice.toLocaleLowerCase();
  computerChoice = getComputerChoice();
  if (humanChoice == 'rock' && computerChoice == 'scissors') {
    // console.log('human wins! Rock beats scissors');
    return humanScore++;
  } else if (humanChoice == 'rock' && computerChoice == 'paper') {
    // console.log('you lose! paper beats rock!');
    return computerScore++;
  } else if (humanChoice == 'rock' && computerChoice == 'rock') {
    // console.log("that's a tie");
  } else if (humanChoice == 'scissors' && computerChoice == 'scissors') {
    // console.log("that's a tie");
  } else if (humanChoice == 'scissors' && computerChoice == 'paper') {
    // console.log('human wins! scissors beats paper');
    return humanScore++;
  } else if (humanChoice == 'scissors' && computerChoice == 'rock') {
    // console.log('you lose! rock beats scissors!');
    return computerScore++;
  } else if (humanChoice == 'paper' && computerChoice == 'scissors') {
    // console.log('you lose! scissors beats paper!');
    return computerScore++;
  } else if (humanChoice == 'paper' && computerChoice == 'paper') {
    // console.log("that's a tie");
  } else if (humanChoice == 'paper' && computerChoice == 'rock') {
    // console.log('human wins! paper beats rock');
    // humanScore++;
    return humanScore++;
  }
}

// let result = 0

function playGame() {
  for (i = 0; i < 5; i++) {
    playRound();
  }
  if (humanScore > computerScore) {
    return console.log(
      `Human ${humanScore} x ${computerScore} Computer. Human Wins!`
    );
  }
  if (humanScore < computerScore) {
    return console.log(
      `Human ${humanScore} x ${computerScore} Computer. Computer Wins!`
    );
  }
  if ((humanScore = computerScore)) {
    return console.log(
      `Human ${humanScore} x ${computerScore} Computer.  It's a tie `
    );
  }
}

playGame();
