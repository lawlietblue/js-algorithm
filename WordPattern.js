/**
 * Author: lawliet
 * Date: 2019.01.03
 */

// Given a pattern and a string str, find if str follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

// Example 1:

// Input: pattern = "abba", str = "dog cat cat dog"
// Output: true
// Example 2:

// Input:pattern = "abba", str = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", str = "dog cat cat dog"
// Output: false
// Example 4:

// Input: pattern = "abba", str = "dog dog dog dog"
// Output: false
// Notes:
// You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function(pattern, str) {
  const patternArray = [...pattern];
  const strArray = str.split(' ');

  if (patternArray.length !== strArray.length) return false;

  const record = new Map();

  for (let i = 0; i < patternArray.length; i++) {
    if (record.has(patternArray[i])) {
      if (record.get(patternArray[i]) !== strArray[i]) {
        return false;
      }
    } else {
      record.set(patternArray[i], strArray[i]);
    }
  }

  const recordSet = [...new Set(record.values())];

  if (record.size === recordSet.length) {
    return true;
  } else {
    return false;
  }
};