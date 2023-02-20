// 1.1. What is the difference between a parameter and an argument?
// Parameters are the names listed in the function's definition. Arguments are the real values passed to the function. 
// 1.2. Within a function, what is the difference between return and console.log?
// console.log is the equivalent of print in other languages, while return is used for returning values from a function. 
// 1. 3. What are the implications of the ability of a function to return a value?
// A given value is returned to the function caller.
// 2. calculateCube

console.log(calculateCube(6));
function calculateCube(num) {
    return num*num*num;
}



// 3. isAVowel
console.log(isAVowel("a"));
function isAVowel(letter) {
  const vowels =['a','e','i','o','u'];
  for(var a in vowels){

    if(letter === "a"){
        return true;
    } else {
        return false;
    }
}
    // YOUR CODE HERE
}

// 4. getTwoLengths
console.log(getTwoLengths('come','laughter'));

function getTwoLengths(str1,str2) {
    const arr =[];
for (var i = 0; i<arguments.length; i++) {
    arr.push(arguments[i].length);
}
return arr;
}



// 5. sumArray
console.log(sumArray([9, 10, 1]))
function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// 6.1 checkPrime
console.log(checkPrime(7))
function checkPrime(num) {
    if (num == 2)
    return true;
    for(i=2;i<=Math.sqrt(num);i++)
    {
        if (num % i ==0)
        return false;
    }
    return true;
}
    // YOUR CODE HERE


// 6.2 printPrimes
console.log(printPrimes(245))
function printPrimes(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
            if(num % i === 0) return false;
        }
        return true;
    }



// 7. printLongestWord
function printLongestWord(arr){
    let words = arr.split(' ');
    let maxLength = 0;
    let longestWord = '';
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
        longestWord = words[i];
      }
    }
    console.log(longestWord);
  
  }
  
  printLongestWord('my name is Omolola')
  ;

// BONUS!

// 8. eulerFibo
console.log(eulerFibo(100))

function eulerFibo(num) {
    let temp,a =0,b =1, sum =0;
    while (num > b) {
        if (b% 2 === 0) {
            sum += b;
        };
        temp = a;
        a = b;
        b += temp;
    };
    return sum;
    // YOUR CODE HERE
}

// 9. findNeedle
console.log(findNeedle(['lola', 200, 'sugar', true, 'needle', 4000]));

function findNeedle(arr) {
    return arr.indexOf('needle');
    // YOUR CODE HERE
}


// 10. sumPositive
console.log(sumPositive([-1, 28, -24, 15] ));

function sumPositive(arr) {
    let sum = 0;
    for (let i = 0; i< arr.length; i++) {
        if (arr[i] > 0) sum += arr[i]
    
    }
    return sum
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
