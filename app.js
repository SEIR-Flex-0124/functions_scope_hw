// 1.1. What is the difference between a parameter and an argument?
//A parameter is something we add to a function, and an argument is the actual value for the function when it's invoked.
// 1.2. Within a function, what is the difference between return and console.log?
//Return doesn't print out the value, it just defines it or gives it it's value. Console.log will print out our function.
// 1. 3. What are the implications of the ability of a function to return a value?

// 2. calculateCube
function calculateCube(num) {
    return num*num*num;
}
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    let vowels = ["a", "e", "i", "o", "u"];
    for(i = 0; i < vowels.length; i++) {
    if (letter === vowels[i]) 
        return true;
    }
    return false;
}
console.log(isAVowel("a"));

//  4. getTwoLengths
 function getTwoLengths(word1, word2) {
//     string-length( [string] )
}
// console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    let sumArray = 0
    for (let i = 0; i < arr.length; i += 1) {
            sumArray += arr[i]
        }
        return sumArray;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    if (num % 2 === 0) {
        return false;
       } 
       return true;
    
}
 console.log(checkPrime(9)); //question: 2 is a prime number, but it's divisible by 2 (itself), which works with my code. Is there a better way to code this, so 2 is identified as a prime number?

// 6.2 printPrimes
function printPrimes(num) {
    for(i = 0; i < num; i++) {
        if(checkPrime(i)) console.log(i); //Note: calling on my previous function 'checkPrime'. However I'm gettin an undefined as my last result and I'm not sure why?
    }
}
console.log(printPrimes(97));

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