// 1.1. What is the difference between a parameter and an argument?
//parameter - when we define the function
//argument - when we call to that method
// 1.2. Within a function, what is the difference between return and console.log?
//return calls back to a function multiple times
//console.log prints it that one time
// 1. 3. What are the implications of the ability of a function to return a value?
//it has the ability to "return" values multiple times and instances throughout the code and not having to be in the same loops but calling back to that function.
// 2. calculateCube
function calculateCube(num) {
    return(Math.pow(num, 3));
}
console.log(calculateCube(6));
// 3. isAVowel
function isAVowel(letter) {
    return(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" || letter == "A" || letter == "E" || letter == "O" || letter == "U")
}
console.log(isAVowel("E"));
// 4. getTwoLengths
function getTwoLengths(word1, word2) {
  let arr = []
  arr.push(word1.length, word2.length);
  return(arr);
}
console.log(getTwoLengths("Altair", "Ezio"))
// 5. sumArray
function sumArray(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
    }
   return sum;
}
console.log(sumArray([8,6,7,5,309])); 


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