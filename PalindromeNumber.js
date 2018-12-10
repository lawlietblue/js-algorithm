/**
 * Author: lawliet
 * Date: 2018.12.10
 */

// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  const xStr = x.toString();
  if (xStr.length === 1) {
    return true;
  }
  let l = xStr.length - 1;
  let s = 0;
  while (l > s) {
    if (xStr[l] !== xStr[s]) {
      return false;
    }
    l--;
    s++;
  }

  return true;
};

// Coud you solve it without converting the integer to a string?
const isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  let xCopy = x;
  let xReverse = 0;

  while(x) {
    xReverse *= 10;
    xReverse += x % 10;
    x = parseInt(x / 10);
  }

  return xCopy === xReverse;
  
};
