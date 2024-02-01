const btns = document.querySelectorAll('button[id^=btn]')
const ops = document.querySelectorAll('button[id^=op]')
const display = document.querySelector('.display')
const equalBtn = document.querySelector('#equalBtn')
const clearBtn = document.querySelector('#clearBtn')


let firstNumber = ''
let secondNumber = ''
let operator = ''

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if(operator === ''){
      firstNumber += btn.value
      display.textContent = firstNumber
    } else {
      secondNumber += btn.value
      display.textContent = secondNumber
  }
  })
})

ops.forEach((btn) => {
  btn.addEventListener('click', () => {
    if(firstNumber !== ''){
      operator = btn.value
    } else {
      console.log('error')
    }
  })
})

equalBtn.addEventListener('click', () => {
  if(secondNumber === ''){
    console.log('help')
    alert('You didnt put any input for your second value')
    return firstNumber
  }

  if(secondNumber === '0'){
    alert('You can not divide a number by 0.')
    display.textContent = firstNumber
    return firstNumber 
  }
  
  let number1 = parseFloat(firstNumber)
  let number2 = parseFloat(secondNumber)

  console.log(firstNumber)
  console.log(number1)
  console.log(number2)

  firstNumber = Math.round(operate(operator, number1, number2) * 1000000000)/1000000000
  // firstNumber = operate(operator, number1, number2)
  console.log(parseFloat(firstNumber))
  secondNumber = ''
  display.textContent = firstNumber
})

clearBtn.addEventListener('click', () => {
  firstNumber = ''
  secondNumber = ''
  operator = ''
  display.textContent = ''
})

const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  return num1 / num2;
};

const operate = (op, num1, num2) => {
  switch(op){
    case "+":
      return add(num1,num2)
      break;
    case "-":
      return subtract(num1, num2)
      break;
    case "*":
      return multiply(num1, num2)
      break;
    case "/": 
      return divide(num1, num2)
      break;
  }

}


