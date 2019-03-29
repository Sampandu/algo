//solution
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.stock = []
  this.buffer = []
};

/**
* Push element x to the back of queue.
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  this.stock.push(x)
  return this
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  while(this.stock.length) {
      this.buffer.push(this.stock.pop())
  }
  const element = this.buffer.pop()

  while(this.buffer.length) {
      this.stock.push(this.buffer.pop())
  }

  return element
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  while(this.stock.length) {
      this.buffer.push(this.stock.pop())
  }
  const element = this.buffer[this.buffer.length - 1]

  while(this.buffer.length) {
      this.stock.push(this.buffer.pop())
  }

  return element
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  return this.stock.length ? false : true
};

/**
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/
