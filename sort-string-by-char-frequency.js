/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    var sorted = "";
    var map = {};
    for(var i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++;
        } else {
            map[s[i]] = 1;
        }
    }
    
    Object.keys(map).sort((a , b) => map[b] - map[a]).map(char =>{
        while(map[char]){
            map[char]--;
            sorted += char;
        }
    })
    
    return sorted;
};

//Credit: https://leetcode.com/problems/sort-characters-by-frequency/discuss/551415/Javascript-solution-with-map-andand-Object.keys
