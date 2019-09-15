/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  if (s === null || s.length === 0) return '';

  s = s.split('');
  for (let i = 0; i < s.length; i += 2 * k) {
    reverse(s, i, Math.min(i + k - 1, s.length - 1)); //
  }

  return s.join('');
};

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
