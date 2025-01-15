//javascript, který bude provádět akci, bude tahat data z jiných JS, bude navázaný na HTML stránku, bude porvádět random kombinaci prvků a vypíše je na stránku

import chordsGuitarBasic from "../../data/chordsGuitar.js";
import chordsGuitarAdds from "../../data/chordsGuitarAdds.js";

//nastavení tlačíka start/stop
const buttonStart = document.getElementById("guitar-start-excercise");
//nastavení prostoru (podle matesa) kde se bude vypisovat výsledek funkce ShowRandomResult, tedy náhodný akord
const application = document.getElementById("app");
const playedChords = document.getElementById("playedChords");
const arrOfPlayedChords = []; // pole kam se ukládají zobrazené akordy
const pictureOfChord = document.getElementById("pictureOfChord"); // pro zobrazení obrázku
const buttonOfPlayedChords = document.getElementById("buttonOfPlayedChords");

//souhrrná funkce  na volání random hodnoty z pole
const callRandomChord = function (arr) {
  const minValue = 0;
  const maxValue = arr.length - 1;
  return arr[Math.floor(Math.random() * (maxValue - minValue + 1))].name;
};

//sloučení obou random hodnot dohromady, tedy námi požadovaný výsledek
let randomResultKeeper;
const showRandomResult = function () {
  randomResultKeeper =
    callRandomChord(chordsGuitarBasic) +
    " " +
    callRandomChord(chordsGuitarAdds);
  application.innerHTML = randomResultKeeper;
  pictureOfChord.innerHTML = "";
};

// funkce na zobrazení obrázku - akordu - v návaznosti na náhodně vytvořený akord
let chordPicturePrint = function () {
  let chordPicture = document.createElement("img");
  chordPicture.src =
    "../../images/GuitarChordsImages/" + randomResultKeeper + ".png";
  chordPicture.alt = "Akord " + randomResultKeeper;
  pictureOfChord.appendChild(chordPicture);
};

// funkce na napushování randomchordu do array
const addResultToArr = function () {
  if (randomResultKeeper) {
    arrOfPlayedChords.push(randomResultKeeper);
  }
};

// opakování random funkce v časovém intervalu
let intervalID;
const repeatFunction = function () {
  showRandomResult();
  addResultToArr();
  setTimeout(() => {
    chordPicturePrint();
  }, 5000);
  if (!intervalID) {
    intervalID = setInterval(() => {
      showRandomResult();
      addResultToArr();

      setTimeout(() => {
        //spustení funkce print 5 sekund po funkci showrandomresult
        chordPicturePrint();
      }, 5000);
    }, 10000);
  }
};
//ukončení opakování random funkce
const stopRepeatFunction = function () {
  if (intervalID) {
    clearInterval(intervalID);
    intervalID = undefined;
  }
};

//změna funkce tlačítka guitar-sart-excercise - snaha o změnu po kliknutí - Start-Stop
let clickStart = function () {
  repeatFunction();
  buttonStart.removeEventListener("click", clickStart);
  buttonStart.textContent = "STOP the ROCK!!!";
  buttonStart.addEventListener("click", clickStop);
};

let clickStop = function () {
  stopRepeatFunction();
  buttonStart.textContent = "Lets rock";
  buttonStart.removeEventListener("click", clickStop);
  buttonStart.addEventListener("click", clickStart);
};

//přiřazení akce po kliknutí na tlačítko
buttonStart.addEventListener("click", clickStart);

//vytvoření třídy pro tvorbu zobazených akordů
class PlayedChords {
  constructor(chord, frequency) {
    this.autor = "Guitar Chord Application";
    this.chord = chord;
    this.frequency = frequency;
  }
}

//funkce na evidenci zobrazených akordů
function frequencyOfWiewedChords() {
  const frequencyMap = {};

  // Počítáme četnost jednotlivých slov - tohle už bylo s nápovědou chatbota
  arrOfPlayedChords.forEach((word) => {
    frequencyMap[word] = (frequencyMap[word] || 0) + 1;
  });

  // Převádíme frekvenci do pole objektů
  const frequencyArray = Object.entries(frequencyMap).map(
    ([chord, frequency]) => new PlayedChords(chord, frequency)
  );

  playedChords.innerHTML = ""; // Vyčistit předchozí obsah
  playedChords.innerHTML = "Statistika zobrazených akordů: ";
  frequencyArray.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item.chord + ":  " + item.frequency + "x";
    playedChords.appendChild(listItem);
  });
  return frequencyArray;
}

buttonOfPlayedChords.addEventListener("click", frequencyOfWiewedChords);
