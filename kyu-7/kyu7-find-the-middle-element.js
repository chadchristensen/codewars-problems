// https://www.codewars.com/kata/545a4c5a61aa4c6916000755/train/javascript

// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// For example:
// gimme([2, 3, 1]) => 0

// My solution
const gimme = function(inputArray) {
  const copied = [...inputArray];
  copied.sort((a, b) => a - b);
  return inputArray.indexOf(copied[1]);
};

// Other solutions
function gimme2(a) {
  return a.indexOf(
    a.concat().sort(function(a, b) {
      return a - b;
    })[1]
  );
}
