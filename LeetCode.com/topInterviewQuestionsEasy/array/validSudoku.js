// Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// True

let board2 =
[
  ["5","3",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
];

// False:

let board =
[
    [".",".",".",".",".",".","5",".","."],
    [".",".",".",".",".",".",".",".","."],
    [".",".",".",".",".",".",".",".","3"],
    [".","2",".","7",".",".",".",".","."],
    ["8","3","6","5",".",".",".",".","1"],
    [".",".",".",".",".","1",".",".","."],
    ["2",".",".",".",".",".",".",".","5"],
    [".",".",".",".",".",".",".",".","7"],
    [".",".",".","4",".",".",".","7","."]
]



/*
 * @param {character[][]} board
 * @return {boolean}
 */

//  ALGORITHM:
//  1. Needs to iterate through 3D array succesfully. 
//  2. check each row and each column for duplicates
//  3. Check all our 3x3 boxes. 


var isValidSudoku = function(board) {
   
    //initialize variables used
    let tempRow;
    let tempColumn;
    let subBoxIndex;

    let subBoxes = [ [],[],[],[],[],[],[],[],[] ];
    
    let conditionArrayRow;
    let conditionArrayCol;
    let conditionSubBox;
   

    // iterate through matrix with nested loop
    for (let x = 0; x < board.length; x++) {
        
        tempRow = [];
        tempColumn = [];  
        conditionArrayRow = [];
        conditionArrayCol = [];


        for (let y = 0; y <board.length; y++) {

            // logic to find sub-box index 0-8
            subBoxIndex = Math.floor(y / 3) + (Math.floor(x / 3) * 3);
            
            // populate temporary arrays filtering out "."
            if (board[x][y] != ".") tempRow.push(board[x][y]);
            if (board[y][x] != ".") tempColumn.push(board[y][x]);
            if (board[x][y] != ".") subBoxes[subBoxIndex].push(board[x][y]);
        }

        tempRow.filter((item,index) => { conditionArrayRow.push(tempRow.indexOf(item) === index) });
        if(conditionArrayRow.includes(false)){ return false }

        tempColumn.filter((item,index) => { conditionArrayCol.push(tempColumn.indexOf(item) === index) });
        if(conditionArrayCol.includes(false)){ return false }
    }

    for (let i = 0; i < 9; i++) {
    
        conditionSubBox = [];
        subBoxes[i].filter((item,index) => { conditionSubBox.push(subBoxes[i].indexOf(item) === index) });
        if(conditionSubBox.includes(false)){ return false }
    }

    return true; 
}


console.table(isValidSudoku(board));


