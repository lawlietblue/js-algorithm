/**
 * Author: lawliet
 * Date: 2019.01.09
 */

// Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

// This is case sensitive, for example "Aa" is not considered a palindrome here.

// Note:
// Assume the length of given string will not exceed 1,010.

// Example:

// Input:
// "abccccdd"

// Output:
// 7

// Explanation:
// One longest palindrome that can be built is "dccaccd", whose length is 7.

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function(s) {
  const sMap = new Map();
  let result = 0;
  let k = 0;
  for (let i = 0; i < s.length; i++) {
    if (sMap.has(s[i])) {
      sMap.set(s[i], sMap.get(s[i]) + 1);
    } else {
      sMap.set(s[i], 1);;
    }
  }
  [...sMap.values()].forEach(s => {
    if (s % 2 === 0) {
      result += s;
    } else {
      result += s - 1;
      k = 1;
    }
  });

  return result + k;
};