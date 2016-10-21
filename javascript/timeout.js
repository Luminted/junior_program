setImmediate(function(){
    console.log('immediate');
})

var timeout = setTimeout(function(){
    console.log('timeout');
}, 1000);

var count = 500023;

function countDown(){
    if(count > 0){
        count--;
        setImmediate(countDown);
    }
}

countDown();
console.log('end');