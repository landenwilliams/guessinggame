//DOM SELECTORS

const submitButton = document.getElementById('submit');
const hintButton = document.getElementById('hint');

//STAND ALONE VARIABLES

const state = {
    guesses: [],

}
const randNum = Math.floor(Math.random() * 100) + 1;
let guesses = state.guesses.map(i => i);
console.log (randNum);

//BUTTON FUNCTIONS

const submitGuess = () => {
    
submitButton.addEventListener('click', () => {
    let guessSub = document.getElementById('textBox').value;
    if(guesses.length < 5  && guessSub < 101){

        guesses.push(guessSub);
        document.getElementById('guessOne').innerText = guesses.join(" ");

        //if statements
        if (guessSub !== randNum) {
            document.getElementById('returnMessage').innerHTML = "CLOSE BUT NO CIGAR!";
        }

        if (guessSub == randNum){
            document.getElementById('returnMessage').innerHTML = "EUREKA! YOU WIN!";
            submitButton.remove();
            hintButton.remove();
        }

        if (state.guesses.length > 4){

            document.getElementById('returnMessage').innerHTML = "BETTER LUCK NEXT TIME!";
            submitButton.remove();
            hintButton.remove();
        }
    } else if (guessSub > 100){
        document.getElementById('returnMessage').innerHTML = "Sorry. Guess must be within 1 and 100.";
    } else {
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

submitGuess();



