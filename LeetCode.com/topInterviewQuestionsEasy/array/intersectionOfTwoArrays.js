// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Note:

// Each element in the result should appear as many times as it shows in both arrays.
// The result can be in any order.

/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

nums1 = [4,9,5], nums2 = [9,4,9,8,4]



 var intersect = function(nums1, nums2) {

    let smallerArray =[];
    let biggerArray =[];
    let finalArray = [];
    let indexOfMatch;

    if(nums1.length > nums2.length){
        smallerArray = nums2;
        biggerArray = nums1;
    }
    else {
        smallerArray = nums1;
        biggerArray = nums2;
    }

    for(let i = 0; i < smallerArray.length; i++){
       
        if(biggerArray.includes(smallerArray[i]) == true){
             indexOfMatch = biggerArray.indexOf(smallerArray[i]);
             finalArray.push(biggerArray.splice(indexOfMatch,1)[0]);
        }
    }
    return finalArray;    
};

console.log(intersect(nums1, nums2));