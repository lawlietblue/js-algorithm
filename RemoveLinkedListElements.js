/**
 * Author: lawliet
 * Date: 2018.12.28
 */

// Remove all elements from a linked list of integers that have value val.

// Example:

// Input:  1->2->6->3->4->5->6, val = 6
// Output: 1->2->3->4->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function(head, val) {
  let resultListNode = new ListNode(0);
  resultListNode.next = head;

  let cur = resultListNode;

  while(cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  if (resultListNode.next === null) {
    return null;
  } else {
    return resultListNode.next;
  }

};