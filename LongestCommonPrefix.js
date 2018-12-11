/**
 * Author: lawliet
 * Date: 2018.12.11
 */

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  if (strs.length === 1) return strs[0];
  let prefix = strs[0];
  for (let i in strs) {
    while(strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length -1);
      if (!prefix.length) return ''; // 可写可不写
    }
  }
  return prefix;
};