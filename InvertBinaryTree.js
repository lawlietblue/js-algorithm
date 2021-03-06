/**
 * Author: lawliet
 * Date: 2019.01.01
 */

// Invert a binary tree.

// Example:

// Input:

//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// Output:

//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const invertTree = function(root) {
  if (root === null) return null;
   
  const treeNode = new TreeNode(root.val);
  treeNode.left = invertTree(root.right);
  treeNode.right = invertTree(root.left);
  return treeNode;
};