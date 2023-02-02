// // 1.1. What is the difference between a parameter and an argument?
// A parameter is what comes in the parentheses after the function declaration, defining the variables; an argument is the actual stuff you're inputting when you run the function.
// // 1.2. Within a function, what is the difference between return and console.log?
// console.log prints something to the console after the function has run; return is what's returning the actual output of the function.
// // 1. 3. What are the implications of the ability of a function to return a value?
// When the function completes, the new value is returned.

// 2. calculateCube
function calculateCube(num) {
    return Math.pow(num, 3);
};
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    return (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u");
};
console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    return ([word1.length, word2.length]);
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

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