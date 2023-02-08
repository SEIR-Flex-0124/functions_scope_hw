// 1.1. What is the difference between a parameter and an argument?
// 1.1. What is the difference between a parameter and an argument?
//a paramater is a variable in a method defenition, and arguments are the data passed into the parameters.
// 1.2. Within a function, what is the difference between return and console.log?
//console.log is to print information to the console, and return passes the value 
// 1. 3. What are the implications of the ability of a function to return a value?
//needs fruitful function to return a value
// 2. calculateCube
function calculateCube(num) {
    return num*num*num;
}

// 3. isAVowel
function isAVowel(letter) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
}

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return [word1.length, word2.length]
}

// 5. sumArray
function sumArray(arr) {
   let total = 0
   while(arr.length > 0) {
   total+= arr[arr.length - 1] 
   arr.pop()
 }
}

// 6.1 checkPrime
function checkPrime(num) {
   let s = Math.sqrt(num)
    for(let i = 2;  i <= s; i++) {
        if(num % i === 0) return printPrimes(num)
    }
    return num > 1;
}

// 6.2 printPrimes
function printPrimes(num) {
    const arr = [];
    let i = 2;
    while(arr.length < num){
       if(checkPrime(num)){
          arr.push(num);
       };
       i = i === 2 ? i+1 : i+2;
    };
    return arr;
}

// 7. printLongestWord
function printLongestWord(arr) {
    return arr.sort((a, b) => b.length - a.length)[0]
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
// 1.2. Within a function, what is the difference between return and console.log?

// 1. 3. What are the implications of the ability of a function to return a value?

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
}

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
}

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