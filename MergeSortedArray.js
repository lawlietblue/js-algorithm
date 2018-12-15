/**
 * Author: lawliet
 * Date: 2018.12.15
 */

// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

// Note:

// The number of elements initialized in nums1 and nums2 are m and n respectively.
// You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2.

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  let nums1Index = m - 1;
  let nums2Index = n - 1;
  let totalIndex = m + n -1;

  while(nums1Index >= 0 && nums2Index >=0) {
   if (nums1[nums1Index] > nums2[nums2Index]) {
      nums1[totalIndex--] = nums1[nums1Index--];
    } else {
      nums1[totalIndex--] = nums2[nums2Index--];
   }
  }

  while (nums2Index >= 0) {
    nums1[totalIndex--] = nums2[nums2Index--];
  }

};