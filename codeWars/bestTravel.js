"use strict";
let log = console.log
var ls = [51, 2, 3, 4, 5]
let t = 163
let k = 3

function chooseBestSum(t, k, ls) {

    // Edge Case: If k(number of places to visit) is more than number of places.
    if (ls.length < k) return null
    // Edge Case: If there is only one place, return the largest. 
    if (k == 1) {
        ls = ls.filter(times => { return times <= t })
        return Math.max(...ls)
    }
    // Edge Case: If they number of places matches desired visiting spots. 
    if (k == ls.length) return ls.reduce((a, b) => a + b, 0)

    let pointerArr = [], solutionArr = [], r = 0, i = 0, n = ls.length, temp;

    while (r >= 0) {
        temp = []
        if (i <= n + ((r - k))) {
            pointerArr[r] = i
            if (r == k - 1) {
                pointerArr.forEach(value => {
                    temp.push(ls[value])
                })
                solutionArr.push(temp)
                i++
            }
            else {
                i = pointerArr
                [r] + 1
                r++
            }
        }
        else {
            r--
            if (r >= 0)
                i = pointerArr[r] + 1
        }
    }
    log(solutionArr)


    solutionArr = solutionArr.map(time => {
        return time.reduce((a, b) => a + b, 0)
    })

    solutionArr = solutionArr.filter(times => {
        return times <= t
    })

    if (solutionArr.length == 0) return null
    return Math.max(...solutionArr)

}

log(chooseBestSum(t, k, ls))




// Another programers saucy solution using recursion. 



// function chooseBestSum(t, k, ls) {
//     var biggestCount = 0;
//     var recurseTowns = function (townsSoFar, lastIndex) {
//         townsSoFar = townsSoFar || [];
//         //base case
//         if (townsSoFar.length === k) {
//             var sumDistance = townsSoFar.reduce((a, b) => a + b);
//             if (sumDistance <= t && sumDistance > biggestCount) {
//                 biggestCount = sumDistance;
//             }
//             return; //EJECT
//         }
//         //recursive case
//         for (var i = lastIndex + 1 || 0; i < ls.length; i++) {
//             recurseTowns(townsSoFar.concat(ls[i]), i);
//         }
//     }
//     recurseTowns();

//     return biggestCount || null;
// }