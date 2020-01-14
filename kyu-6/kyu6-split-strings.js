// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript

// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_')

// My solution
function solution(str) {
  const wordPairs = [];

  for (let i = 0; i < str.length; i += 2) {
    if (typeof str[i + 1] === 'undefined') {
      wordPairs.push(`${str[i]}_`);
    } else {
      wordPairs.push(str.substr(i, 2));
    }
  }

  return wordPairs;
}

// Other solutions
function solution2(str) {
  return (str.length % 2 ? `${str}_` : str).match(/../g);
}
