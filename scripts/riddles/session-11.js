/*
====================================================================================
Generate random number
====================================================================================
create a function called randomNumber that will generate random number between 1 - 10
Hint: use method Math.random() and Math.floor()

function randomNumber() {}
or
const randomNumber = function () {}
or
const randomNumber = () => {}
*/

const randomNumber0 = () => Math.floor(Math.random() * 10); //nefunguje pro nulu a °0
console.log("Jedno náhodné číslo je: " + randomNumber0());

const randomNumber = function () {
  //   let x = Math.random()
  let minNum = 1;
  let maxNum = 11;
  let arrRandomNumber = [];
  for (let i = 0; i < 10; i++) {
    arrRandomNumber.push(Math.floor(Math.random() * (maxNum - minNum + 1)));
  }

  console.log(
    `Pole deseti čísel mezi 1 a 10 je následující: ${arrRandomNumber}`
  );
};

randomNumber();
randomNumber();

/*
====================================================================================
Jolanda
====================================================================================
We have these words in an array:

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
const jolandaVocabulary = [
  "Velky spatny",
  "Moarolka",
  "Tady vidim",
  "Cikanka",
  "Neprepinejte kanela",
  "Jaj boze muj",
];

const jolandaSpeaks = function () {
  const minValue = 0;
  const maxValue = jolandaVocabulary.length - 1;
  return jolandaVocabulary[
    Math.floor(Math.random() * (maxValue - minValue + 1))
  ];
};
for (let i = 1; i < 100; i++) {
  console.log(jolandaSpeaks());
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
