//  Longest Common Prefix
//  Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:

// All given inputs are in lowercase letters a-z.

/*
 * @param {string[]} strs
 * @return {string}
 */

 let strs = ["abcaAUAWADWADAWD","abcAWDWDWD"];
 let str1 = ["flower","flow","flight"];
 let str2 = ["cardog","carracecar","car"];
 
 
var longestCommonPrefix = function(strs) {

    let prefix = "";
    let testSet = new Set()
    let tempArray= [];

    //Finds shortest string in array for the outer loop. 
    let shortest = strs.reduce((r, a) => Math.min(r, a.length), Infinity);
   
    //Outer loop for iterating through the letter of each word.
    for (let x = 0; x < shortest; x++) {
        //Inner loop for iterating each word. 
        for (let y = 0; y < strs.length; y++) {
            testSet.add(strs[y].charAt(x));
        }  
        
        if(testSet.size === 1){
            tempArray = Array.from(testSet);
            prefix = prefix + tempArray[0]; 
            testSet.clear();
        }
        else if(testSet.size !== 1) break;

    }
    return prefix;
};


console.log(longestCommonPrefix(strs))

