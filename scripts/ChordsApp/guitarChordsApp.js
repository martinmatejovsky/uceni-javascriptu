//javascript, který bude provádět akci, bude tahat data z jiných JS, bude navázaný na HTML stránku, bude porvádět random kombinaci prvků a vypíše je na stránku

import avaliableChordsBase from "../data/chordsGuitar.js";

const buttonShowNext = document.getElementById("guitar-start-exercise");
const application = document.getElementById("app");

const buttonScream = () => {
  application.innerHTML = "C";
};

buttonShowNext.addEventListener("click", buttonScream);
