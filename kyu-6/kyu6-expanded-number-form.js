// https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

// You will be given a number and you will need to return it as a string in Expanded Form. For example:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0

// My solution
function expandedForm(num) {
  const numArray = num.toString().split('');

  return numArray
    .map((num, i, arr) => {
      for (let j = 1; j < arr.length - i; j += 1) {
        num += '0';
      }
      return num;
    })
    .filter(num => parseInt(num) !== 0)
    .join(' + ');
}

// Other solutions

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");
