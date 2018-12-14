/**
 * Author: lawliet
 * Date: 2018.12.14
 */

// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  const len = digits.length;
  let i = len - 1;
  for (; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      break;
    }
  }
  if (i < 0) digits.unshift(1);
  else {
    digits[i]++;
  }
  return digits;
};