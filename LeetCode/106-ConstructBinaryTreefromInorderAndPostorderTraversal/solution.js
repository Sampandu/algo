/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  return construct(
    postorder,
    0,
    postorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
};

function construct(postorder, poStart, poEnd, inorder, inStart, inEnd) {
  if (poStart > poEnd || inStart > inEnd) return null;

  const rootValue = postorder[poEnd];
  const root = new TreeNode(rootValue);

  let k = -1;
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === rootValue) {
      k = i;
      break;
    }
  }

  if (k === -1) return null;

  root.left = construct(
    postorder,
    poStart,
    poStart + (k - inStart) - 1,
    inorder,
    inStart,
    k - 1
  );
  root.right = construct(
    postorder,
    poStart + (k - inStart),
    poEnd - 1,
    inorder,
    k + 1,
    inEnd
  );

  return root;
}
