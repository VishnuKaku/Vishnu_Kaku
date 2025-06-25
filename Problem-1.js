class Calculator {
  /**
   * Performs the specified arithmetic operation on two numbers.
   * @param {number} a - First operand (double).
   * @param {number} b - Second operand (double).
   * @param {string} operation - Operation type: 'add', 'subtract', 'multiply', 'divide'.
   * @returns {number} - Result of the operation.
   */
  calculate(a, b, operation) {
    switch (operation.toLowerCase()) {
      case 'add':
        return a + b;
      case 'subtract':
        return a - b;
      case 'multiply':
        return a * b;
      case 'divide':
        return a / b;
      default:
        throw new Error("Unsupported operation. Use 'add', 'subtract', 'multiply', or 'divide'.");
    }
  }
}

const calc = new Calculator();
console.log(calc.calculate(10, 5, 'add'));
console.log(calc.calculate(10, 5, 'divide'));
console.log(calc.calculate(10.0, 5.0, "subtract"));
console.log(calc.calculate(10.0, 5.0, "multiply"));
