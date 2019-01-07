/**
 * Author: lawliet
 * Date: 2019.01.07
 */

// Given an integer array nums, find the sum of the elements between indices i and j (i ≤ j), inclusive.

// Example:
// Given nums = [-2, 0, 3, -5, 2, -1]

// sumRange(0, 2) -> 1
// sumRange(2, 5) -> -1
// sumRange(0, 5) -> -3
// Note:
// You may assume that the array does not change.
// There are many calls to sumRange function.

/**
 * @param {number[]} nums
 */
const NumArray = function(nums) {
  this.sum = [0];

  nums.reduce((pre, cur, index) => {
    const sum = pre + cur;
    this.sum[index + 1] = sum;
    return sum;
  }, 0);
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  return this.sum[j + 1] - this.sum[i]; 
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = Object.create(NumArray).createNew(nums)
 * var param_1 = obj.sumRange(i,j)
 */