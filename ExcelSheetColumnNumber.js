/**
 * Author: lawliet
 * Date: 2018.12.23
 */

// Given a column title as appear in an Excel sheet, return its corresponding column number.

/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function(s) {
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    num = num * 26 + (s.charCodeAt(i) - 'A'.charCodeAt(0) + 1);
  }

  return num;
};