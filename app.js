// 1.1. What is the difference between a parameter and an argument?

// In a function, the variables that represent the values that will be processed are called parameters. The specific values passed to a function are called arguments.

// 1.2. Within a function, what is the difference between return and console.log?

// console.log is used to print information to the console, whereas return is a keyword that terminates a function and returns the specified value.

// 1. 3. What are the implications of the ability of a function to return a value?

// In order for a function to return a value, it would need to be invoked with the keyword return.

// 2. calculateCube
function calculateCube(num) {
    // return num * num * num
    return num ** 3
    }
    console.log(calculateCube(7))
    
    // 3. isAVowel
    function isAVowel(letter) {
        if (letter === 'a' || letter === 'A') {
            return true
        } else {
            return false
        }
    }
    console.log(isAVowel("b"))
    
    // 4. getTwoLengths
    function getTwoLengths(word1, word2) {
        return [word1.length, word2.length]
    }
    console.log(getTwoLengths('Boat', 'Submarine'))
    
    // 5. sumArray
    function sumArray(arr) {
        let sum = 0
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i]
        }
        return sum
    }
    console.log(sumArray([2, 6, 9, 11, 13]))
    
    // // 6.1 checkPrime - had a lot of difficulty with this one, need to practice some more on my own
    // function checkPrime(num) {
    //     if (num <2) {
    //         return false}
    //     } 
    //     for (let i = 2); i < num; i++) {
    //         if (num % i === 0) {
    //             return false
    //         }
    //     }
    //     return num > 1;
    
    
    // // // 6.2 printPrimes
    // // function printPrimes(num) {
    // //     let primes = [];
    // //     for(let i =2; i ,= num; i++) {
    // //         if(checkPrime(i)) {
    // //             primes.push(i)};
    // //         }
    // //     }
    // //     console.log(checkPrime(5))
    // // }
    
    // 7. printLongestWord
    function printLongestWord(arr) {
        let maxLength = 0; 
        let longestWord = '';
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].length > maxLength) {
                maxLength = arr[i].length;
                longestWord = arr[i];
            }
        }
        return longestWord
    }
    console.log(printLongestWord(["Rick", "Michonne", "Daryl", "Carol", "Maggie"]))
    
    
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
    // };
    