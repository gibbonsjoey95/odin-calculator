const btns = document.querySelectorAll('button[id^=btn]')
const ops = document.querySelectorAll('button[id^=op]')
const display = document.querySelector('.display')
const equalBtn = document.querySelector('#equalBtn')
const clearBtn = document.querySelector('#clearBtn')
const backBtn = document.querySelector('#backBtn')


let firstNumber = ''
let secondNumber = ''
let operator = ''

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if(operator === ''){
      if(firstNumber.length === 9){
        return firstNumber
      }

    if(btn.value === '.' && firstNumber.split('').includes('.')){
      return firstNumber
    }

      firstNumber += btn.value
      display.textContent = firstNumber
    } else {
      if(secondNumber.length === 9){
        return secondNumber
      }

      if(btn.value === '.' && secondNumber.split('').includes('.')){
        return secondNumber
      }

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

  firstNumber = Math.round(operate(operator, number1, number2) * 1000000000)/1000000000
  if(firstNumber.toString().length > 11){
    secondNumber = ''
    operator = ''
    display.textContent = firstNumber.toExponential(5)
  } else {
    secondNumber = ''
    operator = ''
    display.textContent = firstNumber
  }
})

clearBtn.addEventListener('click', () => {
  firstNumber = ''
  secondNumber = ''
  operator = ''
  display.textContent = ''
})

backBtn.addEventListener('click', () => {
  firstNumber = firstNumber.toString()

   if(operator === ''){
    console.log(firstNumber)
    firstNumber = firstNumber.substring(0, firstNumber.length - 1)
    display.textContent = firstNumber
  } else {
    secondNumber = secondNumber.substring(0, secondNumber.length - 1)
    display.textContent = secondNumber
  }
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


