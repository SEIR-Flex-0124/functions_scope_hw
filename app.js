// 1.1. What is the difference between a parameter and an argument?
// Function parameters are the names listed in the functions definitions while arguments are the real values passed to the function.
//developer.mozilla.org/en-US/docs/Glossary/Parameter
// functions are the building blocks of prgorams. Functions are a resusable block of code written to perform a single purpose.
// Parameters become local variables inside the function body.
// 1.2. Within a function, what is the difference between return and console.log?
// Console.log will display the parameter in the console. Return statements stop executing the function and return the specified value (not within the console).
// 1. 3. What are the implications of the ability of a function to return a value?
// When a function returns a value, a value is retuned via a return statement to the caller of the function, after being implicity converted to the return type of the function in which it is defined.
// source: https://www.ibm.com/docs/en/zos/2.1.0?topic=specifiers-function-return-values

// 2. calculateCube
https: function calculateCube(num) {
  return num ** 3
}
console.log(calculateCube(5)) //expecting 125

// 3. isAVowel
function isAVowel(vowel) {
  if (vowel === 'a' || vowel === 'A') {
    return true
  } else {
    return false
  }
}
const vow = 'a' // variable
const nonVow = 'b' // variable
console.log(isAVowel('a')) //expecting true
console.log(isAVowel('b')) //expecting false

// OR the following is a way that eric did it in resources channel:
// function isAVowel(letter) {
//   if (letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e' || letter.toLowerCase() === 'i' || letter.toLowerCase() === 'o' || letter.toLowerCase() === 'u') return true;
//   return false;
// }
// console.log(isAVowel(a))
// //however this did not run???

// below is how katie did it during the review:
// function isAVowel(vowel) {
//     return "aeiou".includes(letter.toLowercase());
// console.log(isAVowel('b')) //expecting false

// 4. getTwoLengths
function getTwoLengths(word1, word2) {
  return [word1.length, word2.length]
}
console.log(getTwoLengths('Hank', 'Hippopopalous'))

// below is how katie did it during the review:
// // function getTwoLengths(word1, word2) {
//     return [word1.length, word2.length]
// console.log(getTwoLengths('Hank', 'Hippopopalous'))

// 5. sumArray
function sumArray(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  return sum
}
console.log(sumArray([1, 2, 3, 4, 5, 6])) //expecting 21

// below is how katie did it during the review:
// let sum = arr.reduce((acc, curr) => acc + curr)
// console.log(sumArray([1, 2, 3, 4, 5, 6])) //expecting 21
//acc=accumulator, the value that gets returned... callback func is saying acc = acc + curr; ... curr means current. acc can also be thought of as sum of the callback values; can replace acc with sum...//

// 6.1 checkPrime
function checkPrime(num) {
  if (num < 2) {
    return false
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
console.log(checkPrime(5))
console.log(checkPrime(7))
console.log(checkPrime(10))

// below is how katie did it during the review:
// function checkPrime(num) {
// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     return false
//   }
// }
// return true
// console.log(checkPrime(21))

// 6.2 printPrimes
// function printPrimes(num) {
//   let primeNums = []
//   for (let i = 2; i < num; i++) {
//     primeNums = primeNums.push(i)
//     if (num % i === 0) {
//     }
//   }
//   return primeNums
// }
// console.log(printPrimes(20))
//ok i tried this but it didnt work.... not sure where to go from here.
// // below is how katie did it during the review:
// function printPrimes(num) {
// for (let i = 2; i < num; i++) {
//   if (checkPrime(i)) {
//     console.log{i}
//   }
// }
// }

// 7. printLongestWord
function printLongestWord(arr) {
  let maxLength = 0
  let longestWord = ''

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > maxLength) {
      maxLength = arr[i].length
      longestWord = arr[i]
    }
  }
  return longestWord
}

console.log(
  printLongestWord([
    'BoJack',
    'Princess',
    'Diane',
    'a',
    'Max',
    'Peanutbutter',
    'big',
    'blob'
  ])
)

// // below is how katie did it during the review:
// function printLongestWord(arr) {
// let longestWord = ''
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].length > longestWord.length) {
//     longestWord = arr[i]
//   }
// }
// return longestWord;
// }
// console.log(
//   printLongestWord([
//     'BoJack',
//     'Princess',
//     'Diane',
//     'a',
//     'Max',
//     'Peanutbutter',
//     'big',
//     'blob'
//   ])
// --or-- using a reduce statement
// // function printLongestWord(arr) {
//   let longestWord = arr.reduce(acc, curr) => {
//     if (curr.length > acc.length) {
//       acc = curr;
//     }
//     return acc;
//   }, "")
//   return longestWord;
// }
// return longestWord;
// }
// console.log(
//   printLongestWord(['BoJack', 'Princess', 'Diane', 'a', 'Max', 'Peanutbutter', 'big', 'blob'])

// found this link to be helpful: https://www.educative.io/answers/how-to-find-the-longest-word-in-a-string

// BONUS!

// 8. eulerFibo
// // below is how katie did it during the review:
function eulerFibo(num) {
  let x = 1;
  let y = 2;
  let z = null;
  let sum = 0
  while (y <= num) {
    if (y % 2 == 0) {
      sum +=y;
    }
    z = x + y;
    x = y;
    y = z;
  }
  return sum;
}
console.log(eulerFibo(4000000))

// 9. findNeedle
// // below is how katie did it during the review: didnt work on my end...need to look at it again
// function findNeedle(arr) {
//     return (`found the needle at position ${arr.indexOf("needle")}`)
// }
// console.log(find_needle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))


// // below is how katie did it during the review:
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
console.log(sumPositive([1, -4, 7, 12]))

// module.exports = {
//   calculateCube,
//   isAVowel,
//   getTwoLengths,
//   sumArray,
//   checkPrime,
//   printPrimes,
//   printLongestWord,
//   eulerFibo,
//   findNeedle,
//   sumPositive
// }
