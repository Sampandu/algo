var letterCasePermutation = function(S) {
  if (S === null || S.length === 0) return [];

  const results = [];
  dfs('', 0);

  function dfs(str, i) {
    if (str.length === S.length) {
      results.push(str);
      return;
    }

    if (S.charAt(i) >= '0' && S.charAt(i) <= '9') {
      dfs(str + S.charAt(i), i + 1);
    } else {
      dfs(str + S.charAt(i).toLowerCase(), i + 1);
      dfs(str + S.charAt(i).toUpperCase(), i + 1);
    }
  }

  return results;
};
