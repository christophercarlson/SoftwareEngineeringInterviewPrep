
// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

/*
 * @param {number[]} nums
 * @return {boolean}
 */
let nums = [1,2,3,4,5,6,7,8,1,1,1];

var containsDuplicate = function(nums) {
    
    let conditionArray = [];
    
    // Using filter method checks each index for first appearence then return boolean
    nums.filter((item,index) => {
        
        conditionArray.push(nums.indexOf(item) === index);
  
    });
    
    if(conditionArray.includes(false)){
        return true;
    }
    return false
}



let test = containsDuplicate(nums);
console.log(test);
