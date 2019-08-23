//assume the type of the input digits is string other than number
var letterCombinations = function(digits) {
  if (digits === null || digits.length === 0) return [];

  const phone = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  const result = [];
  findCombine(digits, 0, [], phone, result);
  return result;
};

function findCombine(digits, start, temp, phone, result) {
  if (temp.length === digits.length || start >= digits.length) {
    result.push(temp.join(''));
    return;
  }

  if (!phone[digits[start]]) {
    //if the input is 0 or 1, there are not numbers, so we skip it.
    findCombine(digits, start + 1, temp, phone, result);
  } else {
    letters = phone[digits[start]];
    for (let char of letters) {
      temp.push(char);
      findCombine(digits, start + 1, temp, phone, result);
      temp.pop();
    }
  }
}
