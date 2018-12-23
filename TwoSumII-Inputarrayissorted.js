/**
 * Author: lawliet
 * Date: 2018.12.23
 */


// Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

// Note:

// Your returned answers (both index1 and index2) are not zero-based.
// You may assume that each input would have exactly one solution and you may not use the same element twice.


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(numbers, target) {
  let result = [];
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let sum = numbers[left] + numbers[right];

    if (target === sum) {
      result.push(left + 1);
      result.push(right + 1);
      return result;
    } else if (target < sum) {
      right--;
    } else {
      left++;
    }
  }


};
