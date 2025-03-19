const buttonStart = document.getElementById("Start");
const application = document.getElementById("app");

let dataSet;
let dataRange;
let dataParsed;
let firstNumberToCountRange;
let secondNumberToCountRange;
let multipleFirstNum;
let multipleSecondNum;
let operand;
let roundOne
let roundTwo

//let availableOperands = ["+","-","*","/"]

function randomIntFromInterval(min, max) {                                                      // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function fillData() {
    let selectedTag = document.getElementsByClassName("selectedOptions");                       //load all class="selectedOptions" to later check
    
    for (let i = 0; i < selectedTag.length; i++){
        if (selectedTag[i].value != "0") {                                                      //check if selected value is != 0. it means that some option was selected
            const selectedOption = selectedTag[i].options[selectedTag[i].selectedIndex];        //found option with the same value like was selected
            const dataRange = selectedOption.getAttribute('data-range');                        //load data from data-range as string
            dataParsed = JSON.parse(dataRange);                                                 //change string to objet
            console.log(dataParsed);
        }
    }

    firstNumberToCountRange = dataParsed.firstNumber;
    secondNumberToCountRange = dataParsed.secondNumber;
    multipleFirstNum = dataParsed.multipleFirstNum;
    multipleSecondNum = dataParsed.multipleSecondNum;
    operand = dataParsed.operand;
    roundOne = dataParsed.roundOne
    roundTwo = dataParsed.roundTwo
}

function writeExercices() {
//    let selectedOperand = availableOperands[operand]

    let firstNumber = randomIntFromInterval(firstNumberToCountRange[0], firstNumberToCountRange[1]) * multipleFirstNum
    let secondNumber = randomIntFromInterval(secondNumberToCountRange[0], secondNumberToCountRange[1]) * multipleSecondNum
    firstNumber = firstNumber.toFixed(roundOne)
    console.log(firstNumber)
    secondNumber = secondNumber.toFixed(roundTwo)
    console.log(secondNumber)

    if (operand == 0){                                                                           //addiction
        return (firstNumber + " + " + secondNumber)
    } else if (operand == 1){                                                                    //Subtraction
        return (firstNumber + " - " + secondNumber)
    } else if (operand == 2){                                                                    //Multiplication
        return (firstNumber + " * " + secondNumber)
    } else if (operand == 3){                                                                    //Division
        return (firstNumber + " / " + secondNumber)
    }
}

buttonStart.addEventListener("click", function(event) {
    event.preventDefault();                                                                      //prevent to reset page to default state. All JS action will just flash on the page
    
    fillData(event);
    application.innerHTML = writeExercices();
});


/*
buttonStart.addEventListener('click', () => {
    application.innerHTML = randomMathExample()
 })


const examplesOption = document.getElementById("examples");
if (examplesOption != null){
    const examplesValue = examplesOption.options[examplesOption.selectedIndex].value;
}

const smallMultiplicationOption = document.getElementById("small-multiplication");
const smallMultiplicationValue = smallMultiplicationOption.options[smallMultiplicationOption.selectedIndex].value;

const bigMultiplicationOption = document.getElementById("big-multiplication");
const bigMultiplicationValue = bigMultiplicationOption.options[bigMultiplicationOption.selectedIndex].value;

const multiplicationDecimalPointOption = document.getElementById("multiplication-decimal-point");
const multiplicationDecimalPointValue = multiplicationDecimalPointOption.options[multiplicationDecimalPointOption.selectedIndex].value;
/*
const additionHundretOption = document.getElementById("addition-hundret");
const additionHundretValue = additionHundretOption.options[additionHundretOption.selectedIndex].value;

const additionUpToHundretOption = document.getElementById("addition-up-to-hundret");
const additionUpToHundretValue = additionUpToHundretOption.options[additionUpToHundretOption.selectedIndex].value;

const additionDecimalPointOption = document.getElementById("addition-decimal-point");
const additionDecimalPointValue = additionDecimalPointOption.options[additionDecimalPointOption.selectedIndex].value;

let firstGeneratednumberRange;
let secondGeneratedNumberRange;
let noGenerateNumber;

if (smallMultiplicationValue != 0){
    firstGeneratednumberRange = 11;
    if (smallMultiplicationValue == 11){
        secondGeneratedNumberRange = 6;
    } else if (smallMultiplicationValue == 12){
        secondGeneratedNumberRange = 5;
    } else if (smallMultiplicationValue == 13){
        secondGeneratedNumberRange = 11;
    } else {
        noGenerateNumber = smallMultiplicationValue;
    }
}

function randomNumber(max) {
    return Math.floor(Math.random() * max);
}

function addition(firstGeneratednumberRange, secondGeneratedNumberRange) {
    let firstAdditionNumber = randomNumber(firstGeneratednumberRange);
    let secondAdditionNumber = randomNumber(secondGeneratedNumberRange);
    return (firstAdditionNumber + " + " + secondAdditionNumber);
}
/*
function substraction(firstGeneratednumberRange, secondGeneratedNumberRange) {
    let firstSubstractionNumber = randomNumber(firstGeneratednumberRange);
    let secondSubstractionNumber = randomNumber(secondGeneratedNumberRange);
    if (firstSubstractionNumber < secondSubstractionNumber) {
        return (secondSubstractionNumber + " - " + firstSubstractionNumber);
    } 
    return (firstSubstractionNumber + " - " + secondSubstractionNumber);
}
*/
/*
function multiple(firstGeneratednumberRange, secondGeneratedNumberRange) {
    let firstMultipleNumber = randomNumber(firstGeneratednumberRange);
    if (noGenerateNumber == null){
        let secondMultipleNumber = randomNumber(secondGeneratedNumberRange);
        return (firstMultipleNumber + " * " + secondMultipleNumber);
    } else if (smallMultiplicationValue == 12){
        let secondMultipleNumber = randomNumber(secondGeneratedNumberRange) + 6;
        return (firstMultipleNumber + " * " + secondMultipleNumber);
    } else 
        return (firstMultipleNumber + " * " + noGenerateNumber);
}
*/
/*
function division() {
    let firstDivisionNumber = randomNumber(10);
    let secondDivisionNumber = randomNumber(10);
    let thirdDivisionNumber = firstDivisionNumber * secondDivisionNumber;
    return (thirdDivisionNumber + " / " + firstDivisionNumber);
}

function randomMathExample() {
    if ()
}
/*    let mathSign = randomNumber(3);
    
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