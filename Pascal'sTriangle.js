/**
 * Author: lawliet
 * Date: 2018.12.19
 */

// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
  const result = Array(numRows);
  let i = 0;
  while(i < numRows) {
    if (i === 0) result[i] = [1];
    if (i === 1) result[i] = [1, 1];
    if (i > 1) {
      result[i] = [];
      for (let j = 0; j < result[i - 1].length - 1; j++) {
        result[i].push(result[i - 1][j] + result[i - 1][j + 1]);
      }
      result[i].push(1);
      result[i].unshift(1);
    }
    i++;
  }
  return result;
};