function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = getDescendantDepth(topAncestor, descendantOne);
  const depthTwo = getDescendantDepth(topAncestor, descendantTwo);

  if (depthOne > depthTwo) {
    return backtrackAncestrialTree(
      descendantOne,
      descendantTwo,
      depthOne - depthTwo
    );
  } else {
    return backtrackAncestrialTree(
      descendantTwo,
      descendantOne,
      depthTwo - depthOne
    );
  }
}

function getDescendantDepth(topAncestor, descendant) {
  let depth = 0;
  while (descendant !== topAncestor) {
    depth++;
    descendant = descendant.ancestor;
  }
  return depth;
}

function backtrackAncestrialTree(lowerDescendant, higherDescendant, diff) {
  while (diff > 0) {
    lowerDescendant = lowerDescendant.ancestor;
    diff--;
  }
  while (lowerDescendant !== higherDescendant) {
    lowerDescendant = lowerDescendant.ancestor;
    higherDescendant = higherDescendant.ancestor;
  }
  return lowerDescendant;
}
