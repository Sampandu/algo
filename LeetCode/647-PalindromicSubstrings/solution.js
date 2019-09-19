/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  if (s === null || s.length === 0) return 0;

  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    //odd
    counter += findPalindrome(s, i, i);
    //even
    counter += findPalindrome(s, i, i + 1);
  }
  return counter;
};

function findPalindrome(s, left, right) {
  let counter = 0;
  while (left >= 0 && right < s.length) {
    if (s[left] === s[right]) {
      counter++;
      left--;
      right++;
    } else {
      break;
    }
  }
  return counter;
}
