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
function printPrimes(num) {
    // YOUR CODE HERE
}

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