'use strict';

var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

module.exports = app;