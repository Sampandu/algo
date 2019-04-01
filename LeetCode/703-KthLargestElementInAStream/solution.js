//solution1
var KthLargest = function(k, nums) {
  this.len = k
  this.heap = nums.sort((a,b)=> a-b).slice(-k)
};

KthLargest.prototype.add = function(val) {
  if(this.heap.length < this.len) {
    this.heap.push(val)
    this.heap.sort()
    return this.heap[0]
  } else if(val > this.heap[0]) {
      this.heap.shift()
      this.heap.push(val)
      this.heap.sort((a,b)=> a-b)
  }
  return this.heap[0]
};
