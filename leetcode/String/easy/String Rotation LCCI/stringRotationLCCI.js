/**
 Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 (e.g.,"waterbottle" is a rotation of"erbottlewat"). Can you use only one call to the method that checks if one word is a substring of another?

 Example 1:

 Input: s1 = "waterbottle", s2 = "erbottlewat"
 Output: True
 Example 2:

 Input: s1 = "aa", "aba"
 Output: False
 */


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var isFlipedString = function(s1, s2) {
    let s = s2.concat(s2);
    let index = s.indexOf(s1);
    if(index !== -1){
        let s3 = s.substring(0,index).concat(s.substring(index+s1.length))
        return s2 === s3
    }
    return false;
    // return s1.length === s2.length && (s1+s1).includes(s2)

};

console.log(isFlipedString("waterbottle","bottlewater"))

//想复杂了==！
