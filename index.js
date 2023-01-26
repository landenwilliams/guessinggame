//DOM SELECTORS

const submitButton = document.getElementById('submit');
const hintButton = document.getElementById('hint');
const restartButton = document.getElementById('playAgain');

//STAND ALONE VARIABLES

const state = {
    guesses: [],
    randomNumber: [],

}
state.randomNumber = Math.floor(Math.random() * 100) + 1;
let randNum = state.randomNumber;
let guesses = state.guesses.map(i => i);


//BUTTON FUNCTIONS



const submitGuess = () => {
    
submitButton.addEventListener('click', () => {
    let guessSub = document.getElementById('textBox').value;



    if(guesses.length < 5  && guessSub < 101){

        guesses.push(guessSub);
        document.getElementById('guessOne').innerText = guesses.join(" ");

        if (state.guesses.length >= 4){

            document.getElementById('returnMessage').innerHTML = "The number was" + state.randomNumber + "BETTER LUCK NEXT TIME!";
            submitButton.style.visibility = 'hidden';
            hintButton.style.visibility = 'hidden';
            return;
        }
        
        else if (guessSub !== randNum) {
            document.getElementById('returnMessage').innerHTML = "CLOSE BUT NO CIGAR!";
        }

        else if (guessSub == state.randomNumber){
            document.getElementById('returnMessage').innerHTML = "EUREKA! YOU WIN!";
            submitButton.style.visibility = 'hidden';
            hintButton.style.visibility = 'hidden';
        }

        
    } else if (guessSub > 100){
        document.getElementById('returnMessage').innerHTML = "Sorry. Guess must be within 1 and 100.";
    } 
    
    else {
        return;
    } 
});        
}

const hint = () => {
    let guessSubT = document.getElementById('textBox').value;
    if (guessSubT < randNum ){
    document.getElementById('returnMessage').innerHTML = "HIGHER!";
    }

    if (guessSubT > randNum ){
        document.getElementById('returnMessage').innerHTML = "LOWER!";
        }
}
restartButton.addEventListener('click', () => {
    guesses = [];
    document.getElementById('guessOne').innerText = "";
    state.randomNumber = 0 + Math.floor(Math.random() * 100) + 1;
    submitButton.style.visibility = 'visible';
    hintButton.style.visibility = 'visible';

});
hintButton.addEventListener('click', () => {
    hint();

});

submitGuess();