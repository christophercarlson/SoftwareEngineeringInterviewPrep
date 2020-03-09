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
let s = "abcabcbb";


var lengthOfLongestSubstring = function(s) {

    let x, tempArray =[];
    let subStringCount = new Set(); 
    
    //base case
    if(s.length < 2) return s.length ;
    
    for (x = 0; x < s.length; x++) {
        
        if(tempArray.includes(s[x])){
            subStringCount.add(tempArray.length);
            tempArray = tempArray.slice(tempArray.indexOf(s[x]) + 1);
            tempArray.push(s[x])
        }
        else {
            tempArray.push(s[x]);
        }
    }
    subStringCount.add(tempArray.length);
    return Math.max(...subStringCount);
};

log(lengthOfLongestSubstring(s))

