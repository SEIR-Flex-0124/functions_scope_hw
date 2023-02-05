// 1.1. What is the difference between a parameter and an argument?
//
// 1.2. Within a function, what is the difference between return and console.log?

// 1. 3. What are the implications of the ability of a function to return a value?

// 2. calculateCube
function calculateCube(num) {
   return num ** 3;
}
console.log(calculateCube(5));

// 3. isAVowel

function isAVowel(character) {
     const vowels = ["a", "e", "i","o", "u"];
     for(i = 0; i < vowels.length; i++) {
        if (character.toLowerCase() === vowels[i]) {
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

console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray

function sumArray(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
    // YOUR CODE HERE
}
console.log(sumArray([11, 22, 33, 44, 55, 66]));
console.log(sumArray([156, 245, 367, 478, 589, 690]));


// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
}

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    // YOUR CODE HERE
}

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