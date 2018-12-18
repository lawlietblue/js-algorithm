/**
 * Author: lawliet
 * Date: 2018.12.18
 */

// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

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
 * @return {number}
 */
const minDepth = function(root) {
  let minDep = Number.MAX_SAFE_INTEGER;

  if (!root) return 0;

  const dfs = (root, level) => {
    if (level >= minDep) {
      return;
    }

    if (!root.left && !root.right) {
      minDep = Math.min(level, minDep);
    }

    root.left && dfs(root.left, level + 1);
    root.right && dfs(root.right, level + 1);
  }

  dfs(root, 1);
  
  return minDep;
};