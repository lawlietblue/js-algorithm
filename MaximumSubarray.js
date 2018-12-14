/**
 * Author: lawliet
 * Date: 2018.12.14
 */

// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
  const len = nums.length;
  let max = Number.MIN_SAFE_INTEGER;
  let before = 0;
  let now = 0;

  if (!len) return 0;

  for (let i = 0; i < len; i++) {
    now = Math.max(before + nums[i], nums[i]);
    max = Math.max(now, max);
    before = now;
  }

  return max;

};