// // 1.1. What is the difference between a parameter and an argument?
// An argument is local variable in a function. A parameter is a variable that is passed in to be used in the function.
// // 1.2. Within a function, what is the difference between return and console.log?
// console.log will print to the console where as a return will send an element to wherever the function was called.
// // 1. 3. What are the implications of the ability of a function to return a value?
// it allows us to print for example the sum of two numbers given from the user to the screen.
// // 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    let total = num * num * num;
    return total;
}

// 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE 
    return  (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u" ) ;
}          

// 4. getTwoLengths
function getTwoLengths(word1, word2) { 
    // YOUR CODE HERE
    return word1.length + word2.length;
    

}

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
   let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i]
    }
    return total;
}
//console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    // YOUR CODE HERE
    if (num <= 1){
        return false;  // CHECKS IF NUM IS POS.
    }
    if (num % 2 == 0 && num > 1){
        return false;  // CHECKS IF NUM IS EVEN
    } 
    const sqrt = Math.sqrt(num); // GETTING SQRT OF NUM FOR EFFICIENCY
    for( let i=3; i<=sqrt; i+=2 ){
        if( num % i == 0 ) return false;  // CHECKS IF NUM CAN BE DIVIDED W/NO REMAIN.
    }
    return true
}
console.log(checkPrime(3));

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    let primeArray = []
    for( let i=3; i<=num; i++ ){
        if(checkPrime(i)){
            primeArray.push(i);
        }
    }
    return primeArray;
 }
//console.log(printPrimes(13));

// 7. printLongestWord
function printLongestWord(arr) {
    // YOUR CODE HERE
   let longestWord = ""
   //console.log(arr);
    for( let i=0; i<arr.length; i++ ){
        if( arr[i].length > longestWord.length ){
            longestWord = arr[i];
        }
    }
    return longestWord;
}
//console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));


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