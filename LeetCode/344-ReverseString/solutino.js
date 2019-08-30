//solution1
var reverseString = function(s) {
  let start = 0;
  let end = s.length - 1;
  while (start < end) {
    [s[start], s[end]] = [s[end], s[start]];
    start++;
    end--;
  }
  return s;
};

//solution2
var reverseString = function(s) {
  return s
    .split('')
    .reverse()
    .join('');
};
