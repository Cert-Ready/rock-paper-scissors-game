// dom elements
const rockEl = document.querySelector('.rock');
const paperEl = document.querySelector('.paper');
const scissorsEl = document.querySelector('.scissors');
const scoresEl = document.querySelector('.scores');
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');
const roundMsgEl = document.querySelector('.round-msg');
const resultEL = document.querySelector('.round-result');
const emojiPlayerEl = document.querySelector('.emoji-player');
const emojiComputerEl = document.querySelector('.emoji-computer');
const newGame = document.querySelector('.new-game');
const gameControlsEl = document.querySelector('.game-controls');
const alertEl = document.querySelector('.alert');
const winnerEl = document.querySelector('.winner');
const playAgainEl = document.querySelector('.play-again');

// start a new game
newGame.addEventListener('click', () => {
  gameControlsEl.classList.add('show');
  newGame.classList.add('hide');
});

// player selection event listeners
rockEl.addEventListener('click', () => playRound('rock'));
paperEl.addEventListener('click', () => playRound('paper'));
scissorsEl.addEventListener('click', () => playRound('scissors'));

// return rock, paper, scissors randomly
function getComputerChoice(computerChoice) {
  computerChoice = ['rock', 'paper', 'scissors'];
  let randomChoice = Math.floor(Math.random() * 3);
  return computerChoice[randomChoice];
}

// play a single round of Rock Paper Scissors.
function playRound(playerSelection) {
  let computerSelection = getComputerChoice();
  // game rules
  if (playerSelection == computerSelection) {
    return tie(playerSelection, computerSelection);
  } else if (
    (playerSelection == 'rock' && computerSelection == 'scissors') ||
    (playerSelection == 'paper' && computerSelection == 'rock') ||
    (playerSelection == 'scissors' && computerSelection == 'paper')
  ) {
    return win(playerSelection, computerSelection);
  } else if (
    (playerSelection == 'rock' && computerSelection == 'paper') ||
    (playerSelection == 'paper' && computerSelection == 'scissors') ||
    (playerSelection == 'scissors' && computerSelection == 'rock')
  ) {
    return lose(playerSelection, computerSelection);
  } else {
    return alert(`ERROR`);
  }
}

// initialize scores
let playerScore = 0;
let computerScore = 0;

// round results
function tie(playerSelection, computerSelection) {
  // DOM manipulation on tied round
  // displays player choice on element with class '.emoji-player'
  emojiPlayerEl.textContent = selectEmoji(playerSelection);
  // displays computer choice on element with class '.emoji-computer'
  emojiComputerEl.textContent = selectEmoji(computerSelection);
  // round message displayed on element with class '.round-msg'
  roundMsgEl.textContent = 'Tie!';
  // displays results as text on element with class '.round-result'
  resultEL.textContent = `${capitalize(playerSelection)} ties ${capitalize(computerSelection)}`;
  // colors border yellow on element with class '.scores'
  scoresEl.classList.add('tie');
  // removes border color after 500ms
  setTimeout(() => scoresEl.classList.remove('tie'), 500);
}

function win(playerSelection, computerSelection) {
  // increment player score
  playerScore++;
  // announce winner
  if (playerScore == 5) {
    announceWinner(capitalize('player'));
  }
  // DOM manipulation on won round
  // displays player choice on element with class '.emoji-player'
  emojiPlayerEl.textContent = selectEmoji(playerSelection);
  // displays computer choice on element with class '.emoji-computer'
  emojiComputerEl.textContent = selectEmoji(computerSelection);
  // round message displayed on element with class '.round-msg'
  roundMsgEl.textContent = `You Win!`;
  // displays results as text on element with class '.round-result'
  resultEL.textContent = `${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`;
  // displays player score on element with class '.player-score'
  playerScoreEl.textContent = playerScore;
  // colors border green on element with class '.scores'
  scoresEl.classList.add('win');
  // removes border color after 500ms
  setTimeout(() => scoresEl.classList.remove('win'), 500);
}

function lose(playerSelection, computerSelection) {
  // increment computer score
  computerScore++;
  // announce winner
  if (computerScore == 5) {
    announceWinner(capitalize('computer'));
  }
  // DOM manipulation on lost round
  // displays player choice on element with class '.emoji-player'
  emojiPlayerEl.textContent = selectEmoji(playerSelection);
  // displays computer choice on element with class '.emoji-computer'
  emojiComputerEl.textContent = selectEmoji(computerSelection);
  // round message displayed on element with class '.round-msg'
  roundMsgEl.textContent = `You Lose!`;
  // displays results as text on element with class '.round-result'
  resultEL.textContent = `${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`;
  // displays player score on element with class '.player-score'
  computerScoreEl.textContent = computerScore;
  // colors border red on element with class '.scores'
  scoresEl.classList.add('lose');
  // removes border color after 500ms
  setTimeout(() => scoresEl.classList.remove('lose'), 500);
}

// select correct emoji based on player and computer selection
function selectEmoji(emoji) {
  switch (emoji) {
    case 'rock':
      return '👊';
    case 'paper':
      return '🫲';
    case 'scissors':
      return '✌️';
  }
}

// QOL function - capitalize first letter of the word
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// report game winner
function announceWinner(arg) {
  alertEl.classList.add('show');
  alertEl.classList.remove('hide');
  winnerEl.textContent = `${arg} Wins!`;
}

// play again event listener - resets elements to default
playAgainEl.addEventListener('click', () => {
  alertEl.classList.add('hide');
  alertEl.classList.remove('show');
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = '0';
  computerScoreEl.textContent = '0';
  emojiPlayerEl.textContent = '﹖';
  emojiComputerEl.textContent = '﹖';
});
