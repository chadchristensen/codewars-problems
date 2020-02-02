// https://www.codewars.com/kata/563fbac924106b8bf7000046/train/javascript

// My solution
function generateBC(url, separator) {
  const urlArray = url.replace(/\w+:\/\/|\/$/, '').split('/');
  const bcArray = urlArray
    .filter(item => /^index/.test(item) === false)
    .map((item, i, arr) => {
      const uppercaseItem = item.toUpperCase();
      if (i === 0) {
        return arr.length === 1
          ? `<span class="active">HOME</span>`
          : `<a href="/">HOME</a>`;
      }
      if (i === arr.length - 1) {
        return `<span class="active">${formatLinkText(uppercaseItem)}</span>`;
      }
      return `<a href="/${buildHref(arr, i)}/">${formatLinkText(
        uppercaseItem
      )}</a>`;
    });

  return bcArray.join(separator);
}

function buildHref(arr, idx) {
  return arr.slice(1, idx + 1).join('/');
}

function formatLinkText(str) {
  const newStr = str.replace(/(\..+|\?.+|#.+)$/, '');

  return newStr.length > 30 ? acronymize(newStr) : newStr.replace(/-/g, ' ');
}

function acronymize(path) {
  const wordsToIgnore = [
    'the',
    'of',
    'in',
    'from',
    'by',
    'with',
    'and',
    'or',
    'for',
    'to',
    'at',
    'a',
  ];
  return path
    .split('-')
    .filter(str => wordsToIgnore.indexOf(str.toLowerCase()) === -1)
    .map(str => str[0])
    .join('');
}

// Other solutions
function generateBC(url, separator) {
  var arr = url.replace(/((\/index)?\.(html?|(ph|as)p))|(\?.+|#.+|https?:\/\/|\/$)/g, '').split('/'), link='';
  return arr.map(function(v, i, a) {
    if(a.length === 1) {
      return '<span class="active">HOME</span>'
    } else if(i === a.length -1) {
      return '<span class="active">'+ acronymize(v) +'</span>';   
    } else if(i===0) {
      return '<a href="/">HOME</a>';      
    } else {
      link = link ? link + '/' + v : v; 
      return '<a href="/'+ link +'/">'+ acronymize(v) +'</a>';
    }
  }).join(separator);
}

function acronymize(str) {
  var removeList = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"],
      re = new RegExp("^(" + removeList.join('|') + ")$"), newStr = '';
  if(str.length > 30) {
    str.split('-').forEach(v => !re.test(v) ? newStr += v[0] : undefined);
    return newStr.toUpperCase();
  } else {
    return str.replace(/-/g, ' ').toUpperCase();;
  }
}