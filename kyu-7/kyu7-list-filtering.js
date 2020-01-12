// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/train/javascript

// Create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// My solution

function filterList(l) {
  // Return a new array with the strings filtered out
  return l.filter(item => typeof item === 'number');
}

filterList([1, 2, 'a', 'b']);

// Other solutions

// Use isInteger
function filterList2(l) {
  return l.filter(Number.isInteger);
}

filterList2([1, 2, 'a', 'b']);
