// https://www.codewars.com/kata/5e2596a9ad937f002e510435/train/javascript

// My solution
function infected(s) {
  // Find total oceans
  // match returns null if no 'X' exists so first check if X exists in s
  const totalOceans = s.indexOf('X') > -1 ? s.match(/X/g).length : 0;

  // If the input is all oceans or no countries are infected, return 0%
  if (totalOceans === s.length || s.indexOf('1') === -1) return 0;

  // If there are no oceans and at least one country is infected, return 100%
  if (totalOceans === 0 && s.indexOf('1') > -1) return 100;

  // Find total population
  const totalPopulation = s.length - totalOceans;

  const totalInfected = s
    .split('X')
    .map(region => {
      if (region.indexOf('1') === -1) {
        return region;
      }
      return region
        .split('')
        .map(() => 1)
        .join('');
    })
    .join('')
    .match(/1/g).length;

  // Return percentage
  return 100 * (totalInfected / totalPopulation);
}

// Other solutions
function infected(s) {

  if(!(s.includes('0') && s.includes('1'))) return 0;
  
  let str = s.split('X').map(el => el.includes('1') ? el.replace(/0/g, '1') : el).join('');
  
  let total = str.length;
  let infect = str.match(/1/g).length;
  
  return 100 * infect / total;
}