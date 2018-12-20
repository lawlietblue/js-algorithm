/**
 * Author: lawliet
 * Date: 2018.12.20
 */

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
  if (!s) return true;
  const ls = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const lsArray = ls.split('').reverse();

  return ls === lsArray.join('');

};