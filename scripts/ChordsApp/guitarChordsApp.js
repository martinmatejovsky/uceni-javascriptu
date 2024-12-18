//javascript, který bude provádět akci, bude tahat data z jiných JS, bude navázaný na HTML stránku, bude porvádět random kombinaci prvků a vypíše je na stránku

import chordsGuitarBasic from "../../data/chordsGuitar.js";
import chordsGuitarAdds from "../../data/chordsGuitarAdds.js";

//nastavení tlačíka start/stop
const buttonStart = document.getElementById("guitar-start-excercise");
//nastavení prostoru (podle matesa) kde se bude vypisovat výsledek funkce ShowRandomResult, tedy náhodný akord
const application = document.getElementById("app");
const playedChordsArr = []; // pole kam se ukládají zobrazené akordy

// funkce na volání random hodnoty z pole chordsGuitarBasic, které je definováno v chordsGuitar.js
// const callRandomChord = function () {
//   const minValue = 0;
//   const maxValue = chordsGuitarBasic.length - 1;
//   return chordsGuitarBasic[Math.floor(Math.random() * (maxValue - minValue + 1))].name;
// };

// //funkce na volání random hodnotot z pole chordsGuitarAdd
// const callRandomChordAdd = function() {
//   const minValue = 0;
//   const maxValue = chordsGuitarAdds.length - 1;
//   return chordsGuitarAdds[Math.floor(Math.random() * (maxValue - minValue + 1))].name;
// }

//souhrrná funkce  na volání random hodnoty z pole 
const callRandomChord = function (arr) {
  const minValue = 0;
  const maxValue = arr.length - 1;
  return arr[Math.floor(Math.random() * (maxValue - minValue + 1))].name;
}

//sloučení obou random hodnot dohromady, tedy námi požadovaný výsledek
let randomResultKeeper;
const showRandomResult = function () {
  randomResultKeeper = callRandomChord(chordsGuitarBasic) + " " + callRandomChord(chordsGuitarAdds);
  application.innerHTML = randomResultKeeper;
};

const playedChordsPush = function () {
  playedChordsArr.push(randomResultKeeper);
}

// opakování random funkce v časovém intervalu
let intervalID;
const repeatFunction = function () {
  showRandomResult();
  playedChordsPush();
  if (!intervalID) {
    intervalID = setInterval(showRandomResult, 5000)
    intervalID = setInterval(playedChordsPush, 5000); // bude to takto fungovat? - ano, funguje - napushování zobrazeného akordu do pole
  }
}
//ukončení opakování random funkce
const stopRepeatFunction = function () {
  if (intervalID) {
    clearInterval(intervalID);
  }
}

//změna funkce tlačítka guitar-sart-excercise - snaha o změnu po kliknutí - Start-Stop
let firstClick = function () {
  repeatFunction();
  buttonStart.removeEventListener("click", firstClick);
  buttonStart.textContent = "STOP the ROCK!!!";
  buttonStart.addEventListener("click", secondClick);
}

let secondClick = function () {
  stopRepeatFunction();
  buttonStart.textContent = "Lets rock";
  buttonStart.removeEventListener("click", secondClick);
  buttonStart.addEventListener("click", firstClick);
}

//přiřazení akce po kliknutí na tlačítko
buttonStart.addEventListener("click", firstClick);


