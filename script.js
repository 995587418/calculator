let currentInput = '';  // Current input (number or result)
let previousInput = ''; // Previous input (number + operator)
let operator = null;    // Current operator (+, -, *, /)

function appendNumber(number) {
  currentInput += number.toString(); // Append the number to current input
  updateDisplay();  // Update the display
}

function setOperation(op) {
  if (currentInput === '') return; // Do nothing if the input is empty
  if (previousInput !== '') {
    calculate(); // If there's an existing operator, calculate first
  }
  operator = op; // Store the operator
  previousInput = currentInput + ' ' + operator; // Update previous input with operator
  currentInput = ''; // Clear current input for next number
  updateDisplay(); // Update the display
}

function calculate() {
  let result;
  const prev = parseFloat(previousInput); // Convert previous input to float
  const current = parseFloat(currentInput); // Get current input

  if (isNaN(prev) || isNaN(current)) return; // If any of the inputs are invalid, return

  switch (operator) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      result = prev / current;
      break;
    default:
      return;
  }

  currentInput = result.toString(); // Update the current input with result
  operator = null; // Clear the operator after calculation
  previousInput = ''; // Clear the previous input
  updateDisplay(); // Update the display
}

function clearDisplay() {
  currentInput = '';  // Clear current input
  previousInput = ''; // Clear previous input
  operator = null;    // Clear the operator
  updateDisplay();    // Update the display
}

function updateDisplay() {
  document.getElementById('display').textContent = previousInput + ' ' + currentInput; 
  // Display both the operator and the current input
}
