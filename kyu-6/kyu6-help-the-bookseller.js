// https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/javascript

// A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more capitals letters. The 1st letter of a code is the capital letter of the book category. In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

// My solution

function stockList(listOfArt, listOfCat) {
  if (listOfArt.length === 0 || listOfCat.length === 0) return '';

  const stockTotal = listOfArt.reduce((acc, curr) => {
    const itemArray = curr.split(' ');
    const [code, numInStock] = itemArray;

    if (acc[code[0]]) {
      acc[code[0]] += parseInt(numInStock);
    } else {
      acc[code[0]] = parseInt(numInStock);
    }

    return acc;
  }, {});

  return listOfCat
    .map(cat =>
      typeof stockTotal[cat] === 'undefined'
        ? `(${cat} : 0)`
        : `(${cat} : ${stockTotal[cat]})`
    )
    .join(' - ');
}

// Other solutions
function stockList2(listOfArt, listOfCat) {
  if (!listOfArt.length || !listOfCat.length) return '';
  return listOfCat
    .map(w => {
      const s = listOfArt.reduce(
        (a, b) => a + (b.charAt(0) === w ? +b.split(' ')[1] : 0),
        0
      );
      return `(${w} : ${s})`;
    })
    .join(' - ');
}
