// https://www.codewars.com/kata/5738f5ea9545204cec000155/train/javascript

// Bob is a lazy man.

// He needs you to create a method that can determine how many letters and digits are in a given string.

// Example:
// "hel2!lo" --> 6
// "wicked .. !" --> 6
// "!?..A" --> 1

// My solution
function countLettersAndDigits(input) {
  return input.match(/[a-z0-9]/gi) === null
    ? []
    : input.match(/[a-z0-9]/gi).length;
}

// Other solutions
function countLettersAndDigits(s) {
  return s.replace(/[^a-z\d]/gi,"").length;
}

function countLettersAndDigits(input) {
  return (input.replace(/[\W_]/g,"").length);
}