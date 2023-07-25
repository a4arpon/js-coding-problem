// Problem 1: Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
const stringRev = (string) => {
  let revString = ''
  const stringArr = string.split('')
  for (let i = stringArr.length - 1; i >= 0; i--) {
    revString += stringArr[i]
  }
  return revString
}
console.log(stringRev('hello world'))

// Problem 2: Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

const sumArray = (arr) => {
  let sumOfPositive = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sumOfPositive = sumOfPositive + arr[i]
    }
  }
  return sumOfPositive
}
console.log(sumArray([2, -5, 10, -3, 7]))

// Problem 3: Write a JavaScript program to find the most frequent element in an array and return it.
const freqEl = (arr) => {
  const freqCount = arr.reduce((counter, el) => {
    counter[el] = (counter[el] || 0) + 1
    return counter
  }, {})
  let mostFreqEl
  let maxFreq = 0
  for (const el in freqCount) {
    if (freqCount[el] > maxFreq) {
      mostFreqEl = el
      maxFreq = freqCount[el]
    }
  }
  return mostFreqEl
}
console.log(freqEl([3, 5, 2, 5, 3, 3, 1, 4, 5, 5]))
