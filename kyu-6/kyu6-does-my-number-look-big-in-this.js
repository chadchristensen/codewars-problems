// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript

// A Narcissistic Number is a number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// My solution
function narcissistic(value) {
    // Code me to return true or false
    return value
        .toString()
        .split("")
        .reduce((total, currNum) => {
            return total += parseInt(currNum) ** value.toString().length
        }, 0) === value;
}

// Other solutions

// Type coersion
function narcissistic2(value) {
    return ('' + value).split('').reduce(function (p, c) {
        return p + Math.pow(c, ('' + value).length)
    }, 0) == value;
}

// Modulus and Math.floor()
function narcissistic3( value ) {
    var remaining = value,
        digits = [],
        solution = 0;
    while (remaining > 0) {
      digits.push(remaining % 10);
      remaining = Math.floor(remaining / 10);
    }
    
    return value == digits.reduce(function(p,n) {
      return p + Math.pow(n,digits.length);
    },0);
  }