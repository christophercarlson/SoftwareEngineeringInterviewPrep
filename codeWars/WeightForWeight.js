"use strict";
let log = console.log
let strng = "498544 21 403292 60 56848 106 210233 180 124467 163 261754 1 433762 48 366702 47 93066 124 79010 111 25"

function orderWeight(strng) {

    // MANIPULATE INPUT DATA TO OUR FAVOR. 
    strng = strng.trim();
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

// My solution Passes on my matchMedia, but fails on codeWars i checked
//  and i know solution is right. somthing seems fishy with there testing. 