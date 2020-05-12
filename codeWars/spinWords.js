var str = "Visia"

function spinWords(str) {

    let splitUp = str.split(" ")
    for (let i = 0; i < splitUp.length; i++) {
        if (splitUp[i].length >= 5) {
            splitUp[i] = splitUp[i].split("").reverse().join("");
        }
    }
    return splitUp.join(" ")
}

console.log('solution:', spinWords(str))