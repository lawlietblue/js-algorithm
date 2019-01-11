/**
 * Author: lawliet
 * Date: 2019.01.11
 */

// Given an n-ary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

// For example, given a 3-ary tree:

 



 

// We should return its level order traversal:

// [
//      [1],
//      [3,2,4],
//      [5,6]
// ]
 

// Note:

// The depth of the tree is at most 1000.
// The total number of nodes is at most 5000.

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
  const queue = [[root, 0]];

  const result = [];
  while(queue.length) {
    const [current, depth] = queue.shift();
    if (!current) continue;

    const { val, children } = current;
    if (result[depth] === void 0) {
      result[depth] = [val];
    } else {
      result[depth].push(val);
    }

    queue.push(...children.map(item => [item, depth + 1]));

  }

  return result;

};