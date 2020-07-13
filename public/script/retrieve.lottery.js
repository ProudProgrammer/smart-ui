function append(value) {
    $('section>article').append($('<h1>', {
        text: value
    }));
}

$(document).ready(function () {
    $("#five_out_of_ninety").click(function () {
        $('section>article').empty();
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/retrieve/lottery/five-out-of-ninety/numbers?generatorType=experimental',
            dataType: 'json',
            success: function (data) {
                append(data.drawnNumbers);
            }
        });
    });
    $("#six_out_of_forty_five").click(function () {
        $('section>article').empty();
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/retrieve/lottery/six-out-of-forty-five/numbers',
            dataType: 'json',
            success: function (data) {
                append(data.drawnNumbers);
            }
        });
    });
    $("#scandinavian").click(function () {
        $('section>article').empty();
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/retrieve/lottery/scandinavian/numbers',
            dataType: 'json',
            success: function (data) {
                append(data.drawnNumbers);
            }
        });
    });
});