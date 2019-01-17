/**
 * Author: lawliet
 * Date: 2019.01.17
 */

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  if (s === null) return 0;
  if (s.length <= 1) return s.length;

  let longest = 1;
  let i = 0;
  let j = 1;

  while(j < s.length) {
    if (s.slice(i, j).indexOf(s.charAt(j)) >= 0) {
      i += s.slice(i, j).indexOf(s.charAt(j)) + 1;
    } else {
      longest = Math.max(j - i + 1, longest);
    }
    j++;
  }

  return longest;
};