function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  if (y == 0){
    alert('pls no') 
  } else {
  return x / y;
  }
}

function operate(x, op, y) {
  if (op === '+') {
    return add(x, y);
  } else if (op === '-') {
    return subtract(x, y);
  } else if (op === 'x') {
    return multiply(x, y);
  } else if (op === '/') {
    return divide(x, y);
  }
}


// selectors
const display = document.querySelector('#display')

const addButton = document.querySelector('.add')

const equals = document.querySelector('#equals')

const operators = document.querySelectorAll('.operator')

const numbtns = document.querySelectorAll('.operand')

const clearScreen = document.querySelector('#clear')


let num1 = '';

let num2 = '';

let firstOperator = '';

let secondOperator = '';

let result = '';

display.textContent = '0'

numbtns.forEach((button) => {
  button.addEventListener('click', () => {
    let num = button.textContent;
    if (firstOperator == '') {
      num1 += num;
      display.textContent = num1;
    } else if (num1 != '' && firstOperator != '') {
      num2 += num;
      display.textContent = num2;
    }

  })
})

operators.forEach((button) => {
  button.addEventListener('click', () => {
    let op = button.textContent;
    
    if (num1 != '' && num2 === '') {
      display.textContent = num1;
      firstOperator = op;
    } else if (num1 != '' && num2 != '' && firstOperator != '') {
      secondOperator = op
      result = operate(Number(num1), firstOperator, Number(num2));
      display.textContent = result;
      num1 = result;
      num2 = '';
      firstOperator = secondOperator;
    }
  })
})

equals.addEventListener('click', () => {

  if (num1 === '') {
    display.textContent = num1;
  } else if (num2 != '') {
    result = operate(Number(num1), firstOperator, Number(num2));
    display.textContent = result;
  } else if (secondOperator != ''){
    result = operate(Number(num1), secondOperator, Number(num2));
    display.textContent = result;
  }
})


//Clear button removes text on screen

clearScreen.addEventListener('click', () => {
  display.textContent = '0';
  num1 = '';
  num2 = '';
  firstOperator = '';
})








