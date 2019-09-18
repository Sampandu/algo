var longestPalindrome = function(s) {
  if (s === null || s === '') return '';

  let longest = 0;
  let len;
  let start;
  for (let i = 0; i < s.length; i++) {
    //odd length
    len = findLongest(s, i, i);
    if (len > longest) {
      longest = len;
      start = i - Math.floor(len / 2);
    }

    //even length
    len = findLongest(s, i, i + 1);
    if (len > longest) {
      longest = len;
      start = i - Math.floor(len / 2) + 1;
    }
  }
  return s.slice(start, start + longest);
};

function findLongest(s, left, right) {
  let len = 0;
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) break;
    len = left === right ? 1 : 2;
    left--;
    right++;
  }
  return len;
}
