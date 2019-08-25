const wordBreak = (s, wordDict) => {
  if (s === null || s.length === 0 || wordDict.length === 0) return false;

  const dict = new Set(wordDict);
  return wordDictUtil(s, 0, dict);
};

function wordDictUtil(str, i, dict, failed = new Set()) {
  if (i === str.length) {
    return true;
  }

  if (failed.has(i)) {
    return false;
  }

  for (let j = i; j < str.length; j++) {
    if (dict.has(str.slice(i, j + 1))) {
      if (wordDictUtil(str, j + 1, dict, failed)) {
        return true;
      }
    }
  }
  failed.add(i);
  return false;
}
