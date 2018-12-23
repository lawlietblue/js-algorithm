/**
 * Author: lawliet
 * Date: 2018.12.23
 */

// Write a program to find the node at which the intersection of two singly linked lists begins.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
  if (headA === null || headB === null) return null;

  let a = headA;
  let b = headB;

  while(a !== b) {
    a = a === null ? headB : a.next;
    b = b === null ? headA : b.next;
  }

  return b;
};