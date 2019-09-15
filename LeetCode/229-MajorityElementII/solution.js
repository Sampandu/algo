//solution1:
var majorityElement = function(nums) {
  if (nums === null || nums.length === 0) return [];

  const map = {};
  const results = [];
  const count = Math.floor(nums.length / 3);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }

    if (map[nums[i]] > count) {
      !results.includes(nums[i]) && results.push(nums[i]);
    }
  }
  return results;
};

//solution2: generic solution for n/k
var majorityElement = function(nums) {
  if (nums === null || nums.length === 0) return [];

  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]]++;
    } else {
      map[nums[i]] = 1;
    }

    if (Object.keys(map) === 3) {
      for (const key in map) {
        if (map[key] === 1) {
          delete map[key];
        } else {
          map[key]--;
        }
      }
    }
  }

  for (const key in map) {
    map[key] = 0;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in map) {
      map[nums[i]]++;
    }
  }

  const result = [];
  const n = nums.length;
  for (const key in map) {
    map[key] > n / 3 && result.push(key);
  }

  return result;
};
