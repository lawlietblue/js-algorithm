/**
 * Author: lawliet
 * Date: 2018.12.11
 */

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// "()[]"

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  const parentheses = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (parentheses[current]) {
      stack.push(parentheses[current]);
    } else {
      if (current !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length == 0;

};