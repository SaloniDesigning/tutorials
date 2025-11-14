$(document).ready(function () {

    // Get

    $('#text').click(function () {
        alert("Text: " + $('#content').text());
    });

    $('#html').click(function () {
        alert("HTML: " + $('#content').html());
    });

    $('#showName').click(function () {
        alert("Your Name: " + $('#name').val());
    });

    $('#href').click(function () {
        alert("Id: " + $('#google').attr('id'));
    });

    // Set

    $('#setText').click(function () {
        $('#textPara').text("This text is set using jQuery");
    });

    $('#setHtml').click(function () {
        $('#htmlPara').html("<b><i>This text is set using jQuery</i></b>");
    });

    $('#setColor').click(function () {
        $('#color').val("Green");
    });

});