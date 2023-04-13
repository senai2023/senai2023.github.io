const display = document.querySelector('.display');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equal');

let firstNumber = null;
let operator = null;

function clearDisplay() {
  display.value = '';
}

function calculate() {
  const secondNumber = parseFloat(display.value);
  let result = null;
  switch (operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = firstNumber / secondNumber;
      break;
    default:
      result = secondNumber;
  }
  display.value = result;
  firstNumber = result;
  operator = null;
}

function handleNumberClick(event) {
  const digit = event.target.value;
  display.value += digit;
}

function handleOperatorClick(event) {
  const op = event.target.value;
  if (firstNumber === null) {
    firstNumber = parseFloat(display.value);
    operator = op;
    clearDisplay();
  } else {
    calculate();
    operator = op;
  }
}

numberBtns.forEach(btn => btn.addEventListener('click', handleNumberClick));
operatorBtns.forEach(btn => btn.addEventListener('click', handleOperatorClick));
clearBtn.addEventListener('click', clearDisplay);
equalBtn.addEventListener('click', calculate);
