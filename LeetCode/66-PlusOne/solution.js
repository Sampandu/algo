/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits === null || digits.length === 0) return [];

  reverse(digits);
  let result = [];
  let carry = 0;
  for (let i = 0; i < digits.length; i++) {
    const sum = i === 0 ? digits[0] + 1 : digits[i] + carry;
    carry = Math.floor(sum / 10);
    result[i] = sum % 10;
  }

  if (carry !== 0) {
    result.push(carry);
  }
  reverse(result);
  return result;
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
