/**
 * Author: lawliet
 * Date: 2019.01.07
 */

// Given an integer, write a function to determine if it is a power of three.

// Example 1:

// Input: 27
// Output: true
// Example 2:

// Input: 0
// Output: false
// Example 3:

// Input: 9
// Output: true
// Example 4:

// Input: 45
// Output: false
// Follow up:
// Could you do it without using any loop / recursion?

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfThree = function(n) {
  return Array(20).fill().map((_, index) => Math.pow(3, index)).includes(n);
};