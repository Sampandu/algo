//solution1, time O(nLogn), space O(n)
const twoSum6 = function (nums, target) {
  if(nums === null || nums.length === 0) return 0

  //const newNums = [...new Set(...nums)].sort()
  //not remove duplicate numbers, case: [11,11] target = 22
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

//solution2, time O(nlongn), space O(1)
const twoSum6 = (nums, target) => {
    if(nums === null || nums.length === 0) return 0

    // nums = nums.sort()
    //the above method can not sort correctly
    nums = nums.sort((a,b) => a - b)

    let left = 0,
        right = nums.length - 1,
        counter = 0
    while (left < right) {
        if (nums[left] + nums[right] === target) {
            counter++
            left++
            right--
            while (left < right && nums[right] === nums[right + 1]) {
                right--
            }
            while (left < right && nums[left] === nums[left - 1]) {
                left++
            }
        } else if (nums[left] + nums[right] < target) {
            left++
        } else {
            right--
        }
    }
    return counter
}
