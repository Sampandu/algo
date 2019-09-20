var lengthOfLongestSubstring = function(s) {
  if (s === null || s.length === 0) return 0;

  if (s === ' ') return 1;

  let start = 0,
    end = 0,
    maxLen = 1;
  const map = {};
  map[s[0]] = 0;
  while (end < s.length - 1) {
    end++;
    if (s[end] in map && map[s[end]] >= start) {
      //map[s[end]] >= start, not >
      start = map[s[end]] + 1;
    }
    map[s[end]] = end;

    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};
