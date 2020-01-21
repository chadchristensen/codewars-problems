// https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.

// My solution

function array_diff(a, b) {
  return a.filter(num => b.indexOf(num) === -1);
}

// Other solutions

function array_diff2(a, b) {
  return a.filter(e => !b.includes(e));
}
