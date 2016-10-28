'use strict';

var game = require('./game');
var app = require('./app');

app.get('/', function(req,res){
    res.render('templates/index', {
        last_player: game.getLastPlayer()
    });
});

app.get('/play/:player/:number', function(req,res){
    game.submitNumber(req.params.player, req.params.number);
    res.send({
        status: 'ok'
    });
});

app.get('/player/last',  function(req, res){
    res.send({
        last_player: game.getLastPlayer(),
        status: 'ok'
    });
});

app.get('/player/best', function(req, res){
    res.send({
        bestPlayerGuess: game.getBestPlayerGuess(),
        status: 'ok'
    })
})

app.listen(9001);