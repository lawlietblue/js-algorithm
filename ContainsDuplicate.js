/**
 * Author: lawliet
 * Date: 2018.12.30
 */

// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
  if (nums.length === 0) return false;
  return nums.length !== [...new Set(nums)].length;
};