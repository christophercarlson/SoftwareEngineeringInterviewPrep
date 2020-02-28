// Count and Say
// Solution
// The count-and-say sequence is the sequence of integers with the first five terms as following:

// 1.     1
// 2.     11
// 3.     21
// 4.     1211
// 5.     111221
// 1 is read off as "one 1" or 11.
// 11 is read off as "two 1s" or 21.
// 21 is read off as "one 2, then one 1" or 1211.

// Given an integer n where 1 ≤ n ≤ 30, generate the nth term of the count-and-say sequence. You can do so recursively, in other words from the preciousious member read off the digits, counting the number of digits in groups of the same digit.

// Note: Each term of the sequence of integers will be represented as a string.

 

// Example 1:

// Input: 1
// Output: "1"
// Explanation: This is the base case.
// Example 2:

// Input: 4
// Output: "1211"
// Explanation: For n = 3 the term was "21" in which we have two groups "2" and "1", "2" can be read as "12" which 


/*
 * @param {number} n
 * @return {string}
 */

let n = 4;


 const countAndSay = function(n) {
    
    //Base case:  
    if (n === 1) return '1';
   
    //Resets solution every recursive call.
    let result = "", subStr = "", count, cur = "";
 
    //Stores solution to recursive call.
    const previous = countAndSay(n - 1)
    
    //Loop through, push template literals into empty result string.
    // This loop setting length on over its actual size worked to check a digit against undefined, when 
    // there was only a sinlge not reapeting digit at the end.
    for (let x = 0, y = 1; y <= previous.length; y++) {
         
        if(x === previous.length -1 ){
           //checks to see if there is only one digit left to count or check.
           result = result.concat("1",previous[x]); 
           break;
        }

       if(previous[x] !=  previous[y]){
            
           // Places matching integer into  into a temporary substring. 
            subStr = previous.substring(x,y);
           
            //Measure length of substring, finds value of repeated number, adds them to results string. 
            count = subStr.length;
            cur = subStr[0];
            result = result.concat(`${count}`,cur);  
            
            // Drags over x index in string, so we do not have to manipulate original string. 
            x = y;
        }
    }
    return result
};
console.log(countAndSay(n));





