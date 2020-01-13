// https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// My solution

function squareDigits(num) {
  // may the code be with you
  return parseInt(
    `${num}`
      .split('')
      .map(x => parseInt(x) ** 2)
      .join('')
  );
}

squareDigits(9119);
