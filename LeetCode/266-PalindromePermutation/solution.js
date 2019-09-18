/**
 * @param s: the given string
 * @return: if a permutation of the string could form a palindrome
 */
const canPermutePalindrome = function(s) {
  // write your code here
  if (s === null) return false;

  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (s[i] in map) {
      map[s[i]]++;
    } else {
      map[s[i]] = 1;
    }
  }

  let odd = false;
  for (const letter in map) {
    if (map[letter] % 2 !== 0 && odd) {
      return false;
    } else if (map[letter] % 2 !== 0) {
      odd = true;
    }
  }

  return true;
};
