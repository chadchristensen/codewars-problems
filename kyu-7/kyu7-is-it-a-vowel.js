// https://www.codewars.com/kata/567bed99ee3451292c000025/train/javascript

// Implement the function which should return true if given object is a vowel, false otherwise.

// My solution

const isVowel = function(character) {
  return /^[aeiou]$/i.test(character);
};

isVowel('A');
