// Se esta inicializando 
// let tiene variable corto y no permite redeclarar 
// ejemplo var x= 1, var x=2 con var no da error pero con let si-- Es mas estricto
let randomNumber = Math.floor(Math.random() * 100) + 1;

// const significa constante 
// const es constante, no se puede redeclarar y declarar nuevamente
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess(){
    let userGuess = Number(guessField.value);
    //  si se gana 
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Felicidades ha adivinado';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
        // cuando el usuario perdio 
    }else if (guessCount === 10) {
        lastResult.textContent = 'Fin del juego';
        setGameOver();
    }else{
        lastResult.textContent = 'Falso!';
        lastResult.style.backgroundColor = 'red';
        if(userGuess < randomNumber){
            lowOrHi.textContent = 'Muy bajo';
        }else{
            lowOrHi.textContent = 'Muy alto!';
        }
    }

    guessCount ++;
    // Es lo mismo 
    // guessCount += 1;
    // guessCount = guessCount + 1;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Comenzar nuevo juego';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame);
}

// Iniciar desde 0 
function resetGame(){
    guessCount = 1;
    // El  querySelectorAll me agarra todo 
    const resetParas = document.querySelectorAll('.resultParas p');
    for(let i = 0; i < resetParas.length; i ++){
        resetParas[i].textContent = '';
    }
    // Le dice al btn de reset que le diga al padre que remueva al hijo
    // Node es como el div , guarda varios elementos 
    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColo = 'white';

    randomNumber = Math.floor(Math.random() * 100) + 1;
}
