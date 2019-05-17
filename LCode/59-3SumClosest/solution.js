const threeSumClosest = function (numbers, target) {
  if (numbers === null || numbers.length <= 2 || target === null) {
      return null
  }

  numbers = numbers.sort((a,b) => a - b)

  let diff = Math.abs(target - numbers[0] - numbers[1] - numbers[numbers.length - 1]),
      sum = numbers[0] + numbers[1] + numbers[numbers.length - 1]
  for (let i = 0; i < numbers.length - 2; i++) {
      let subTarget = target - numbers[i]
      let left = i + 1,
          right = numbers.length - 1
      while (left < right) {
          const subDiff = Math.abs(subTarget - numbers[left] - numbers[right])

          if (numbers[left] + numbers[right] > subTarget) {
              if (diff > subDiff) {
                  diff = subDiff
                  sum = numbers[i] + numbers[left] + numbers[right]
              }
              right--
          } else {
              if (diff > subDiff) {
                  diff = subDiff
                  sum = numbers[i] + numbers[left] + numbers[right]
              }
              left++
          }
      }
  }
  return sum
}

//solution
const threeSumClosest = function (numbers, target) {
  if (numbers === null || numbers.length <= 2 || target === null) {
      return null
  }

  numbers = numbers.sort((a,b) => a - b)

  let sum = numbers[0] + numbers[1] + numbers[numbers.length - 1]
  for (let i = 0; i < numbers.length - 2; i++) {
      let left = i + 1,
          right = numbers.length - 1
      while (left < right) {
          const subSum = numbers[i] + numbers[left] + numbers[right]
          if (Math.abs(target - subSum) < Math.abs(target - sum)) {
              sum = subSum
          }

          if (subSum > target) {
              right--
          } else {
              left++
          }
      }
  }
  return sum
}
