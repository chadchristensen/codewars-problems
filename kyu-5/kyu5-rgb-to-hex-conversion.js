// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

// The rgb() method is incomplete. Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned. The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.

// My solution

function rgb(r, g, b) {
  return [r, g, b]
    .map(color => {
      let colorInRange;

      if (color > 255) {
        colorInRange = 255;
      } else if (color < 0) {
        colorInRange = 0;
      } else {
        colorInRange = color;
      }

      const hex = colorInRange.toString(16).toUpperCase();

      return hex.length === 1 ? `0${hex}` : hex;
    })
    .join('');
}

// Other solutions

// Setting up a toHex function
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

// Using Min / Max
function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}
