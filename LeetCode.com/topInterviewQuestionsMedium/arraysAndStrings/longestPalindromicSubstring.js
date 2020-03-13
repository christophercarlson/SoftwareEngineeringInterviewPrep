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
 let b = "jglknendplocymmvwtoxvebkekzfdhykknufqdkntnqvgfbahsljkobhbxkvyictzkqjqydczuxjkgecdyhixdttxfqmgksrkyvopwprsgoszftuhawflzjyuyrujrxluhzjvbflxgcovilthvuihzttzithnsqbdxtafxrfrblulsakrahulwthhbjcslceewxfxtavljpimaqqlcbrdgtgjryjytgxljxtravwdlnrrauxplempnbfeusgtqzjtzshwieutxdytlrrqvyemlyzolhbkzhyfyttevqnfvmpqjngcnazmaagwihxrhmcibyfkccyrqwnzlzqeuenhwlzhbxqxerfifzncimwqsfatudjihtumrtjtggzleovihifxufvwqeimbxvzlxwcsknksogsbwwdlwulnetdysvsfkonggeedtshxqkgbhoscjgpiel";
 let s = "cbbd";




 var longestPalindrome = function(s) {

    //Varibales needed.
    let start=0,end=0,x,len1,len2,len;

    //Base case:
    if(s.length < 2) return s; //Minimal size.
    if(s === s.split("").reverse().join("")) return s; //Entire string is palidrome.

    //Function to find palidrome.
    let longest = (s,L,R,) =>{
        
        while(L >= 0 && R < s.length && s.charAt(L) === s.charAt(R)){
            L--; R++;
        }
        return R - L - 1;
    }
    for (x = 0; x < s.length; x++) {
        len1 =  longest(s,x,x);
        len2 = longest(s,x,x + 1);
        len = Math.max(len1, len2);
        if (len > end - start) {
            start = Math.ceil(x - (len - 1) / 2);
            end = x + len / 2;
        }
    } 
    return s.substring(start, end + 1);
};


log(longestPalindrome(s))






