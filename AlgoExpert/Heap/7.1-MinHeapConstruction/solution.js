class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    let firstParentIdx = Math.floor((array.length - 2) / 2); //noted: -2 not -1, parent = (i - 1) / 2, i === array.length - 1
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array); //separating parameters by ',' instead of ';'
    }
    return array;
  }

  siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1; //missing let keyword
    while (childOneIdx <= endIdx) {
      let childTwoIdx = childOneIdx !== endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1) {
        idxToSwap =
          heap[childOneIdx] > heap[childTwoIdx] ? childTwoIdx : childOneIdx;
      } else {
        idxToSwap = childOneIdx;
      }
      if (heap[currentIdx] > heap[idxToSwap]) {
        [heap[currentIdx], heap[idxToSwap]] = [
          heap[idxToSwap],
          heap[currentIdx],
        ];
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        break;
      }
    }
  }

  siftUp(currentIdx, heap) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
      [this.heap[currentIdx], this.heap[parentIdx]] = [
        this.heap[parentIdx],
        this.heap[currentIdx],
      ];
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
    this.siftDown(0, this.heap.length - 1, this.heap); //missing 'this' in the third parameter and exec this step after moving the last element of the heap (line 49)
    return valueToRemove;
  }

  insert(value) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
}
