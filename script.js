class Calculator {
  constructor(previousCalcText, currentCalcText) {
    this.previousCalcText = previousCalcText
    this.currentCalcText = currentCalcText
    this.clear()
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousCalcText = document.querySelector('[data-previous-calc]')
const currentCalcText = document.querySelector('[data-current-calc]')

clear(){
  this.currentCalc = ''
  this.previousCalc = ''
  this.operation = undefined
}

delete() {

}

appendNumber(number) {

}
chooseOperation(operation) {

}

compute() {

}
}
