/**
 * Author: lawliet
 * Date: 2018.12.20
 */

// Say you have an array for which the ith element is the price of a given stock on day i.

// If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

// Note that you cannot sell a stock before you buy one.

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  if (!prices.length) return 0;

  let res = 0;
  let min = prices[0];

  prices.forEach((sp, index) => {
    min = sp < min ? sp : min;
    res = Math.max(res, sp - min);
  });

  return res;
  
};
