
// SOLVED USING FILTER ARRAY PROTOTYPE FUNCTION

nums = [1,1,2,3,4,5,5,6,7,8,8,9];

// Syntax
// array.filter(function(currentValue, index, arr), thisValue)

var removeDuplicates = function(nums) {
   
    // this solution is better but not exceptable because it does not change orignal array and since origninal
    // is passed in by refference we have to change actual array. 
    
    // nums = nums.filter((item, index) => nums.indexOf(item) === index);
    // return nums.length;

    // This version alters original array and only uses a single for loop. 
    // we use "i--" because when a element is deleted the loop loses its place.

    for(let i = 0; i < nums.length; i++){
     
        if(nums[i]===nums[i + 1]){
          nums.splice(i, 1);
          i--;
        }
        
    }
    
    return nums.length;
};
  
  console.log(removeDuplicates(nums));