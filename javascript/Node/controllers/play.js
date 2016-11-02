'use strict';

var game = require('./../game');
var config = require('./../config');

module.exports = function (app) {
    app.post(config.routes.play, function (req, res) {
        game.submitNumber(req.params.player, req.params.number);
        res.send({
            status: 'ok'
        });
    });
}