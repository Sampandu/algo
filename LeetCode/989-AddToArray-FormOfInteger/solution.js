var addToArrayForm = function(A, K) {
  if (A === null || A.length === 0 || K === null) return;

  const arrayK = K.toString()
    .split('')
    .map(e => Number(e));

  const larger = A.length > arrayK.length ? A : arrayK;
  reverse(larger);
  const smaller = A.length > arrayK.length ? arrayK : A;
  reverse(smaller);
  let result = [];
  let carry = 0;
  for (let i = 0; i <= larger.length - 1; i++) {
    const sum = larger[i] + (i < smaller.length ? smaller[i] : 0) + carry; // when i is beyond the length of smaller, set it 0
    carry = Math.floor(sum / 10); //round down the carry
    result[i] = sum % 10;
  }

  if (carry !== 0) {
    result[larger.length] = carry;
  }

  return reverse(result);
};

function reverse(array) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
  return array;
}
