/**
 * Author: lawliet
 * Date: 2018.12.15
 */

// Implement int sqrt(int x).

// Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

// Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function(x) {
  if (x <= 1) return x;
  r = x;
  while(r > x/r) {
    r = Math.floor((r + x/r) / 2);
  }
  return Math.floor(r);
};