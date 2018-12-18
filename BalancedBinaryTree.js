/**
 * Author: lawliet
 * Date: 2018.12.18
 */

// Given a binary tree, determine if it is height-balanced.

// For this problem, a height-balanced binary tree is defined as:

// a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function(root) {
  const dfsH = node => {
    if (node === null) {
      return 0;
    }
    let lh = dfsH(node.left);
    let rh = dfsH(node.right);

    if (Math.abs(lh - rh) > 1 || lh === -1 || rh === -1) {
      return -1;
    }

    return Math.max(lh, rh) + 1;
  }

  return dfsH(root) !== -1;
};