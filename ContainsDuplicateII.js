/**
 * Author: lawliet
 * Date: 2018.12.30
 */

// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function(nums, k) {
  if (nums.length < 2) return false;

  for (let i = 0; i < nums.length; i++) {
    if (nums.indexOf(nums[i], i + 1) !== -1 && nums.indexOf(nums[i], i + 1) - i <= k) { 
      return true;
    }
  }

  return false;
};

// 利用Set
const containsNearbyDuplicate = function(nums, k) {
  const record = new Set();
  for (let i = 0; i < nums.length; i++) {
      if (record.has(nums[i])) {
          return true;
      }
      
      record.add(nums[i]);
      
      if (record.size == k + 1) {
          record.delete(nums[i-k]);
      }
  }
  return false;
};