/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  var result = [];
  var charAlreadyInResult = []
  for (var i = 0; i<string.length; i++) {
    // go thru each letter
    var thisArr = []
    var thisChar = string[i]
    // if this character doesnt exist in the result
    if ( charAlreadyInResult.indexOf(thisChar) === -1 ) {
      // make a new tuble
      thisArr.push(thisChar);
      thisArr.push(1);
      // add this char to the memory
      charAlreadyInResult.push(thisChar);
      // push to result arr
      result.push(thisArr);
    } else {
      result[charAlreadyInResult.indexOf(thisChar)][1]++;
    }
  }
    // now we will have an array of arrays based on the order of occurance
    // how to sort??
    // descending order in frequency first
    // then asending order by character
   var sortFun = function (tub1, tub2) {
    if (tub1[1] < tub2[1]) {
      return 1;
    } else if (tub1[1] > tub2[1]) {
      return -1;
    } else {
      return tub1[0] < tub2[0] ? -1 : 1;
    }
   };
   return result.sort(sortFun);
};

// test cases

// var a = characterFrequency('mississippi');
// var b = characterFrequency('miaaiaaippi');
// var c = characterFrequency('mmmaaaiiibbb');

// console.log(a);
// console.log(b);
// console.log(c);
