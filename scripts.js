// sem možno psát scripty
console.log('akce z externiho souboru');

let counterForgedIncrement = document.getElementById('counterForgedIncrement');
let counterForgedInput = document.getElementById('counterForgedInput');
let counterForgedDecrement = document.getElementById('counterForgedDecrement');
let counterForgedClear = document.getElementById('counterForgedClear');
let productsTotalForged = document.getElementById('productsTotalForged');

let counterPressedIncrement = document.querySelector('counterPressedIncrement');
let counterPressedInput = document.querySelector('counterPressedInput');
let counterPressedDecrement = document.querySelector('counterPressedDecrement');
let counterPressedClear = document.querySelector('counterPressedClear');
let productsTotalPressed = document.querySelector('productsTotalPressed');

let productsTotal = document.querySelector('productsTotal');


//counterForgedIncrement.addEventListener('click', () => {                        //anonymni fce v sipkovem zpisu
//    counterForgedInput.value = parseInt(counterForgedInput.value) + 1;
//});

//counterForgedIncrement.addEventListener('click', function() {                   //anonymni fce
//    counterForgedInput.value = parseInt(counterForgedInput.value) + 1;
//});

function increment() {                                                              //funkce definovana jako increment
                                                        
    let counterForgedInputAmount = Number(counterForgedInput.value)

    console.log("i") 
    if (isNaN(counterForgedInputAmount)) {                                          //vykricnik prevadi na boolean a udela z nej opacnou hodnotu
        counterForgedInput.value = 0
    } else {
        counterForgedInput.value = counterForgedInputAmount + 1;
    }
}

function decrement() {                                                          //funkce definovana jako increment
    counterForgedInput.value = parseInt(counterForgedInput.value) + 1;
    let counterForgedIncrementAmount = Number(counterForgedIncrement)
        if (!counterForgedIncrementAmount){                                     //vykricnik prevadi na boolean a udela z nej opacnou hodnotu
            alert("Zadej číslo");
        }
}

counterForgedIncrement.addEventListener('click', increment);                  //zavolani fce increment
console.log(counterForgedIncrement)

counterForgedDecrement.addEventListener('click', () => {
    if (counterForgedInput.value == 0){
        counterForgedInput.value = 0
    } else {
        counterForgedInput.value = parseInt(counterForgedInput.value) - 1;
    }
});

counterForgedClear.addEventListener('click', () => {
    counterForgedInput.value = 0
});
