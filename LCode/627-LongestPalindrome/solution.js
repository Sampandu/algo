const longestPalindrome = function (s) {
  if (s === null || s.length === 0) {
      return 0
  }

  const map = {}
  let count = 0,
      odd = 0

  s.split('').forEach(e => {
      if (e in map) {
          map[e]++
      } else {
          map[e] = 1
      }
  })

  for (let key in map) {
      if (map[key] % 2 === 0) {
          count += map[key]
      } else {
          count += map[key] - 1
          odd = 1
      }
  }

  return odd === 1 ? count + 1 : count
}
