"use strict";
let log = console.log
let n = 25



// THIS WAS MY SOLUTION: it was not optimal enough, the solution below I found online it
// uses Euler's function. Not to knowledgeable with  a lot of these mathematics equations
// gonna have to learn some of this stuff again. 

function properFractions(n) {

  let count = 0
  for (let i = 1; i < n; i++) {
    function gcd(a, b) {
      if (b == 0)
        return a;
      else
        return gcd(b, (a % b));
    }
    if (gcd(i, n) === 1) count += 1
  }
  return count
}


// function properFractions(n) {

//   if (n === 1) return 0; // Base case: 

//   let res = n, a = n;

//   for (let i = 2; i <= Math.sqrt(a); i++) {
//     if (a % i === 0) {
//       res = res / i * (i - 1);
//       while (a % i === 0) a /= i;
//     }
//   }
//   if (a > 1) res = res / a * (a - 1)
//   return res
// }

log(properFractions(n))



