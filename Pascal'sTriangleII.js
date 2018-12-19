/**
 * Author: lawliet
 * Date: 2018.12.19
 */

// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.

// Note that the row index starts from 0.

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
  if (rowIndex === 0) return [1];

  const result = [[1]];

  for (let index = 1; index <= rowIndex; index++) {
    const last = result[index -1];
    result.push(Array(index + 1).fill(1).map((_, i) => (last[i] || 0) + (last[i - 1] || 0)));
  }

  return result[rowIndex];
};