// Duplicate Encoder

let word = "Success";


function duplicateEncode(word) {
    var string = "";
    var lowerCaseWord = word.toLowerCase();
    for (var i = 0; i < lowerCaseWord.length; i++) {
        if (lowerCaseWord.indexOf(lowerCaseWord[i]) === lowerCaseWord.lastIndexOf(lowerCaseWord[i])) {
            string += "(";
        } else {
            string += ")";
        }
    }
    return string;
}

// really saucy solution i found on line, nothing but a return statement, function chaining and a ternary operator. 
// function duplicateEncode(word) {
//     return word
//         .toLowerCase()
//         .split('')
//         .map(function (a, i, w) {
//             return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//         })
//         .join('');
// }

console.log(duplicateEncode(word))