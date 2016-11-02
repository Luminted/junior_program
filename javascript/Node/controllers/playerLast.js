'use strict';

var game = require('./../game');
var config = require('./../config');

module.exports = function (app) {
    app.get(config.routes.lastPlayer, function (req, res) {
        res.send({
            lastPlayer: game.getLastPlayer(),
            status: 'ok'
        });
    });
}