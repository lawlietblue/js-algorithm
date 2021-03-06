/**
 * Author: lawliet
 * Date: 2018.12.28
 */

// Given two strings s and t, determine if they are isomorphic.

// Two strings are isomorphic if the characters in s can be replaced to get t.

// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.

// Example 1:

// Input: s = "egg", t = "add"
// Output: true
// Example 2:

// Input: s = "foo", t = "bar"
// Output: false
// Example 3:

// Input: s = "paper", t = "title"
// Output: true
// Note:
// You may assume both s and t have the same length.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
  if (s.length !== t.length) return false;
  const record = new Map();

  for (let i = 0; i < s.length; i++) {
    if (record.has(s[i])) {
      if (record.get(s[i]) !== t[i]) {
        return false;
      }
    } else {
      record.set(s[i], t[i]);
    }
  }

  const setRecord = [...new Set(record.values())];
  if (setRecord.length !== record.size) {
    return false;
  }
  
  return true;
};