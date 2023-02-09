// 1.1. What is the difference between a parameter and an argument?
//A Argument is the vaules that are declared within a function within the function when the function is called. A Parameter is the varibles that are defined when the function is declared. 

// 1.2. Within a function, what is the difference between return and console.log? 
// Console. log is function that logs passed in argument to console. Return is keyword, which part of the return statement, used to end function execution.

// 1. 3. What are the implications of the ability of a function to return a value?
// A Return Vaule is when the vaules that a function returns when it completes. The ability of the function is how it works leading up to the return.

// 2. calculateCube
function calculateCube(num) {
    return num ** 3;
}
console.log(calculateCube(2))

// 3. isAVowel
function isAVowel(letter) {
    return "aeiou".includes(letter.toLowerCase());
}
console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return [word1.length, word2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i< arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}
 consosle.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(checkPrime(21));

// 6.2 printPrimes
function printPrimes(num) {
   for (let i = 2; i <= num; i++) {
    if (checkPrime(i)) {
        console.log(i);
      }
     }
    }
 console.log(printPriems(197));


// 7. printLongestWord
function printLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++ ) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i]
        }
    }
    return longestWord
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

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