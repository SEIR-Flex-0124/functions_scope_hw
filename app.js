// 1.1. What is the difference between a parameter and an argument?
// Parameters are the names listed in the function's definition. Arguments are the real values passed to the function. 
// 1.2. Within a function, what is the difference between return and console.log?
// console.log is the equivalent of print in other languages, while return is used for returning values from a function. 
// 1. 3. What are the implications of the ability of a function to return a value?
// A given value is returned to the function caller.
// 2. calculateCube

console.log(calculateCube(6));
function calculateCube(num) {
    return num*num*num;
}

// 3. isAVowel
console.log(isAVowel("a"));
function isAVowel(letter) {
  const vowels =['a','e','i','o','u'];
  for(var a in vowels){

    if(letter === "a"){
        return true;
    } else {
        return false;
    }
}
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
