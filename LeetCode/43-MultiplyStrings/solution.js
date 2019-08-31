var multiply = function(num1, num2) {
  if (num1 === null || num1.length === 0 || num2 === null || num2.length === 0)
    return;
  if (num1 === '0' || num2 === '0') return '0';

  num1 = num1.split('').map(e => Number(e));
  num2 = num2.split('').map(e => Number(e));

  let larger = num1.length > num2.length ? num1 : num2;
  reverse(larger);
  let smaller = num1.length > num2.length ? num2 : num1;
  reverse(smaller);

  let result = [];
  for (let i = 0; i < smaller.length; i++) {
    const subRes = new Array(i + larger.length + 1).fill(0);
    let carry = 0;
    for (let j = 0; j < larger.length; j++) {
      const prod = smaller[i] * larger[j] + carry;
      carry = Math.floor(prod / 10);
      subRes[i + j] = prod % 10;
    }
    if (carry !== 0) {
      subRes[subRes.length - 1] = carry;
    } else {
      while (subRes[subRes.length - 1] === 0) {
        subRes.pop();
      }
    }
    result = result.length === 0 ? subRes : add(result, subRes);
  }
  return reverse(result).join('');
};

function reverse(arr) {
  let start = 0,
    end = arr.length - 1;
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
  return arr;
}

function add(num1, num2) {
  const larger = num1.length > num2.length ? num1 : num2;
  const smaller = num1.length > num2.length ? num2 : num1;

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
  return result;
}
