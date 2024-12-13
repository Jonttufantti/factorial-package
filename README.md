Factorial Function
This package provides a function to calculate the factorial of a number.

Installation
To install this package, run the following command:

bash
Copy code
npm install factorial-package
Replace factorial-package with the actual name of your npm package if it's different.

Usage
After installation, you can require the package in your JavaScript code:

javascript
Copy code
const factorial = require('factorial-package');

console.log(factorial(5)); // Outputs: 120

API
factorial(n)
Calculates the factorial of the number n.

Parameters:
n (integer) - The number to calculate the factorial of. Must be a non-negative integer.
Returns:
The factorial of the number n.
Returns 1 for 0!.
Returns an error message if n is a negative integer.
Example
javascript
Copy code
const factorial = require('factorial-package');

console.log(factorial(0)); // Outputs: 1
console.log(factorial(5)); // Outputs: 120
console.log(factorial(-1)); // Outputs: "Input must be a non-negative integer"
License
ISC
