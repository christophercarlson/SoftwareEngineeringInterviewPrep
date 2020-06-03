"use strict";
let log = console.log
let items = [1, 2, 3, 4, 5, 6]
let k = 7

log(8 % items.length)

function josephus(items, k) {

    // notes: There can be cases where k is longer
    // than the actual array, so we need to use the 
    // circular array method to wrap AudioBufferSourceNode. 

    let solutionArr = [];
    let n = items.length
    let startingIndex = (k - 1) % n

    for (let i = 0; i < n; i++) {
        solutionArr.push(items.splice(startingIndex, 1))
        startingIndex = (startingIndex + (k - 1)) % items.length
    }
    return Array.prototype.concat.apply([], solutionArr)
}

log(josephus(items, k))
