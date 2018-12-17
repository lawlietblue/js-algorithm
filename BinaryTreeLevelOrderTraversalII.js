/**
 * Author: lawliet
 * Date: 2018.12.17
 */

// Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function(root) {
  const treeNode = (array, node, level) => {
    if (node === null) {
      return null;
    }

    if (array.length < level + 1) {
      array.push([]);
    }

    array[level].push(node.val);
    treeNode(array, node.left, level + 1);
    treeNode(array, node.right, level + 1);
  };

  let result = [];
  treeNode(result, root, 0);

  return result.reverse();

};