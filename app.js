// 1.1. What is the difference between a parameter and an argument?
// a parameter is the variable in the function & arguements are values that are declared within a function when the function is called
// 1.2. Within a function, what is the difference between return and console.log?
// return exits a function & the console log prints your code
// 1. 3. What are the implications of the ability of a function to return a value?
// to return the value for the code written
// 2. calculateCube
function calculateCube(num) {
    return num * num * num
}

console.log(calculateCube(3))

// 3. isAVowel
function isAVowel(letter) {
    const vow = ["a", "e", "i", "o", "u"];
    return vow.includes(letter.toLowerCase())
}
console.log(isAVowel("a"));

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