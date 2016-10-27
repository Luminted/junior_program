var button = document.getElementById('submit');
var output = document.getElementById('yoda-output')
var img = $('#load-img');

button.addEventListener('click', function () {

    var input = $('#english-input').val();


    if (input.length !== 0) {
        img.removeClass('hidden');
        output.innerHTML = '';
        yodaRequest(encodeURIComponent(input), function (response) {
            img.addClass('hidden');
            output.innerHTML = response;
        });
    } else{
        alert('Please write something in the box, fuckhead');
    }

});