
// SOLVED USING FILTER ARRAY PROTOTYPE FUNCTION

nums = [0,0,1,1,1,2,2,3,3,4];

// Syntax
// array.filter(function(currentValue, index, arr), thisValue)

var removeDuplicates = function(nums) {
   
    nums = nums.filter((front, back) => nums.indexOf(front) === back)
    return nums.length;
      
  };
  
  console.log(removeDuplicates(nums));