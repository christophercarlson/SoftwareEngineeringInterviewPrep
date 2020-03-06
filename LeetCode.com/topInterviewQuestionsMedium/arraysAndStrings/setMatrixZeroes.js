// Set Matrix Zeroes
// Solution
// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

// Example 1:

// Input: 
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
// Example 2:

// Input: 
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// Output: 
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]
// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

// Hide Hint #1  

// If any cell of the matrix has a zero we can record its row and column number using additional memory. But if you don't want to use extra memory then you can manipulate the array instead. i.e. simulating exactly what the question says.
   
// Hide Hint #2  

// Setting cell values to zero on the fly while iterating might lead to discrepancies. What if you use some other integer value as your marker? There is still a better approach for this problem with 0(1) space.
   
// Hide Hint #3  

// We could have used 2 sets to keep a record of rows/columns which need to be set to zero. But for an O(1) space solution, you can use one of the rows and and one of the columns to keep track of this information.
   
// Hide Hint #4  

// We can use the first cell of every row and column as a flag. This flag would determine whether a row or column has been set to zero.


/*
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

 "use strict"; 

 let matrix = [
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]

 


let log = console.log;

var setZeroes = function(matrix) {

  let x,y;
  let xSet = new Set();
  let ySet = new Set();
  
  
  for ( x = 0; x < matrix.length; x++) {
    for ( y = 0; y < matrix[x].length; y++) {
      if(matrix[x][y]===0){   
        xSet.add(x);
        ySet.add(y);
      }
    } 
  }
  
  for ( x = 0; x < matrix.length; x++) {
    for ( y = 0; y < matrix[x].length; y++) {
      if(xSet.has(x) || ySet.has(y)) matrix[x][y]= 0;
    }
  }
  return matrix
};



log(setZeroes(matrix))

