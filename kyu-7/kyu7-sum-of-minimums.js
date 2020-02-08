// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699/train/javascript

// Given an 2D array of size m * n. Your task is to find the sum of minimum value in each row.

// For Example:

// [
//   [1, 2, 3, 4, 5], // minimum value of row is 1
//   [5, 6, 7, 8, 9], // minimum value of row is 5
//   [20, 21, 34, 56, 100] // minimum value of row is 20
// ]
// So, the function should return 26 because sum of minimums is as 1 + 5 + 20 = 26

// My solution
function sumOfMinimums(arr) {
  const mins = []
  for (let i = 0; i < arr.length; i += 1) {
    let min = arr[i][0];
    for (let j = 0; j < arr[i].length; j += 1) {
      min = Math.min(min, arr[i][j]);
    }
    mins.push(min)
  }
  
  return mins.reduce((acc, curr) => acc + curr, 0);
}

// Other solutions
function sumOfMinimums2(arr) {
  return arr.reduce((p, c) => p + Math.min(...c), 0);
}

function sumOfMinimums3(arr) {
  let total = 0;
  
  for (let i = 0; i < arr.length; i++){
   total += Math.min(...arr[i])
  }
  
  return total;
}