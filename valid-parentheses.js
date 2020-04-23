/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
    var map;
    var stack = [];
    map = new Map([[')','('], ['}','{'], [']','[']]);
    for (var i = 0; i < str.length; i++) {
        if(map.has(str[i]) === false) {
            stack.push(str[i]);
        } else {
            if(map.get(str[i]) !== stack.pop() ) {
                return false; 
            } 
        }
    }
    var aligned = !stack.length
    return aligned;
};

// Credit: https://leetcode.com/problems/valid-parentheses/discuss/591649/javascript-solution
