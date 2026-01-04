`use strict`;

function getRandomInt(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomDice(dice) {
    return getRandomInt(1, dice.slice(1))
}

console.log(getRandomDice("d6"));
console.log(getRandomDice("d10"));
console.log(getRandomDice("d20"));