/**
 * Author: lawliet
 * Date: 2019.01.01
 */

// Given a binary tree, return all root-to-leaf paths.

// Note: A leaf is a node with no children.

// Example:

// Input:

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]

// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function(root) {
  const paths = [];

  const queue = [[root, []]];

  while(queue.length) {
    const [current, pathList] = queue.shift();
    if (!current) continue;

    pathList.push(current.val);
    if (!current.left && !current.right) {
      paths.push(pathList);
      continue;
    }

    queue.push([current.left, pathList.slice()], [current.right, pathList.slice()]);

  }

  return paths.map(path => path.join('->'));
};
