// 1.1. What is the difference between a parameter and an argument?

// 1.2. Within a function, what is the difference between return and console.log?

// 1. 3. What are the implications of the ability of a function to return a value?

// 2. calculateCube
function calculateCube(num) {
    return num ** 3;
    // YOUR CODE HERE
}

// console.log(calculateCube(3))


// 3. isAVowel
// I just googled 'check element in array' and found includes in W3school..
function isAVowel(letter) {
    let vowelArray = ['a','e','i','o','u','A','E','I','O','U'];
    if (vowelArray.includes(letter)){
        return true;
    } else {
        return false;
    }
    // YOUR CODE HERE
}

// console.log(isAVowel('a'));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // console.log(`(${word1.length} , ${word2.length})`);
    return (`(${word1.length} , ${word2.length})`);
    // YOUR CODE HERE
}

// console.log(getTwoLengths('hello','123'));

// 5. sumArray
function sumArray(arr) {
    sum = 0;
    for (let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum
    // YOUR CODE HERE
}

// console.log(sumArray([1,2,3,4,5]));

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