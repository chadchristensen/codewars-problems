// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript

// In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up.

// Rules

// 1.  The input string will always be lower case but maybe empty.
// 2.  If the character in the string is whitespace then pass over it as if it was an empty seat.

// Example
// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// My solution

function wave(str){
  return str
          .split('')
          .map((letter, i, arr) => {
            if(letter === ' ') return null
            
            let waveWord =[]
            
            for (let j = 0; j < arr.length; j += 1) {
              waveWord.push(j === i ? letter.toUpperCase() : arr[j]);
            }
            return waveWord.join('');
          })
          .filter(x => x !== null)
}

// Other solutions

// Regex
function wave(str){
  let result = [];
  
  str
    .split('')
    .forEach((char, index) => {
      if (/[a-z]/.test(char)) {
          result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
      }
    });
  
  return result;
}

// Hard to read but minimal
var wave = w => [...w].map((a,i)=>w.slice(0,i)+a.toUpperCase()+w.slice(i+1)).filter(a=>a!=w)