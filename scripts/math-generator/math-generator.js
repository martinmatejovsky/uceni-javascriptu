const buttonStart = document.getElementById("math-start-exercise")
const application = document.getElementById("app")

buttonStart.addEventListener('click', () => {
    application.innerHTML = randomMathExample()
})

function randomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

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
