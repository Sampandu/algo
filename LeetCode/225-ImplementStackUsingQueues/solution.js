/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue = []
};

/**
* Push element x onto stack.
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function(x) {
  this.queue.push(x)
};

/**
* Removes the element on top of the stack and returns that element.
* @return {number}
*/
MyStack.prototype.pop = function() {
  // solution1
  const length = this.queue.length
  for (let i = 0; i < length - 1; i++) {
      const temp = this.queue.shift()
      this.queue.push(temp)
  }
  return this.queue.shift()

  //solution2
  // let counter = this.queue.length
  // while(counter > 1) {
  //     this.queue.push(this.queue.shift())
  //     counter--
  // }
  // return this.queue.shift()
};

/**
* Get the top element.
* @return {number}
*/
MyStack.prototype.top = function() {
  const length = this.queue.length
  return this.queue[length - 1]
};

/**
* Returns whether the stack is empty.
* @return {boolean}
*/
MyStack.prototype.empty = function() {
  return this.queue.length === 0
};

/**
* Your MyStack object will be instantiated and called as such:
* var obj = Object.create(MyStack).createNew()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.empty()
*/
