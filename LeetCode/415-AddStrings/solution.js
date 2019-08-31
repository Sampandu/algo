var addStrings = function(num1, num2) {
  if (num1 === null || num2 === null || num1 === '' || num2 === '') return;

  num1 = num1.split('').map(e => Number(e));
  num2 = num2.split('').map(e => Number(e));

  const larger = num1.length > num2.length ? num1 : num2;
  reverse(larger);
  const smaller = larger === num1 ? num2 : num1;
  reverse(smaller);
  let result = [];
  let carry = 0;
  for (let i = 0; i < larger.length; i++) {
    const sum = larger[i] + (i < smaller.length ? smaller[i] : 0) + carry;
    carry = Math.floor(sum / 10);
    result[i] = sum % 10;
  }

  if (carry !== 0) {
    result[larger.length] = carry;
  }

  return reverse(result).join('');
};

function reverse(array) {
  let start = 0,
    end = array.length - 1;
  while (start < end) {
    [array[start], array[end]] = [array[end], array[start]];
    start++;
    end--;
  }
  return array;
}
