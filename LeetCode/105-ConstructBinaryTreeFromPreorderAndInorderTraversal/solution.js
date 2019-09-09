/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  return construct(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
};

function construct(preorder, preStart, preEnd, inorder, inStart, inEnd) {
  if (preStart > preEnd || inStart > inEnd) {
    return null;
  }

  const rootValue = preorder[preStart];
  const root = new TreeNode(rootValue);

  let k = -1;
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === k) {
      k = i;
      break;
    }
  }

  if (k === -1) {
    return null;
  }

  root.left = construct(
    preorder,
    preStart + 1,
    preStart + (k - inStart),
    inorder,
    inStart,
    k - 1
  ); //preStart + (k - inStart)
  root.right = construct(
    preorder,
    preStart + 1 + (k - inStart),
    preEnd,
    inorder,
    k + 1,
    inEnd
  ); //preStart + 1 + (k - inStart)

  return root;
}
