// 1.1. What is the difference between a parameter and an argument?
// The arguent is what is inputed into the function. Such as someone ones name. The parameter is the place holder for the arugement.

// 1.2. Within a function, what is the difference between return and console.log?
// console.log is just for testing purposes. Return returns the value of a functions.

// 1. 3. What are the implications of the ability of a function to return a value?
//lets you use th output in another function
// 2. calculateCube
function calculateCube(num) {
    return num ** 3   
}
console.log(calculateCube(4))


// 3. isAVowel
function isAVowel(letter) {
    const vowels = ['a', 'e',  'i', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++){
        if (letter === vowels[i]) return true;
    }
        return false
}

console.log(isAVowel('i'))

// 4. getTwoLengths


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