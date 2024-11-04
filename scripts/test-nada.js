/*
====================================================================================
# Největší číslo
====================================================================================
Napiš funkci, která přijme pole čísel a vrátí největší číslo.
*/
let randomNumbers = [2, 2, 8, 123, 1, -1]
let nejvetsi = randomNumbers[0];

for (i=0; i < randomNumbers.length; i++) {
	if (randomNumbers[i] > nejvetsi) {
		nejvetsi = randomNumbers[i];
  }
}
console.log(nejvetsi);

/*
====================================================================================
# Hodnocení známek
====================================================================================
Napiš funkci, která vytvoří nové pole (treba jmenem badGrades), ve kterém budou jen ta čísla, co jsou větší než 3.
Jako vstup si vezmeme proměnnou znamkyVeSkole
*/
let gradesAtSchool = [1, 5, 5, 4, 5, 2, 1, 1, 1, 2];
let badGrades = [];
for (i=0; i < gradesAtSchool.length; i++) {
    if (gradesAtSchool[i] > 3) {
        badGrades.push(gradesAtSchool[i]);
    }
}

console.log(badGrades);
/*