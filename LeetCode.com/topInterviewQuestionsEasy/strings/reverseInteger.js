// Given a 32-bit signed integer, reverse digits of an integer.

// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2^31,  2^31 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

/*
 * @param {number} x
 * @return {number}
 */


let x = 9646324351;
let y = -123;
 
var reverse = function(x) {
    
    // settins up threshholds 
    const max = Math.pow(2, 31) - 1;
    const min = Math.pow(-2, 31)
    // change to a string, split it up to an array, reverse number, rejoin back to a string, make into a number
    // then multiply it to make sure it is negative or Positive. 
    x = parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x);
    // conditional statement preventing solution from 
    if( x > max && x < min){
        return x
    }
    else return 0;
    
}


console.log(reverse(x));

