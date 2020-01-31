// https://www.codewars.com/kata/51f2b4448cadf20ed0000386/train/javascript

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// My solution
function removeUrlAnchor(url) {
  return url.replace(/#\w+/, '');
}

// Other solutions
const removeUrlAnchor = url => url.replace(/#.+$/,'');