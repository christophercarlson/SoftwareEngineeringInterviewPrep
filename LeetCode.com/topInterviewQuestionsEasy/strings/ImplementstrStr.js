
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "hello", needle = "ll"
// Output: 2
// Example 2:

// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf()


/*
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */



let haystack = "", needle = "ll";
 
var strStr = function(haystack, needle) {

    //Case of empty string.
    if(needle === "") return 0;

    //Case of string not empty check for needle.
    if(haystack.includes(needle) === false) return -1;

    //If needle found return index.
    else{
        return haystack.indexOf(needle);
    }    
};

console.log(strStr(haystack, needle));