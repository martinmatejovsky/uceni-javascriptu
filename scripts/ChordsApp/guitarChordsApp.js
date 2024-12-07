//javascript, který bude provádět akci, bude tahat data z jiných JS, bude navázaný na HTML stránku, bude porvádět random kombinaci prvků a vypíše je na stránku

import chordsGuitarBasic from "../../data/chordsGuitar.js";

const buttonStart = document.getElementById("guitar-start-excercise");
const application = document.getElementById("app");

// funkce na volání random hodnoty z pole chordsGuitarBasic, které je definováno v chordsGuitar.js
const callRandomChord = function () {
  const minValue = 0;
  const maxValue = chordsGuitarBasic.length - 1;
  //const chordValue = chordsGuitarBasic[Math.floor(Math.random() * (maxValue - minValue + 1))];
// application.innerHTML = chordValue.name;
  application.innerHTML = chordsGuitarBasic[Math.floor(Math.random() * (maxValue - minValue + 1))].name;
};

//přiřazení akce po kliknutí na tlačítko
buttonStart.addEventListener("click", callRandomChord);
