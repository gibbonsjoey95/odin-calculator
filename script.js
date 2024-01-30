const btns = document.querySelectorAll('button[id^=btn]')
const display = document.querySelector('.display')

let firstNumber = ''
let secondNumber = ''
let operator = ''

btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    firstNumber += btn.value
    display.textContent = firstNumber
  })
})

if(operator === ''){
 btns.forEach((btn) => {
  btn.addEventListener('click', () => {
    firstNumber += btn.value
    display.textContent = firstNumber
  })
 })  
}

console.log(firstNumber)

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


