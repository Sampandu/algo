class Minstack {
  constructor() {
    this.stack = [];
    this.min = [];
  }

  push(x) {
    this.stack.push(x);
    this.min.push(
      this.min[this.min.length - 1] < x ? this.min[this.min.length - 1] : x
    );
  }

  pop() {
    if (this.top !== null) {
      this.min.pop();
      return this.stack.pop();
    }
    return;
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.min[this.min.length - 1];
  }
}
