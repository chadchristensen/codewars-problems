// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d/train/javascript

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// My solution
function endsWith(str, ending) {
  return str.substring(str.length - ending.length) === ending;
}

// Other solutions

// easy
function endsWith2(str, ending) {
  return str.endsWith(ending);
}

// regex
function endsWith3(str, ending) {
  return new RegExp(`${ending}$`, 'i').test(str);
}
