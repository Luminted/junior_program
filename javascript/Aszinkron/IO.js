var fs = require('fs');

var lines = []
lines =  fs.readFileSync(process.argv[2]).toString().trim().split('\n');


console.log(lines.length - 1);