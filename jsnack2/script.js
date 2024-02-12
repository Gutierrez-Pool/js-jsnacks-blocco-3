// Snack 2:

// Scrivi una funzione che fonda due array presi come parametri (date per scontato che abbiano lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro
// es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

const letterArray = ["a", "b", "c", "d", "e"];
console.log (letterArray);

const numberArray = ["1", "2", "3", "4", "5"];
console.log (numberArray);


function esercizio(a, b) {

    let sumArray = [];

    for (let i = 0; i < b.length; i++) {

        if (i < letterArray.length) {
            sumArray.push(letterArray[i]);
        }

        if (i < numberArray.length) {
            sumArray.push(numberArray[i]);
        }
    }

    return sumArray;

}

console.log (esercizio(letterArray, numberArray));