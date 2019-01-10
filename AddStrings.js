/**
 * Author: lawliet
 * Date: 2019.01.10
 */

// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function(num1, num2) {
  let num1Length = num1.length;
  let num2Length = num2.length;
  let isAdd = 0;
  let result = '';

  while(num1Length > 0 || num2Length > 0) {
    let num1Val = num1[num1Length - 1] >= 0 ? +num1[num1Length - 1] : 0;
    let num2Val = num2[num2Length - 1] >=0 ? +num2[num2Length - 1] : 0;
    let sum =  num1Val + num2Val + isAdd;
    result = (sum % 10) + result;
    isAdd = sum >= 10 ? 1 : 0;
    num1Length--;
    num2Length--;
  }

  return isAdd ? isAdd + result : result;

};