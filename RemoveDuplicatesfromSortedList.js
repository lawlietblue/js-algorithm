/**
 * Author: lawliet
 * Date: 2018.12.15
 */

// Given a sorted linked list, delete all duplicates such that each element appear only once.

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
const deleteDuplicates = function(head) {
  let current = head;
  let last = {val: null};

  while(current) {
    if (current.val !== last.val) {
      last = current;
    } else {
      last.next = current.next;
    }
    current = current.next;
  }

  return head;
};