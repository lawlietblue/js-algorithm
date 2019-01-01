/**
 * Author: lawliet
 * Date: 2019.01.01
 */


// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {

  const result = [];

  while(head) {
    result.push(head.val);
    head = head.next;
  }

  let i = 0;
  let j = result.length - 1;
  while(j - i > 0) {
    if (result[j] !== result[i]) {
      return false;
    }
    i++;
    j--;
  }

  return true;
};