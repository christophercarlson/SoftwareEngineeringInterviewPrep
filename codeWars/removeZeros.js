"use strict";
let log = console.log
let array = [1, null, "5", "2", 8, 6, null, "0", 0, false]

function removeZeros(array) {

  let placeHolder, temp;
  let end = array.length

  for (let index = 0; index < end; index++) {
    //Checks for zeros then swaps them down to last index.
    if (array[index] === 0 || array[index] === "0") {
      temp = index

      for (let i = temp; i < array.length - 1; i++) {
        placeHolder = array[i];
        array[i] = array[i + 1];
        array[i + 1] = placeHolder;
      }

      index = index - 1
      end = end - 1
    }
  }
  return array
}


log(removeZeros(array))


// a clever solution using temp arrays which was against the rules on this problem but still cool 

// function removeZeros(array) {
//   const head = []
//   const tail = []
//   for (const e of array) {
//     if (e === 0 || e === "0") {
//       tail[tail.length] = e
//     } else {
//       head[head.length] = e
//     }
//   }
//   return [...head, ...tail]
// }
