/**
 * Author: lawliet
 * Date: 2018.12.10
 */


// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


const twoSum = function(nums, target) {
  let numsObj = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let match = target - current;
    if (match in numsObj) {
      return [i, numsObj[match]];
    } else {
      numsObj[current] = i;
    }
  }
};