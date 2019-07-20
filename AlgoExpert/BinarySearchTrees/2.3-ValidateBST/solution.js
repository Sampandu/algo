function validateBst(tree) {
  return validate(tree, null, null);
}

function validate(node, min, max) {
  if (max !== null && node.value >= max) return false; //important!!! we assume the duplicated value is placed to the right subtree,
  if (min !== null && node.value < min) return false;

  if (node.left && !validate(node.left, min, node.value)) return false;
  if (node.right && !validate(node.right, node.value, max)) return false;

  return true;
}
