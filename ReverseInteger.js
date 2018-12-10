/**
 * Author: lawliet
 * Date: 2018.12.10
 */

// Given a 32-bit signed integer, reverse digits of an integer.

// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const isNeg = x < 0;
  let result = 0;

  while(x) {
    let lastNum = x % 10;
    result *= 10;
    result += lastNum;
    x = parseInt(x / 10);
  }

  result = isNeg ? -result : result;

  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  }

  return result;
};