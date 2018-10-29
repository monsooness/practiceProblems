//Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.

var searchBST = function(root, val) {
  if (root === null) { return []}
  else if(root.val === val) {
    return root
  } else if (root.val > val) {
    return searchBST(root.left, val)
  } else {
    return searchBST(root.right, val)
  }
};