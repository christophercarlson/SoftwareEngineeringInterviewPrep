
let log = console.log
let array = [3, 5, -4, 8, 11, 1, -1, 6]
let targetSum = 10



function twoNumberSum(array, targetSum) {

  for (let x = 0; x < array.length; x++) {
    for (let y = array.length - 1; y > x; y--) {
      if (array[x] + array[y] == targetSum) {
        return [array[x], array[y]]
      }
    }
  }
  return []
}



console.log(twoNumberSum(array, targetSum))

