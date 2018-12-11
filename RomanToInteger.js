/**
 * Author: lawliet
 * Date: 2018.12.11
 */

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

/**
 * @param {string} s
 * @return {number}
 */

const romanNumValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInt = function(s) {
  if (s.length < 1) {
    return null;
  }
  
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (romanNumValues[s[i]] < romanNumValues[s[i + 1]]) {
      result -= romanNumValues[s[i]];
    } else {
      result += romanNumValues[s[i]];
    }
  }
  return result;
};