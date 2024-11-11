/*
POLE

založme si pole "measuredTemperatures", které obsahuje čísla s měřením teplot za poslední týden.
*/


let measuredTemperatures = [15, 16, 18, 15, 16, 16, 17]

// založme si pole za pomoci vkládání proměnných, ne čistých hodnot
let monday = 15;
let tuesday = 16;
let wednesdal = 18;
let thursday = 15;
let friday = 16;
let saturday = 16;
let sunday = 17;

let measuredTemperatures2 = [monday, tuesday, 18, 15, 16, 16, 17];

// Vypišme do konzole první položku, tedy první číslo, co jsme naměřili
console.log(measuredTemperatures2[0]);

// Jak získat poslední položku z pole "measuredTemperatures"?
console.log(` poslední položka pole je ${measuredTemperatures2[measuredTemperatures2.length - 1]}`);


//založit si novou proměnnou s měřením a přidat do pole metodou .push(coChcemePridat)
let temperatureAdd = function (wantToAdd) {
    return measuredTemperatures2.push(wantToAdd);
}

temperatureAdd(14);
console.log(` poslední položka pole je ${measuredTemperatures2[measuredTemperatures2.length - 1]}`);

// /*
// FUNKCE

// Napiste funkci, ktera převede cislo 35, co predstavuje teplotu ve stupnich celsia, na
// stupně Fahrenheita.
// fahr = (celsius + 32) * 1.8
// */
function transferCsToFh1(celsius) {
    return ((celsius * 1.8) + 32);
}
console.log(transferCsToFh1(35));

// // deklarovat funkci dvěma různými způsoby

let transferCsToFh2 = function (celsius) {
    console.log(`vypočtený fahrenheit je ${celsius * 1.8 + 32}`);
    return celsius;
}
console.log(transferCsToFh2(40));


// // napise do console i vrátí (klíčové slovo "return"), kolik je to stupnu


// // upravit funkci tak, aby číslo 35 nebylo pevně dané, ale funkce jej mohla přijímat jako parametr

let celsiusEnter = parseInt(prompt("kolik stupnů chceš převést na Fahrenheita?"));
console.log(transferCsToFh2(celsiusEnter));


// // funkce jako parametr přijme první (drouhou?) položku z pole "measuredTemperatures"
console.log(transferCsToFh2(measuredTemperatures2[0]));
