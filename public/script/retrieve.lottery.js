function append(value) {
    $('section>article').append($('<h1>', {
        text: value
    }));
}

function setHeaders(request) {
    request.setRequestHeader("Consumer-Name", "Smart-ui");
    request.setRequestHeader("Request-Id", "smartui0-0000-0000-0000-postman00000");
    request.setRequestHeader("Locale", "hu-HU");
}

$(document).ready(function () {
    $("#five_out_of_ninety").click(function () {
        $('section>article').empty();
        $.ajax({
            type: 'GET',
            beforeSend: function (request) {
                setHeaders(request);
            },
            url: 'http://localhost:8080/retrieve/lottery/five-out-of-ninety/numbers?generatorType=experimental',
            dataType: 'json',
            success: function (data) {
                append(data.generatedNumbers);
            }
        });
    });
    $("#six_out_of_forty_five").click(function () {
        $('section>article').empty();
        $.ajax({
            type: 'GET',
            beforeSend: function (request) {
                setHeaders(request);
            },
            url: 'http://localhost:8080/retrieve/lottery/six-out-of-forty-five/numbers',
            dataType: 'json',
            success: function (data) {
                append(data.generatedNumbers);
            }
        });
    });
    $("#scandinavian").click(function () {
        $('section>article').empty();
        $.ajax({
            type: 'GET',
            beforeSend: function (request) {
                setHeaders(request);
            },
            url: 'http://localhost:8080/retrieve/lottery/scandinavian/numbers',
            dataType: 'json',
            success: function (data) {
                append(data.generatedNumbers);
            }
        });
    });
    $("#joker").click(function () {
        $('section>article').empty();
        $.ajax({
            type: 'GET',
            beforeSend: function (request) {
                setHeaders(request);
            },
            url: 'http://localhost:8080/retrieve/lottery/joker/numbers',
            dataType: 'json',
            success: function (data) {
                append(data.generatedNumbers);
            }
        });
    });
});