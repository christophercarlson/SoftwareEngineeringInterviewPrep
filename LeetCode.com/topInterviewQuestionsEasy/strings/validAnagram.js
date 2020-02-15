// Valid Anagram
// Solution
// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false
// Note:
// You may assume the string contains only lowercase alphabets.

// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?



/*
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

let s = "anagram", t = "nagarao";

var isAnagram = function(s, t) {
    
    t = t.split("");
    s = s.split("");
    
    t = t.sort();
    s = s.sort();

    if( t.toString() === s.toString()){

        return true;
    }
    else return false;
};

console.log(isAnagram(s,t));