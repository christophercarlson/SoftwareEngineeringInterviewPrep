"use strict";
let log = console.log
let strng = " 298025 51 252989 165 466047 70 468168 117 401291 9 305171 13 171347 120 134693 16 232291 163 317804 104 74"


function orderWeight(strng) {

    let stringArr = strng.split(" ")
    stringArr = stringArr.sort()
    let stringToInt = []
    let solutionArr = []
    let finalSolution = []

    //Adds string values, creates array of calculated integers. 
    stringToInt = stringArr.map((value) => {
        value = value.split("").map(function (t) { return parseInt(t) })
        return value.reduce((a, b) => a + b, 0)
    })
    // makes key value pairs with strings and there summed int.
    for (let i = 0; i < stringArr.length; i++) {
        solutionArr.push([stringToInt[i], stringArr[i]])
    }
    // Sort Array and populate final solution array. 
    solutionArr = solutionArr.sort((a, b) => a[0] - b[0])

    solutionArr.forEach((value, index) => {
        finalSolution.push(value[1])
    })
    return finalSolution.join(" ")
}

log(orderWeight(strng))
