/**
 * @param {string} s
 * @return {string}
 */

// letter includes upper case and lower case letter
//edge case '.,'
var reverseVowels = function(s) {
  if (s === null || s.length === 0) return '';

  s = s.split('');
  let start = 0,
    end = s.length - 1;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  while (start < end) {
    while (start < end && !vowels.includes(s[start])) {
      start++;
    }

    while (start < end && !vowels.includes(s[end])) {
      end--;
    }

    if (start < end) {
      [s[start], s[end]] = [s[end], s[start]];
      start++;
      end--;
    }
  }
  return s.join('');
};
