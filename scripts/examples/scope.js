//===================================================================
// Example for difference between LET and VAR usage
//===================================================================

let outerVariable = 'Ja jsem vnejsi'

for (let i = 0; i < 1; i++) {
    let result = "VNITRNI ja sem!"

    // neco pocita
    console.log(outerVariable)
    console.log(innerVariable)

    return result
}


//===================================================================
// Example of unexpected behavior
//===================================================================

// declared with LET. Meaning variable lives in local scope.
// unexpected behavior.

// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(`declared as VAR: ${i}`); // Prints 3 each time
//     }, 2000);
// }

// declared with VAR. Meaning variable lives in local scope { }

// for (let i = 0; i < 3; i++) {
//     console.log(`declared as LET: ${i}`);
// }
