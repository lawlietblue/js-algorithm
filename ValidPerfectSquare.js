/**
 * Author: lawliet
 * Date: 2019.01.07
 */

// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Output: true
// Example 2:

// Input: 14
// Output: false

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function(num) {
  let avg = num + 1;
  while(avg * avg > num) {
    avg = ~~ (avg + ~~ num / avg) / 2;
  }

  return avg * avg === num;
};