// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript

// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// My solution

function comp(array1, array2) {
  if (!Array.isArray(array1) || !Array.isArray(array2)) return false;
  for (let i = 0; i < array2.length; i += 1) {
    const currSqRt = Math.sqrt(array2[i]);
    if (array1.indexOf(currSqRt) === -1) return false;
    array1.splice(array1.indexOf(currSqRt), 1);
  }

  return true;
}

// Other solutions

function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}