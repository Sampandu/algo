//solution 1, time: O(n^2), space: O(1)
function longestSubstringWithoutDuplication(string) {
  if (string === null || string.length === 0) return null;

  let longest = 0;
  let longestSubStrWithoutDuplicate = '';
  for (let i = 0; i < string.length; i++) {
    for (let j = i; j < string.length; j++) {
      subStr = string.slice(i, j + 1);
      if (isDuplicated(subStr)) continue;
      if (subStr.length > longest) {
        longest = subStr.length;
        longestSubStrWithoutDuplicate = subStr;
      }
    }
  }
  return longestSubStrWithoutDuplicate;
}

function isDuplicated(str) {
  const len = new Set(str.split('')).size;
  return len !== str.length;
}

//solution2, time O(n^2)
function longestSubstringWithoutDuplication(string) {
  if (string === null || string.length === 0) return null;

  let longest = 0;
  let start = 0;
  for (let i = 0; i < string.length; i++) {
    const len = findSubStringWithoutDuplicate(string, i);
    if (len > longest) {
      longest = len;
      start = i;
    }
  }
  return string.slice(start, start + longest);
}

function findSubStringWithoutDuplicate(string, start) {
  const set = new Set();
  let len = 0;
  while (start < string.length) {
    const char = string[start];
    if (set.has(char)) break;
    set.add(char);
    len++;
    start++;
  }
  return len;
}

//solution3, time O(n)
function longestSubstringWithoutDuplication(string) {
  // Write your code here.
  if (string === null || string.length === 0) return null;

  const lastSeen = {};
  let longest = '';
  let startIdx;
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char in lastSeen) {
      startIdx = Math.max(startIdx, lastSeen[char] + 1);
    }
    if (longest.length < i - startIdx + 1) {
      longest = string.slice(startIdx, i + 1);
    }
    lastSeen[char] = i;
  }
  return longest;
}
