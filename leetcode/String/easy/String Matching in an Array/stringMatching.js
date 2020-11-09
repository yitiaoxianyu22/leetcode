/**
 Given an array of string words. Return all strings in words which is substring of another word in any order. 

 String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

  

 Example 1:

 Input: words = ["mass","as","hero","superhero"]
 Output: ["as","hero"]
 Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
 ["hero","as"] is also a valid answer.
 Example 2:

 Input: words = ["leetcode","et","code"]
 Output: ["et","code"]
 Explanation: "et", "code" are substring of "leetcode".
 Example 3:

 Input: words = ["blue","green","bu"]
 Output: []
  

 Constraints:

 1 <= words.length <= 100
 1 <= words[i].length <= 30
 words[i] contains only lowercase English letters.
 It's guaranteed that words[i] will be unique.
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
// var stringMatching = function(words) {
//     let subStrings = [];
//     for (let i=0;i<words.length;i++) {
//         for(let j=0;j<words.length;j++) {
//             let wordi = words[i];
//             let wordj = words[j];
//             if(wordi === wordj) continue;
//             if(wordi.includes(wordj) && !subStrings.includes(wordj))
//                 subStrings.push(wordj);
//
//         }
//     }
//     return subStrings
// };

var stringMatching = function(words) {
    let string = words.join(',');
    let subStrings;
    subStrings = words.reduce((prev,item) => {
        if(prev.includes(item))
            return prev
        let first = string.indexOf(item)
        let last = string.lastIndexOf(item)
        if ( first !== -1 && last !== -1 && first !== last)
            prev.push(item)
        return prev
    },[])
    return subStrings
}

console.log(stringMatching(["blue","green","bu"]))
