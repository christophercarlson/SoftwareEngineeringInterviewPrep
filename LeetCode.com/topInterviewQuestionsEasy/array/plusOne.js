

// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

// You may assume the integer does not contain any leading zero, except the number 0 itself.

// Example 1:

// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:

// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.



let digits = [6,1,4,5,3,9,0,1,9,1,8,6,7,0,5,5,5,4,3];


/*
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function(digits) {
    
    //backwards for loop good case because last index is where the trouble is at
    for(let i = digits.length -1; i >= 0; i--){
        // simeple adding one to last digit to array
        if(digits[i] < 9){
            digits[i] = digits[i] + 1;
            return digits;
        }
        else{
            digits[i] = 0;
        }
    }
    // this would be for the case in which an array is [9,9,9,9]
    // and the function was never broken by a return statement. 
        digits.unshift(1)
        return digits;

};



console.table(plusOne(digits));