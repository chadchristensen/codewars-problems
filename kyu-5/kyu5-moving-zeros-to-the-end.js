// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// My solution
const moveZeros = function(arr) {
  return [...arr.filter(x => x !== 0), ...arr.filter(z => z === 0)];
};

moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a']);

// Other solutions

const moveZeros2 = function(arr) {
  return arr
    .filter(function(x) {
      return x !== 0;
    })
    .concat(
      arr.filter(function(x) {
        return x === 0;
      })
    );
};

moveZeros2([false, 1, 0, 1, 2, 0, 1, 3, 'a']);
