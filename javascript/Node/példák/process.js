'use strict';

setTimeout(function(){
    throw new Error('my error');
}, 1000);

setTimeout(function(){},10000);

process.on('exit', function(){
    console.log('I am fucking off');
});

process.on('SIGINT', function(){
    console.log('I am fucking off coz the user');
});


process.on('uncaughtException', function(){
    console.log('uncaught error');
});
