/**
 * Author: lawliet
 * Date: 2018.01.08
 */

// A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

// Each LED represents a zero or one, with the least significant bit on the right.


// For example, the above binary watch reads "3:25".

// Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

// Example:

// Input: n = 1
// Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
// Note:
// The order of output does not matter.
// The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
// The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".

/**
 * @param {number} num
 * @return {string[]}
 */
const readBinaryWatch = function(num) {
  if (!num) return ["0:00"];

  const result = [];

  for (let h = 0; h < 12; h++) {
    const hour = h.toString(2);
    for (let m = 0; m < 60; m++) {
      const min = m.toString(2);
      if (hour.split('1').length + min.split('1').length - 2 === num) {
        result.push(h + (m < 10 ? ':0' : ':') + m);
      }
    }
  }

  return result;
};