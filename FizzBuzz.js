/**
 * Author: lawliet
 * Date: 2019.01.10
 */

// Write a program that outputs the string representation of numbers from 1 to n.

// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

// Example:

// n = 15,

// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
  const result = [];

  for (let index of Array(n).fill().keys()) {
    if ((index + 1) % 3 === 0 && (index + 1) % 5 === 0) {
      result.push('FizzBuzz');
    } else if ((index + 1) % 3 === 0) {
      result.push('Fizz');
    } else if ((index + 1) % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(index + 1 + '');
    }
  }

  return result;
};