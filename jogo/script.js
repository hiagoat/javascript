let secretNumber;
let attempts = 0;
const maxAttempts = 10;
let history = [];

const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const historyList = document.getElementById('historyList');
const resetBtn = document.getElementById('resetBtn');

function startGame() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    history = [];
    guessInput.disabled = false;
    guessBtn.disabled = false;
    message.textContent = '';
    guessInput.value = '';
    historyList.innerHTML = '';
}

function makeGuess() {
    const guess = Number(guessInput.value);
    if (!guess || guess < 1 || guess > 100) {
        message.textContent = '🚫 Digite um número entre 1 e 100!';
        return;
    }

    attempts++;
    history.push(guess);
    updateHistory();

    if (guess === secretNumber) {
        message.textContent = `🎉 Parabéns! Você acertou e agora se torna um verdadeiro Bruxo! 🧙‍♂️`;
        endGame();
    } else if (attempts >= maxAttempts) {
        message.textContent = `😢 Fim de jogo! O número era ${secretNumber}. Tente novamente!`;
        endGame();
    } else if (guess < secretNumber) {
        message.textContent = ` O número é MAIOR que ${guess}`;
    } else {
        message.textContent = ` O número é MENOR que ${guess}`;
    }

    guessInput.value = '';
}

function updateHistory() {
    historyList.innerHTML = '';
    history.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `Tentativa ${index + 1}: ${item}`;
        historyList.appendChild(li);
    });
}

function endGame() {
    guessInput.disabled = true;
    guessBtn.disabled = true;
}

guessBtn.addEventListener('click', makeGuess);
resetBtn.addEventListener('click', startGame);
window.addEventListener('load', startGame);

