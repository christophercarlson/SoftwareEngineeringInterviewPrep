// Increasing Triplet Subsequence


// Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.

// Formally the function should:

// Return true if there exists i, j, k
// such that arr[i] < arr[j] < arr[k] given 0 ≤ i < j < k ≤ n-1 else return false.
// Note: Your algorithm should run in O(n) time complexity and O(1) space complexity.

// Example 1:

// Input: [1,2,3,4,5]
// Output: true

// Example 2:

// Input: [5,4,3,2,1]
// Output: false



/*

 * @param {number[]} nums

 * @return {boolean}

 */

let nums = [2,1,5,5,4,6];

"use strict";
let log = console.log;

var increasingTriplet = function(nums) {
      
    //Base case:
    if(nums.length < 3) return false;

    let set = new Set(nums);
    
    //remove duplicates, check minimum length requirement. 
    let set = new Set(nums);
    if(set.size >= 3) return true
};


log(increasingTriplet(nums))


let set = new Set(nums);
log(set.size)



for(x = 0; x < nums.length; x++){
    
    if(nums[x+2] === undefined) break;
    if(nums[x] < nums[x+1] &&  nums[x+1] < nums[x+2]) return true;
}
return false;