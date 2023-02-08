// 1.1. What is the difference between a parameter and an argument?
// a parameter is what is written inside of the function. 
// an argument is passing the value to the function when it invokes.
// 1.2. Within a function, what is the difference between return and console.log?
// return is returning value to the output. return ends function.
// console.log is prinnting out value on the screen.
// 1. 3. What are the implications of the ability of a function to return a value?
// We oftenly have to use user's input as a function variable so that we can use them.
// 2. calculateCube
function calculateCube(num) {
    return num ** 3;
    // YOUR CODE HERE
}

// console.log(calculateCube(3))


// 3. isAVowel
// I just googled 'check element in array' and found includes in W3school..
function isAVowel(letter) {
    const vowelArray = ['a','e','i','o','u','A','E','I','O','U'];
    if (vowelArray.includes(letter)){
        return true;
    } else {
        return false;
    }
    // YOUR CODE HERE
}

// console.log(isAVowel('a'));

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
    // console.log(`(${word1.length} , ${word2.length})`);
    return (`(${word1.length} , ${word2.length})`);
    // YOUR CODE HERE
}

// console.log(getTwoLengths('hello','123'));

// 5. sumArray
function sumArray(arr) {
    sum = 0;
    for (let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum
    // YOUR CODE HERE
}

// console.log(sumArray([1,2,3,4,5]));

// 6.1 checkPrime
function checkPrime(num) {
    numArray = [];
    for (i=2;i<num;i++){
        numArray.push(i);
    }
    // return numArray;
    newArray = [];
    for (i=0;i<numArray.length;i++) {
        newArray.push(num % numArray[i]);
    } 
    if (newArray.includes(0)){
        return false;
    } else {
        return true;
    }
    // YOUR CODE HERE
}

// console.log(checkPrime(19));


// according to my research 1 is not prime number.

// 6.2 printPrimes
function printPrimes(num) {
    let numArray = [];

    for (n=2;n<num;n++){
        numArray.push(n);
    }
    //numArray for holding numbers before num
    //checking elemnets in numArray weather primenum or not.

    // for (i=0; i<numArray.length; i++){ 
    //     (checkPrime(numArray[i]) == true) 
    //     printArray.push(numArray[i]);
    // }
    let printArray = [];
    numArray.forEach((numP) => { 
        if (checkPrime(numP) == true) {
            printArray.push(numP);
        }
    });
    return printArray;
    // YOUR CODE HERE
}
// console.log(printPrimes(10));

// 7. printLongestWord
function printLongestWord(arr) {
    for (i=0;i<arr.length;i++){
        for (j=1;j<arr.length-1;j++) {
            if (arr[i].length >= arr[j].length){
                return arr[i];
            }       }
    }
    
    // YOUR CODE HERE
}

// console.log(printLongestWord(['apple','orange','banana']))

// BONUS!
// * Write a function that takes a parameter, a number. The function should print the Fibonacci sequence up to that number.
// * Adjust the function to push the **even numbered** values into an array.
// * Adjust the function to return the summed value of the array.
// * Find the sum of the even numbered values that do not exceed four million.

// 8. eulerFibo
function eulerFibo(num) {
    let numArray = [1,2];
    for (i=2;i<=num;i++){
        numArray[i] = numArray[i-1] + numArray[i-2];
        numArray.push(numArray[i]);
    }
    return numArray;
    }

console.log(eulerFibo(10));
// for Fibonacci sequence, I refered to stack over flow.

// 9. findNeedle
function findNeedle(arr) {
    idx = arr.findIndex((word) => word === "needle")
    console.log(`i found the need at position ${idx}`)
    return // YOUR CODE HERE
}
// I looked up filter() first, and then found findIndex()
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']) // 5
// Should return:
// `"found the needle at position 5"`



// 10. sumPositive
function sumPositive(arr) {
    let sum = 0;
    for (i=0;i<arr.length;i++){
        if (arr[i] > 0){
            sum += arr[i];
        }
    }
    console.log(sum);
    return
    // YOUR CODE HERE
}

sumPositive([1,-4,7,12]);

`[1, -4, 7, 12] => 1 + 7 + 12 = 20`


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



