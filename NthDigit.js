/**
 * Author: lawliet
 * Date: 2018.01.08
 */

// Find the nth digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...

// Note:
// n is positive and will fit within the range of a 32-bit signed integer (n < 231).

// Example 1:

// Input:
// 3

// Output:
// 3
// Example 2:

// Input:
// 11

// Output:
// 0

// Explanation:
// The 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.

/**
 * @param {number} n
 * @return {number}
 */
// const findNthDigit = function(n) {
//   return Array(n).fill().map((_, index) => index + 1).join('')[n - 1];
// };

const findNthDigit = function(n) {
  let digit = 1;

  while(true) {
    let first = 10 ** (digit - 1);
    let count = 9 * first * digit;

    if (count >= n) {
      return (first + Math.floor((n - 1) / digit)).toString()[(n - 1) % digit];
    }

    n -= count;
    digit += 1; 
  }
};