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
  if (y == 0) {
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

function resultRounded(number) {
  return number.substring(0, 10);
}

// selectors
const display = document.querySelector('#display')

const addButton = document.querySelector('.add')

const equals = document.querySelector('#equals')

const operators = document.querySelectorAll('.operator')

const numbtns = document.querySelectorAll('.operand')

const clearScreen = document.querySelector('#clear')

const deleteBtn = document.querySelector('#delete')


let num1 = '';

let num2 = '';

let firstOperator = '';

let secondOperator = '';

let result = '';

display.textContent = '0'




// Clicking on number buttons
numbtns.forEach((button) => {
  button.addEventListener('click', () => {
    let num = button.textContent;
    //Assign to num1
    if (firstOperator == '') {
      num1 += num;
      display.textContent = resultRounded(num1);
      //Assign to num2
    } else if (num1 != '' && firstOperator != '') {
      num2 += num;
      display.textContent = resultRounded(num2);
    }

  })
})

// Clicking operators
operators.forEach((button) => {
  button.addEventListener('click', () => {
    let op = button.textContent;

    if (num1 != '' && num2 === '') {
      display.textContent = resultRounded(num1);
      firstOperator = op;
      // Shows result of two numbers if pressed before equals
    } else if (num1 != '' && num2 != '' && firstOperator != '') {
      secondOperator = op
      result = operate(Number(num1), firstOperator, Number(num2));
      display.textContent = resultRounded(String(result));
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
    display.textContent = resultRounded(String(result));
  } else if (secondOperator != '') {
    result = operate(Number(num1), secondOperator, Number(num2));
    display.textContent = resultRounded(String(result));
  }
})


//Clear button removes text on screen
clearScreen.addEventListener('click', () => {
  display.textContent = '0';
  num1 = '';
  num2 = '';
  firstOperator = '';
})

//Delete removes last input number
deleteBtn.addEventListener('click', () => {
  if (num1 != '' && num2 === '') {
    num1 = num1.slice(0, -1);
    display.textContent = num1;
  } else if (num1 != '' && num2 != '') {
    num2 = num2.slice(0, -1)
    display.textContent = num2;
  }
})






