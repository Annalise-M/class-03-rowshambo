export function getRandomThrow() {
    let getRandomThrow = Math.ceil(Math.random() * 3);
    if (getRandomThrow === 1) {
        return 'rock';
    } else if (getRandomThrow === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// console.log (getRandomThrow ());