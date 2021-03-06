//solution1
var reverseWords = function(s) {
  if (s === null || s.length === 0) return '';

  s = s.trim();

  let start = 0;
  let result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] === ' ') {
      result = result + ' ' + reverseStr(s, start, i);
      start = i + 2;
    }
  }
  result = result + ' ' + reverseStr(s, start, s.length - 1);

  return result.trim();
};

function reverseStr(s, start, end) {
  if (s === null) return;

  let result = '';
  for (let i = end; i >= start; i--) {
    result += s[i];
  }
  return result;
}

//solution2
var reverseWords = function(s) {
  if (s === null || s.length === 0) return '';

  let temp = '';
  let res = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      temp = s[i] + temp;
    } else if (s[i] === ' ' && temp !== '') {
      res = res + temp + ' ';
      temp = '';
    } else if (s[i] === ' ') {
      res += ' ';
    }
  }
  res += temp;
  return res;
};
