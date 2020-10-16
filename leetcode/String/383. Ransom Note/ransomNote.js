/**
 Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

 Each letter in the magazine string can only be used once in your ransom note.

  

 Example 1:

 Input: ransomNote = "a", magazine = "b"
 Output: false
 Example 2:

 Input: ransomNote = "aa", magazine = "ab"
 Output: false
 Example 3:

 Input: ransomNote = "aa", magazine = "aab"
 Output: true
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magazineArr = magazine.split('');
    let index = -1;
    for(let i = 0;i<ransomNote.length;i++) {
        index = magazineArr.indexOf(ransomNote[i])
        if(index === -1) return false
        magazineArr.splice(index,1)
    }
    return true
};
console.log(canConstruct('aa','aab'))
