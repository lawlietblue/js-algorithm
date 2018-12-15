/**
 * Author: lawliet
 * Date: 2018.12.15
 */

// Given two binary strings, return their sum (also a binary string).

// The input strings are both non-empty and contains only characters 1 or 0.

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function(a, b) {
  let res = '';
  const len = Math.max(a.length, b.length);
  let calculateNum = 0;

  for (let i = 0; i < len; i++) {
    const aBinary = i < a.length ? +a[a.length - i - 1] : 0;
    const bBinary = i < b.length ? +b[b.length - i - 1] : 0;
    const sum = aBinary + bBinary + calculateNum;
    res = ((sum === 1 || sum === 3) ? '1' : '0') + res;
    calculateNum = sum > 1 ? 1 : 0;
  }

  return calculateNum ? calculateNum + res : res;

};