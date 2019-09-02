/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
  this.median = null;
  this.lowers = new Heap(MAX_HEAP_FUNC, []);
  this.greaters = new Heap(MIN_HEAP_FUNC, []);
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
  if (!this.lowers.length || num < this.lowers.peek()) {
    this.lowers.insert(num);
  } else {
    this.greaters.insert(num);
  }
  this.rebalanceHeaps();
  this.updateMedian();
};

MedianFinder.prototype.rebalanceHeaps = function() {
  if (this.lowers.length - this.greaters.length === 2) {
    this.greaters.insert(this.lowers.remove());
  } else if (this.greaters.length - this.lowers.length === 2) {
    this.lowers.insert(this.greaters.remove());
  }
};

MedianFinder.prototype.updateMedian = function() {
  if (this.lowers.length > this.greaters.length) {
    this.median = this.lowers.peek();
  } else if (this.lowers.length < this.greaters.length) {
    this.median = this.greaters.peek();
  } else {
    const avg = (this.lowers.peek() + this.greaters.peek()) / 2;
    this.median = avg.toFixed(2);
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
  return this.median;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class Heap {
  constructor(comparisonFunc, array) {
    this.comparisonFunc = comparisonFunc;
    this.heap = this.buildHeap(array);
    this.length = this.heap.length;
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 1 - 1) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1) {
        idxToSwap = this.comparisonFunc(heap[childTwoIdx], heap[childOneIdx])
          ? childTwoIdx
          : childOneIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (this.comparisonFunc(heap[idxToSwap], heap[currentIdx])) {
        [heap[currentIdx], heap[idxToSwap]] = [
          heap[idxToSwap],
          heap[currentIdx],
        ];
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (
      currentIdx > 0 &&
      this.comparisonFunc(heap[currentIdx], heap[parentIdx])
    ) {
      [heap[currentIdx], heap[parentIdx]] = [heap[parentIdx], heap[currentIdx]];
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    this.length--;
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.length++;
    this.siftUp(this.heap.length - 1, this.heap);
  }
}

function MAX_HEAP_FUNC(a, b) {
  return a > b;
}

function MIN_HEAP_FUNC(a, b) {
  return a < b;
}
