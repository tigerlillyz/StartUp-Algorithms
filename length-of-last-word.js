/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    var arr = s.trim().split(" ");
    var lastWord = arr[arr.length - 1].trim();
    var count = 0;

    for (var i = 0; i < lastWord.length; i++) {
        count++;
        
    }
    return count;
};
