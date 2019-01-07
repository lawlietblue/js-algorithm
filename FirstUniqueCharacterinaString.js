/**
 * Author: lawliet
 * Date: 2019.01.07
 */

// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function(s) {
  if (s === null || s.length === 0) {
    return -1;
  }

  const freq = new Array(128).fill(0);

  for (let i = 0; i < s.length; i++) {
    freq[s.charCodeAt(i)]++;
  }

  for (let j = 0; j < s.length; j++) {
    if (freq[s.charCodeAt(j)] === 1) {
      return j;
    }
  }

  return -1;

};