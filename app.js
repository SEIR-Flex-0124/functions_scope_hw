// 1.1. What is the difference between a parameter and an argument?
  // Function parameters are the names listed in the functions definitions while arguments are the real values passed to the function. 
  https://developer.mozilla.org/en-US/docs/Glossary/Parameter
  // functions are the building blocks of prgorams. Functions are a resusable block of code written to perform a single purpose.
  // Parameters become local variables inside the function body. 
// 1.2. Within a function, what is the difference between return and console.log?
  // Console.log will display the parameter in the console. Return statements stop executing the function and return the specified value (not within the console).
// 1. 3. What are the implications of the ability of a function to return a value?
  // When a function returns a value, a value is retuned via a return statement to the caller of the function, after being implicity converted to the return type of the function in which it is defined. 
  // source: https://www.ibm.com/docs/en/zos/2.1.0?topic=specifiers-function-return-values

// 2. calculateCube
function calculateCube(num) {
  return num ** 3
}
console.log(calculateCube(5))

// 3. isAVowel
function isAVowel(vowel) {
  if (vowel === 'a' || vowel === 'A') {
    return true
  } else {
    return false
  }
}
const vow = 'a' // variable 
const nonVow = 'b' // variable 
console.log(isAVowel('a'))
console.log(isAVowel('b'))

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
  return[word1.length, word2.length]
}
console.log(getTwoLengths('Hank', 'Hippopopalous'))

// 5. sumArray
function sumArray(arr) {
  let sum = 0
  for (let i=0; i<arr.length; i++) {
    sum += arr[i]
  }
  return sum
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
  let prime = 0
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 1 === 0) {}
    prime += num[i]
  }
  return prime
}
console.log(checkPrime(5))

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
}
