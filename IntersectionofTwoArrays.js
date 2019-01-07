/**
 * Author: lawliet
 * Date: 2019.01.07
 */

// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersection = function(nums1, nums2) {
  // const result = [];
  // nums1.forEach(n => {
  //   if (nums2.indexOf(n) !== -1) {
  //     result.push(n);
  //   }
  // });
  // return [...new Set(result)];

  return [...new Set(nums1.filter(n => nums2.includes(n)))];
};