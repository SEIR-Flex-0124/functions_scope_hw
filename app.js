// 1.1. What is the difference between a parameter and an argument?


// Arguments declare the values within a function where as a parameter defines the variable after the function is declared.

// // 1.2. Within a function, what is the difference between return and console.log?


// console.log is a function used to print information to the console and return is a call to pass some value back up to wgere call was matchMedia.apply

// 1. 3. What are the implications of the ability of a function to return a value?


// 2. calculateCube
function calculateCube(num) {
    return num **3;
   console.log(calculateCube(5))

}

// 3. isAVowel
function isAVowel(letter) {
//     if (letter === "a"){
//         console.log("isAVowel")
//     }
//     else if(letter === "e"){
//         console.log("isAVowel")
//     }
//     else if(letter === "i"){
//         console.log("isAVowel")
//     }
//     else if(letter ==="o"){
//         console.log("isAVowel")
//     }
//     else(letter === "u"){
//         console.log("isAVowel")
//     }
// }

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return (word1.length, word2.length);
    
    console.log(getTwoLengths("Hank", "Hippopopalous"));
}

// 5. sumArray
 function sumArray(arr) {
    let sum = 0;
       for (let i = 0; i < arr.length; i++){
        sum += arr[i]
       }
       return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
 function checkPrime(num) {

     for (let i =2; i < num; i++){
         if(n % i === 0) {
         return false;
    }
}  
         return true;
     
        console.log(checkPrime(num))
     


//}

// 6.2 printPrimes
function printPrimes(num) {
    
    for (i = 2; i <= num; i++){
      if (checkPrime(i)){
        console.log(i)
      }
        
    }

}
     console.log(PrintPrime(num))

 //7. printLongestWord
function printLongestWord(arr) {
    
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