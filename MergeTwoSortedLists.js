/**
 * Author: lawliet
 * Date: 2018.12.12
 */

// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// const mergeTwoLists = function(l1, l2) {
//   return l1.concat(l2).sort((a, b) => a- b);
// };

// console.log(mergeTwoLists([1,2,3], [1,2,3]))

const mergeTwoLists = function(l1, l2) {
  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};