"use strict";
let log = console.log

let blank = {}
let recipe = { flour: 500, sugar: 200, eggs: 1 };
let available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };

function cakes(recipe, available) {

    // Edge cases:
    // 1. MIN: either object ingredients or recipe is missing (an empty object).

    let amountsArr = []
    if (JSON.stringify(recipe) === '{}' || JSON.stringify(available) === '{}') return 0; //checks if either list are empty

    for (let [key] of Object.entries(recipe)) {
        if (key in available == false) return 0
        amountsArr.push(Math.floor(available[key] / recipe[key]))
    }
    return Math.min(...amountsArr)
}


log(cakes(recipe, available));



