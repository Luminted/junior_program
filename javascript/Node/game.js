'use strict';

var save = require('./saveGame');

var lastPlayer = 'Nobody';
var guesses = [];

save.loadEntities(function(err, entities){
    guesses = entities;
});

function getLastPlayer() {
    return lastPlayer;
}

function submitNumber(playerName, number) {
    lastPlayer = playerName;
    var entity = {
        playerName: playerName,
        number: number
    };
    guesses.push(entity);
    save.addEntity(entity);
}

function getBestPlayer() {
    guesses.sort(function (a, b) {
        return a.number - b.number;
    });
    for (var i = 0; i < guesses.length; i++) {
        var currentNumber = guesses[i].number;
        var numberOfSameGuesses = guesses.filter(function (e) {
            return e.number === currentNumber;
        }).length;

        if (numberOfSameGuesses === 1) {
            return guesses[i].playerName;
        }
    }
}

function getAllGuesses(){
    return guesses;
}

/*
setInterval(function(){
    console.log(lastPlayer);
}, 1000);
*/

module.exports = {
    getLastPlayer: getLastPlayer,
    submitNumber: submitNumber,
    getBestPlayer: getBestPlayer,
    getAllGuesses: getAllGuesses
}