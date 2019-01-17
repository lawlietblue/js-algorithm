/**
 * Author: lawliet
 * Date: 2019.01.17
 */

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
  let maxlen = 0;
  let len = 0;
  let first;
  let start;
  let end;
  let offset;

  for (let i = 0; i < s.length; i++) {
    start = i;
    while((i < s.length - 1) && (s.charAt(i) === s.charAt(i + 1))) {
      i++;
    }
    end = i;
    len = end - start + 1;
    let offstart = start;
    let offend = end;

    for (offset = 1; offset <= Math.min(offstart, s.length - offend - 1); offset++) {
      if (s[offstart - offset] === s[offend + offset]) {
        len += 2;
        start = start - 1;
        end = end + 1;
      } else {
        break;
      }
    }

    if (len > maxlen) {
      maxlen = len;
      first = start;
    }
  }

  return s.substring(first, first + maxlen);


};