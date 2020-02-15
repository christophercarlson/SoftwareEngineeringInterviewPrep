// Write a function that reverses a string. The input string is given as an say of characters char[].

// Do not allocate extra space for another say, you must do this by modifying the input say in-place with O(1) extra memory.

// You may assume all the characters consist of printable ascii characters.

 

// Example 1:

// Input: ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]



/*
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */


let s = ["H","a","n","n","a","h"];

 
var reverseString = function(s) {

    // Two pointer system.
    for (let i = 0, y = s.length - 1; i < y; i++, y--) {
        
        // also important was establishing current index so it's altered form would not get used
        // on accident.
        let current = s[i];
        s[i] = s[y];
        s[y] = current;
    }
    console.log(s)
};

console.log(reverseString(s));