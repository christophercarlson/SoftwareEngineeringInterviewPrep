// Longest Substring Without Repeating Characters


// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


/*
 * @param {string} s
 * @return {number}
 */

"use strict";
let log = console.log;


var lengthOfLongestSubstring = function(s) {
     

    
};



let s = "abcabcbb";
let x, y, tempSubString;
let subStringset = new Set(); 

for (x = 0; x < s.length; x++) {
    log(s[x])
    for (y = x + 1; y < s.length; y++) {
        
        if(s[x]===s[y]){ 
            log(s[x],s[y])
            tempSubString = s.substring(x,y)
            x = y-1;
            break;
        };
    }
    console.log(tempSubString)
}