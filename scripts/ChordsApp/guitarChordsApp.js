//javascript, který bude provádět akci, bude tahat data z jiných JS, bude navázaný na HTML stránku, bude porvádět random kombinaci prvků a vypíše je na stránku

import chordsGuitarBasic from "../../data/chordsGuitar.js";
import chordsGuitarAdds from "../../data/chordsGuitarAdds.js";

//nastavení tlačíka start/stop
const buttonStart = document.getElementById("guitar-start-excercise");
//nastavení prostoru (podle matesa) kde se bude vypisovat výsledek funkce ShowRandomResult, tedy náhodný akord
const application = document.getElementById("app");
const arrOfPlayedChords = []; // pole kam se ukládají zobrazené akordy


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
}

// funkce na napushování randomchordu do array
const addResultToArr = function(){
    if(randomResultKeeper) {
      arrOfPlayedChords.push(randomResultKeeper);
      }
  }

// opakování random funkce v časovém intervalu
let intervalID;
const repeatFunction = function () {
  showRandomResult();
  addResultToArr();
   if (!intervalID) {
    intervalID = setInterval(() => {
      showRandomResult();
      addResultToArr();
    }, 2000);
  }
}
//ukončení opakování random funkce
const stopRepeatFunction = function () {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = undefined;
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
  console.log(arrOfPlayedChords);
  console.log(frequencyOfWiewedChords());
}

//přiřazení akce po kliknutí na tlačítko
buttonStart.addEventListener("click", firstClick);

//vytvoření třídy pro tvorbu zobazených akordů
class CreateChordObj {
  constructor(chord, frequency) {
    this.autor = "Guitar Chord Application"
    this.chord = chord
    this.frequency = frequency
  }
}

//funkce na evidenci zobrazených akordů
function frequencyOfWiewedChords() {
  const frequencyMap = {};

  // Počítáme četnost jednotlivých slov
  arrOfPlayedChords.forEach(word => {
      frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  });

    // // Převádíme frekvenci do pole objektů
  const frequencyArray = Object.entries(frequencyMap).map(([chord, frequency]) => new CreateChordObj(chord, frequency));
      
  return frequencyArray;
}


