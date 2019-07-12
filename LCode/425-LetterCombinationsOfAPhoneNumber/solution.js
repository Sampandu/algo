const letterCombinations = function(digits) {
  const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  };

  const results = [];
  if (digits === null || digits.length === 0) return results;
  if (digits.length === 1) return map[digits];

  dfs(digits, '', results, map);
  return results;
};

function dfs(digits, combination, results, map) {
  if (combination.length === digits.length) {
    results.push(combination);
    return;
  }

  for (let char of map[digits[combination.length]]) {
    combination += char;
    dfs(digits, combination, results, map);
    combination = combination.slice(0, -1);
  }
}
