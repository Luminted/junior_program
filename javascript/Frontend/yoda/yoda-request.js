'use strict';

var yodaRequest = (function () {
    var YODA_HEADERS = {
        "X-Mashape-Key": "eaSdcTBnqDmshX4IrBKhNnhvbIXxp1AdvEBjsn3ZJpwXREg4Mb"
    };

    var YODA_URL = "https://yoda.p.mashape.com/yoda?sentence=";

    function yodaRequest(inputText, callback) {
        $.ajax({
            url: YODA_URL + inputText,
            method: 'GET',
            headers: YODA_HEADERS,
            success: function (response) {
                callback(response);
            }
        });
    }

    return yodaRequest;
})();