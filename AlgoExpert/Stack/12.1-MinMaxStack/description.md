Write a Min Max Stack class. The class should support pushing and popping values on and off the stack, peeking at values at the top of the stack, and getting both the minimum and the maximum values in the stack. All class methods, when considered independently, should run in constant time and with constant space.

Sample input:
-push(5)
-getMin()
-getMax()
-peek()
-push(7)
-getMin()
-getMax()
-peek()
-push(2)
-getMin()
-getMax()
-peek()
-pop()
-pop()
-getMin()
-getMax()
-peek()

Sample output:
-(push 5)
-5
-5
-5
-(push 7)
-5
-5
-7
-(push 2)
-2
-7
-2
-2
-7
-5
-5
-5
