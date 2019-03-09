//read the description carefully, it required the absolute difference is at most k, not equal to k.
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

//solution2, optimize. The difference of the indice between the adjacent elements is the least

const containsNearbyDuplicate = (nums, k) => {
  if (nums.length <=1) return false

  const map = {}
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = map[nums[i]] || []
    map[nums[i]].push(i)
  }

  for (let key in map) {
    for (let j = 0; j < map[key].length; j++) {
      if (map[key][j+1] - map[key][j] <= k) return true
    }
  }

  return false
}
