/**
 * Author: lawliet
 * Date: 2018.01.08
 */


// Given two strings s and t which consist of only lowercase letters.

// String t is generated by random shuffling string s and then add one more letter at a random position.

// Find the letter that was added in t.

// Example:

// Input:
// s = "abcd"
// t = "abcde"

// Output:
// e

// Explanation:
// 'e' is the letter that was added.

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference = function(s, t) {
  let i = 0;
  let char = 0;;
  while(i < s.length) {
    char = char ^ s.charCodeAt(i) ^ t.charCodeAt(i);
    i++;
  }

  return String.fromCharCode(char ^ t.charCodeAt(i));
};