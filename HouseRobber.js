/**
 * Author: lawliet
 * Date: 2018.12.27
 */

// You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

// Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function(nums) {
  let aWay = 0;
  let bWay = 0;

  for (let i = 0; i < nums.length; i++) {
    let curWay = bWay + nums[i];

    bWay = Math.max(bWay, aWay);

    aWay = curWay;
  }

  return Math.max(aWay, bWay);
};