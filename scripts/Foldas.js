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

/
//delam stringový řetezec, pokud je poseldní prvek krizen, další bude mezera
let pocetPoli = parseInt(prompt("Zadej kolik polí mám mít šachovnice v jednom řádku:"));
let radekNaplneni = function () {
    let radek;
    let poradi = radek.charAt(radek.length - 1);
    let symbol1 = "#";
    let symbol2 = " ";
    console.log(poradi);
    if (poradi = symbol1) {
        radek += symbol2;
    }
    else {
        radek += symbol1;
    }
    return radek;
}
radekNaplneni();
console.log(radek);

/* for (i = 1; i <= pocetPoli; i++) {
if (radek = symbol1) {
   radek.lenght
       +=
   
}

}
}
for (i = 1; i <= pocetPoli; i++) {
//console.log(i);
//document.write("# ");



}
*/