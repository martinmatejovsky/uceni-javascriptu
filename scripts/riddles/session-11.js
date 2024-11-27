/*
====================================================================================
Generate random number
====================================================================================
create a function called randomNumber that will generate random number between 1 - 10
Hint: use method Math.random() and Math.floor()
*/
function randomNumberA(max) {
    console.log(Math.floor(Math.random() * max) + 1);
}
randomNumberA(10)

/*
or
*/
const randomNumberB = function (max) {
    console.log(Math.floor(Math.random() * max) + 1);
}
randomNumberB(10)
/*
or
*/
const randomNumberC = (max) => {
    console.log(Math.floor(Math.random() * max) + 1);    
}
randomNumberC(10)



/*
====================================================================================
Jolanda
====================================================================================
We have these words in an array:
const jolandaVocabulary = ['Velky spatny', 'Moarolka', 'Tady vidim', 'Cikanka', 'Neprepinejte kanela', 'Jaj boze muj']
Create a function called jolandaSpeaks, which will return random word from jolandaVocabulary.
Hint:
Use the concept from previous riddle on random numbers. But now it will not generate number from
1 to 10, but a number from 0 to (jolandaVocabulary.length -1)

Expected output:
console.log(jolandaSpeaks())
// --> 'Moarolka'
console.log(jolandaSpeaks())
// --> 'Neprepinejte kanela'
console.log(jolandaSpeaks())
// --> 'Moarolka'
...
*/

function jolandaSpeaks() {
    const jolandaVocabulary = ['Velky spatny', 'Moarolka', 'Tady vidim', 'Cikanka', 'Neprepinejte kanela', 'Jaj boze muj'];
    let sizeOfJolandaVocabulary = jolandaVocabulary.length;
    console.log(jolandaVocabulary[Math.floor(Math.random() * sizeOfJolandaVocabulary)]);
}

/*
====================================================================================
Jolanda's prophecy
====================================================================================
Jolanda goes to live TV.
Create a function called jolandaAnswers, which will accept 1 argument. The argument will
represent how many words will Jolanda say. If no number is given, use default number 3.
Our new function should generate new array of words by calling function jolandaSpeaks()
so many times, as the argument of function jolandaAnswers dictates.

function jolandaAnswers (wordsToSpeak) {...}

Hint:
- for default value of wordsToSpeak use
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

Expected output:
console.log(jolandaAnswers(2))
// --> ['Moarolka', 'Neprepinejte kanela']
console.log(jolandaSpeaks())
// --> ['Moarolka', Neprepinejte kanela', 'Cikanka']
*/
function jolandaAnswers(inputNumber){
    if (typeof inputNumber != "number"){
        inputNumber = 3;
    }
    for (let i = 0; i < inputNumber; i++){
        jolandaSpeaks()
    }
}

/*
====================================================================================
Statistics on Jolanda

**** do after we have a lesson on object constructors and classes ****

====================================================================================
Function from previous exercise outputs an array, in which could be many words multiple times.
Let's make an analyst.
Create a function jolandaFrequency, which will output an array, in which each item is an object
describing how many times a certain word was spoken by running a function jolandaAnswers(20).
Do not modify starting array jolandaVocabulary. When calculating new principles, do not  modify
resource data.

For example

[
    {
        word: 'Velky spatny',
        frequency: '3',
    },
    {
        word: 'Moarolka',
        frequency: '7',
    },
    {
        word: 'Tady vidim',
        frequency: '2',
    },
]

Hint:
- maybe it would be useful to use method on array .map, but it depends on your approach
- maybe it would be useful to use class constructor to create so many objects with the same
structure, but it depends on your approach. You do not have to make things by the most
complicated way you currently learned
- maybe it would be useful to use method on array .forEach or .find, but it depends on your approach


*/