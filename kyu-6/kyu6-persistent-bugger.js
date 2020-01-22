// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript

// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// My solution
function checkSingleDigit(num) {
  return num.length === 1;
}

function persistence(num) {
  let multPers = 0;
  let numString = num.toString();
  let isSingleDigitFound = checkSingleDigit(numString);

  while (!isSingleDigitFound) {
    const result = numString
      .split('')
      .reduce((acc, curr) => acc * curr, 1)
      .toString();

    multPers += 1;
    numString = result;
    isSingleDigitFound = checkSingleDigit(result);
  }

  return multPers;
}
