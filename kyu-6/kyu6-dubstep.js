// https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript

// Input
// The input consists of a single non-empty string, consisting only of uppercase English letters, the string's length doesn't exceed 200 characters

// Output
// Return the words of the initial song that Polycarpus used to make a dubsteb remix. Separate the words with a space.

// My Solution
function songDecoder(song){
  return song.replace(/WUB/g, " ").replace(/\s+/g, " ").trim();
}

// Other Solutions
// Cleaner Regex
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

// HOF
function songDecoder(song) {
  return song.split('WUB').filter(x => x !== '').join(' ')
}