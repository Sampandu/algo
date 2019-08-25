Design a stack that supports push, pop, top, and retrieving the maximum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMax() -- Retrieve the maximum element in the stack.

Example:

MaxStack maxStack = new MaxStack();
maxStack.push(-2);
maxStack.push(0);
maxStack.push(-3);
maxStack.getMax(); --> Returns 0.
maxStack.pop();
maxStack.top(); --> Returns 0.
maxStack.getMax(); --> Returns 0.
