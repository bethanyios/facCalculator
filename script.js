class Calculator {
  constructor(previousCalcTextElement, currentCalcTextElement) {
    this.previousCalcTextElement = previousCalcTextElement
    this.currentCalcTextElement = currentCalcTextElement
    this.clear()
  }

clear() {
  this.currentCalc = ''
  this.previousCalc = ''
  this.operation = undefined
}

delete() {

}

appendNumber(number) {
  if (number === '.' && this.currentCalc.includes('.')) return
  this.currentCalc = this.currentCalc.toString() + number.toString()
}

chooseOperation(operation) {

}

compute() {

}

updateDisplay() {
  this.currentCalcTextElement.innerText = this.currentCalc
}
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousCalcTextElement = document.querySelector('[data-previous-calc]')
const currentCalcTextElement = document.querySelector('[data-current-calc]')

const calculator = new Calculator(previousCalcTextElement, currentCalcTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})
