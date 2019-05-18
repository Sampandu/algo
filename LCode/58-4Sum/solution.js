//solution, time O(n^2)
const fourSum = (numbers, target) => {
  if (numbers === null || numbers.length <= 3 || target === null) {
      return []
  }

  numbers = numbers.sort((a,b) => a - b)

  let results = []
  for (let i = 0; i <= numbers.length - 4; i++) {
      if (i !== 0 && numbers[i] === numbers[i - 1]) {
          continue
      }
      for (let j = i + 1; j <= numbers.length - 3; j++) {
          if (j !== i + 1 && numbers[j] === numbers[j - 1]) {
              continue
          }
          let left = j + 1,
              right = numbers.length - 1
          while (left < right) {
              const sum = numbers[i] + numbers[j] + numbers[left] + numbers[right]
              if (sum > target) {
                  right--
              } else if (sum < target) {
                  left++
              } else {
                  results.push([numbers[i], numbers[j], numbers[left], numbers[right]])
                  left++
                  right--
                  while (left < right && numbers[left] === numbers[left - 1]) {
                      left++
                  }
                  while (left < right && numbers[right] === numbers[right + 1]) {
                      right--
                  }
              }
          }
      }
  }
  return results
}
