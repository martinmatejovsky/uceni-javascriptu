/*
POLE

založme si pole "measuredTemperatures", které obsahuje čísla s měřením teplot za poslední týden.
*/

// let measuredTemperatures = [15, 16, 18, 15, 16, 16, 17]

// založme si pole za pomoci vkládání proměnných, ne čistých hodnot
let monday = 15;
let tuesday = 16;

let measuredTemperatures = [monday, tuesday, 18, 15, 16, 16, 17]

// console.log(measuredTemperatures)

// Vypišme do konzole první položku, tedy první číslo, co jsme naměřili

// console.log(measuredTemperatures[0])

// Jak získat poslední položku z pole "measuredTemperatures"?
let lastItemIndex = measuredTemperatures.length - 1;

// console.log(measuredTemperatures[lastItemIndex])

// založit si novou proměnnou s měřením a přidat do pole metodou .push(coChcemePridat)

let nextMonday = 14;

measuredTemperatures.push(nextMonday)

// console.log(measuredTemperatures)

/*
FUNKCE

Napiste funkci, ktera převede cislo 35, co predstavuje teplotu ve stupnich celsia, na
stupně Fahrenheita. 
fahr = (celsius + 32) * 1.8
*/

// deklarovat funkci dvěma různými způsoby

/*
function fahrenheitCalculation () {
    let defaultCelsius = 35;
    let fahrenheit = (defaultCelsius + 32) * 1.8;

    console.log(fahrenheit)
}*/

/*const fahrenheitCalculation = function () {
    let defaultCelsius = 35;
    let fahrenheit = defaultCelsius * 1.8 + 32;

    console.log(fahrenheit)
}*/

// funkce napise do console, kolik je to stupnu Fahrenheita

/*const fahrenheitCalculation = function () {
    let defaultCelsius = 35;
    let fahrenheit = defaultCelsius * 1.8 + 32;

    console.log(fahrenheit)
}*/
// SCOPE


// napise do console i vrátí (klíčové slovo "return"), kolik je to stupnu 

/* const fahrenheitCalculation = function () {
    let defaultCelsius = 35;
    let fahrenheit = defaultCelsius * 1.8 + 32;

    console.log(fahrenheit)
    return fahrenheit
}*/

// let calculation = fahrenheitCalculation()

// console.log(calculation)

// upravit funkci tak, aby číslo 35 nebylo pevně dané, ale funkce jej mohla přijímat jako parametr

const fahrenheitCalculation = function (celsius) {
    // let celsius = to, co prijde behem volani funkce

    console.log(celsius + " stupnu celsia")

    let fahrenheit = celsius * 1.8 + 32;

    console.log(fahrenheit  + " stupnu fahrenheita")
    return fahrenheit
}

// funkce jako parametr přijme první (drouhou?) položku z pole "measuredTemperatures"

fahrenheitCalculation(measuredTemperatures[measuredTemperatures.length - 1])
