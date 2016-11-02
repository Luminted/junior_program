'use strict';

var game = require('./game');
var app = require('./app');
var fs = require('fs');

var dir = fs.readdirSync('./controllers'); 

dir.forEach(function(fname){
    var controller = require('./controllers/' + fname);
    controller(app);
});

app.listen(9001);