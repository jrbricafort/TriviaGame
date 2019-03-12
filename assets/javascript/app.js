$(document).ready(function () {
    console.log("Ready")
});

var right = 0;
var wrong = 0;

$("#righthtml").text(right);
$("#wronghtml").text(wrong);

$(".answer").on("click", function () {
    if ($(this).val() == "correct") {
        right++;
        console.log(right)
    }
    else {
        wrong++;
        console.log(wrong)
    }
})

$(".submit").on("click", function () {
    window.location.href = './resultspage.html';
    //look for end timer function on redirect or button click
    clearTimeout(timeUp);
})

setTimeout(timeUp, 1000 * 10);

function timeUp() {
    console.log("done");
    $("#time-left").append("<h2>Time's Up!</h2>");
    alert("Time is up! " + "You got " + right + " correct and " + wrong + " wrong");
}

var seconds_left = 10;
var interval = setInterval(function () {
    document.getElementById('timer_div').innerHTML = --seconds_left;

    if (seconds_left <= 0) {
        document.getElementById('timer_div').innerHTML = "You got " + right + " correct" + " and " + wrong + " wrong.";
        clearInterval(interval);
    }
}, 1000);