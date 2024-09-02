// Variables to store first name and last name
let firstName = "John";
let lastName = "Doe";

// Displaying the employee details using template literal
let employeeDetails = `Employee Details:
First Name: ${firstName}
Last Name: ${lastName}`;

// console.log(employeeDetails);


let value1 = 12;
value1 = "Sample";
value1 = 34.67;

// console.log(value1);
// console.log(typeof(value1));

let person = {
    name: "Joe camel",
    age: 42,
    status: "dead"
}

console.log(typeof person);

/*Write JavaScript code to display the movie details such as movie name, language, and ratings. Initialize the variables with values of appropriate types. Use template literals wherever necessary.*/

// Initializing variables with appropriate types
let movieName = "Inception"; // String type for movie name
let language = "English";    // String type for language
let ratings = 4.5;           // Number type for ratings

// Displaying the movie details using template literals
let movieDetails = `Movie Details:
- Name: ${movieName}
- Language: ${language}
- Ratings: ${ratings}`;

console.log(movieDetails);
