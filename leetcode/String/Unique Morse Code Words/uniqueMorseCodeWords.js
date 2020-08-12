/**
 International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

 For convenience, the full table for the 26 letters of the English alphabet is given below:

 [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
 Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

 Return the number of different transformations among all words we have.

 Example:
 Input: words = ["gin", "zen", "gig", "msg"]
 Output: 2
 Explanation:
 The transformation of each word is:
 "gin" -> "--...-."
 "zen" -> "--...-."
 "gig" -> "--...--."
 "msg" -> "--...--."

 There are 2 different transformations, "--...-." and "--...--.".
 Note:

 The length of words will be at most 100.
 Each words[i] will have length in range [1, 12].
 words[i] will only consist of lowercase letters.
 */

//思路：定义一个对象，字母为key，对应的摩尔斯代码为value，对于每一个单词，将其翻译成摩尔斯密码，然后对比有几个相同的摩尔斯密码
/**
 * @param {string[]} words
 * @return {number}
 */
const morseCodeMap = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
};
var uniqueMorseRepresentations = function (words) {
    let differentMorseCode = words.reduce((pre, next)=>{
        let morseCode = translateWord(next);
        if(!pre.includes(morseCode)) {
            pre.push(morseCode);
        }
        return pre
    },[]);
    return differentMorseCode.length

};
function translateWord(word) {
    let morseCode = '';
    for (let i=0;i<word.length;i++){
        morseCode += morseCodeMap[word[i]]
    }
    return morseCode
}
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]))
