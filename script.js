
const guessSubmit = document.querySelector('.guessSubmit'); // submit button
const quizBox = document.getElementById('content');
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

    guesses.textContent += userGuess + ' '; //user guess count

    if (userGuess === randGuess) { //user guesses random generated number

        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver(); // set game over function button to complete and reset game
        return true;

    } else if (guessCount === 3) { // three chances condition
        lastResult.textContent = 'Game Over, Try Again'
        lowOrHi.innerHTML = 'The correct answer was ' + randGuess + '!';
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

guessSubmit.addEventListener('click', compareNum); // submit button triggers function comparing numbers


function resetGame() { //reseting values for the game function
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
function setGameOver() { //reset game function
    guessSubmit.disabled = true;
    guessField.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'New Game!';
    resetButton.setAttribute('id', 'resetButton')
    Element.resetButton += "reset"
    resetButton.addEventListener('click', resetGame);
    quizBox.appendChild(resetButton);

}

