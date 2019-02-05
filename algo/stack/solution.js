//solution1

class Stack {
  constructor() {
    this.array = []
  }

  push (data) {
    this.array.unshift(data)  // bigO is O(n)
  }

  pop () {
    return this.array.shift()   //bigO is O(n)
  }

  peek () {
    return this.array[0]
  }
}

//solution2

class Stack {
  constructor() {
    this.data = []
  }

  push (data) {
    this.array.push(data)
  }

  pop () {
    return this.array.pop()
  }

  peek () {
    return this.array[this.array.length - 1]
  }
}
