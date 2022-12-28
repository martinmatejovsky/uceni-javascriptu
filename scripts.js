
//counterForgedIncrement.addEventListener('click', () => {                        //anonymni fce v sipkovem zpisu
//    counterForgedInput.value = parseInt(counterForgedInput.value) + 1;
//});

//counterForgedIncrement.addEventListener('click', function() {                   //anonymni fce
//    counterForgedInput.value = parseInt(counterForgedInput.value) + 1;
//});

/*function increment() {                                                              //funkce definovana jako increment
    let counterForgedInputAmount = Number(counterForgedInput.value)
    if (isNaN(counterForgedInputAmount)) {                                          //overi zda je nebo neni promenna NaN (true / false)
        counterForgedInput.value = 0
    } else {
        counterForgedInput.value = counterForgedInputAmount + 1;
    }
}

function decrement() {                                                          //funkce definovana jako increment
    counterForgedInput.value = parseInt(counterForgedInput.value) + 1;
    let counterForgedIncrementAmount = Number(counterForgedIncrement)
        if (!counterForgedIncrementAmount) {                                     //vykricnik prevadi na boolean a udela z nej opacnou hodnotu
            alert("Zadej číslo");
        }
}

counterForgedIncrement.addEventListener('click', increment);                  //zavolani fce increment
console.log(counterForgedIncrement)

counterForgedDecrement.addEventListener('click', () => {
    if (counterForgedInput.value == 0) {
        counterForgedInput.value = 0
    } else {
        counterForgedInput.value = parseInt(counterForgedInput.value) - 1;
    }
});

counterForgedClear.addEventListener('click', () => {
    counterForgedInput.value = 0
});
*/


let productCounters = document.getElementsByClassName('productCounter');
let len = productCounters.length;
let total = 0
function initCounters(){
    for (let i = 0; i < len; i++) {
        let increment = productCounters[i]
        let incrementButton = increment.getElementsByClassName('productCounter--increment')[0];
        let inputValue = increment.getElementsByClassName('productCounter__input')[0];
        let decrementButton = increment.getElementsByClassName('productCounter--decrement')[0];
        let clearButton = increment.getElementsByClassName('productCounter--clear')[0];
        function incrementation() {                     //funkce definovana jako increment
            let counterInputAmount = Number(inputValue.value)
            if (isNaN(counterInputAmount)) {           //overi zda je nebo neni promenna NaN (true / false)
                inputValue.value = 0
            } else if (counterInputAmount < 0) { 
                inputValue.value = 0
            } else {
                inputValue.value = counterInputAmount + 1;
            }
        }
        function decrementation() {                    //funkce definovana jako increment
            let counterInputAmount = Number(inputValue.value)
            if (isNaN(counterInputAmount)) {           //overi zda je nebo neni promenna NaN (true / false)
                inputValue.value = 0
            } else if (counterInputAmount <= 0) { 
                inputValue.value = 0
            } else {
                inputValue.value = counterInputAmount - 1;
            }
        }
        incrementButton.addEventListener('click', incrementation);
        decrementButton.addEventListener('click', decrementation);   
        clearButton.addEventListener('click', () => {
            inputValue.value = 0
        });   
        inputValue.addEventListener('change', () => {
            console.log(inputValue.value) 
        })
    }
    
} 

initCounters()