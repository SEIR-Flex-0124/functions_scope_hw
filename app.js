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
console.log(calculateCube(3))
console.log(calculateCube(2))
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
console.log(isAVowel("o"))
console.log(isAVowel("a"))
console.log(isAVowel("e"))
console.log(isAVowel("f"))
console.log(isAVowel("8"))

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    let words = new Array(word1.length, word2.length);
    return words;
}
console.log(getTwoLengths("hi", "hey"));
console.log(getTwoLengths("hungry", "hippopotamus"));
console.log(getTwoLengths("Tiger", "Supercalifragilisticexpialidocious"));

// 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    } return sum
}
console.log(sumArray([3, 2, 1]));
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(sumArray([6, 7, 8, 9, 10]));

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
console.log(checkPrime(13))
console.log(checkPrime(7))
console.log(checkPrime(36))
console.log(checkPrime(23))

// 6.2 printPrimes
function printPrimes(num) {
    for (let i = 2; i <= num; i++) {
        if(checkPrime(i)) console.log(i)
    }
}
printPrimes(9);
printPrimes(23);
printPrimes(125);

// 7. printLongestWord
function printLongestWord(arr) {
    let longest = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest.length) {
            longest = arr[i];
        } 
    } return longest
}
console.log(printLongestWord(["test", "here"]));
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
console.log(printLongestWord(["hello", "hi", "greetings"]))
console.log(printLongestWord(["a", "be", "see"]))

// BONUS!

function eulerFibo(num) {
    let fibNum1 = 0, fibNum2 = 1, nextNum;
    nextNum = fibNum1 + fibNum2;
    while (nextNum <= num) {
        console.log(nextNum);
        fibNum1 = fibNum2;
        fibNum2 = nextNum;
        nextNum = fibNum1 + fibNum2
    }
} 


console.log(eulerFibo(10))

// * Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.

// * Adjust the function to push the **even numbered** values into an array.

// * Adjust the function to return the summed value of the array.

// * Find the sum of the even numbered values that do not exceed four million.



// 9. findNeedle

// Option 1

let haystack = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']

function findNeedle(arr){
    return `found the needle at position ${arr.indexOf('needle')}`
}
console.log(findNeedle(haystack));

// Option 2

function findNeedle(arr){
    return `found the needle at position ${arr.indexOf('needle')}`
}

console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

// 10. sumPositive
function sumPositive(arr) {
    let PositiveSumNum = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0){
            PositiveSumNum += arr[i]
        }
    } return PositiveSumNum
}

console.log(sumPositive([1, -4, 7, 12]));
console.log(sumPositive([8, 50, -500, 25, -3, 18, -1000]));

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