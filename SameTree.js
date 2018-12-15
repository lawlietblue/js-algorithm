/**
 * Author: lawliet
 * Date: 2018.12.15
 */

// Given two binary trees, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical and the nodes have the same value.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function(p, q) {
  if (p === q) {
    return true;
  } else if (p !== null && q !== null && p.val === q.val) {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  } else {
    return false;
  }
};