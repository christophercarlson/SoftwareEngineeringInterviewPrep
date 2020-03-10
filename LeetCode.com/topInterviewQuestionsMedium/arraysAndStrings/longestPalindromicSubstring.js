// Longest Palindromic Substring

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.

// Example 2:

// Input: "cbbd"
// Output: "bb"

// Hint #1  
// How can we reuse a previously computed palindrome to compute a larger palindrome?
  
// Hint #2  
// If “aba” is a palindrome, is “xabax” and palindrome? Similarly is “xabay” a palindrome?
   
// Hint #3  
// Complexity based hint:
// If we use brute-force and check whether for every start and end position a substring is a palindrome we have O(n^2) start - end pairs and O(n) palindromic checks. Can we reduce the time for palindromic checks to O(1) by reusing some previous computation.


/*
 * @param {string} s
 * @return {string}
 */

 "use strict";
 let log = console.log;
 let a = "jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel";
 let s = "babad";


var longestPalindrome = function(s) {

    let x,y,subStr,currMax=0,solution;

    //Base cases.
    if(s.length < 2) return s; //Minimal size.
    if(s === s.split("").reverse().join("")) return s; //Entire string is palidrome.
  
    //Nested loop for iteration
    for ( x = 0; x < s.length; x++) {
        for ( y = x + 1; y <=s.length; y++) {
            
            //Initiate current substring for checking.
            subStr = s.substring(x, y);
            log(subStr)
            
            //Check 1: if substring beggining and end are equal. 
            //Check 2: if substring is shorter than current palidrome.
            if(subStr[0] !== subStr[subStr.length -1] || subStr.length <= currMax) continue;

            //Test for palidrome.
            if(subStr === subStr.split("").reverse().join("")){
                currMax = subStr.length;
                solution = subStr;
            }
        }
    }
    return solution;
};


log(longestPalindrome(s))