// 1.1. What is the difference between a parameter and an argument?
//Parameters are the place holders for inputs that the fucntion should recive.
//Arguments are the specific values of jS data types that we run in a function.
// 1.2. Within a function, what is the difference between return and console.log?
//  return  =The function ends even if there's extra lines in the function. When you use  console.log it does not ends.
// 1. 3. What are the implications of the ability of a function to return a value?
// Stops the execution of the function is stopped. 
// we could use the  returned value as a  console.log or another function.

// 2. calculateCube
function calculateCube(num) {
    // YOUR CODE HERE
    return num*num*num;    //n*3
    
}
 console.log(calculateCube(5));

// 3. isAVowel
function isAVowel(alphabet) {
    // YOUR CODE HERE
    const vowel = [ 'a' , 'e', 'i'];
  for ( let i  = 0; i < vowel.length; i++ ) {
    if ( vowel[i] === alphabet.toLowerCase() ) {
      return true;
    }
  }
  return false;
}

console.log(isAVowel("a"));
// 4. getTwoLengths
function getTwoLengths(word1, word2) {

    // YOUR CODE HERE
 return [ word1.length , word2.length ];
}
 
 console.log(getTwoLengths("Hank", "Hippopopalous"));  

 

// 5. sumArray
function sumArray(arr) {
    // YOUR CODE HERE
        let sum = 0;
        for (let i = 0; i < arr.length; i++) { // Creating a for...loop to iterate over the array
          sum += arr[i];
        }
        return sum;
      }
      console.log(sumArray([1, 2, 3, 4, 5, 6]));  


// 6.1 checkPrime
function checkPrime(nums) {
    // YOUR CODE HERE
    if (nums % 2 == 0 && nums > 2) return false; // even numbers
    const start = Math.sqrt(nums); // store the square to loop faster
    for(let i = 3; i <= start; i += 2) { // start from 3, stop at the square, increment in twos
        if(nums % i === 0) return false; // modulo shows a divisor was found
    }
    return true;
  }
  console.log(checkPrime(97));

    

// 6.2 printPrimes
function printPrimes(num) {
    // YOUR CODE HERE
    if (num < 2)
        return `${num} is not a prime`


    for (let x = 2; x < num; x++) {
        if (num % x === 0) {
            return `${num} is not a prime number`
        }
    }
    return `${num} is a prime number`
}

console.log(printPrimes(97));
    

    


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