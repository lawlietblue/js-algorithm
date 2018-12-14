/**
 * Author: lawliet
 * Date: 2018.12.14
 */

// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function(s) {
  if (!s) return 0;
  const sArray = s.trim().split(' ');
  return sArray[sArray.length - 1].length;
};