// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

// top_3_words("In a village of La Mancha, the name of which I have no desire to call to
// mind, there lived not long since one of those gentlemen that keep a lance
// in the lance - rack, an old buckler, a lean hack, and a greyhound for
// coursing.An olla of rather more beef than mutton, a salad on most
// nights, scraps on Saturdays, lentils on Fridays, and a pigeon or so extra
// on Sundays, made away with three - quarters of his income.")
// # => ["a", "of", "on"]

// top_3_words("e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e")
// # => ["e", "ddd", "aa"]

// top_3_words("  //wont won't won't")
// # => ["won't", "wont"]


"use strict"
let log = console.log;


let text = "e   "


function topThreeWords(text) {

  const regexp = /[a-z]*\'*[a-z]+/gi;
  text = text.toLowerCase();
  let array = text.match(regexp);
  let array2 = [];
  let solution = [];
  let count, i, x;

  if (array === null) { return [] }
  let setForRemovingDuplicates = new Set(array);
  let nonDuplicateArray = Array.from(setForRemovingDuplicates)

  for (i = 0; i < nonDuplicateArray.length; i++) {
    count = 0;
    for (x = 0; x < array.length; x++) {
      if (nonDuplicateArray[i] == array[x]) {
        count++
      }
    }
    array2.push({ "word": nonDuplicateArray[i], "count": count })
  }

  array2 = array2.sort((a, b) => (a.count < b.count) ? 1 : -1);

  if (array2.length > 2) { solution.push(array2[0].word), solution.push(array2[1].word), solution.push(array2[2].word) }
  if (array2.length == 2) { solution.push(array2[0].word), solution.push(array2[1].word) }
  if (array2.length == 1) { solution.push(array2[0].word) }

  return solution
}



log(topThreeWords(text))





// Better solution found online:

// let topThreeWords = text => {
//   let dict = new Map();
//   text.replace(/[A-z']+(?=[ ]+|$)/g, match => {
//     let word = match.toLowerCase();
//     dict.set(word, dict.has(word) ? dict.get(word) + 1 : 1);
//   });
//   dict.delete("'");
//   return [...dict].sort((a, b) => b[1] - a[1]).map(a => a[0]).slice(0, 3);
// };