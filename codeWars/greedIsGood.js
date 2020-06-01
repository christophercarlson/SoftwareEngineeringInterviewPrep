"use strict";
let log = console.log
let dice = [1, 1, , 1, 3, 1];

function score(dice) {

    // Order the dice rolls. 
    dice = dice.sort();
    let i, x, temp, points = 0

    // Point calculation helper function.Takes in an integer
    // or sub - array and return it point value.

    let calc = (value => {

        switch (true) {
            case JSON.stringify(value) === JSON.stringify([1, 1, 1]):
                return 1000
            case JSON.stringify(value) === JSON.stringify([6, 6, 6]):
                return 600
            case JSON.stringify(value) === JSON.stringify([5, 5, 5]):
                return 500
            case JSON.stringify(value) === JSON.stringify([4, 4, 4]):
                return 400
            case JSON.stringify(value) === JSON.stringify([3, 3, 3]):
                return 300
            case JSON.stringify(value) === JSON.stringify([2, 2, 2]):
                return 200
            case value == 1:
                return 100
            case value == 5:
                return 50
            default:
                return 0
        }
    });

    for (i = 0; i < dice.length; i++) {
        log(i + ":")
        if (dice[i] == dice[i + 2]) {
            temp = [dice[i], dice[i + 1], dice[i + 2]]
            i = i + 2
        }
        else temp = dice[i]
        points += calc(temp)
    }
    return points
}

log(score(dice))




