const applicationPage = document.getElementById('application')
let newUsers = ['Jan Honza', 'Karel Gott', 'Josef Pepa']
const editedUser =  ['2', 'Mgr. Alexandr Saša']

let tempUsers = users.replace('[','').replace(']','').replace(/[\n"]+/gm, '')
console.log(tempUsers)
let helpUsers = tempUsers.split(',')
for (let i = 0; i < helpUsers.length; i++){
    helpUsers[i] = helpUsers[i].trimStart()     //odstrani mezery na zacatku stringu
}
let checkNumberOfUsers = helpUsers.length

// 1 - proměnná "users" je databáze uživatelů
applicationPage.innerHTML = '1 - ' + users + '<hr>'

// 2 - zjisti počet uživatelů v databázi
let numberOfUsers = '3'
applicationPage.insertAdjacentHTML('beforeend', '2 - ' + numberOfUsers + '; My check is: ' + checkNumberOfUsers +'<hr>')

// 3 - vypiš posledního uživatele z databáze
let lastUser = 'Alexandr Saša'
let checkLastUser = helpUsers[checkNumberOfUsers - 1]
applicationPage.insertAdjacentHTML('beforeend', '3 - ' + lastUser + '; My check is: ' + checkLastUser + '<hr>')

// 4 - vypiš index (pozici) uživatele "Jan Honza"
let searchedUserIndex = '0'
let positionMatch = helpUsers.indexOf("Jan Honza")   // .indexOf ()vraci pozici , pokud da -1, tak nenaslo shodu
applicationPage.insertAdjacentHTML('beforeend', '4 - ' + searchedUserIndex + '; My check is: ' + positionMatch + '<hr>')

// 5 - přidej do pole users uživatele 'Prokop Buben' na poslední pozici
users = [
    "Jan Honza",
    "Josef Pepa",
    "Alexandr Saša",
    'Prokop Buben'
]
helpUsers.push('Prokop Buben')
applicationPage.insertAdjacentHTML('beforeend', '5 - ' + users + '; My check is: ' + helpUsers + '<hr>')

// 6 - máme pole editedUser. Jeho první položka říká index uživatele a druhá je jeho nové jméno. Vyměň uživatele v poli users na daném indexu za nové jméno
helpUsers[editedUser[0]] = editedUser[1]
applicationPage.insertAdjacentHTML('beforeend', '6 - ' + users + '; My check is: ' + helpUsers + '<hr>')

// 7 - napiš true/false za každou osobu v poli newUsers podle toho, jestli už se nacházejí v poli users
let userFound = 'true false true'
// let positionMatch = helpUsers.indexOf("Jan Honza")
// let newUsers = ['Jan Honza', 'Karel Gott', 'Josef Pepa']
for (let i = 0; i < newUsers.length; i++){
    
}
applicationPage.insertAdjacentHTML('beforeend', '7 - ' + userFound + '<hr>')

// 8 - opět z pole newUsers projdi jednotlivé osoby a pokud ještě nejsou v poli users, tak je tam přidej na poslední pozici
users = [
    "Jan Honza",
    "Josef Pepa",
    "Mgr. Alexandr Saša",
    'Prokop Buben',
    'Karel Gott'
]
applicationPage.insertAdjacentHTML('beforeend', '8 - ' + users + '<hr>')

// 9 - opět z pole newUsers projdi jednotlivé osoby a pokud již jsou v poli users, tak uživatele z pole users smaž
users = [
    "Mgr. Alexandr Saša",
    'Prokop Buben',
]
applicationPage.insertAdjacentHTML('beforeend', '9 - ' + users + '<hr>')
