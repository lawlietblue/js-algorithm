/**
 * Author: lawliet
 * Date: 2018.12.26
 */

// Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function(n) {
  return n.toString(2).match(/1/g) && n.toString(2).match(/1/g).length || 0;
};