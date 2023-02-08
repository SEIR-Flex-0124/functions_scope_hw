// 1.1. What is the difference between a parameter and an argument?

// Arguments declare the values within a function where as a parameter defines the variable after the function is declared.

// // 1.2. Within a function, what is the difference between return and console.log?

// console.log is a function used to print information to the console and return is a call to pass some value back up to wgere call was matchMedia.apply

// 1. 3. What are the implications of the ability of a function to return a value?

isAVowel("a")

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
   let x = Math.cbrt(num)

}

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    if (letter === "a"){
        console.log("Vowel")
    }
    else if(letter === "e"){
        console.log("vowel")
    }
    else if(letter === "i"){
        console.log("vowel")
    }
    else if(letter ==="o"){
        console.log("vowel")
    }
    else(letter === "u"){
        console.log("vowel")
    }
}

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // YOUR CODE HERE

}

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
    let sum = arr.reduce(function(a, b){
        return a + b;
    });
    console.log(sum)
   
}

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    for (var i =2; i < num; i++){
        if(n % i === 0) return false;
    }
    return n > 1; {
        console.log(num)
    }


}

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    for (i=1; i<=100; i++){
        console.log(num)
    }

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