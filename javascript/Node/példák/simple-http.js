var http = require('http');

var server = http.createServer(function(req,res){
    res.end('Hali!')
});

server.listen(8080);