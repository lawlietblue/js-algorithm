/**
 * Author: lawliet
 * Date: 2018.12.13
 */

// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence.

// Note: Each term of the sequence of integers will be represented as a string.

/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) {
  let numStr = '1';
  let count, temp, currentChar;
  while (n-- > 1) {
    count = 1;
    currentChar = numStr[0];
    temp = '';
    for (let i = 1; i < numStr.length; i++) {
      if (numStr[i] === currentChar) count++;
      else {
        temp += count + currentChar;
        count = 1;
        currentChar = numStr[i];
      }
    }
    temp += count + currentChar;
    numStr = temp;
  }
  return numStr;
};