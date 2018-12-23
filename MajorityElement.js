/**
 * Author: lawliet
 * Date: 2018.12.23
 */

// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
  let num = nums[0];
  let count = 0;

  nums.forEach(val => {
    if (val === num) {
      count++;
    } else if (count === 0) {
      num = val;
      count = 1;
    } else {
      count--;
    }
  });

  return num;
};