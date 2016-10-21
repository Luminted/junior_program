console.log('live');
var button = $('#btn');

button.addEventListener('click', function(){
    console.log('click');
});

function $(s){
    return document.querySelector(s);
}