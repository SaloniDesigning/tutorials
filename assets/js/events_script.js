// Single Click

$(document).ready(() => {
    $('#clk').click(() => {
        alert("Button Click...");
    });
});

// Double Click

$(document).ready(() => {
    $('#dbl_clk').dblclick(() => {
        alert("Button Click twice...");
    });
});

// Mouse Enter

$(document).ready(() => {
    $('#mouse_enter').mouseenter(() => {
        alert("You are at Mouse enter...");
    });
});

// Mouse Out

$(document).ready(() => {
    $('#mouse_out').mouseout(() => {
        alert("You are at Mouse out...");
    });
});

// Mouse Down

$(document).ready(() => {
    $('#mouse_down').mousedown(() => {
        alert("You are at Mouse down...");
    });
});

// Mouse Up

$(document).ready(() => {
    $('#mouse_up').mouseup(() => {
        alert("You are at Mouse up...");
    });
});

// Mouse Hover

$(document).ready(() => {
    $('#hover').hover(() => {
        $('#hover').css('background-color', 'yellow');
    });
});


// Focus 

$(document).ready(function () {
    $('input').focus(function () {
        $(this).css({
            "outline": "1px solid yellow",
            "box-shadow": "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
        });
    });
});

// Blur

$(document).ready(function () {
    $('input').blur(function () {
        $(this).css({
            "outline": "none",
            "box-shadow": "none"
        });
    });
});

// On Event

// $(document).ready(function () {
//     $("#on").on("click", function () {
//         alert("On Click...");
//     });


// });

// $(document).ready(function () {
//     $("#on").on("click", function () {
//         $("#color_change").toggleClass('text_color');
//     });
// })


