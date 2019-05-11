//solution1, time O(n), space O(n)
const twoSum = (numbers, target) => {
      if (numbers === null || numbers.length === 0) {
          return -1
      }

      const map = {}
      for (let i = 0; i < numbers.length; i++) {
          const diff = target - numbers[i]
          if (diff in map) {
              return [map[diff], i]
          }
          map[numbers[i]] = i
      }
      return -1
  }

//solution2, time O(nlogn), space O(n)
const twoSum = (numbers, target) => {
  if (numbers === null || numbers.length === 0) {
      return null
  }

  let pair = []
  for (let i = 0; i <= numbers.length - 1; i++) {
      pair.push([numbers[i], i])
  }

  pair = pair.sort((a,b) => a[0] - b[0])

  let start = 0,
      end = pair.length - 1
  while (start < end) {
      if (pair[start][0] + pair[end][0] === target) {
          return [Math.min(pair[start][1], pair[end][1]), Math.max(pair[start][1], pair[end][1])]
      } else if (pair[start][0] + pair[end][0] < target) {
          start++
      } else {
          end--
      }
  }
  return null
}
