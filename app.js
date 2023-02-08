// 1.1. What is the difference between a parameter and an argument?

//Parameters are values of the actual function, and an argument is the value passed through the function.

// 1.2. Within a function, what is the difference between return and console.log?

//Console.log will show you in the console what the specific function is doing.  Return will show on the browser and is like the start button for the function.

// 1. 3. What are the implications of the ability of a function to return a value?

//The implications of a function to return a value will impact the rest of the code as the return of the function will change the way the code works from that point on.  It also makes the project usable by users on the internet.

// 2. calculateCube

// Write a function `calculateCube` that takes a single number and prints the volume of a cube made from that number.

// ```javascript
// console.log(calculateCube(5));
// ```

// > => 125
function calculateCube(num) {
    // YOUR CODE HERE
return num * num * num;
}

console.log(calculateCube(3));  //Im expecting 27
console.log(calculateCube(5)); // Im expecting 125
console.log(calculateCube(8)); //Im expecting 512

// 3. isAVowel
// Write a function `isAVowel` that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case.
function isAVowel(letter) {
    // YOUR CODE HERE
    const vowels = ["a","e","i","o","u"];
    for(let i=0; i<vowels.length; i++){
        if(letter.toLowerCase() === vowels[i]){
            return true;
        }
    }
    return false;
}
console.log(isAVowel("A"));  //true
console.log(isAVowel("c"));  //false
console.log(isAVowel("E"));  //true
console.log(isAVowel("h"));  //false

// 4. getTwoLengths
// Write a function `getTwoLengths` that accepts two parameters (strings). The function should return an _array_ of numbers where each number is the length of the corresponding string.

function getTwoLengths(word1, word2) {  //break down the word given as a parameter, turn it into an array and join it back as numbers
    // YOUR CODE HERE
    // let words = word1.split(' ')
    // let words2 = word2.split(' ')
    let wordLengths = []
    wordLengths.push(word1.length);
    wordLengths.push(word2.length);
    // words.forEach((words, words2) => {
    //     wordLengths.push(words.length)
    // })
    return wordLengths
}
console.log(getTwoLengths("Hank", "Hippopopalous"));


// 5. sumArray

// Write a function `sumArray` that takes an **array** as an argument.
// The array should contain numbers. The function should return the sum of the numbers in the array. **Do not use `.reduce()`**.

function sumArray(arr){
    // YOUR CODE HERE
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1,2,3,4,5,6]));  //I expect 21 in terminal

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    for(let i = 2, s = Math.sqrt(num); i <= s; i++){
        if(num % i === 0) return false;
    }
    return num > 1;
}
console.log(checkPrime(7));


// 6.2 printPrimes 
// Write another function called `printPrimes` that will print (console log) all the Primes up to an arbitrary limit. For example, if you invoke your function with `printPrimes(97)`, it will print all the Prime numbers up to and including 97.
// This function can **call on** the previous `checkPrime` function.

function printPrimes(num) {
    // YOUR CODE HERE
    const primeArray = []  // empty array for list of prime numbers
    for(let i = 2, s = Math.sqrt(num); i <= s; i++){  // math to find prime numbers and iterate through
        if(num % i === 0) primeArray.push(num.length);
    }
}
console.log(printPrimes(97));
// 7. printLongestWord
// write a function `printLongestWord` that accepts a single argument, an **array of strings**. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

function printLongestWord(arr) {
    let longest = '';
    for (let i = 0; i < arr.length; i++){
        if(arr[i].length > longest.length) {
            longest = arr[i];
        }
    }
    return longest
    // YOUR CODE HERE
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));     //expecting the word peanutbutter to be returned

// BONUS!

// 8. eulerFibo
// [Project Euler problem #2](https://projecteuler.net/problem=2)

// * Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.

// * Adjust the function to push the **even numbered** values into an array.

// * Adjust the function to return the summed value of the array.

// * Find the sum of the even numbered values that do not exceed four million.

function eulerFibo(num) {
    // YOUR CODE HERE
    if(num < 2) return 0
    let firstFibo = 0
    let secondFibo = 1
    let firstCopy = 0

    const evenArray = []
    while(secondFibo < num){
        if(secondFibo % 2 === 0){
            evenArray.push(secondFibo);
        }
        firstCopy = firstFibo; 
        firstFibo = secondFibo;
        secondFibo += firstCopy;
    }
    console.log("Even Fibo numbers", evenArray.join(', '));
    return `Sum of even Fibo numbers: ${evenArray.reduce((a,b) => a + b)}`
    // let sum = 0
    // for(let i =0; i < seq.length; i++){
    //     if(num % 2 === 0){ 
    //     seq.push(num)
    //     sum += seq[i];
    // }}
    //     return sum
}
console.log(eulerFibo(1000));

// 9. findNeedle
// Can you find the needle in the haystack?

// Write a function `findNeedle()` that takes an array full of junk but contains one `"needle"`

// After your function finds the needle it should return a message (as a string) that says:

// `"found the needle at postition"` plus the index it found the needle so:

// `find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])`

const hayStack = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'];
function findNeedle(arr) {
    // YOUR CODE HERE
    return "Found the needle at position " + (arr.indexOf('needle'))
    
}
console.log(findNeedle(hayStack));


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