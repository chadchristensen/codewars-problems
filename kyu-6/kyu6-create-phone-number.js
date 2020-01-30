// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// My solution
function createPhoneNumber(numbers) {
  const numStr = numbers.join('');

  return `(${numStr.substring(0, 3)}) ${numStr.substring(
    3,
    6
  )}-${numStr.substring(6)}`;
}

// Other solutions
function createPhoneNumber2(numbers) {
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

function createPhoneNumber3(numbers) {
  return numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx');
}
