const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], function(err, list){
    if(err){
        return console.log(err);
    }
        list.forEach(function(e){
            if(path.extname(e) == "." + process.argv[3]){
                console.log(e);
            }
        });
        return;
});