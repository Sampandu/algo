const Stack = require('./stack');

//solution
class Queue {
  constructor() {
    this.store = new Stack()
    this.buffer = new Stack()
  }

  add(value) {
    this.store.push(value)
    return this
  }

  remove() {
    while(this.store.peek()) {
      this.buffer.push(this.store.pop())
    }
    const removed = this.buffer.pop()

    while(this.buffer.peek()) {
      this.store.push(this.buffer.pop())
    }
    return removed
  }

  peek() {
    while(this.store.peek()) {
      this.buffer.push(this.store.pop())
    }

    const iterm = this.buffer.peek()

    while(this.buffer.peek()) {
      this.store.push(this.buffer.pop())
    }

    return iterm
  }
}
