// 1.1. What is the difference between a parameter and an argument?
// Within a function, a parameter is the placeholder location for the inputs that a function should receive while an argument is the actual value that is specified to fill the parameter locations.
// 1.2. Within a function, what is the difference between return and console.log?
// Within a function, return is a statement that stops the execution of a function and enables other code to leverage the value that is passed on whereas console.log is a function that will display (or log) the function's arguments.
// 1. 3. What are the implications of the ability of a function to return a value?
// In order for a function to return a value the function must use the "return" keyword and the function itself must be one that allows for a specific value to be returned (functions that do not return a value will return "void" or "undefined"). The return value can then be leveraged by other functions as necessary.
// 2. calculateCube
function calculateCube(num) {
    return num ** 3
}
console.log(calculateCube(5))

// 3. isAVowel

function isAVowel(letter) {
    if (typeof letter !== "string" || letter.length !== 1) {
        return false
    }
    let vowels = ["a", "e", "i", "o", "u"]
    for (let i = 0; i < vowels.length; i++) {
        if (letter.toLowerCase() === vowels[i]) {
        return true
        } 
    }
    return false
}
console.log(isAVowel("a"))
console.log(isAVowel("B"))
console.log(isAVowel("c"))
console.log(isAVowel("E"))
console.log(isAVowel("8"))

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let words = new Array(word1.length, word2.length);
    return words;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));
console.log(getTwoLengths("San Antonio", "Spurs"));
console.log(getTwoLengths("Tuscon", "Arizona"));

// 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    } return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
console.log(sumArray([50, -20, 173, 5000, 34, 56, 900]));

// 6.1 checkPrime
function checkPrime(num) {
    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        } return true;
    } 
}
console.log(checkPrime(3))
console.log(checkPrime(6))
console.log(checkPrime(12))
console.log(checkPrime(2083))

// 6.2 printPrimes
function printPrimes(num) {
    for (let i = 2; i <= num; i++) {
        if(checkPrime(i)) console.log(i)
    }
}
printPrimes(97)

// 7. printLongestWord
function printLongestWord(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        } 
    } return longest
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
console.log(printLongestWord(["hello", "computer", "understandable", "Incomprehensibility", "Xenotransplantation"]))

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