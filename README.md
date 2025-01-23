# dg-darshan-dgcalculator

A lightweight and simple JavaScript calculator utility for basic arithmetic operations.

## Installation

Install the package using npm:

```bash
npm install dg-darshan-dgcalculator
```

## Usage

Import the `calculator` function in your JavaScript or TypeScript project and use it for basic arithmetic operations.

### Example:

```javascript
// Import the calculator function
import calculator from "dg-darshan-dgcalculator";

// Perform calculations
console.log(calculator(5, 5, "+")); // Output: 10
console.log(calculator(10, 3, "-")); // Output: 7
console.log(calculator(4, 6, "*")); // Output: 24
console.log(calculator(20, 4, "/")); // Output: 5
```

## Function Signature

The `calculator` function takes three arguments:

1. `num1` (number): The first number for the operation.
2. `num2` (number): The second number for the operation.
3. `operation` (string): The arithmetic operation to perform. Accepted values are:
   - `"+"` for addition
   - `"-"` for subtraction
   - `"*"` for multiplication
   - `"/"` for division

### Example:

```javascript
calculator(num1, num2, operation);
```

## Supported Operations

- **Addition (`+`)**: Adds two numbers.
- **Subtraction (`-`)**: Subtracts the second number from the first.
- **Multiplication (`*`)**: Multiplies two numbers.
- **Division (`/`)**: Divides the first number by the second.

## License

This package is open source and available under the [MIT License](LICENSE).

