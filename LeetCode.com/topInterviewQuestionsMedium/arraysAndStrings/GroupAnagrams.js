// Group Anagrams

// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.


/*
 * @param {string[]} strs
 * @return {string[][]}
 */

"use strict";

let log = console.log;
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];




var groupAnagrams = function(strs) {
    
    let solution = [];
    let temp;
    let x;

    let ordereredArr  = strs.map(element => { 
        temp = element.split("");
        temp = temp.sort();
        temp = temp.join("");   
        return temp;
    });

    let setFromArr = new Set(ordereredArr );

    for(let item of setFromArr){
        temp =[];
        for (x= 0; x < strs.length; x++) {
            if(item === ordereredArr[x]){
                temp.push(strs[x])
            } 
        }
        solution.push(temp);
    }
    return solution;
};


log(groupAnagrams(strs))