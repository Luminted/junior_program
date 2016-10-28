'use strict';

$(document).ready(function () {

    var button = $('#submit');
    var numberInput = $('#number');
    var playerName = $('#player');
    var lastPlayer = $('#lastPlayer');
    var bestPlayer = $('#bestPlayer');

    button.on('click', function () {
        var url = '/play/' + playerName.val() + '/' + numberInput.val();
        $.ajax({
            method: 'POST',
            url: url,
            success: updatePlayers
        });
    });

    function updatePlayers() {
        $.ajax({
            method: 'GET',
            url: 'player/best',
            success: function (response) {
                    bestPlayer.html(response.bestPlayer);
            }
        });
        $.ajax({
            method: 'GET',
            url: 'player/last',
            success: function (response) {
                    lastPlayer.html(response.lastPlayer);
            }
        });
    }

    updatePlayers();
    setInterval(updatePlayers, 3000);



});




