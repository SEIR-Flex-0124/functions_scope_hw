// 1.1. What is the difference between a parameter and an argument?
//A parameter is something we add to a function, and an argument is the actual value for the function when it's invoked.
// 1.2. Within a function, what is the difference between return and console.log?
//Return doesn't print out the value, it just defines it or gives it it's value. Console.log will print out our function.
// 1. 3. What are the implications of the ability of a function to return a value?
//Realized during class that this wasnt' complete. Answer: Are able to reuse the code - follows DRY
// 2. calculateCube
function calculateCube(num) {
    return num*num*num; //or return num ** 3;
}
console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(letter) {
    let vowels = ["a", "e", "i", "o", "u"]; //or return "aeiou".includes{letter.toLowerCase()}; , using the .include method for strings and arrays
    for(i = 0; i < vowels.length; i++) {
    if (letter === vowels[i]) 
        return true;
    }
    return false;
}
console.log(isAVowel("a"));

//  4. getTwoLengths
 function getTwoLengths(word1, word2) {
    return [word1.length, word2.length];
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

// 5. sumArray
function sumArray(arr) {
    //let sum = arr.reduce((acc, curr) => acc + curr); //acc is accumulater- starts at 0, 
    let sumArray = 0
    for (let i = 0; i < arr.length; i += 1) {
            sumArray += arr[i]
        }
        return sumArray;
}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

// 6.1 checkPrime
function checkPrime(num) {
    if (num % 2 === 0) { //% checks the remainder
        return false;
       } 
       return true;
    // for (let i =  2; i <Math.sqrt(num); i++) {
        //if (num % i === 0) {
            //return false;
        //}
    //return true;
        }
       
    

 console.log(checkPrime(9)); 

// 6.2 printPrimes
function printPrimes(num) {
    for(i = 0; i <= num; i++) { // for (let i = 2; i < num; i++)
        if(checkPrime(i))console.log(i);
            //Note: calling on my previous function 'checkPrime'. However I'm gettin an undefined after all my Primes are printed and I'm not sure why?
    }
}
console.log(printPrimes(97));

// 7. printLongestWord
function printLongestWord(arr) {
    let longestWord = "";
    for (let i = 0; i < arr.length; i++){
        if (arr[i].length > longestWord.length){
        longestWord = arr[i]; 
        }
    return longestWord;
    }
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"])); //I keep returning BoJack?

// BONUS!

// 8. eulerFibo
function eulerFibo(num) {
    let x = 1;
    let y = 2;
    let z = null;
    let sum = 0;

    while (y <= num) {
        if (y % 2 ==0) {
            sum += y;
        }
        z = x + y;
        x = y;
        y = z;
    }
    return sum;
}
console.log(eulerFibo(4000000));

// 9. findNeedle
function findNeedle(arr) {
    return (`found the needle at position ${arr.indexOf("needle")}`)
}
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']));

// 10. sumPositive
function sumPositive(arr) {
    let sum = arr.reduce((acc, curr) => {
        if (curr > 0) {
            acc += curr
        }
        return acc;
    }, 0)
    return sum;
    
}
console.log(sumPositive([1, -4, 7, 12]));

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