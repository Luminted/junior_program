'use strict';

var config = require('./config');
var fs = require('fs');
var DB_FILE_NAME = config.dbFileName;

function addEntity(entity){
    loadEntities(function(err, entities){
        entities.push(entity);
        fs.writeFile(DB_FILE_NAME, JSON.stringify(entities));
    });
}

function loadEntities(callback){
    fs.readFile(DB_FILE_NAME, function(err, db){
        var dbContent = db.toString() || '[]';
        callback(err, JSON.parse(dbContent));
    });
}

module.exports= {
    addEntity: addEntity,
    loadEntities: loadEntities
}