'use strict';

var game = require('./../game');
var config = require('./../config');

module.exports = function (app) {
    app.get(config.routes.front, function (req, res) {
        res.render('templates/index', {
            last_player: game.getLastPlayer()
        });
    });
}