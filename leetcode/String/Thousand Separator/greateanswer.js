/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
    let nStr = n.toString();
    if(nStr.length<=3) return nStr;
    let arr = nStr.split('');
    let len = arr.length;
    while (len > 3){
        len = len-3;
        arr.splice(len,0,'.')

    }
    return arr.join('')
};
