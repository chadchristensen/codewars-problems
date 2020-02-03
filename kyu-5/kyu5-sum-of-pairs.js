// www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.

// My solution
/*
 * WARNING: This passed the sample test cases but not the performance requirements
 * See more efficient solution below in Other solutions section
*/

function sumPairs(ints, s) {
  // your code here
  const matches = [];
  let minIndex2 = ints.length - 1;
  for (let i = 0; i < ints.length; i += 1) {
    for (let j = i + 1; j < ints.length; j += 1) {
      if (ints[i] + ints[j] === s) {
        matches.push({
          value1: ints[i],
          value2: ints[j],
          index1: i,
          index2: j,
        });
        minIndex2 = Math.min(minIndex2, j);
      }
    }
  }

  const closestMatch = matches.find(match => match.index2 === minIndex2);
  return closestMatch === undefined
    ? undefined
    : [closestMatch.value1, closestMatch.value2];
}

// Other solutions
function sumPairs(ints, s){
  //your code here
  const mem = {}
  for (let i = 0; i < ints.length; i++) {
    if (mem[s - ints[i]]) return [s - ints[i], ints[i]]
    mem[ints[i]] = true;
  }
  
  return undefined;
}