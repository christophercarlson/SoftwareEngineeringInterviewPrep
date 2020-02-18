// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false



/*
 * @param {string} s
 * @return {boolean}
 */

 let s = "A man, a plan, a canal: Panama";


 
var isPalindrome = function(s) {
    
    // Establish regluar expression rules. 
    let re = /[a-zA-Z0-9]/;
    // Create empty array for new string to manipulate
    let sFiltered = [];
    // Make all lowercase and turn string into array
    s = s.toLowerCase().split("");

    // Loop through string, testing against the regular expression, if true push into empty array.
    for (let index = 0; index < s.length; index++) {
    
        if( re.test(s[index]) == true){
            sFiltered.push(s[index]);
        }
    }

    // If string and reversed string match return true else false. 
    return sFiltered.toString() === sFiltered.reverse().toString();
    
};




console.log(isPalindrome(s));

