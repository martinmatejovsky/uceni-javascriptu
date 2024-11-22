
function sumNumbers (a, b) {
    let result = a + b // javascript si zapamatuje, kolik je a + b, a zapise si to do promenne

    // side effects
    // console.log(a + b) // si javascript dale v kodu nepamatuje, kolik teda bylo a + b
    // console.log('vysledek je ' + result)

    // udelej cokoliv jineho
    // treba posli vysledek na server do databaze

    return result
}

let sumOf1and6 = sumNumbers(1, 6) // jako kdyby to bylo 7

sumNumbers(6, 6) // jako kdyby to bylo 12

let myFavoriteNumber = 14

console.log(sumNumbers(1, 6))
sumNumbers(6, 6) < sumNumbers(6, 8)