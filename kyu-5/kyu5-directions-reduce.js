// https://www.codewars.com/kata/550f22f4d758534c1100025a/train/javascript

// Remove all directions that are exactly opposite (ex. ['NORTH', 'SOUTH'] => [])

// My solution
function dirReduc(arr) {
  let reducedArr = arr;
  let isFullyReduced = false;
  const opposites = {
    NORTH: 'SOUTH',
    SOUTH: 'NORTH',
    EAST: 'WEST',
    WEST: 'EAST',
  };

  while (!isFullyReduced) {
    for (let i = 0; i < reducedArr.length; i++) {
      if (reducedArr[i] === opposites[reducedArr[i + 1]]) {
        reducedArr[i] = null;
        reducedArr[i + 1] = null;
      }
    }

    const filteredArr = reducedArr.filter(dir => dir !== null);

    if (filteredArr.length === reducedArr.length) {
      isFullyReduced = true;
    } else {
      reducedArr = filteredArr;
    }
  }

  return reducedArr;
}

// Other solutions

// Using reduce
function dirReduc2(plan) {
  const opposite = {
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST',
  };
  return plan.reduce(function(dirs, dir) {
    if (dirs[dirs.length - 1] === opposite[dir]) dirs.pop();
    else dirs.push(dir);
    return dirs;
  }, []);
}

// Using regex
function dirReduc3(arr) {
  let str = arr.join('');
  const pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern, '');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}
