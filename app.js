// 1.1. What is the difference between a parameter and an argument?

// Parameters are the names within the parenthesis that come after the function delcaration. These variables are what the function is looking to take in, in order to operate. The arguments are the actual values that are passed through the parameters when the function is invoked. 

// 1.2. Within a function, what is the difference between return and console.log?

//Return is the function saying "what am I doing with these arguments? Return then assigns the output of the function to the function name. Return is required in a function in order for it to not return "undefined".

// 1. 3. What are the implications of the ability of a function to return a value?

//To follow the 'DRY' coding principle of not having to repeat code. 

// 2. calculateCube

function calculateCube(num) {
    return Math.pow(num,3);
}

console.log(calculateCube(5));

// 3. isAVowel
//I want to preface this code by saying my initial method was to use an array, but a friend explained how arrays function slower by comparing the input to each value before returning anything. But an object will only use 1 comparison with the input, and return a value much more effeciently. 

//Version 1

// function isaVowel1(letter) {
//     if (letter === "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u") {
//         return letter = true;
//     } else 
//     return letter = false;
// }

// console.log(isaVowel1("b"));

//Version 2

// const vowelArray = ["a", "e", "i", "o", "u"];

// function isaVowel2 (letter) {
//    return vowelArray.includes(letter)
// }
// console.log(isaVowel2("e"));

//Version 3 

function isAVowel3(letter) {
    const vowelChecker = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    }
    if (vowelChecker[letter] == true){
        return letter = true; 
    } else {
        return letter = false;
    }
}
console.log(isAVowel3("a"));

// 4. getTwoLengths

function getTwoLengths(word1, word2) {
    return twoLengthsArr = [word1.length, word2.length]

}

console.log(getTwoLengths("Testing123", "Hellooooooooo, is this thing on?!"));

// 5. sumArray

function sumArray(arr) {
    let sum = 0;
     for (i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime 
function checkPrime(num) {
    for (i = 2; i < Math.sqrt(num); i++) { 
        if (num % i == 0) { 
            return false;
        } else {
            return true;
        }
    }
        }
    
// console.log(checkPrime(7));

// I struggled with developing the logic for line 86 on my own. Admittedly not very good at math - needed a reminder of what a prime number even is. I pulled line 86 from https://studymaths.co.uk/topics/checkIfPrime.php#:~:text=var%20isPrime%20%3D%20true%3B,exactly%2C%20n%20cannot%20be%20prime.&text=%2F%2F%20Finally%20return%20whether%20n%20is%20prime%20or%20not. 
//I was close, but seeing how they did it connected the missing piece. I do fully understand how it works. The loop starts at 2 and takes the square root of the number entered as the breaking point, adding 1 for each time it runs. The conditional statement says if the number entered divided by i (starting with 2) has a remainder equal to 0, then it is not prime, return false. Continue running the loop, starting from 2, until you reach the square root of the number entered, test that one as well, then stop. I think(hope) this was a math struggle, and not so much a coding struggle. 

// 6.2 printPrimes
function printPrimes(num) {
    console.log(checkPrime(num))
}

printPrimes(97)

// 7. printLongestWord
function printLongestWord(arr) {
    const longestWord = [];
    for (i = 0; i < arr.length; i++){
       if (arr[i].length > 0) {
        longestWord.push(arr[i].length)
       } return Math.max(longestWord);
    }
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));

//This code is not the solution to the problem, but was my final progress as I ran out of time. It returns the index of the longest string, but not the actual string. I tried .toString but received NaN returns and would prefer on-time submission. 

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
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