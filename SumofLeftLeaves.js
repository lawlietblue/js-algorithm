/**
 * Author: lawliet
 * Date: 2019.01.09
 */

// Find the sum of all left leaves in a given binary tree.

// Example:

//     3
//    / \
//   9  20
//     /  \
//    15   7

// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.

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
const sumOfLeftLeaves = function(root) {
  let num = 0;
  const leftLeaves = (root, isLeft) => {
    if (!root) return;

    if (!root.left && !root.right && isLeft) {
      num += root.val;
    }

    leftLeaves(root.left, true);
    leftLeaves(root.right, false);

  };

  if (!root || !root.left && !root.right) {
    return 0;
  }

  leftLeaves(root, true);

  return num;
};