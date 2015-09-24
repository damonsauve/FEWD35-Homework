
// Control Flow Exercise: The Marathon Runner

alert("The Marathon Runner");

// Create a prompt that asks the user what their best marathon time was.
// If their time was between 4 to 5 hours, alert the user that their time was average.
// if the time was between 2 to 4 hours, alert the user that their time was excellent.
// If the time was greater than 5 hours, alert the user that they need to speed up!

var txt;

var time = prompt("What is your best marathon time?");

if (time > 4 && time <= 5) {
    txt = "Your time is average.";
} else if (time > 2 && time <= 4) {
    txt = "Your time is excellent!";
} else if (time > 5) {
    txt = "You need to speed up!";
} else {
    txt = "Did you take the bus?";
}

alert(txt);


// Part 1

alert("Part 1: FOR loop");

// Write a for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is even or odd, and report that to the screen
// (e.g. "2 is even").

for (var i = 0; i <= 20; i++) {
    var remainder = i % 2;
    var msg;

    if (remainder === 0) {
        msg = 'even';
    } else {
        msg = 'odd';
    }
    alert(i + ' is ' + msg + ' (remainder is ' + remainder + ')');
}

alert("Part 1: WHILE loop");

// Do this using a FOR loop and then try to replicate the same functionality
// with a WHILE loop.

var i = 0;

while ( i <= 20 ) {
    var remainder = i % 2;

    if (remainder === 0) {
        msg = 'even';
    } else {
        msg = 'odd';
    }
    alert(i + ' is ' + msg + ' (remainder is ' + remainder + ')');

    i++;
}

// Part 2

alert("Part 2: max()");

// Define a function max() that takes two numbers as arguments and returns
// the largest of them. Use the if-then-else construct available in
// Javascript.

function max (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return num1;
    }
}

var max = max(9,12);
if( max === 12 ) {
    alert('Correct: the largest is ' + max);
} else {
    alert('Error: ' + max + ' is not the largest number!');
}

alert("Part 2: maxOfThree()");

// Define a function maxOfThree() that takes three numbers as arguments and
// returns the largest of them. Check out the Math module built in to JavaScript
// to help you.

function maxOfThree (num1, num2, num3) {

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    //
    var max = Math.max(num1, num2, num3);

    return max;
}

var max = maxOfThree(1,9,21);
if( max === 21 ) {
    alert('Correct: the largest is ' + max);
} else {
    alert('Error: ' + max + ' is not the largest number!');
}
