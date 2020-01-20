// https://www.codewars.com/kata/5949481f86420f59480000e7/train/javascript

// Given an vector of numbers, determine whether the sum of all of the numbers is odd or even.
// Give your answer as a String matching 'odd' or 'even'.
// If the input array is empty consider it as: [0] (array with a zero).

// My solution

function oddOrEven(array) {
  // enter code here
  const sum = array.reduce((curr, acc) => acc + curr, 0);

  return sum % 2 === 0 ? 'even' : 'odd';
}

// Other solutions
function oddOrEven2(arr) {
  return arr.reduce((a, b) => a + b, 0) % 2 ? 'odd' : 'even';
}
