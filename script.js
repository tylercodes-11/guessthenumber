
const submitButton = document.querySelector('.guessSubmit'); // submit button
const randGuess = Math.floor(Math.random() * 20) + 1; // making random number from 0 to 100.
let guesses = document.querySelector('.guesses'); // number of guesses var
let guessField = document.querySelector(".guessField")
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let guessCount = 1;
let resetButton;

guessField.focus();

function compareNum(){

    const userGuess = Number(guessField.value); // user guess input

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randGuess) {

        lastResult.textContent = 'Congratulation! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 3) { //three chances condition
        lastResult.textContent = 'Game Over, Try Again'
        setGameOver();
    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randGuess) {
            lowOrHi.textContent = 'That guess was too low!';
        }   else if (userGuess > randGuess) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }


    guessCount++;
    guessField.value = '';
    guessField.focus();


};

submitButton.addEventListener('click', compareNum());

function setGameOver() { //reset game function
    submitButton.disabled = true;
    guessField.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1; 
    let resetParas = document.querySelectorAll ( '.resultParas p ');
    for (let i = 0; i < resetParas.length ; i++) {
        resetParas[i].textContext = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    submitButton.disabled = false;
    guessField.disabled = false;
    guessField.focus();
    guessField.value = '';
    lastResult.style.backgroundColor = 'white';
    randGuess = math.floor(Math.random() * 100) + 1;
}

