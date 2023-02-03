// 1.1. What is the difference between a parameter and an argument?
// A parameter is a placeholder for the arguments, The arguments are data to be passed through the function

// 1.2. Within a function, what is the difference between return and console.log?
// console.log is used to print the output in javascript, return is used to specify a value a function should return when it is called

// 1. 3. What are the implications of the ability of a function to return a value? 
// They allow us to simplify our code, break up programs into more manageable blocks of code, We can reuse them through out the program so we dont have to repeat ourselves. D.R.Y. Helps with debuging because when we name the fuctions semantically we will know what part of the code isnt working and where to find it if a problem occurs.

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return Math.pow(num,3)
}
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
        return true;
    } else {
        return false;
    }
}
console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE
    let a = Array.from(word1).length;
    let b = Array.from(word2).length;
    return [a,b]
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