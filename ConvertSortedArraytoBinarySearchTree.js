/**
 * Author: lawliet
 * Date: 2018.12.18
 */

// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function(nums, start= 0, end= nums.length - 1) {
  if (end < start) return null;

  const middleIndex = Math.floor((start + end) / 2);
  let node = new TreeNode(nums[middleIndex]);
  
  node.left = sortedArrayToBST(nums, start, middleIndex - 1);
  node.right = sortedArrayToBST(nums, middleIndex + 1, end);

  return node;
};