// a js program to find the area of a circle using:
// >radius
// >pi

// let  radius = 3;
// const pi = 3.14;

// let area = pi*(radius **2);

// console.log(`The area of the circle is: ${area}`);

/* ---Creating a function to calculate the area:--- */

function calculateCircleArea(){
    const pi = 3.14;
    return pi* (radius**2);
}

let radius = 5;
let area = calculateCircleArea(radius);
console.log(`The area of the circle is: ${area}`);

/* javaScript program to calculate the radius  of circle using area  */

// function calculateRadius(area) {
//     const pi = Math.PI; // Using the built-in value of PI in JavaScript
//     if (area <= 0) {
//         return "Area must be a positive number.";
//     }
//     const radius = Math.sqrt(area / pi); // Calculating the radius
//     return radius;
// }

// // Example usage:
// const area = 78.5; // Replace with the desired area value
// const radius = calculateRadius(area);
// console.log(`The radius of the circle is: ${radius.toFixed(2)}`); // Display the radius rounded to two decimal places
