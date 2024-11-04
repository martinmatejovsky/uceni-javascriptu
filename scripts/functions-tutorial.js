// revers cisla
function reverse_a_number(inputNumber) {
	inputNumber = inputNumber + "";                   // pokud sectu cislo a string, v tomto pripade "" tak js prevede cislo na string
	inputNumber.split("").reverse().join("");      // .split rozlozi input na samostatne znaky (vytvori pole). .reverse - provede revers, .join("") spoji pole do stringu
//    console.log(typeof inputNumber)
    inputNumber = Number(inputNumber)                 // prevede string na number
//    console.log(typeof inputNumber)
    return inputNumber    // po return se uz nic nedela. ukoncuje fci. Neni nutne mit pro kazdou fci
}

console.log(reverse_a_number(32243));
console.log(reverse_a_number);