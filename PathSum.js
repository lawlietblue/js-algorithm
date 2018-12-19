/**
 * Author: lawliet
 * Date: 2018.12.19
 */

// Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

// Note: A leaf is a node with no children.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root, sum) {
  if (!root) return false;

  if (root.left === null && root.right === null) {
    return sum - root.val === 0;
  }

  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
};