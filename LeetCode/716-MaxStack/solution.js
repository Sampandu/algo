class Maxstack {
  constructor() {
    this.stack = [];
    this.max = [];
  }

  push(x) {
    this.stack.push(x);
    this.max.push(
      this.max[this.max.length - 1] > x ? this.max[this.max.length - 1] : x
    );
  }

  pop() {
    if (this.top !== null) {
      this.max.pop();
      return this.stack.pop();
    }
    return;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.max[this.max.length - 1];
  }
}
