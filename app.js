// 1.1. What is the difference between a parameter and an argument?

// Parameters are the names within the parenthesis that come after the function delcaration. These variables are what the function is looking to take in, in order to operate. The arguments are the actual values that are passed through the parameters when the function is invoked. 

// 1.2. Within a function, what is the difference between return and console.log?

//Return is the function saying "what am I doing with these arguments? Return then assigns the output of the function to the function name. Return is required in a function in order for it to not return "undefined".

// 1. 3. What are the implications of the ability of a function to return a value?

//To follow the 'DRY' coding principle of not having to repeat code. 

// 2. calculateCube

function calculateCube(num) {
    return Math.pow(num,3);
}

console.log(calculateCube(5));

// 3. isAVowel
//I want to preface this code by saying my initial method was to use an array, but a friend explained how arrays function slower by comparing the input to each value before returning anything. But an object will only use 1 comparison with the input, and return a value much more effeciently. 

//Version 1

// function isaVowel1(letter) {
//     if (letter === "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
//         return letter = true;
//     } else 
//     return letter = false;
// }

// console.log(isaVowel1("b"));

//Version 2

// const vowelArray = ["a", "e", "i", "o", "u"];

// function isaVowel2 (letter) {
// if (vowelArray.includes(letter)) {
//     return true;
// } else {
//     return false;
// }
// }
// console.log(isaVowel2("b"));

//Version 3 

function isAVowel3(letter) {
    const vowelChecker = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    }
    if (vowelChecker[letter] == true){
        return letter = true; 
    } else {
        return letter = false;
    }
}
console.log(isAVowel3("a"));
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

// module.exports = {
//     calculateCube,
//     isAVowel,
//     getTwoLengths,
//     sumArray,
//     checkPrime,
//     printPrimes,
//     printLongestWord,
//     eulerFibo,
//     findNeedle,
//     sumPositive
// };