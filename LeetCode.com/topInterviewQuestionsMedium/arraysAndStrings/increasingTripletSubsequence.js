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

let nums = [2,1,5,5,4,1];

"use strict";
let log = console.log;




// condensed version
function increasingTriplet(nums) {
    
    let m, m2;

    for (i = 0; i < nums.length; i++) {
      
        //category one puts m on one index puts m2 on one index if neither of them are satified then the next placement is 
        // larger and there is a increasing triplet.
        if (m === undefined || nums[i] <= m){
            m = nums[i];
        } 
        else if (m2 === undefined || nums[i] <= m2){
            m2 = nums[i];
        } 
        //category two
        else return true;
    }
    return false;
  }

  log(increasingTriplet(nums))