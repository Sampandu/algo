//solution1
const reverseWords = function(s) {
  // write your code here
  if (s === null || s.length === 0) return '';

  let temp = '';
  let res = '';
  let i = s.length - 1;
  while (i >= 0) {
    if (s[i] !== ' ') {
      temp = s[i] + temp;
    } else if (s[i] === ' ' && temp !== '') {
      res = res + temp + ' ';
      temp = '';
    }
    i--;
  }
  res += temp;
  return res;
};

//solution2
const reverseWords = function(s) {
  // write your code here
  if (s === null || s.length === 0) return '';

  s = s.trim();

  const rev = reverseStr(s, 0, s.length - 1);

  let start = 0;
  let result = '';
  for (let i = 0; i < rev.length; i++) {
    if (rev[i + 1] === ' ') {
      result = result + ' ' + reverseStr(rev, start, i);
      start = i + 2;
    }
  }
  result = result + ' ' + reverseStr(rev, start, rev.length - 1);

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
