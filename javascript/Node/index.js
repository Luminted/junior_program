'use strict';

var game = require('./game');
var app = require('./app');

app.get('/', function (req, res) {
    res.render('templates/index', {
        last_player: game.getLastPlayer()
    });
});

app.get('/admin', function(req, res){
    res.render('templates/admin', {
        guesses: game.getAllGuesses()
    });
});


app.post('/play/:player/:number', function (req, res) {
    game.submitNumber(req.params.player, req.params.number);
    res.send({
        status: 'ok'
    });
});

app.get('/player/last', function (req, res) {
    res.send({
        lastPlayer: game.getLastPlayer(),
        status: 'ok'
    });
});

app.get('/player/best', function (req, res) {
    res.send({
        bestPlayer: game.getBestPlayer(),
        status: 'ok'
    })
})

app.listen(9001);