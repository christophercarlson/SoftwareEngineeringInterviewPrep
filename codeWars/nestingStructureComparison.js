"use strict";
let log = console.log

let other = [[1, 1]]
let c = [[[], []]]

Array.prototype.sameStructureAs = function (other) {

    // Edge Case: If other(input array) is not an arry.
    if (Array.isArray(other) == false) return false
    // Edge Case: if two arrays are different lengths.
    if (this.length != other.length) return false

    let a, b, i, x;

    for (i = 0; i < other.length; i++) {
        a = (Array.isArray(other[i]) ? other[i].length : 1)
        b = (Array.isArray(this[i]) ? this[i].length : 1)
        if (a != b) return false
        else {
            for (x = 0; x < other[i].length; x++) {
                if (typeof other[i][x] == 'object' && typeof this[i][x] != 'object') return false
                if (typeof this[i][x] == 'object' && typeof other[i][x] != 'object') return false
            }
        }
    }
    return true
}


log(c.sameStructureAs(other))




