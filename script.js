function sum(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function operate(num1, num2, operator) {
  if (operator == "sum") {
    return sum(num1, num2)
  }
  if (operator == "subtract") {
    return subtract(num1, num2)
  }
  if (operator == "multiply") {
    return multiply(num1, num2)
  }
  if (operator == "divide") {
    return divide(num1, num2)
  }
}

let firstNumber
let secondNumber
let operator
let displayvalue

const display = document.querySelector(".display")
const digitbuttons = document.querySelectorAll(".digit")
const sumbtn = document.querySelector(".sum")
const subtractbtn = document.querySelector(".subtract")
const dividebtn = document.querySelector(".divide")
const multiplybtn = document.querySelector(".multiply")
const equalsbtn = document.querySelector(".equals")


digitbuttons.forEach((digit) => {
  digit.addEventListener("click", (event) => {
    display.textContent = display.textContent + digit.innerText
    displayvalue = Number(display.textContent)
  })
})

sumbtn.addEventListener("click", (event) => {
  firstNumber = displayvalue
  secondNumber = 0
  display.textContent = ""
  operator = "sum"
})
subtractbtn.addEventListener("click", (event) => {
  firstNumber = displayvalue
  secondNumber = 0
  display.textContent = ""
  operator = "subtract"
})
dividebtn.addEventListener("click", (event) => {
  firstNumber = displayvalue
  secondNumber = 0
  display.textContent = ""
  operator = "divide"
})
multiplybtn.addEventListener("click", (event) => {
  firstNumber = displayvalue
  secondNumber = 0
  display.textContent = ""
  operator = "multiply"
})

equalsbtn.addEventListener("click", (event) => {
  secondNumber = displayvalue
  display.textContent = operate(firstNumber, secondNumber, operator)
  displayvalue = Number(display.textContent)
  firstNumber = displayvalue
  secondNumber = 0
})

