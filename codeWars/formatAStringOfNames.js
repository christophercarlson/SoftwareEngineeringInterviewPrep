"use strict";
let log = console.log


let names = [{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }, { name: 'Homer' }, { name: 'Marge' }]
let names2 = []


function list(names) {

    // Edge cases: 
    // MIN - No names(an empty Array). Other case is with 1-2 names. 

    if (names.length == 0) return '' // Case one:
    if (names.length < 3) return (names.length == 2 ? `${names[0].name} & ${names[1].name}` : names[0].name) // Case two:

    names = names.map((key, index) => { return (index != names.length - 2 ? `${key.name}, ` : `${key.name} & `) })
    return names.join("").slice(0, -2);

}


log(list(names))