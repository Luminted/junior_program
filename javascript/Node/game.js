'use strict';

var lastPlayer = 'Nobody';
var guesses = [];

function getLastPlayer() {
    return lastPlayer;
}

function submitNumber(playerName, number) {
    lastPlayer = playerName;
    guesses.push({
        playerName: playerName,
        number: number
    })
}

function getBestPlayerGuess() {
    guesses.sort(function (a, b) {
        return a.number - b.number;
    });
    for (var i = 0; i < guesses.length; i++) {
        var currentNumber = guesses[i].number;
        var numberOfSameGuesses = guesses.filter(function (e) {
            return e.number === currentNumber;
        }).length

        console.log(numberOfSameGuesses);

        if (numberOfSameGuesses === 1) {
            return guesses[i];
        }
    }
}

module.exports = {
    getLastPlayer: getLastPlayer,
    submitNumber: submitNumber,
    getBestPlayerGuess: getBestPlayerGuess
}