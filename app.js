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
    let sum = 0
    for (i=0; i < arr.length; i++) { // Passing through array by each index adding them to the variable sume
        sum += arr[i];
    }
    return sum;  
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));


// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    if (num <= 1) { // Checks is num is equal to 1 or less than
        return false;
    }
    for (let i = 2; i<= Math.sqrt(num); i++) { // loops from 2 to the square root of the argument
        if (num % i === 0) { // checks if remainder is equal to 0 
            return false;
        }
    }
    return true;
}
console.log(checkPrime(97));

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    for (let i = 2; i<= num; i++) {
        if (checkPrime(i)) {
            console.log(i);
        }
    }
}
printPrimes(97);

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
    let word = " "
    for (i = 1; i < arr.length; i++) {
        if (arr[i].length > word.length) {
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
    let num1 = 0
    let num2 = 1
    let num3 = 0
    for (i = 0; i <= num; i++) {
        console.log(num1);
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        if (num1 >= num) {
            return;
        }
    }
}
eulerFibo(100);

function evenNumbers
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