// https://www.theodinproject.com/lessons/foundations-rock-paper-scissors
// Your game is going to play against the computer,
// so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
const getComputerChoice = () => {
  randomChoice = Math.floor(Math.random() * 3) + 1; // Generate a random number between 1 & 3
  // Return rock, paper, or  scissors depending on the random number generated
  switch (randomChoice) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
    default:
      return 'Error';
  }
};

// Write a function that plays a single round of Rock Paper Scissors.
// The function should take two parameters - the playerSelection and computerSelection -
// and then return a string that declares the winner of the round.
const playRound = (playerSelection, computerSelection) => {
  // make parameters case sensitive
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  // game rules
  if (playerSelection == computerSelection) {
    return 'Tie!';
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
  ) {
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    (playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')
  ) {
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
  } else {
    return `Please use the correct weapon`;
  }
};

// Write a NEW function called game().
// Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
const game = () => {
  // initialize scores
  let playerScore = 0;
  let computerScore = 0;

  // 5 round game
  for (let i = 0; i < 5; i++) {
    // player selection and computer selection
    const playerSelection = window.prompt("Let's play a 5 round game of Rock Paper Scissors\nPlease enter your weapon");
    const computerSelection = getComputerChoice().toLocaleLowerCase();
    // report end of round results
    console.log(`Player Selection: ${playerSelection} \nComputer Selection: ${computerSelection} \n${playRound(playerSelection, computerSelection)}`);
    alert(`Player Selection: ${playerSelection} \nComputer Selection: ${computerSelection} \n${playRound(playerSelection, computerSelection)}`);
    // add point to winner
    if (playRound(playerSelection, computerSelection) == `You Win! ${playerSelection} beats ${computerSelection}`) {
      playerScore++;
    }
    if (playRound(playerSelection, computerSelection) == `You Lose! ${computerSelection} beats ${playerSelection}`) {
      computerScore++;
    }
    console.log(playerScore);
    console.log(computerScore);
    // report score at the end --- i values are 0 to 4 ---
    if (i == 4) {
      reportScore(playerScore, computerScore);
    }
  }
};

// report score helper function
const reportScore = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    console.log(`Player Wins!! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);
    alert(`Player Wins! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`Computer Wins!! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);
    alert(`Computer Wins! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);
  } else if (playerScore == computerScore) {
    console.log(`Tie! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);
    alert(`Tie! \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}`);
  }
};

// call game() function
game();
