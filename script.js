
const submitButton = document.getElementById('enterInput'); // submit button
const tryAgain = document.getElementById('againButton'); // try again button
const randGuess = Math.floor(Math.random() * 100) + 1; // making random number from 0 to 100.
let guesses = document.querySelector('.guesses'); //guesses var
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');
let guessCount = 1;
userGuess.focus();

function compareNum(){

    let userGuess = document.getElementById('userGuess').value; // user guess input

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }

    guesses.textContent += userGuess + ' ';

    if (userGuess === randGuess) {

        lastResult.textContent = 'Congratulation! You got it right! wow...';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
    } else if (guessCount === 3) {
        lastResult.textContent = 'Game Over, Try Again'
        setGameOver();
    }
    
    else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess < randGuess) {
            lowOrHi.textContent = 'That guess was too low!';
        }   else if (userGuess > randGuess) {
            lowOrHi.textContent = 'Last guess was too high!';
        }
    }


    guessCount++;
    userGuess.value = '';
    userGuess.focus();


};

submitButton.addEventListener('click', compareNum());

function setGameOver() { //reset game function
    submitButton.disabled = true;
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
    userGuess.focus();
    lastResult.style.backgroundColor = 'white';
    randGuess = math.floor(Math.random() * 100) + 1;
}

tryAgain.addEventListener('click', function (){
    location.reload();
});