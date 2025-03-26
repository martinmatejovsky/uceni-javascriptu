console.log("File variables.js loaded");

let a = "Rekl jsem 'Ahoj'";

let nakupniSeznam = ["cibule", [], "brambory"];

console.log(typeof nakupniSeznam); // "Object"

console.log(nakupniSeznam[0]);

nakupniSeznam.length;

a.length;

function sumUpNumbers(/* parametry funkce */) {
  // telo funkce
}

let mySumFunction = (a, b) => {
  let result = a * b;
  console.log(result);
};

mySumFunction(8, 5);

// podminky
if (nakupniSeznam.length < 10) {
  // kod, ktery se ma provest, kdyz podminka plati
} else if (nakupniSeznam.length < 50) {
  // kod, ktery se ma provest, kdyz podminka plati
} else {
  // kod, ktery se ma provest, kdyz podminka plati
}

for (let i = 0; i >= 5; i + 1) {
  // neco proved

  if (nakupniSeznam.length < i) {
    break;
  }

  console.log(nakupniSeznam[i]);
}

function transferBladder(earthWorm) {
  // earthWorm = 15
  let bladders = 0;
  let remainingWorms = 0;

  bladders = Math.floor(earthWorm / 7);
  remainingWorms = earthWorm % 7; // => 7 + 7 + 1

  console.log(
    "vysledek je " + bladders + " mechyru " + remainingWorms + " zizal."
  );
}

transferBladder(15);
