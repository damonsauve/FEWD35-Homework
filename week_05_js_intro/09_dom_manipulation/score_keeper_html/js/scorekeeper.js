/*
    Here are the steps you should take:

    Step 1: Add a link to your own custom JS file before the closing body tag.

    Step 2: Bind click events to the +5 and -5 point buttons and change the
    innerHTML of the score display appropriately.

    Step 3: Bind a click event to the set score button and set the innerHTML of
    the score display to the score entered in the text box. You will need to use
    the parseInt function in JS to make this work.

    Bonus: Create a check in your code to make sure the score will not go
    negative.

    Super Bonus: Create a function to make the changes to the score display
    rather than having to write your logic over and over.

*/

// Start at zero points.
//
var currentScore = 0;

// Click event to increase score.
//
var increaseScore = document.querySelector("#increase-5");

increaseScore.addEventListener(
    "click",
    function() { changeScore(5); }
);

// Click event to decrease score.
//
var decreaseScore = document.querySelector("#decrease-5");

decreaseScore.addEventListener(
    "click",
    function() { changeScore(-5); }
);

// Click event to set custom score.
//
var customScore = document.querySelector("#submit-custom-score");

customScore.addEventListener("click", submitScore);


function changeScore(score) {

    setScore(currentScore + score);
}

function submitScore() {

    // Get value of custom score.
    //
    var customScore = document.getElementById("custom-score").value;

    // Parse string for a number.
    //
    var intScore = parseInt(customScore, 10);

    setScore(intScore);
}

function setScore(newScore) {

    if (validScore(newScore)) {

        // "innerText" not supported by Firefox.
        // document.querySelector("#score").innerText = newScore + " Points";

        document.querySelector("#score").textContent = newScore + " Points";

        updateScore(newScore);

    } else {

        alert("Invalid score: " + newScore);

        // Reset the placeholder text (Extra-Super Bonus).
        //
        document.getElementById("custom-score").value = "";
        document.getElementById("custom-score").setAttribute("placeholder", "Set a custom score");
    }
}

function validScore(num) {

    // Valid score is greater than or equal to zero (and not null, alpha, etc.).
    //
    if (num >= 0) {

        return true;
    }

    return false;
}

function updateScore(newScore) {

    currentScore = newScore;
}


