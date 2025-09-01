let playerScore = 0;
let computerScore = 0;

const playerChoiceEl = document.querySelector('.player-choice');
const computerChoiceEl = document.querySelector('.computer-choice');
const outcomeEl = document.querySelector('.outcome');
const playerScoreEl = document.querySelector('.player-score');
const computerScoreEl = document.querySelector('.computer-score');
const buttons = document.querySelectorAll('.choices button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const playerChoice = button.dataset.choice;
    playRound(playerChoice);
  });
});

function playRound(playerChoice) {
  const choices = ['steen', 'papier', 'schaar'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  playerChoiceEl.textContent = emoji(playerChoice);
  computerChoiceEl.textContent = emoji(computerChoice);

  const result = determineWinner(playerChoice, computerChoice);
  outcomeEl.textContent = result;

  if (result === 'Je wint!') {
    playerScore++;
  } else if (result === 'Je verliest!') {
    computerScore++;
  }

  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
}

function determineWinner(player, computer) {
  if (player === computer) return 'Gelijkspel!';
  if (
    (player === 'steen' && computer === 'schaar') ||
    (player === 'papier' && computer === 'steen') ||
    (player === 'schaar' && computer === 'papier')
  ) {
    return 'Je wint!';
  }
  return 'Je verliest!';
}

function emoji(keuze) {
  switch (keuze) {
    case 'steen': return '🪨';
    case 'papier': return '📄';
    case 'schaar': return '✂️';
    default: return '-';
  }
}
