"use strict";
let log = console.log

// Array.prototype.sameStructureAs = function (other) {

//     // Edge Case: If other is not an arry.
//     if (Array.isArray(other) == false) return false
//     // Edge Case: if two arrays are different lengths.
//     if (this.length != other.length) return false

//     // Helper function to check if matching objects are array or not. 
//     let checkIfArr = function (obj, obj2) {
//         /// Checks if both are either an array or an object.
//         if (Array.isArray(obj) == Array.isArray(obj2)) return true
//         else return false
//     }

//     // Helper function to check nesting of current matching arrays.
//     let checkNesting = function (arr, arr2) {
//         if (arr.length != arr2.length) {
//             return false
//         }
//         for (let i = 0; i < arr.length; i++) {
//             // if (arr[i].length == 1 && arr2[i].length == 1) continue
//             if (typeof arr[i] != typeof arr2[i]) {
//                 return false
//             }
//             if (typeof arr[i] == 'object') {
//                 if (checkIfArr(arr[i], arr2[i]) == false) return false
//             }
//         }
//         return true
//     }

//     for (let i = 0; i < other.length; i++) {
//         if (this[i].length == 1 && other[i].length == 1) continue
//         if (checkNesting(other[i], this[i]) == false) return false
//     }
//     return true
// }


// log([2, [2, 2]].sameStructureAs(other))
let other = [[1, 1]]
let c = [[[], []]]

Array.prototype.sameStructureAs = function (other) {

    // Edge Case: If other(input array) is not an arry.
    if (Array.isArray(other) == false) return false
    // Edge Case: if two arrays are different lengths.
    if (this.length != other.length) return false

    let a, b, i;

    for (i = 0; i < other.length; i++) {
        a = (Array.isArray(other[i]) ? other[i].length : 1)
        b = (Array.isArray(this[i]) ? this[i].length : 1)
        log(a, b)
        if (a != b) return false
    }
    return true
}


log(c.sameStructureAs(other))




