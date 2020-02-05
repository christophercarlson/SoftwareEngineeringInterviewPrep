/*

    INSTRUCTIONS: Given an array, rotate the array to the right by k steps, where k is non-negative.


 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

nums = [1,2,3,4,5,6,7]
let k = 3;

// Expected answer
// [5,6,7,1,2,3,4]

let rotate = function(nums, k) {
   
    let endValue;

    for(let i = 0; i < k; i++){
        
        endValue = nums.pop();
        nums.unshift(endValue);    
   }
   return nums;
}

console.log(rotate(nums,k))