"use strict";
let log = console.log
let str = "EBG13 rknzcyr."


function rot13(str) {

    let firstHalf = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let solution = ""

    for (let i = 0; i < str.length; i++) {
        if (firstHalf.includes(str[i].toLowerCase())) {
            if (str[i] == str[i].toLowerCase()) {
                solution += firstHalf[((firstHalf.indexOf(str[i])) + 13) % firstHalf.length]
            }
            else solution += firstHalf[((firstHalf.indexOf(str[i].toLowerCase())) + 13) % firstHalf.length].toUpperCase()
        }
        else solution += str[i]
    }
    return solution
}

log(rot13(str))