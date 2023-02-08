// 1.1. What is the difference between a parameter and an argument?
    //parameters are like placeholders for the arguememts and the arguemenmts are what the function uses as its parameters after the function is called
// 1.2. Within a function, what is the difference between return and console.log?
    //console log is like print in other langueges, return returns the values from the function
// 1. 3. What are the implications of the ability of a function to return a value?
    //so that you can access it for other things like usinf it in the dom



// 2. calculateCube
function calculateCube(num) {
    let volume = num ** 3;
    console.log(`The volume of a cube with side length ${num} is ${volume}.`);
}
calculateCube(5);

// 3. isAVowel
function isAVowel(letter) {
    letter = letter.toLowerCase();
  return (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u');
}
console.log(isAVowel("f"));

//4. getTwoLengths
function getTwoLengths(word1, word2) {
    return[word1.length, word2.length];
}
console.log(getTwoLengths("koby", "lauren"));

// // 5. sumArray
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

 sumArray([1, 2, 3, 4, 5]);

 console.log(sumArray([1, 2, 3, 4, 5, 6]));
console.log("Sum is ", sumArray([1, 2]))


// was coding along for question 6 during office hours but i dont really understand this code (what does the s mean on line 48?)

// 6.1 checkPrime
function checkPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
console.log(checkPrime(7));

// 6.2 printPrimes
function printPrimes(num) {
    let primes = [];
    for(let i = 2; i <= num; i++) {
        if(checkPrime(i)) {
            primes.push(i)};
    }
    return primes;
}
console.log(printPrimes(100));
// console.log(primes);

// 7. printLongestWord
function printLongestWord(arr) {
   let largest = "";
   for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > largest.length) {
        largest = arr[i];
    }
   } 
   return largest;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));



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