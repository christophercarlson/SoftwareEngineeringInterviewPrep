"use strict";
let log = console.log
let test = 59884848459853

function nextSmaller(n) {

    let tempArr = []
    let combinationsArrStr
    let combinationsArrNum1
    let combinationsArrNum2
    let nextSmallerIndex
    let numArr = Array.from(n.toString()).map(Number)

    // Helper function for getting the permutations of a Number array.
    // I did not write this function. 
    let findPermutations = (string) => {
        if (!string || typeof string !== "string") {
            return "Please enter a string"
        } else if (string.length < 2) {
            return string
        }

        let permutationsArray = []

        for (let i = 0; i < string.length; i++) {
            let char = string[i]

            if (string.indexOf(char) != i)
                continue

            let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

            for (let permutation of findPermutations(remainingChars)) {
                permutationsArray.push(char + permutation)
            }
        }
        return permutationsArray
    }

    for (let i = numArr.length - 1; i > 0; i--) {

        tempArr = numArr.slice(i - 1, numArr.length)
        combinationsArrStr = findPermutations(tempArr.join(""))
        tempArr = parseInt(tempArr.join(""))
        combinationsArrNum1 = combinationsArrStr.map((value) => { return parseInt(value) })
        combinationsArrNum2 = combinationsArrNum1.filter((value) => { return value < tempArr })

        if (combinationsArrNum2.length == 0) continue
        else {
            nextSmallerIndex = combinationsArrNum1.indexOf(Math.max(...combinationsArrNum2))
            tempArr = numArr.slice(0, i - 1)
            let solution = parseInt((tempArr.concat(combinationsArrStr[nextSmallerIndex].split(""))).join(""))
            return solution.toString().split("").length == numArr.length ? solution : -1
        }
    }
    return -1
}


log(nextSmaller(test))




