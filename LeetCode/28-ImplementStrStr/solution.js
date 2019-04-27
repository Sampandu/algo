//solution1, time complexity O(n^2)
var strStr = function(haystack, needle) {
  if (needle === '') {
      return 0
  }

  let start = -1

  for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === needle[0]) {
          let j = 1
          for (; j < needle.length; j++) {
              if (needle[j] !== haystack[i + j]) {
                  break
              }
          }
          if (j === needle.length) {
              start = i
              break
          }
      }
  }
  return start
};

//optimized version
var strStr = function(haystack, needle) {
    if (needle === '') {
        return 0
    }

    if (haystack === '') {
        return -1
    }

    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let j
        for (j = 0; j < needle.length; j++) {
            if (needle[j] !== haystack[i + j]) {
                break
            }
        }
        if (j === needle.length) {
            return i
        }
    }
    return -1
};
