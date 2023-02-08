// 1.1. What is the difference between a parameter and an argument?
//parameter is a name of the function's definition. An argument is the real value of the function
// 1.2. Within a function, what is the difference between return and console.log?
//return actually returns a value of a function and console log just prints the result.
// 1. 3. What are the implications of the ability of a function to return a value?
//this ability helps to write a cleaner code and make functions reusable across it.

// 2. calculateCube
function calculateCube(num) {
   return num ** 3;
}
console.log(calculateCube(5));

// 3. isAVowel

function isAVowel(character) {
     const vowels = ["a", "e", "i","o", "u"];
     for(i = 0; i < vowels.length; i++) {
        if (character.toLowerCase() === vowels[i]) { // .toLowerCase makes all items in the array lower case
            return true;
        }
     } 
     return false;
};
console.log(isAVowel("a"));
// console.log(isAVowel("E"));
// console.log(isAVowel("b"));
// console.log(isAVowel("r"));
// console.log(isAVowel("t"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    const arrayLength = [];
    arrayLength.push(word1.length);
    arrayLength.push(word2.length);
    return arrayLength;
    // YOUR CODE HERE
}

console.log(getTwoLengths("Hank", "Hippopopalous")); // expecting [4, 13]

// 5. sumArray

function sumArray(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
    // YOUR CODE HERE
}
console.log(sumArray([11, 22, 33, 44, 55, 66])); //expecting to have 231
console.log(sumArray([156, 245, 367, 478, 589, 690])); //expecting to have 2525


// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) 
        return false;
    }
    return num > 1;
}
console.log(checkPrime(10));
// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    let primes = [];
    for(let i = 2; i <= num; i++) {
        if(checkPrime(i)) primes.push(i);
    }
    console.log(primes);
}
printPrimes(100);
// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
        if( arr[i].length > longestWord.length) {
            longestWord = arr[i];
        }
    }
    return longestWord;
}
console.log(printLongestWord(["Mehrzweckkirschentkerngerät", "Armbrust", "Gemeindegrundsteuerveranlagung", "Schifffahrtskapitänsmützenmaterialherstellerdie", "Mehrzweckhalledas", "Feuerwehrrettungshubschraubernotlandeplatzaufseherinder", "Oberpostdirektionsbriefmarkenstempelautomatenmechanikerdas", "Donaudampfschifffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft"]));
//expected answer Donaudampfschifffahrtselektrizitätenhauptbetriebswerkbauunterbeamtengesellschaft
//Have fun reading these words :D


// BONUS!

// 8. eulerFibo
function eulerFibo(maxNum) {
    // YOUR CODE HERE
    if (maxNum < 2) return 0
    let firstFibo = 0;
    let secondFibo = 1;
    let firstCopy = 0;

    const evenArray = [];
    while (secondFibo < maxNum) {
        if(secondFibo % 2 === 0) {
            evenArray.push(secondFibo);
        }
        firstCopy = firstFibo;
        firstFibo = secondFibo;
        secondFibo += firstCopy;
    }

    console.log("Even Fibo numbers", evenArray.join(", "));
    return `Sum of even Fibonacci numbers: ${evenArray.reduce((a,b) => a + b)}`
}
console.log(eulerFibo(4000000));

// 9. findNeedle
function findNeedle(arr) {

    // YOUR CODE HERE
}

// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
}

module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
    printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};