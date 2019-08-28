var maxSlidingWindow = function(nums, k) {
  if (nums === null || nums.length === 0 || k === 0) return [];

  const results = [];
  const queue = [];
  const maxQ = [];

  for (let i = 0; i < nums.length; i++) {
    if (queue.length < k) {
      updatedSlidingWindow(nums, i, queue, maxQ);
      if (queue.length === k) results.push(maxQ[0]);
      continue;
    }

    const removedItem = queue.shift();
    if (removedItem === maxQ[0]) maxQ.shift();
    updatedSlidingWindow(nums, i, queue, maxQ);
    results.push(maxQ[0]);
  }
  return results;
};

function updatedSlidingWindow(nums, i, queue, maxQ) {
  queue.push(nums[i]);
  while (maxQ.length !== 0 && nums[i] > maxQ[maxQ.length - 1]) {
    maxQ.pop();
  }
  maxQ.push(nums[i]);
}
