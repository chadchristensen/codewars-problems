// https://www.codewars.com/kata/52774a314c2333f0a7000688/train/javascript

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid

// My solution
function validParentheses(parens) {
  if (parens.length > 0 && (parens[0] !== '(' || parens.length % 2 !== 0))
    return false;

  const closingParens = [];

  for (let i = parens.length - 1; i >= 0; i--) {
    if (parens[i] === ')') {
      closingParens.unshift(parens[i]);
    } else if (closingParens.shift() !== ')') {
      return false;
    }
  }

  return closingParens.length === 0;
}

// Other solutions

function validParentheses2(parens) {
  let n = 0;
  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') n++;
    if (parens[i] === ')') n--;
    if (n < 0) return false;
  }

  return n === 0;
}
