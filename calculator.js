let displayValue = "0";
let firstNumber = null;
let operator = null;
let secondNumber = null;

const display = document.getElementById("display");

function updateDisplay() {
  display.textContent = displayValue;
}

function clearDisplay() {
  displayValue = "0";
  firstNumber = null;
  operator = null;
  secondNumber = null;
  updateDisplay();
}

function backspace() {
  if (displayValue.length === 1) {
    displayValue = "0";
  } else {
    displayValue = displayValue.slice(0, -1);
  }
  updateDisplay();
}

function appendNumber(num) {
  if (displayValue === "0") {
    displayValue = num;
  } else {
    displayValue += num;
  }
  updateDisplay();
}

function appendDecimal() {
  if (!displayValue.includes(".")) {
    displayValue += ".";
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operator !== null) {
    calculate();
  }
  firstNumber = parseFloat(displayValue);
  operator = op;
  displayValue = "0";
}

function calculate() {
  secondNumber = parseFloat(displayValue);
  if (operator === "+") {
    displayValue = (firstNumber + secondNumber).toString();
  } else if (operator === "-") {
    displayValue = (firstNumber - secondNumber).toString();
  } else if (operator === "*") {
    displayValue = (firstNumber * secondNumber).toString();
  } else if (operator === "/") {
    if (secondNumber === 0) {
      displayValue = "Error: Cannot divide by zero!";
    } else {
      displayValue = (firstNumber / secondNumber).toString();
    }
  }
  firstNumber = null;
  operator = null;
  secondNumber = null;
  updateDisplay();
}

// Handle keyboard input
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (!isNaN(key) || key === ".") {
    appendNumber(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendOperator(key);
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    backspace();
  }
});

updateDisplay();
