// https://www.codewars.com/kata/52b305bec65ea40fe90007a7/train/javascript

// Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

// At long last, we need a way to unscramble what these pirates are saying.

// Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

// For example:
// grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
// Should return ["sport", "ports"].

// Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

// My solution
function grabscrab(anagram, dictionary) {
  return dictionary.filter(word => {
    if (word.length !== anagram.length) return false;

    const wordArray = word.split('');
    for (let i = 0; i < wordArray.length; i += 1) {
      if (wordArray.indexOf(anagram[i]) === -1) return false;
      wordArray.splice(wordArray.indexOf(anagram[i]), 1);
    }

    return true;
  });
}

// Other solutions
// functional
function grabscrab2(anagram, dictionary) {
  const anagramSorted = anagram
    .split('')
    .sort()
    .join('');
  return dictionary.filter(
    a =>
      a
        .split('')
        .sort()
        .join('') === anagramSorted
  );
}

// Similar solution but using spread
function grabscrab3(s, a) {
  return a.filter(x => [...x].sort().join() === [...s].sort().join());
}
