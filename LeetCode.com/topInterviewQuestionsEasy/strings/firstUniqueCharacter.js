// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:

// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.


/*
 * @param {string} s
 * @return {number}
 */

let s = "cc";


var firstUniqChar = function(s) {
  
    // Lower EDGE cases. 
    if(s.length < 1) return -1;
    if(s.length < 2) return 0;

    // Make string array for easier traversal.
    s = s.split("");
    

    for (let x = 0; x < s.length; x++) {
        for (let y = 0; y < s.length; y++) {

            if(x != y && s[x] === s[y]){
                break;
            }
            if(y == s.length -1){
                return x;
            }
        }
    }
    return -1
};


console.log(firstUniqChar(s));
// console.log('Red Dragon'.indexOf('h', 0)); -1
