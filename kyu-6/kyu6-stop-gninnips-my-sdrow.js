// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// My solution

function spinWords(wordString) {
  // TODO Have fun :)

  return wordString
    .split(' ')
    .map(word => {
      if (word.length >= 5) {
        return word
          .split('')
          .reverse()
          .join('');
      }
      return word;
    })
    .join(' ');
}

spinWords('Welcome');

// Other solutions

// Ternary statement
function spinWords2(words) {
  return words
    .split(' ')
    .map(function(word) {
      return word.length > 4
        ? word
            .split('')
            .reverse()
            .join('')
        : word;
    })
    .join(' ');
}

spinWords2('Welcome');

// Regex
function spinWords3(string) {
  return string.replace(/\w{5,}/g, function(w) {
    return w
      .split('')
      .reverse()
      .join('');
  });
}

spinWords3('Welcome');
