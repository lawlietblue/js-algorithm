/**
 * Author: lawliet
 * Date: 2018.12.30
 */

// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL
// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList = function(head) {
  let root = null;
  let currentNode = head;
  while(currentNode) {
    const next = currentNode.next;
    currentNode.next = root;
    root = currentNode;
    currentNode = next;
  }

  return root;
};