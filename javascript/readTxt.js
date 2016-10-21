var fs = require('fs');

function readTxt(fname, callback){
    fs.readFile(fname + '.txt', function(err, content){
        if(err){
            return callback(err);
        }
        return callback(null, content.toString());
    })
}

function write(err, content){
    console.log(content);
}

readTxt('f', write);
readTxt('a', write);