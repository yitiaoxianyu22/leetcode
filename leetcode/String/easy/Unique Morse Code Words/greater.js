/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    const morseCode  = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    let res = [];
    words.forEach((word)=>{
        res.push(word.replace(/./g, (i)=>morseCode[i.charCodeAt(0)-97]))
    })
    return new Set(res).size
};
