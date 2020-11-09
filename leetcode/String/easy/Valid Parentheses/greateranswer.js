/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 !== 0) return false;
    const len = s.length/2;
    for (let i = 0; i < len; i++) {
        s = s.replace(/(\(\))|(\[\])|(\{\})/, '');
    }
    return s.length == 0;
}
console.log(isValid('{([])}'))
