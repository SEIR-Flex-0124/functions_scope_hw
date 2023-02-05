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
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
//   console.log(sum);
  return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    for(let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if(num % i === 0) return false;
    }
    return num > 1;
}
console.log(checkPrime(7));

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE

}

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    let word = "";
    for(let i = 0; i < arr.length; i++) {
        if(word.length < arr[i].length) {
            word = arr[i];
        }
    }
    return word;
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