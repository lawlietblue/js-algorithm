/**
 * Author: lawliet
 * Date: 2019.01.07
 */

// Write a function that takes a string as input and returns the string reversed.

// Example 1:

// Input: "hello"
// Output: "olleh"
// Example 2:

// Input: "A man, a plan, a canal: Panama"
// Output: "amanaP :lanac a ,nalp a ,nam A"

/**
 * @param {string} s
 * @return {string}
 */
const reverseString = function(s) {
  return s.split('').reverse().join('');
};

