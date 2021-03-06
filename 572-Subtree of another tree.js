// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.
//
// Example 1:
// Given tree s:
//
//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.
// Example 2:
// Given tree s:
//
//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.

// This problem can be tricky. It involves one recursive function calling inside the
// outer function, which also needs to be called recursively.

// The 'gotcha' here is that we need to traverse until the node in s aligns with
// the node in t. After that it is a matter of comparing them directly (the DFS function)
// The DFS function is simple to understand. Checking every single node between both,
// if one does not match, it is false. For the outer recursion, it is trickier. We need
// to traverse left and right and need both sides to return true, hence the && conditional.
// But for the outer function, we only need to find if left or right is true, hence the
// || conditional. 

var isSubtree = function(s, t) {
  if (!s || !t) return false;

  function DFS(s, t) {
      if (!s && !t) return true;
      if (!s || !t) return false;
      if (s.val !== t.val) return false;
      return DFS(s.left, t.left) && DFS(s.right, t.right);
  }

  if (DFS(s, t)) return true;
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};
