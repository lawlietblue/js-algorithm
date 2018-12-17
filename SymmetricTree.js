/**
 * Author: lawliet
 * Date: 2018.12.17
 */

// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

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
const isSymmetric = function(root) {
  const compare = (left, right) => {
    if (left === null && right === null) return true;
    if (left !== null && right !== null && left.val === right.val) {
      return compare(left.left, right.right) && compare(left.right, right.left);
    } else {
      return false;
    }
  }
  
  if (root === null) return true;
  return compare(root.left, root.right);

};
