// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits. For example:

// def of absolute value is: the magnitude of a quantity, irrespective of sign; the distance of a quantity from zero. The absolute value of a number is symbolized by two vertical lines, as |3| or |−3| is equal to 3.





function sumDigits(number: number): number {

  let absoluteValue: number = Math.abs(number);
  const arr: string[] = absoluteValue.toString().split("");
  let solution: number = 0;

  for (let i: number = 0; i < arr.length; i++) {
    solution += parseInt(arr[i])
  }
  return solution;
}

console.log(sumDigits(-910));  // Returns 10
console.log(sumDigits(99));  // Returns 18
console.log(sumDigits(-32)); // Returns 5



//online saucy solution:

// export function sumDigits(number: number): number {
//   return Math.abs(number).toString().split('')
//     .reduce((a, b) => a + parseInt(b), 0);

// }