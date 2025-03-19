//javascript, který bude provádět akci, bude tahat data z jiných JS, bude navázaný na HTML stránku, bude porvádět random kombinaci prvků a vypíše je na stránku

import chordsGuitarBasic from "../../data/chordsGuitar.js";
import chordsGuitarAdds from "../../data/chordsGuitarAdds.js";

//nastavení tlačíka start/stop
const buttonStart = document.querySelector(".button-start");
//nastavení prostoru (podle matesa) kde se bude vypisovat výsledek funkce ShowRandomResult, tedy náhodný akord
const application = document.querySelector(".app");
const playedChords = document.querySelector(".playedChords");
const arrOfPlayedChords = []; // pole kam se ukládají zobrazené akordy
const pictureOfChord = document.getElementById("pictureOfChord"); // pro zobrazení obrázku
const buttonOfPlayedChords = document.querySelector(".button-show-chords");
const countdown = document.querySelector(".countdown");
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
  pictureOfChord.innerHTML = ""; //vymaže obrázek před dalším zobrazením
};

// funkce na zobrazení obrázku - akordu - v návaznosti na náhodně vytvořený akord
let chordPicturePrint = function () {
  if (pictureOfChord.innerHTML.length == 0) {
    let chordPicture = document.createElement("img");
    chordPicture.src =
      "../../images/GuitarChordsImages/" + randomResultKeeper + ".png";
    chordPicture.alt = "Akord " + randomResultKeeper;
    pictureOfChord.appendChild(chordPicture);
  }
};

// funkce na napushování randomchordu do array
const addResultToArr = function () {
  if (randomResultKeeper) {
    arrOfPlayedChords.push(randomResultKeeper);
  }
};

//funkce na odpočítávání času zobrazneí akordu
let countdownIntervalPictureDisplay;
const startCountdownPictureDisplay = function (message) {
  let countdownNumber = 5;
  countdown.textContent = message + countdownNumber + " seconds !";

  countdownIntervalPictureDisplay = setInterval(() => {
    countdownNumber--;
    countdown.textContent = message + countdownNumber + " seconds !";
    console.log("countdownIntervalPictureDisplay", countdownNumber);
    if (countdownNumber <= 0) {
      clearInterval(countdownIntervalPictureDisplay);
      countdownIntervalPictureDisplay = null;
    }
  }, 1000);
};

let countdownIntervalPictureRemove;
const startCountdownPictureRemove = function (message) {
  let countdownNumber = 5;
  if (countdown.textContent == "") {
  } else {
    countdown.textContent = message + countdownNumber + " seconds !";

    countdownIntervalPictureRemove = setInterval(() => {
      countdownNumber--;
      countdown.textContent = message + countdownNumber + " seconds !";
      console.log("countdownIntervalPictureRemove", countdownNumber);
      if (countdownNumber <= 1) {
        clearInterval(countdownIntervalPictureRemove);
        countdownIntervalPictureRemove = null;
      }
    }, 1000);
  }
};

//funkce na zastavení odpočítávání času
const countdownFunctionStop = function () {
  clearInterval(countdownIntervalPictureDisplay);
  clearInterval(countdownIntervalPictureRemove);
  countdown.textContent = "";
};

// opakování random funkce v časovém intervalu
let intervalID;
const repeatFunction = function () {
  showRandomResult();
  addResultToArr();
  startCountdownPictureDisplay("Picture will be displayed in ");
  setTimeout(() => {
    //spustení funkce  5 sekund po funkci showrandomresult
    startCountdownPictureRemove("Picture will dissapear in ");
  }, 5000);
  setTimeout(() => {
    chordPicturePrint();
  }, 5000);

  if (!intervalID) {
    intervalID = setInterval(() => {
      showRandomResult();
      addResultToArr();
      startCountdownPictureDisplay("Picture will be displayed in ");
      setTimeout(() => {
        //spustení funkce  5 sekund po funkci showrandomresult
        startCountdownPictureRemove("Picture will dissapear in ");
      }, 5000);
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
    intervalID = null;
  }
  chordPicturePrint();
  countdownFunctionStop();
};

//změna funkce tlačítka guitar-sart-excercise - snaha o změnu po kliknutí - Start-Stop
let clickStop = function () {
  stopRepeatFunction();
  buttonStart.textContent = "Lets rock";
  buttonStart.removeEventListener("click", clickStop);
  buttonStart.addEventListener("click", clickStart);
};

let clickStart = function () {
  repeatFunction();
  buttonStart.removeEventListener("click", clickStart);
  buttonStart.textContent = "STOP the ROCK!!!";
  buttonStart.addEventListener("click", clickStop);
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
