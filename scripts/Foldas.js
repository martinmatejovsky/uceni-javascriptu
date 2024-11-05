/*# Chessboard
====================================================================================
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each 
position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it 
works for any size, outputting a grid of the given width and height.
*/


//delam stringový řetezec, pokud je poseldní prvek krizen, další bude mezera
let pocetPoli = parseInt(prompt("Zadej kolik polí mám mít šachovnice v jednom řádku:"));
let poradi = " ";
let symbol1 = "#";
let symbol2 = " ";
let radekNaplneni = function () {
    for (let i = 1; i < pocetPoli; i++) {
        if (poradi.charAt(poradi.length - 1) == symbol1) {
            poradi += symbol2;
        }
        else {
            poradi += symbol1;
        }
    }
    console.log(poradi);
}

for (i = 1; i <= pocetPoli; i++) {
    radekNaplneni();
    if (poradi.charAt(0) == symbol1) {
        poradi = symbol2;
    }
    else {
        poradi = symbol1;
    }
}
//test comitu

/*
====================================================================================
# Kolik je to proboha v něčem normálním?
====================================================================================
Školník willy rád používá pro měření délek tradiční skotské jednotky. Jeden ovčí měchýř se rovná sedm žížalám.
Napište funkci, která přijme jako svůj jediný parametr číslo, které vyjadřuje délku v žížalách, a vrátí, kolik
je to ovčích měchýřů a žížal.
Příklad: 15 žížal --> 2 měchýře a 1 žížala.
*/
let zizaly = parseInt(prompt("Kolik žížal chceš převést na měchýře?"));

let prevodNaMechyreAZizaly = function (zizaly) {
    let celkemZizal = zizaly;
    let pocetMechyru = Math.floor(zizaly / 7);
    console.log(pocetMechyru);
    let pocetZizal = zizaly % 7;
    console.log(pocetZizal);
    console.log(celkemZizal + " žižal je ve výsledku " + pocetMechyru + " měchýře a " + pocetZizal + " žížal.");
}
prevodNaMechyreAZizaly(zizaly);
