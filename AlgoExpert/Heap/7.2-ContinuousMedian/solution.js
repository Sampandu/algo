class ContinuousMedianHandler {
  constructor() {
    // Write your code here.
    this.median = null;
    this.lowers = new Heap(MAX_HEAP_FUNC, []); //new keyword
    this.greaters = new Heap(MIN_HEAP_FUNC, []); //new keyword
  }

  insert(number) {
    // Write your code here.
    if (!this.lowers.length || number < this.lowers.peek()) {
      this.lowers.insert(number);
    } else {
      this.greaters.insert(number);
    }
    this.rebalnaceHeaps();
    this.updateMedian();
  }

  rebalnaceHeaps() {
    if (this.lowers.length - this.greaters.length === 2) {
      this.greaters.insert(this.lowers.remove());
    } else if (this.greaters.length - this.lowers.length === 2) {
      //setting a condition
      this.lowers.insert(this.greaters.remove());
    }
  }

  updateMedian() {
    if (this.lowers.length > this.greaters.length) {
      this.median = this.lowers.peek();
    } else if (this.lowers.length < this.greaters.length) {
      this.median = this.greaters.peek();
    } else {
      this.median = (this.greaters.peek() + this.lowers.peek()) / 2;
    }
  }

  getMedian() {
    return this.median;
  }
}

class Heap {
  constructor(comparisonFunc, array) {
    this.comparisonFunc = comparisonFunc; //this line should be above the line 46, otherwise there is a TypeError in line 70 when executing the function of buildHeap
    this.heap = this.buildHeap(array);
    this.length = this.heap.length;
  }

  buildHeap(array) {
    let firstParentIdx = Math.floor((array.length - 2) / 2); //missing Math.floor()
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      let childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1; // -1
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
    while (currentIdx > 0) {
      if (this.comparisonFunc(heap[currentIdx], heap[parentIdx])) {
        //
        [heap[currentIdx], heap[parentIdx]] = [
          heap[parentIdx],
          heap[currentIdx],
        ];
        currentIdx = parentIdx;
        parentIdx = Math.floor((currentIdx - 1) / 2);
      } else {
        return;
      }
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
    const removedValue = this.heap.pop();
    this.length--;
    this.siftDown(0, this.heap.length - 1, this.heap); //miss passing this.heap to this siftDown
    return removedValue;
  }

  insert(number) {
    this.heap.push(number);
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
