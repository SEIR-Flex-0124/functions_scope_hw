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
    if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" || letter == "A" || letter == "E" || letter == "O" || letter == "U") {
        return true;
    } else {
        return false;
    }
}
console.log(isAVowel("J"));
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
    if (num===1)
    {
        return false;
    }
    else if(num===2)
    {
        return true;
    }else {
        for(var x=2; x<num; x++){
        if (num % x === 0)
        {   return false;
        }}
        return true;
    }

}
console.log(checkPrime(69))
console.log(checkPrime(2))
console.log(checkPrime(23))
// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    let arrOfPrimes = [];
     for(let i = 2; i <= num; i++) {
       if(checkPrime(i)) {
         arrOfPrimes.push(i);
       }
     }
     return arrOfPrimes;
}
console.log(printPrimes(69))
console.log(printPrimes(45))
console.log((23))
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