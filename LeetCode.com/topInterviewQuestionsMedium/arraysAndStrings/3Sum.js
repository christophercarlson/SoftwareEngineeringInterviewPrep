// 3Sum
// Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note:

// The solution set must not contain duplicate triplets.

// Example:

// Given array nums = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]



/*
 * @param {number[]} nums
 * @return {number[][]}
 */

let log = console.log;

let nums = [0,0,0]

let num = [
    -15, -13, -12, -12, -12, -11, -10, -8, -7,
     -6,  -6,  -5,  -4,  -3,  -3,  -2, -2,  0,
      3,   4,   6,   8,   9,  10,  11, 11, 12,
     12,  12,  13,  14
  ]

// MY solution could be much faster, a way we can improve its preformance is by
// taking out third loop and using a dual pointer system. rather then iterating through and checking for 
// duplicates in the solutions array. 

var threeSum = function(nums) {

    let x, y, z, n = nums.length;
    let solution = [], temp = [];
    if(n < 3 ) return solution;
    
    nums = nums.sort((a, b) => a - b);
  
    for (x = 0; x < n; x++) {
        
        if (x > 0 && nums[x] === nums[x - 1]) continue;
        if(nums[x] > 0 ) return solution;
        temp = [];
     
        for (y = x + 1; y < n; y++) {
            
            if(nums[y]===nums[y+2]) continue;
        
            for (z = y + 1; z < n; z++) {
                
                if(nums[z]===nums[z+2]) continue;
                if(nums[x] + nums[y] + nums[z] === 0){
                    temp = [nums[x],nums[y],nums[z]];
                    isDuplicate = solution.some(element => JSON.stringify(temp) === JSON.stringify(element));
                    if(isDuplicate === false) solution.push(temp);
                }
           }  
       }
    }
    return solution;
};


log(threeSum(nums));
