// Given an array(arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes.Eyes can be marked as : or;
// -A smiley face can have a nose but it does not have to.Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) : D; -D : ~)
// Invalid smiley faces:
// ; ( :> :} :]

// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;


"use strict";
let arr = [':D', ':~)', ';~D', ':)'];


function countSmileys(arr) {

    // Edge cases: 
    // Min - an empty arr.
    // Max - string in smiley is length of four.

    if (arr.length == 0) return 0; // this checks min edge case:

    // There can be three cases:
    // 1. where there is only eyes and a mouth. 
    // 2. where there is eyes, mouth, and a nose.
    // 3. where there can be 

    // Our solution to return initialized.
    let count = 0;

    for (let i = 0; i < arr.length; i++) {

        // This checks max edge:
        if (arr[i].length > 3) continue;

        // Check eyes:
        if (arr[i].charAt(0) != ":" && arr[i].charAt(0) != ";") {
            continue;
        }
        //check mouth:
        if (arr[i].charAt(arr[i].length - 1) != ")" && arr[i].charAt(arr[i].length - 1) != "D") {
            continue;
        }
        // checking length to see if nose qualifies.
        if (arr[i].length == 3) {
            if (arr[i].charAt(1) != "-" && arr[i].charAt(1) != "~") {
                continue;
            }
            else {
                count++
                continue;
            }
        }
        count++;
    }

    return count;
}

console.log(countSmileys(arr))














// A saucy solution I just saw after submitting  


// function countSmileys(arr) {
//     return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
// }