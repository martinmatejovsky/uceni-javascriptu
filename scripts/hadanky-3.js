// prvni tri ukoly prevzaty ze zaveru kapitoly
// https://eloquentjavascript.net/02_program_structure.html
// kde je mozne i ziskat lehke napovedy

/*
====================================================================================
# Looping a triangle
====================================================================================
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
It may be useful to know that you can find the length of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
// → 3
*/


/*
====================================================================================
# FizzBuzz
====================================================================================
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, 
print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. 
So if you solved it, your labor market value just went up.)
*/


/*
====================================================================================
# Chessboard
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



/*
====================================================================================
# Největší číslo
====================================================================================
Napiš funkci, která přijme pole čísel a vrátí největší číslo.
*/
let randomNumbers = [2, 2, 8, 123, 1, -1]



/*
====================================================================================
# Hodnocení známek
====================================================================================
Napiš funkci, která vytvoří nové pole (treba jmenem badGrades), ve kterém budou jen ta čísla, co jsou větší než 3.
Jako vstup si vezmeme proměnnou znamkyVeSkole
*/
let gradesAtSchool = [1, 5, 5, 4, 5, 2, 1, 1, 1, 2]



/*
====================================================================================
# Hrdinové socialistické práce 1
====================================================================================
Napište funkci, která vrátí textovou větu začínající "Mí hrdinové jsou " a pak vypsaná jména z pole "heroes" oddělená čárkou.
Jména se samozřejmě budou brát postupně z pole "heroes".
*/
let heroesSimple = ["Mao Ce Tung", "Pol Pot", "Brežněv"]

// očekávaný výsledek: "Mí hrdinové jsou Mao Ce Tung, Pol Pot, Brežněv"



/*
====================================================================================
# Hrdinové socialistické práce 2
====================================================================================
Napište funkci, která vrátí textovou větu začínající "Mí hrdinové jsou " a pak vypsaná jména z pole "heroes" oddělená čárkou,
přičemž před posledním jménem nebude čárka, ale "a". Jména se samozřejmě budou brát postupně z pole "heroes".
Nápověda: počet položek v poli zjistíte přes vlastnost (property) jménem .length.
heroes.length // napise 4
*/
let heroesComplex = ["Mao Ce Tung", "Pol Pot", "Brežněv"]

// očekávaný výsledek: "Mí hrdinové jsou Mao Ce Tung, Pol Pot a Brežněv"



/*
====================================================================================
# Imperialistický agent
====================================================================================
Napište funkci podobou té z úkolu Hrdinové socialistické práce. Nyní ale přidejte podmíku, která nejprve zkontroluje, jestli 
položka z pole je datového typu text. Pokud ne, tak ji do věty nepřidávejte.
Nápověda: operátor typeof. Jeden z tzv. unárních operátorů, protože operaci udělají jen s jednou hodnotou. Naproti tomu binární
operátor, jako třeba plus, potřebuje dvě hodnoty, 1 + 1
*/
let heroesToCheck = ["Mao Ce Tung", "Pol Pot", 0o7, "Brežněv"]

// očekávaný výsledek: "Mí hrdinové jsou Mao Ce Tung, Pol Pot a Brežněv"



/*
====================================================================================
# Odměna pro vynálezce šachů
====================================================================================
Traduje se historka, že hru šachy si tehdy před dvěma tisíci lety indický král objednal u místního učence. Jako odměnu za jejich vynalezení 
požadoval učenec pouze jedno zrnko rýže na první políčko šachovnice, na druhé políčko dvě zrnka rýže, na třetí pole čtyři, na každé další 
opět přesně dvojnásobek. Nic víc po králi nechtěl. Ten ve vidině toho, že se jedná jen o pár zrnek rýže, přikývl. Možná si měl 
král objednat hru o čtyřech polích.
Napište funkci, která bude přijímat jeden parametr, a sice číslo, kolik polí daná desková hra má. Pak vypočti, kolik zrnek rýže bude na 
POSLEDNÍM poli deskové hry. Takže si můžeme vypočítat, kolik zrnek by bylo na posledním poli, pokud by šachy byly jen o 9 polích.
*/



/*
====================================================================================
# Opravdová dměna pro vynálezce šachů
====================================================================================
Viz předchozí úloha. Nyní se ale zajímáme o to, kolik zrnek rýže vlastně mělo být rozdáno celkem na všech polích dohromady, 
ne jen kolik to vychází na poslední pole.
*/


/*
====================================================================================
# Kolik je to proboha v něčem normálním?
====================================================================================
Školník willy rád používá pro měření délek tradiční skotské jednotky. Jeden ovčí měchýř se rovná sedm žížalám.
Napište funkci, která přijme jako svůj jediný parametr číslo, které vyjadřuje délku v žížalách, a vrátí, kolik
je to ovčích měchýřů a žížal.
Příklad: 15 žížal --> 2 měchýře a 1 žížala.
*/