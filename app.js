// 1.1. What is the difference between a parameter and an argument?
// A paramter is a placeholder for a future value you define for a function and an argument is the actual value for the parameter.

// 1.2. Within a function, what is the difference between return and console.log?
// Return just sets the value that can be reused or stops a function from continuing to execute but does not print to the console. Console.log prints a result to the console.

// 1. 3. What are the implications of the ability of a function to return a value?
// The ability of a function to return a value allows you to pass that value into other lines of code and store it.

// 2. calculateCube
function calculateCube(num) {
    return num ** 3
}
console.log(calculateCube(5));

// 3. isAVowel
const vowels = ["a","e","i","o","u","A","E","I","O","U"];
function isAVowel(letter) {
    if (vowels.includes(letter)) {
    return true
    } else {
        return false
    }
};
console.log(isAVowel("A"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let a = word1.length;
    let b = word2.length;
    return array = [a,b];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
let sum = 0;
function sumArray(arr) {
    for (let i=0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
// 6.1 checkPrime
function checkPrime(num) {
    for (let i=2; i<Math.sqrt(num);i++) {
        if (num % i == 0) return false
    }
    return true
};
console.log(checkPrime(17));

// 6.2 printPrimes
function printPrimes(num) {
    for (let i=2;i<num;i++) {
        if (checkPrime(i)==true) {
            console.log(i);
        }
    }
}

console.log(printPrimes(36));

// 7. printLongestWord
function printLongestWord(arr) {
    let longestWord = '';
    for (let i=1; i < arr.length; i++) {
        if (arr[i].length > longestWord.length) {
            longestWord = arr[i];
        } 
    }
    return longestWord
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));


// BONUS!

// 8. eulerFibo
function eulerFibo() {

};

// 9. findNeedle
function findNeedle(arr) {

};



// 10. sumPositive
function sumPositive(arr) {
    // YOUR CODE HERE
};

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