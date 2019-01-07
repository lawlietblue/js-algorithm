/**
 * Author: lawliet
 * Date: 2019.01.07
 */

// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = -2, b = 3
// Output: 1

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

// 两个整数a, b; a ^ b是无进位的相加； a&b得到每一位的进位；让无进位相加的结果与进位不断的异或， 直到进位为0；
const getSum = function(a, b) {
  return b ? getSum(a ^ b, (a & b) << 1) : a;
};

