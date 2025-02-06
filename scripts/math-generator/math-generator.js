// const buttonStart = document.getElementById("math-start-exercise")
// const application = document.getElementById("app")

// buttonStart.addEventListener('click', () => {
//    application.innerHTML = randomMathExample()
// })

const examplesOption = document.getElementById("examples");
const examplesValue = examplesOption.options[examplesOption.selectedIndex].value;

const smallMultiplicationOption = document.getElementById("small-multiplication");
const smallMultiplicationValue = smallMultiplicationOption.options[smallMultiplicationOption.selectedIndex].value;

const bigMultiplicationOption = document.getElementById("big-multiplication");
const bigMultiplicationValue = bigMultiplicationOption.options[bigMultiplicationOption.selectedIndex].value;

const multiplicationDecimalPointOption = document.getElementById("multiplication-decimal-point");
const multiplicationDecimalPointValue = multiplicationDecimalPointOption.options[multiplicationDecimalPointOption.selectedIndex].value;

const additionHundretOption = document.getElementById("addition-hundret");
const additionHundretValue = additionHundretOption.options[additionHundretOption.selectedIndex].value;

const additionUpToHundretOption = document.getElementById("addition-up-to-hundret");
const additionUpToHundretValue = additionUpToHundretOption.options[additionUpToHundretOption.selectedIndex].value;

const additionDecimalPointOption = document.getElementById("addition-decimal-point");
const additionDecimalPointValue = additionDecimalPointOption.options[additionDecimalPointOption.selectedIndex].value;

function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

function addiction() {
    let firstAddictionNumber = randomNumber(10);
    let secondAddictionNumber = randomNumber(10);
    return (firstAddictionNumber + " + " + secondAddictionNumber);
}

function substraction() {
    let firstSubstractionNumber = randomNumber(100);
    let secondSubstractionNumber = randomNumber(100);
    if (firstSubstractionNumber < secondSubstractionNumber) {
        return (secondSubstractionNumber + " - " + firstSubstractionNumber);
    }
    return (firstSubstractionNumber + " - " + secondSubstractionNumber);
}

function multiple() {
    let firstMultipleNumber = randomNumber(10);
    let secondMultipleNumber = randomNumber(10);
    return (firstMultipleNumber + " * " + secondMultipleNumber);
}

function division() {
    let firstDivisionNumber = randomNumber(10);
    let secondDivisionNumber = randomNumber(10);
    let thirdDivisionNumber = firstDivisionNumber * secondDivisionNumber;
    return (thirdDivisionNumber + " / " + firstDivisionNumber);
}
/*
function randomMathExample() {

    let mathSign = randomNumber(3);
    
    if (mathSign == 3){
        let firstMultipleNumber = randomNumber(10);
        let secondMultipleNumber = randomNumber(10);
        return (firstMultipleNumber + " * " + secondMultipleNumber);
    } else {
        let firstNumber = randomNumber(100);
        let secondNumber = randomNumber(100);
        if (mathSign == 1){
            return (firstNumber + " + " + secondNumber);
        } else {
            if (firstNumber < secondNumber){
            secondNumber = firstNumber;
            }
        return (firstNumber + " - " + secondNumber);
        }
    }
}
*/