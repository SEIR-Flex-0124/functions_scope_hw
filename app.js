// 1.1. What is the difference between a parameter and an argument?

//Parameters are values of the actual function, and an argument is the value passed through the function.

// 1.2. Within a function, what is the difference between return and console.log?

//Console.log will show you in the console what the specific function is doing.  Return will show on the browser and is like the start button for the function.

// 1. 3. What are the implications of the ability of a function to return a value?

//The implications of a function to return a value will impact the rest of the code as the return of the function will change the way the code works from that point on.

// 2. calculateCube

// Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.

// ```javascript
// console.log(calculateCube(5));
// ```

// > => 125
function calculateCube(num) {
    // YOUR CODE HERE
return num * num * num;
}

calculateCube(3);

console.log(calculateCube(3));

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