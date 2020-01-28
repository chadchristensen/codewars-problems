// https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// My solution

function domainName(url) {
  return url.replace(/https?:\/\/|www./g, '').split('.')[0];
}

// Other solutions

// Reg Ex without using split
function domainName2(url) {
  return url.replace(/.+\/\/|www.|\..+/g, '');
}
