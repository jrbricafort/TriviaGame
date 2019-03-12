function gamestart() {
    $("body > form").show()
    $("#start").hide()
    $(document).ready(function () {
        console.log("Ready")
    });

    // Correct and wrong variables
    var right = 0;
    var wrong = 0;

    // Pushes values to corresponding html element
    $("#righthtml").text(right);
    $("#wronghtml").text(wrong);


    // Tallies answers based on if user picked right or wrong answer
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

    // Submit button which stops timers
    $(".submit").on("click", function () {
        clearInterval(interval);
        timeUp();
    })

    // Set time for user to play the game
    setTimeout(timeUp, 1000 * 30);


    // Displays score
    function timeUp() {
        console.log("done");
        $("#time-left").append("<h2>Time's Up!</h2>");
        clearInterval(interval);
        tally();
        alert("Time is up! " + "You got " + right + " correct and " + wrong + " wrong and " + (5 - right - wrong) + " incomplete.");
    }

    // Displays timer remaining
    var seconds_left = 30;
    var interval = setInterval(function () {
        document.getElementById('timer_div').innerHTML = --seconds_left;
    }, 1000);

    // Function for tallying right and wrong answers
    function tally() {
        document.getElementById('timer_div').innerHTML = "You got " + right + " correct and " + wrong + " wrong and " + (5 - right - wrong) + " incomplete.";
    }
}

// Hides the game until the player hits "Start" button
$("body > form").hide()
$("#start").on("click", function () {
    gamestart();
})