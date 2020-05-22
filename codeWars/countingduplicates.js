"use strict";
let log = console.log
let text = "identities";


function duplicateCount(text) {
    if (text.length < 2) return 0
    text = text.toLowerCase().split("")
    text = text.filter((item, index) => { return text.indexOf(item) != index });
    return [...new Set(text)].length
}

log(duplicateCount(text))
