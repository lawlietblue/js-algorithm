/**
 * Author: lawliet
 * Date: 2019.01.07
 */

// Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

// Example 1:

// Input: 16
// Output: true
// Example 2:

// Input: 5
// Output: false
// Follow up: Could you solve it without loops/recursion?

/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour = function(num) {
  if (num === 0) return false;
  if (num === 1) return true;

  while(true) {

    if (num % 4 !== 0) {
      return false;
    }

    num = num / 4;
    if (num === 1) {
      return true;
    }
  }
};

