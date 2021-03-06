/**
 * Author: lawliet
 * Date: 2018.12.21
 */

// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
  return nums.reduce((a, b) => a ^ b);
};