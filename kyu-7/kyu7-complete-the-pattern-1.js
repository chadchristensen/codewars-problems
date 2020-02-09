// https://www.codewars.com/kata/5572f7c346eb58ae9c000047/train/javascript

// pattern(5):
// 1
// 22
// 333
// 4444
// 55555

// My solution
function pattern(n){
  if ( n < 1) return '';
  
  return new Array(n)
              .fill(null)
              .map((x, i) => {
                let output = ''
                for (let j = 0; j <= i; j += 1) {
                  output += (i + 1);
                }
                return output
              })
              .join('\n')
}