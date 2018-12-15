/**
 * Author: lawliet
 * Date: 2018.12.15
 */

// You are climbing a stair case. It takes n steps to reach to the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Note: Given n will be a positive integer.

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function(n) {
  if (n === 1) return 1;  
  if (n === 2) return 2;
  const climbs = [1, 2];
  for (let i = 0; i < n; i++) {
    if (i < 2) continue;
    const m = climbs[i - 1] + climbs[i - 2];
    climbs[i] = m;

    if (i == n -1) {
      return m;
    }
  }
};


// var climbStairs = function(n) {
//   const mins = [1, 2];
//   if(n === 1) return 1;
//   if(n === 2) return 2;
  
//   for (let index of Array(n).fill().keys()) {
//       if(index < 2) continue;
      
//       const min = mins[index - 1] + mins[index - 2];
//       mins[index] = min;
      
//       if(index === n - 1) {
//           return min;
//       }
//   }
// };

const climbStairs = function(n) {
  let a = 1;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let temp = a;
    a += b;
    b = temp;
  }

  return b;

};
