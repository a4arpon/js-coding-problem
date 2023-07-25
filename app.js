// Problem 1: Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
const stringRev = (string) => {
  let revString = ''
  const stringArr = string.split('')
  for (let i = stringArr.length - 1; i >= 0; i--) {
    revString += stringArr[i]
  }
  console.log(revString)
  return revString
}
console.log(stringRev('hello world') === 'dlrow olleh')
