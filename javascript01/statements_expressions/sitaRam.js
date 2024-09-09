/*if... else ladder is used to check for a new condition when the firsta condition evaluates to false.*/

/*
if(condition1) {
   // block of code that will be executed if condition1 is true 
}
else if (condition2){
      block of code that will be executed if the condition1 is false and condition2 is true
}
else {
     // block of code that will be executed if the condition1 is false and condition2 is false
}
*/
//Example:

let marks = 85;
if (marks >= 75) {
    console.log("very Good");
} else if (marks < 85 && marks >= 50) {
    console.log("Good");
} else {
    console.log("Needs Improvement");
}

// Switch Statement

/*
The switch statement is used to select and evaluate one of the many blocks of code.
*/
//Syntax:
/*
switch (expression) {
   case value1: code block;
               break;
   case value2: code block;
                 break;
   case valueN: code block;
                break;
                default: code block;
  }

  /* 'break' statement is used to come out of the switch and continue execution of statements(s) the following switch. */
// Example:
//For the given Employee performance rating (between 1 to 5),displays the appropriate performance badge.

var perfRating = 2;

switch (perfRating) {
    case 5:
        console.log("very poor");
        break;
    case 4:
        console.log("needs Improvement");
        break;
    case 3:
        console.log("Met Expectations");
        break;
    case 2:
        console.log("Commendable");
        break;
    case 1:
        console.log("Sorry!! Invalid Rating.");
}

//without break;

var perfRating = 5;
switch (perfRating) {
    case 5:
        console.log("Very Poor");
    case 4:
        console.log("Need Improvement");
    case 3:
        console.log("Met Expectations");
    case 2:
        console.log("Commendable");
    case 1:
        console.log("Outstanding");
    default:
        console.log("Sorry!! Invalid Rating.");
}
 