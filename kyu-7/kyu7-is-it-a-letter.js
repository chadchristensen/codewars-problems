// https://www.codewars.com/kata/567de72e8b3621b3c300000b/train/javascript

// Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.

// My solution
function isLetter(str) {
  return /^[a-zA-Z]$/.test(str);
}
