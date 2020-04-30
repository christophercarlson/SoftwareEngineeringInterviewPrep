//Sum of Digits / Digital Root

function digital_root(n) {
    let str = n.toString();
    let arr = str.split('')

    //Base Case
    if (arr.length == 1) return n;

    let newSum = 0;
    for (let i = 0; i < arr.length; i++) {
        newSum += parseInt(arr[i]);
    }

    return digital_root(newSum);
}