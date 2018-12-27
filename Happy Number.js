/**
 * Author: lawliet
 * Date: 2018.12.27
 */

// Write an algorithm to determine if a number is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Example: 

// Input: 19
// Output: true
// Explanation: 
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function(n) {
  const powCal = n => {
    let result = 0;
    while(n) {
      result += (n % 10) * (n % 10);
      n = Math.floor(n / 10);
    }
    return result;
  };

  let a = n;
  let b = n;

  while (a > 1) {
    a = powCal(a);
    if (a === 1) return true;
    b = powCal(powCal(b));
    if (b === 1) return true;
    if (a === b) return false;
  }

  return true;
};