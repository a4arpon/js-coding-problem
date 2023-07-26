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

// Problem 4: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
const passwordGen = (passLength) => {
  const multiChars =
    ':ABCDEFGHIJKLMN012345abcdef;ghi!@#$%^&*()6789OPQRSTUV-_+jklmnopqrstuvWXYZwxyz=[]{}|<>,.?/'
  let password = ''
  for (let i = 0; i < passLength; i++) {
    const randomIndex = Math.floor(Math.random() * multiChars.length)
    const randomChar = multiChars.charAt(randomIndex)
    password += randomChar
  }
  return password
}

console.log(passwordGen(12))

// Problem 5: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

const romanToInt = (romanNum) => {
  const romanSym = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0
  let prevValue = 0

  for (let i = romanNum.length - 1; i >= 0; i--) {
    const currentSymbol = romanNum[i]
    const currentValue = romanSym[currentSymbol]
    if (currentValue < prevValue) {
      result -= currentValue
    } else {
      result += currentValue
    }
    prevValue = currentValue
  }
  return result
}
console.log(romanToInt('XXI'))

// Problem 6: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
const smallNumArr = (arr) => {
  let smallest = Infinity
  let secondSmallest = Infinity
  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest
      smallest = num
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num
    }
  }

  return secondSmallest
}
console.log(smallNumArr([12, 3, 24324, 454, 5756]))

// Problem 7: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
const jsCalc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2
    case '-':
      return num1 - num2
    case '/':
      if (num2 !== 0 && num1 !== 0) {
        return num1 / num2
      } else {
        return 'Zero is not allow while dividing a number'
      }
    case '*':
      return num1 * num2
    default:
      return num1 + num2
  }
}
console.log(jsCalc(5, 10, '/'))
