/**
 * Author: lawliet
 * Date: 2018.12.23
 */

// Given a positive integer, return its corresponding column title as appear in an Excel sheet.

/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = function(n) {
  if (n <= 0) return "";
  n -= 1;

  return convertToTitle(parseInt(n / 26)) + String.fromCharCode('A'.charCodeAt(0) + (n % 26));
};