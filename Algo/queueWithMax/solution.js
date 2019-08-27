class QueueWithMax {
  constructor() {
    this.main = [];
    this.max = [];
  }

  enqueue(item) {
    this.main.push(item);
    while (this.max.length !== 0 && this.max[this.max.length - 1] < item) {
      this.max.pop();
    }
    this.max.push(item);
  }

  dequeue() {
    if (this.main.length === 0) {
      return;
    }

    const removedItem = this.main.shift();
    if (removedItem === this.max[0]) {
      this.max.shift();
    }
  }

  findMax() {
    if (this.main.length === 0) {
      return;
    }
    return this.max[0];
  }
}
