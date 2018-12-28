/**
 * Author: lawliet
 * Date: 2018.12.28
 */

// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
  let result = 0;
  let primes = new Array(n);

  primes[0] = true;
  primes[1] = true;

  for (let i = 2; i < n; i++) {
    if (!primes[i]) {
      result++;
      for (let j = 2 * i; j < n; j += i) {
        primes[j] = true;
      }
    }
  }

  return result;

};

// 埃拉托斯特尼筛法在每次找到一个素数时，将能被素数整除的数排除掉。

// 给出要筛数值的范围n，找出以内的素数。先用2去筛，即把2留下，把2的倍数剔除掉；

// 再用下一个质数，也就是3筛，把3留下，把3的倍数剔除掉；

// 接下去用下一个质数5筛，把5留下，把5的倍数剔除掉；

// 不断重复下去......。