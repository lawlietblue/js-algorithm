/**
 * Author: lawliet
 * Date: 2018.12.26
 */

// Reverse bits of a given 32 bits unsigned integer.

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function(n) {
  let strN = n.toString(2);

  while (strN.length < 32) {
      strN = '0' + strN;
  }

  let reversed = strN.split('').reverse().join('');

  return parseInt(reversed, 2);

};