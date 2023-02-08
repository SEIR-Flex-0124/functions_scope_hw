// 1.1. What is the difference between a parameter and an argument?
// a parameter is the variable in the function & arguements are values that are declared within a function when the function is called
// 1.2. Within a function, what is the difference between return and console.log?
// return exits a function & the console log prints your code
// 1. 3. What are the implications of the ability of a function to return a value?
// to return the value for the code written
// 2. calculateCube
function calculateCube(num) {
    return num * num * num
}

console.log(calculateCube(3))

// 3. isAVowel
function isAVowel(letter) {
    const vow = ["a", "e", "i", "o", "u"];
    return vow.includes(letter.toLowerCase())
}
console.log(isAVowel("a"));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return[word1.length, word2.length]
}
console.log(getTwoLengths("Food", "drinks"))
// 5. sumArray
function sumArray(num) {
    let sum =0;
    for(let i = 0; i < num.length; i++){
        sum +=num[i]
    }
    return sum
}
console.log(sumArray([4, 5, 7]))

// 6.1 checkPrime
function checkPrime(num) {

}
console.log(checkPrime(3));


// 6.2 printPrimes
function printPrimes(num) {
    
}

// 7. printLongestWord
function printLongestWord(arr) {

    for(let i = 0; i < arr.length; i++){
        arr[i]
        longestWord = arr[i];
    }
   
    return longestWord
}
console.log(printLongestWord(["cake", "chocoloate", "butterfinger", "popsickle"]))
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