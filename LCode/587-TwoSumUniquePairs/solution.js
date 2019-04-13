const twoSum6 = function (nums, target) {
  if(nums.length === 0) return 0

  nums.sort((a,b) => a-b)
  let map = new Set()
  let left = 0,
      right = nums.length - 1,
      counter = 0
  while(left < right) {
      const lNum = nums[left],
            rNum = nums[right]
      if(lNum + rNum === target) {
          if(!map.has(lNum) && !map.has(rNum)) {
              counter++
              map.add(lNum)
              map.add(rNum)
              left++
              right--
          } else {
              left++
              right--
          }
      } else if(lNum + rNum < target) {
          left++
      } else {
          right--
      }
  }

  return counter
}
