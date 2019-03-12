// solution1, brute force, time complexity O(n), space complexity O(n)
const maxChar = string => {
  const map = {}
  for (let char of string) {
    map[char] = map[char] ? map[char] + 1 : 1
  }

  let max = 0
  let mChar = ''

  for (let key in map) {
    if (map[key] > max) {
      mChar = key
      max = map[key]
    }
  }

  return mChar
}

