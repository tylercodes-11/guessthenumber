
const guessSubmit = document.querySelector('.guessSubmit'); // submit button
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

        return true;
    } else if (guessCount === 3) { //three chances condition
        lastResult.textContent = 'Game Over, Try Again'
        setGameOver();

        return false;
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
return false;
};

guessSubmit.addEventListener('click', compareNum);

function setGameOver() { //reset game function
    guessSubmit.disabled = true;
    guessField.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'New Game!';
    document.body.appendChild(resetButton);
    Element.resetButton += "reset"
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1; 
    let resetParas = document.querySelectorAll ( '.resultParas p ');
    for (let i = 0; i < resetParas.length ; i++) {
        resetParas[i].textContext = '';
    }

    resetButton.parentNode.removeChild(resetButton);
    guessSubmit.disabled = false;
    guessField.disabled = false;
    guessField.focus();
    guessField.value = '';
    lastResult.textContent = '';
    guesses.textContent = '';
    lowOrHi.textContent = '';
    lastResult.style.backgroundColor = 'white';
    randGuess = Math.floor(Math.random() * 100) + 1;
}

