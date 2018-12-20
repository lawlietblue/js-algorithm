/**
 * Author: lawliet
 * Date: 2018.12.20
 */


// Say you have an array for which the ith element is the price of a given stock on day i.

// Design an algorithm to find the maximum profit. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

// Note: You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  let res = 0;
  let last = 0;
  prices.forEach((p, index) => {
    last = index === 0 ? p : last;
    if (p > last) {
      res += p - last;
    }
    last = p;
  });
  return res;
};