Write a function that takes in a binary tree and traverses it using the in-order traversal technique but without using recursion. As the tree is being traversed, a callback functino passed in as an argument to the main function should be called on each node. Each Binary Tree node has a value stored in a property called "value", a parent node in a property called "parent", and two children nodes stored in proprtties called "left" and "right", respectively. Children nodes can either be Binary Tree nodes themselves or the None (null) value

sample input:

       1
      / \
     2   3
    /   / \

4 6 7
\
 9

sample output:
callback(4)
callback(9)
callback(2)
callback(1)
callback(6)
callback(3)
callback(7)
