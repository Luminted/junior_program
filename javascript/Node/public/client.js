'use strict';

$(document).ready(function () {

    var button = $('#submit');
    var numberInput = $('#number');
    var playerName = $('#player');
    var lastPlayer = $('#lastPlayer');

    button.on('click', function () {
        var url = '/play/' + playerName.val() + '/' + numberInput.val();
        $.ajax({
            method: 'GET',
            url: url,
            success: updateLastPlayer
        });
    });

    function updateLastPlayer() {
        var url = 'player/last';
        $.ajax({
            method: 'GET',
            url: url,
            success: function (response) {
                lastPlayer.html(response.last_player);
            }
        });
    }
    setInterval(updateLastPlayer, 3000);



});




