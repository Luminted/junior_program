'use strict';

var fs = require('fs');
var DB_FILE_NAME = 'db.json';

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