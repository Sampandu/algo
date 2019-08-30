var reverseWords = function(s) {
  if (s === null || s.length === 0) return '';

  s = s.trim();

  const rev = reverseStr(s, 0, s.length - 1);

  let start = 0;
  let result = '';
  for (let i = 0; i < rev.length; i++) {
    if (rev[i] === ' ') continue;

    if (i > 0 && rev[i - 1] === ' ' && rev[i] !== ' ') {
      start = i;
    }

    if (rev[i + 1] === ' ') {
      result = result + ' ' + reverseStr(rev, start, i);
    }

    if (i === rev.length - 1) {
      result = result + ' ' + reverseStr(rev, start, i);
    }
  }

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
