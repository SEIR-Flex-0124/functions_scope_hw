// 1.1. What is the difference between a parameter and an argument?

/*
A parameter is one of the variables within a function. They are basically placeholders for the function arguements. An arugement is the actual value you insert into a method's parameters.
*/

// 1.2. Within a function, what is the difference between return and console.log?

/*
Return will stop the execution of the function and return the specified value (not in the console), which will then allow you to use and manipulate that value in other parts of the program. console.log is a print statement and displays the input in the console.
*/

// 1. 3. What are the implications of the ability of a function to return a value?

/*
Return will stop the execution of the function and return the specified value (not in the console), which will then allow you to use and manipulate that value in other parts of the program.
*/

// 2. calculateCube
function calculateCube(num) {
    return num * num * num;
}
console.log(calculateCube(2)); //I'm expecting 8
console.log(calculateCube(3)); //I'm expecting 27
console.log(calculateCube(5)); //I'm expecting 125

// 3. isAVowel
function isAVowel(letter) {
    if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') return true;
    return false;
}
console.log(isAVowel('A')); // I'm expecting true
console.log(isAVowel('i')); // I'm expecting true
console.log(isAVowel('d')); // I'm expecting false

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