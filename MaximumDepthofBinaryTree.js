/**
 * Author: lawliet
 * Date: 2018.12.17
 */

// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

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
const maxDepth = function(root) {
  if (root === null) return 0;

  const queue = [];
  let max = 1;

  queue.push(root);
  root.depth = 1;

  while(queue.length) {
    const current = queue.shift();
    const depth = current.depth + 1;

    if (current.left) {
      queue.push(Object.assign(current.left, {depth}));
    }
    
    if (current.right) {
      queue.push(Object.assign(current.right, {depth}));
    }
    
    if (current.left || current.right) {
      max = Math.max(max, depth);
    }

  }

  return max;

};