/**
 * Author: lawliet
 * Date: 2019.01.07
 */

// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Note:
// You may assume that both strings contain only lowercase letters.

// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function(ransomNote, magazine) {
  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);

  for (let i = 0; i < ransomNote.length; i++) {
    count1[ransomNote.charCodeAt(i) - 97]++;
  }
  for (let i = 0; i < magazine.length; i++) {
    count2[magazine.charCodeAt(i) - 97]++;
  }

  for (let i = 0; i < 26; i++) {
    if (count2[i] < count1[i]) return false;
  }

  return true;
};

