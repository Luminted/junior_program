'use strict';

var game = require('./../game');
var config = require('./../config');

module.exports = function (app) {
    app.get(config.routes.admin, function (req, res) {
        res.render('templates/admin', {
            guesses: game.getAllGuesses()
        });
    });
}