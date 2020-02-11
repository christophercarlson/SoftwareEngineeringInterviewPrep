// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].



/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 let nums2 = [2, 7, 11, 15], target2 = 9;
 let nums = [-3,4,3,90], target = 0;


var twoSum = function(nums, target) {
  
    let solution = [];
    let failedSolution = [0,0];
  
    for (let x = 0; x < nums.length -1; x++) {
        for (let y = 1; y < nums.length; y++) {
            
            if(y===x)continue;
            
            if(nums[x] + nums[y] === target){
                solution.unshift(nums.indexOf(nums[y],y))
                solution.unshift(nums.indexOf(nums[x],x))
                return(solution);
            }   
        }   
    }
    return failedSolution;
};


console.log(twoSum(nums,target));

    
    
    