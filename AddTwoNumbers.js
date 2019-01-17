/**
 * Author: lawliet
 * Date: 2019.01.17
 */

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

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
const addTwoNumbers = function(l1, l2) {
  let flag = 0;
  let head = null;
  let temp = null;

  while(l1 || l2) {
    let sum = flag;
    if (l1) {
      sum = sum + l1.val;
      l1 = l1.next;
    }
    if (l2) {
      sum = sum + l2.val;
      l2 = l2.next;
    }

    let obj = new ListNode(sum % 10);
    if (head === null) {
      head = obj;
      temp = obj;
    } else {
      temp.next = obj;
      temp = obj;
    }

    flag = sum > 9 ? 1 : 0;

  }

  if (flag === 1) {
    let obj = new ListNode(1);
    temp.next = obj;
    temp = obj;
  }

  return head;

};
// const addTwoNumbers = function(l1, l2) {
//   const result = [];
//   let temp = 0;

//   while(l1 || l2 || temp) {
//     if (!l1) l1 = {val: 0, next: null};
//     if (!l2) l2 = {val: 0, next: null};
//     result.push((l1.val + l2.val + temp) % 10);
//     temp = (l1.val + l2.val + temp) > 9 ? 1 : 0;
//     l1 = l1.next;
//     l2 = l2.next;
//   }

//   return result;
// };