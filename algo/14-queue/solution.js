class Queue {
  constructor() {
    this.array = []
  }

  add (data) {      //bigO is O(1)
    this.array.push(data)
  }

  remove () {       //bigO is O(n)
    return this.array.shift()
  }
}
