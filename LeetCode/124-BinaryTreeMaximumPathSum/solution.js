const maxPathSum = function(tree) {
  const [_, maxSum] = findMaxSum(tree);
  return maxSum;
};

function findMaxSum(tree) {
  if (tree === null) return [-Infinity, -Infinity];

  const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
  const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);

  const { val } = tree; //clarify the property name, in some case, it is called 'value'
  const maxSumAsBranch = Math.max(
    leftMaxSumAsBranch + val,
    rightMaxSumAsBranch + val,
    val
  );
  const maxSumAsRootNode = Math.max(
    leftMaxSumAsBranch + val + rightMaxSumAsBranch,
    maxSumAsBranch
  );
  const maxSubPathSum = Math.max(
    leftMaxPathSum,
    rightMaxPathSum,
    maxSumAsRootNode
  );

  return [maxSumAsBranch, maxSubPathSum];
}
