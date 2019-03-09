//solution1, time complexity O(n^3)
const containsNearbyDuplicate = (nums, k) => {
  if (nums.length <= 1) {
      return false
  }
  const map = {}
  for (let i = 0; i < nums.length; i++) {
      if (map[nums[i]]) {
          map[nums[i]].push(i)
      } else {
          map[nums[i]] = [i]
      }
  }

  const numKeys = Object.keys(map)
  for (let j = 0; j < numKeys.length; j++) {
      const cur = numKeys[j]
      const idxArray = map[cur]
      const len = idxArray.length
      if (len > 1) {
          for (let l = 0; l < len; l++) {
              for (let m = l + 1; m < len; m++) {
                  if (Math.abs(idxArray[l] - idxArray[m]) <=k) {
                      return true
                  }
              }
          }
      }
  }
  return false
}
