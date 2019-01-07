/**
 * Author: lawliet
 * Date: 2019.01.07
 */

// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:

// Input: "hello"
// Output: "holle"
// Example 2:

// Input: "leetcode"
// Output: "leotcede"
// Note:
// The vowels does not include the letter "y".

/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
  const sArr = s.split('');
  let i = 0;
  let j = sArr.length - 1;
  for (;i < j;i++,j--) {
    while(i < j && !'aeiouAEIOU'.includes(sArr[i])) {
      i++;
    }
    while(i < j && !'aeiouAEIOU'.includes(sArr[j])) {
      j--;
    }
    let temp = sArr[i];
    sArr[i] = sArr[j];
    sArr[j] = temp;
  }
  return sArr.join('');
};