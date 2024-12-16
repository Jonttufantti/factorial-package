Factorial Function
This package provides a simple function to calculate the factorial of a number.

Installation
To install this package, run the following command:

bash
Copy code
npm install factorial-package
Usage
After installation, you can import the package in your JavaScript code:

Using CommonJS:
javascript
Copy code
const factorial = require('factorial-package');

console.log(factorial(5)); // Outputs: 120
Using ES Modules:
javascript
Copy code
import factorial from 'factorial-package';

console.log(factorial(5)); // Outputs: 120
API
factorial(n)
Calculates the factorial of the given number n.

Parameters:
n (integer): The number to calculate the factorial of. Must be a non-negative integer.
Returns:
The factorial of the number n.
Returns 1 for 0!.
Returns the string "Input must be a non-negative integer" if n is negative.
Examples
javascript
Copy code
// Importing the package
const factorial = require('factorial-package');

// Valid examples
console.log(factorial(0)); // Outputs: 1
console.log(factorial(5)); // Outputs: 120

// Invalid example
console.log(factorial(-1)); // Outputs: "Input must be a non-negative integer"
License
This project is licensed under the ISC License.
