const btns = document.querySelectorAll('button[id^=btn]')
const ops = document.querySelectorAll('button[id^=op]')
const display = document.querySelector('.display')



let firstNumber = ''
let secondNumber = ''
let operator = ''

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if(operator === ''){
      firstNumber += btn.value
      display.textContent = firstNumber
      
      console.log('1 first', firstNumber)
      console.log('1 op', operator)
      console.log('1 second', secondNumber)
    } else {
      secondNumber += btn.value
      display.textContent = secondNumber
          console.log('first', firstNumber)
          console.log('operator', operator)
          console.log('second', secondNumber)
    }
  })
})

ops.forEach((btn) => {
  btn.addEventListener('click', () => {
    if(firstNumber !== ''){
      operator = btn.value

      console.log('3', firstNumber)
      console.log('3', operator)
      console.log('3', secondNumber)
    } else {
      console.log('error')
    }
  })
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


