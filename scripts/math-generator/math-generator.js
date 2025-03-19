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

    let firstNumber = randomIntFromInterval(firstNumberToCountRange[0], firstNumberToCountRange[1]) * multipleFirstNum
    let secondNumber = randomIntFromInterval(secondNumberToCountRange[0], secondNumberToCountRange[1]) * multipleSecondNum
    firstNumber = firstNumber.toFixed(roundOne)
    secondNumber = secondNumber.toFixed(roundTwo)

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