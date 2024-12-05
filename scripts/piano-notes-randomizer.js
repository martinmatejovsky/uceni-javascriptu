import availableNotes from '../data/musical-notes.js'

const buttonShowNext = document.getElementById("piano-start-exercise")
const application = document.getElementById("app")

const buttonScream = () => {
    application.innerHTML = "C"
}

buttonShowNext.addEventListener('click', buttonScream)

