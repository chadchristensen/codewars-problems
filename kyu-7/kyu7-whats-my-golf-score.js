// https://www.codewars.com/kata/59f7a0a77eb74bf96b00006a/train/javascript

// Complete the function which accepts two strings and calculates the golf score of a game. Both strings will be of length 18, and each character in the string will be a number between 1 and 9 inclusive.

// My solution
function golfScoreCalculator(parList, scoreList) {
  return scoreList
    .split('')
    .reduce(
      (totalScore, currentHoleScore, idx) =>
        totalScore + (currentHoleScore - parList[idx]),
      0
    );
}

// Other solutions
const golfScoreCalculator2 = (parList, scoreList) =>
  [...scoreList].reduce(
    (result, score, index) => (result += score - parList[index]),
    0
  );
