$(document).ready(function () {
    $("#hide").click(function () {
        $("#content").hide();
    });

    $("#show").click(function () {
        $("#content").show();
    });

    $("#toggle").click(function () {
        $("#content").toggle();
    });
});