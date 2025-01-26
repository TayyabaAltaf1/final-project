const words = ["content", "javascript", "girls", "developer", "keyboard", "communication", "debugging" , "length" , "recording"];

const wordElement = document.getElementById('word');
const inputElement = document.getElementById('input');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const endGameContainer = document.getElementById('end-game-container');
const finalScoreElement = document.getElementById('final-score');
const difficultyElement = document.getElementById('difficulty');

let score = 0;
let time = 10;
let interval;

function randomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function updateWord() {
  wordElement.textContent = randomWord();
}

function startGame() {
  score = 0;
  time = difficultyElement.value === 'easy' ? 15 : difficultyElement.value === 'medium' ? 10 : 8;
  scoreElement.textContent = score;
  timeElement.textContent = time;
  endGameContainer.classList.add('hidden');
  inputElement.value = '';
  updateWord();
  inputElement.focus();

  clearInterval(interval);
  interval = setInterval(() => {
    time--;
    timeElement.textContent = time;
    if (time === 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  clearInterval(interval);
  endGameContainer.classList.remove('hidden');
  finalScoreElement.textContent = score;
}

inputElement.addEventListener('input', () => {
  if (inputElement.value === wordElement.textContent) {
    score++;
    scoreElement.textContent = score;
    time += difficultyElement.value === 'easy' ? 5 : difficultyElement.value === 'medium' ? 3 : 2;
    inputElement.value = '';
    updateWord();
  }
});

startGame();