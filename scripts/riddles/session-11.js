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

// PRVNÍ ŘEŠENÍ
const randomNumber0 = () => Math.floor(Math.random() * 10 + 1); // vyhodí číslo mezi 0,0 (včetně) - 1,0 (mimo), to vynásobím 10 => 0,000 - 9,999, přičtu 1 => 1,000 - 10,999 a zaokrouhlím celé dolů : 1,000 - 10,000
console.log("Jedno náhodné číslo mezi 1 a 10 (VČETNĚ) je: " + randomNumber0());
// FUNGUJE

//DRUHÉ ŘEŠENÍ S ROZMEZÍM, VE KTERÉM SE MAJÍ ČÍSLA VYPISOVAT A BUDOU SE VYPISOVAT DO POLE, PRO PŘEHLEDNOST
const randomNumber = function () {
  let minNum = 1;
  let maxNum = 11;
  let arrRandomNumber = [];
  for (let i = 0; i < 10; i++) {
    arrRandomNumber.push(
      Math.floor(Math.random() * (maxNum - minNum) + minNum)
    );
  }

  console.log(
    `Pole deseti čísel mezi 1 a 10 je následující: ${arrRandomNumber}`
  );
  for (let i = 0; i < arrRandomNumber.length - 1; i++) {
    if (arrRandomNumber[i] === 0 || arrRandomNumber[i] === 11) {
      console.log("Pozor !!! kod nefunguje !!!");
    }
  }
};

for (let i = 1; i < 10; i++) {
  console.log(randomNumber());
}

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

console.log(
  "JOLANDA - JOLANDA - JOLANDA - JOLANDA - JOLANDA - JOLANDA - JOlANDA - JOLANDA"
);
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
    Math.floor(Math.random() * (maxValue - minValue + 1) + minValue)
  ];
};
for (let i = 1; i < 10; i++) {
  console.log(jolandaSpeaks());
}

/* OR
* function jolandaSpeaks() {
*    const jolandaVocabulary = ['Velky spatny', 'Moarolka', 'Tady vidim', 'Cikanka', 'Neprepinejte kanela', 'Jaj boze muj'];
*    let sizeOfJolandaVocabulary = jolandaVocabulary.length;
*    return jolandaVocabulary[Math.floor(Math.random() * sizeOfJolandaVocabulary)];
*}
*/
  
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

console.log("JOLANDA PROPHECY - funguje");

const jolandaAnswers = function (jolandaAnswersNumber) {
  const jolandaAnswersArr = [];
  const maxNum = jolandaVocabulary.length;
  const minNum = 0;
  for (let i = 0; i < jolandaAnswersNumber; i++) {
    jolandaAnswersArr.push(
      jolandaVocabulary[Math.floor(Math.random() * (maxNum - minNum) + minNum)] //v tomto případě by stačilo *maxNum, protože spodní hranice je 0. Nechávám ale tento zápis, ať mohu příštěnastavit rozmezí čísel.
    );
  }
  console.log(jolandaAnswersArr);
};

let jolandaAnswersEnter = parseInt(
  prompt("Zadej číslicí kolik proroctví ti má Jolanda sdělit?")
);
//parse int udělá z jakéhokolik vstupu number??,,, podmínka proto nefunguje, načíst k tomu neco. resp, hodíto NoN, což je pořád číslo řešení je funkce "isNan"

console.log(jolandaAnswersEnter);

if (Number.isNaN(jolandaAnswersEnter)) {
  //number.isNaN posoudí, zda je zadaná hodnota číslo.
  jolandaAnswersEnter = 3;
  console.log(
    "Tobě nebýt rozumět, naučit se česky. Ty dostat " +
    jolandaAnswersEnter +
    " odpovědi"
  );
  jolandaAnswers(jolandaAnswersEnter);
} else if (jolandaAnswersEnter === 0) {
  jolandaAnswersEnter = 3;
  console.log(
    "Ty neotravovat Jolanda zbytečně a bo nerozhodný, dostat " +
    jolandaAnswersEnter +
    " tři odpovědi!!!"
  );
  jolandaAnswers(jolandaAnswersEnter);
} else {
  console.log("tvá věštba být:");
  jolandaAnswers(jolandaAnswersEnter);
}

function jolandaAnswers(inputNumber){
    let answer = [];
    if (typeof inputNumber != "number"){
        inputNumber = 3;
    }
    for (let i = 0; i < inputNumber; i++){
        answer.push(jolandaSpeaks());
    }
    console.log(answer);
}
jolandaAnswers(20)

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
//jolandaAnswersArr - mám pole s proběhlými odpovědmi


console.log("Statistics on JolandaStatistics on JolandaStatistics on JolandaStatistics on JolandaStatistics on JolandaStatistics on Jolanda");


//classa pro vytvoření objektu
class JolandaAnswerObj {
  constructor(word, frequency) {
    this.autor = "Jolanda"
    this.word = word
    this.frequency = frequency
  }
}

// Funkce pro analýzu frekvence slov
function jolandaFrequency() {
    const frequencyMap = {};

    // Počítáme četnost jednotlivých slov
    jolandaAnswersArr.forEach(word => {
        frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    });

    console.log(frequencyMap);
    // // Převádíme frekvenci do pole objektů
    const frequencyArray = Object.entries(frequencyMap).map(([word, frequency]) => new JolandaAnswerObj(word, frequency));
        
    return frequencyArray;
}
console.log(jolandaFrequency());