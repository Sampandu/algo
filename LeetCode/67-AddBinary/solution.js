/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  if (a === null && b === null) return null;

  if (a === null) return b;
  if (b === null) return a;

  a = a.split('').map(e => Number(e));
  reverse(a);
  b = b.split('').map(e => Number(e));
  reverse(b);

  const large = a.length > b.length ? a : b;
  const small = a.length > b.length ? b : a;

  let res = [];
  let carry = 0;
  for (let i = 0; i < large.length; i++) {
    const sum = large[i] + (i < small.length ? small[i] : 0) + carry;
    carry = Math.floor(sum / 2);
    res[i] = sum % 2; //00
  }

  if (carry !== 0) {
    res[large.length] = carry;
  }

  reverse(res);
  return res.join('');
};

function reverse(arr) {
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}
