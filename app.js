// 1.A:Parameters are basically a empty working space of a function, that is waiting for a value to make it complete. Arguements are the actual values in your function that use the parameters as a Container.

// // 1.2. Within a function, what is the difference between return and console.log
// The difference is console.log doesnt actually invoke anything, or creates an action in your actual function/code. It is just 
// a way how we test what we actually did. Return basically ends the function exection, and returns the value to be used by the function. If return is not used we more than likely will get undefined.

// // 1. 3. What are the implications of the ability of a function to return a value?
// The implications are when something is invoked on your DOM, your return basically ends that action and returns your value to be used once more.

// // 2. calculateCube
function calculateCube(num) {
    return num ** 3;
}
console.log(calculateCube(5))

// // 3. isAVowel
function isAVowel(letter) {
    // YOUR CODE HERE
    const vowels = ["a", "e", "i", "o", "u",]

    if (vowels.includes(letter.toLowerCase())) {
        return true
    }
    return false;

}
console.log(isAVowel('e'))
console.log(isAVowel('i'))
console.log(isAVowel('o'))
console.log(isAVowel('u'))
console.log(isAVowel('y'))
console.log(isAVowel('A'))


// // // 4. getTwoLengths
function getTwoLengths(word1, word2) {
    return [word1.length, word2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"))

// // 5. sumArray
//     // YOUR CODE HERE
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));
console.log(sumArray([2, 3]));
console.log(sumArray([8, 10, 2]));

// // 6.1 checkPrime
function checkPrime(num) {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(checkPrime(0));
console.log(checkPrime(2));
console.log(checkPrime(7));
console.log(checkPrime(10));

// // 6.2 printPrimes
function printPrimes(num) {
    //     // YOUR CODE HERE
    for (let i = 2; i <= num; i++) {
        if (checkPrime(i)) {
            console.log(i)
        }
    }
}
printPrimes(97);

// // 7. printLongestWord
function printLongestWord(strArr) {
    if(typeof strArr !== "object" || typeof strArr[0] !== "string") {
        return "please input an array of strings"
    }

    let longest = "";
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > longest.length) {
            longest = strArr[i];
        }
    }
    return longest;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
console.log(printLongestWord("This is my test"));


    // }

    // // BONUS!

    // // 8. eulerFibo
    // function eulerFibo(num) {
    //     // YOUR CODE HERE
    // }

    // // 9. findNeedle
    // function findNeedle(arr) {
    //     // YOUR CODE HERE
    // }

    // // 10. sumPositive
    // function sumPositive(arr) {
    //     // YOUR CODE HERE
    // }

    // module.exports = {
    //     calculateCube,
    //     isAVowel,
    //     getTwoLengths,
    //     sumArray,
    //     checkPrime,
    //     printPrimes,
    //     printLongestWord,
    //     eulerFibo,
    //     findNeedle,
    //     sumPositive
    // ;}ference between a parameter and an argument?

