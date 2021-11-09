let participantes = [
    "Anna Girona",
    "Sonia",
    "Desiree",
    "Alisa",
    "Alexia",
    "Ana Casas",
    "Candy",
    "Yuliya",
    "Carmen",
    "Faby",
    "Gabrielle",
    "Gracia",
    "Helen",
    "Joana",
    "Judith",
    "Laura Campos",
    "Laura Conteras",
    "Marisa",
    "Rosa",
    "Sandra",
    "Sara",
    "Tamara",
    "Valentina",
    "Kristina"
];



var sortedList = participantes.sort();

$(document).ready(function() {
        $('.numerator, .denominator').text($(participantes).length);
        for (i = 0; i < sortedList.length; i++) {
            $("<li>" + sortedList[i] + "</li>").appendTo($('#the-names'));
        };
        $("#run-it").on('click', function() {
            function chooseRando() {
                var randomPick = Math.floor(Math.random() * participantes.length) + 1;
                var pickedLI = $('#the-names li:nth-child(' + randomPick + ')').text();
                if (!$('#the-names li:nth-child(' + randomPick + ')').hasClass('crossed')) {
                    $('#the-names li:nth-child(' + randomPick + ')').addClass('crossed');
                    $('#selected-name').text(pickedLI);
                    $('.numerator').text($('#the-names li:not(.crossed)').length);
                    console.log(pickedLI);
                } else {
                    chooseRando();
                }
            }
            if (!$('#the-names li:not(.crossed)').length) {
                alert('You are out of names!!');
                $('#run-it').addClass('all-done');
            } else {
                chooseRando();
            }
        })
        $('#start-over').on('click', function() {
            $("#the-names li.crossed").removeClass('crossed');
            $("#selected-name").text("");
            $('.numerator, .denominator').text($(participantes).length);
        })
    }) // doc ready