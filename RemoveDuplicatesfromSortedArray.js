/**
 * Author: lawliet
 * Date: 2018.12.12
 */

// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
  if (nums.length === 0) return 0;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  return ++i;
};