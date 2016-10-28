'use strict';

var express = require('express');

var app = express();

app.use(function (req, res, next) {
    req.startTime = (new Date).getTime();
    next();
})

app.get('/', function (req, res, next) {
    setTimeout(function () {
        req.stopTime = (new Date).getTime();
        res.send('hello');
        next();
    }, 1000);
}, function (req, res, next) {
    console.log(req.stopTime - req.startTime);
});

app.get('/asdf', function (req, res) {
    res.send('Bugger off, retard');
});

app.listen(8080);