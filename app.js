// 1.1. What is the difference between a parameter and an argument?
// Within a function, a parameter is the placeholder location for the inputs that a function should receive while an argument is the actual value that is specified to fill the parameter locations.
// 1.2. Within a function, what is the difference between return and console.log?
// Within a function, return is a statement that stops the execution of a function and enables other code to leverage the value that is passed on whereas console.log is a function that will display (or log) the function's arguments.
// 1. 3. What are the implications of the ability of a function to return a value?
// In order for a function to return a value the function must use the "return" keyword and the function itself must be one that allows for a specific value to be returned (functions that do not return a value will return "void" or "undefined"). The return value can then be leveraged by other functions as necessary.
// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
}

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
}

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
}

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
}

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