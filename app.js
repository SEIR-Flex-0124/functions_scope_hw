// 1.1. What is the difference between a parameter and an argument?

// A parameter is a placeholder for an argument in a function. 
// When we call a function, the actual values passed in as inputs to the function are called arguments.
// eg. function add(a, b) {
//       return a + b;
//     }
//     let result = add(3,6);
//     console.log(result); // 9
// "a" and "b" are the parameters of the function "add". When we call the function "3" and "6" are teh arguments. they are used to return the result.


// 1.2. Within a function, what is the difference between return and console.log?

// When we execute the "return" function, after it stops and the value that we got after that is returned to the caller.
// When console.log doesn't stop the execution of the function. It outputds the message to the console and cotinue to execute the function.


// 1. 3. What are the implications of the ability of a function to return a value?

// The ability of a function to return a value has implications for code reusability, abstraction, composition, clarity, and performance. 
// It is a key aspect of writing efficient, modular, and maintainable programs.

// eg. Reusability: we can use a function multiple times
// Abstraction: a function can centralize the informations of a complex calculation to make the code easier to read.
// Composition: we can combine multiple functions in order to return a final value
// Clarity: As explained before, the functions that return values can make the code more readable and clear for all the coders that are going to read it.
// It reduce also the quantity of data.


// 2. calculateCube
function calculateCube(num) {
    return num * num * num;
}
console.log(calculateCube(5));


// 3. isAVowel
function isAVowel(letter) {
    return /[aeiouAEIOU]/.test(letter);
}

console.log(isAVowel("a")); // we call isAVowel fonction to see if "a" is a vowel, if it is, the fct return "true"
//console.log(isAVowel("b")); // if "letter" is not a vowel, the fct return, "false"


// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return[word1.length, word2.length];
}

let lengths = getTwoLengths("Hank", "Hippopopalous");
console.log(lengths);


// 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
 if(num <= 1) return false;
 for (let i = 2; i <= Math.sqrt(num); i++){
     if (num % i === 0) return false;
     }
     return true;
 }
console.log(checkPrime(13))


// 6.2 printPrimes
function printPrimes(limit) {
    for (let i = 2; i <= limit; i++) {
        if (checkPrime(i)) console.log(i);
    }
}
printPrimes(20)


// 7. printLongestWord
function printLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestWord.length) {
        longestWord = arr[i];
      }
    }
    return longestWord;  
  }
  
  console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));


// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
  // Initialize variables `prev` and `curr` to the first two numbers in the Fibonacci sequence
  let prev = 1;
  let curr = 2;
  let sum = 0; // Initialize variable `sum` to 0
  let total = 0; // Initialize variable `total` to 0
  for (let i = 0; curr <= num; i++) { // Use a for loop to generate the next number in the Fibonacci sequence
    if (curr % 2 === 0) total += curr; // If the current number is even, add it to the running total
    
    // Here we calculate the next number in the Fibonacci sequence
    sum = prev + curr;
    prev = curr; // `prev`is assigned to be the value of `curr`. This way 'prev`will be use in the next iteration of the loop
    curr = sum;  // `curr` is define as teh value of `sum` so as the last number in the sequence, it will be use for the next iteration of the loop
  }
  return total; // Return the sum of all even numbers in the Fibonacci sequence that do not exceed the input `num`
}

console.log(eulerFibo(4000000)); // Console.log the result of calling `eulerFibo` with 4 million as the input


// 9. findNeedle
function findNeedle(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "needle") {
            return `found the needle at position ${i}`;
        }
    }
}
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))

// 10. sumPositive
function sumPositive(arr) {
    let positiveSum = 0  // initial value of the variable is 0
    for (let i = 0; i < arr.length; i++) {  // at the start we are at 0 and the loop continue as long as we are not at the end of the array. + "i" is incremented by 1 at each iteration
        if (arr[i] > 0) {   // if "arr[i]"" is positive the next line will be executed
            positiveSum += arr[i]; // We will add the current element of the array to the "positiveSum"
        } 
    }
    return positiveSum;
}
    
const arr = [1, -4, 7, 12]; // the input array that will used for the console.log
console.log(sumPositive(arr));


module.exports = {
    calculateCube,
    isAVowel,
    getTwoLengths,
    sumArray,
    checkPrime,
 //   printPrimes,
    printLongestWord,
    eulerFibo,
    findNeedle,
    sumPositive
};