import { getRandomThrow } from './getRandomThrow.js';
import { compareResult } from './compareResult.js';

// const radios = document.querySelector('input:checked');
const playGameButton = document.getElementById('play-game-button');
const resetButton = document.getElementById ('reset-button');
const gameWon = document.getElementById ('game-won');
// const gameResult = document.getElementById ('game-result');
const gameTies = document.getElementById ('game-tied');
const gameLost = document.getElementById ('game-lost');
const gamePlayedSpan = document.getElementById ('game-played');
/* span input needed */

let gamePlayed = 0;
let userWins = 0;
let userLost = 0;
let userTies = 0;


playGameButton.addEventListener('click', () => {
    gamePlayed ++;
    gamePlayedSpan.textContent = gamePlayed;
    const radios = document.querySelector('input:checked');
    let userThrow = radios.value;
    // console.log(userThrow);
    let computerThrow = getRandomThrow();
    compareResult(userThrow, computerThrow);
    if (compareResult(userThrow, computerThrow) === 'win') {
        userWins ++;
        gameWon.textContent = userWins;
    } else if (
        compareResult(userThrow, computerThrow) === 'lose') {
        userLost ++;
        gameLost.textContent = userLost;
    } else {
        userTies ++;
        gameTies.textContent = userTies;
    }

}
    
);

/* choose the selected play - rock - paper - scissors */
/* get a random selector option - between 3 */
/* calculate if the user one */
/* change state based off calc */

resetButton.addEventListener('click', () => {
    userWins = 0;
    gamePlayed = 0;
    userWins = 0;
    userLost = 0;
    userTies = 0;
});