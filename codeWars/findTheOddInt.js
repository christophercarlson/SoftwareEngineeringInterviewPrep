// Given an array, find the integer that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.


"use strict";
let log = console.log
let test = [1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]

let unique = new Set(test);
unique = Array.from(unique);

function findOdd(A) {

    let unique = new Set(A);
    unique = Array.from(unique);


    for (let x = 0; x < unique.length; x++) {
        let count = 0;
        for (let y = 0; y < A.length; y++) {
            if (unique[x] == A[y]) count++;
        }
        if (count % 2 == 1) return unique[x]
    }
}

log(findOdd(test))