/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

  let len = s.length - 1;
  let i, j = 0;

  j = s.length - 1;
  let sequence = [];
  for (i = 0; i < s.length; i++) {
    for (j = len; j > 0; j--) {
      console.log(i, j);
      if (s.charAt(i) === s.charAt(j)) {
        console.log(s.charAt(i))
        sequence[i] = s.charAt(i);
      }
    }


  }


  console.log(sequence)

};

lengthOfLongestSubstring("abcabcbb");
/**
 * 
 * @param {*} s 
 * @returns 
 * The Set object lets you 
 * store UNIQUE values of any type, 
 * whether primitive values or object references.
 * A value in the Set may only occur once;
 */
let lengthOfLongestSubstrings = function (s) {
  let strSet = new Set();
  console.log(strSet); //Set(0) {}
  let rmvIdx = 0; //se repetido retirar da string
  let curIdx = 0;
  let longestStr = 0; // maior comprimento 
  while (curIdx < s.length) {
    let l = s[curIdx]; // iterando a str a partir de curIdx
    console.log("L", l)
    console.log(strSet.has(l));
    if (!strSet.has(l)) {
      // The Set has method checks if a value is in a Set object
      // Returns a boolean asserting whether an element is 
      // present with the given value in the Set object or not.
      strSet.add(l);
      // Inserts a new element with a specified value in to a Set object, 
      // if there isn't an element with the same value already in the Set.
      curIdx++;
      longestStr = Math.max(strSet.size, longestStr);
      // Math.max returns the largest...
      // using size method to recover the size of a set

    } else {
      strSet.delete(s[rmvIdx]);
      // using the delete method to remove an element from Set
      console.log("S", strSet)
      rmvIdx++;
    }
  }
  return longestStr;
};

console.log(lengthOfLongestSubstrings("abcabcabcaa"));


let lengthOfLongestSubstringx = function (s) {
  let strSet = new Set();
  let rmvIdx = 0;
  let curIdx = 0;
  let longestStr = 0;
  while (curIdx < s.length) {
    let l = s[curIdx];
    if (!strSet.has(l)) {
      strSet.add(l);
      curIdx++;
      longestStr = Math.max(strSet.size, longestStr);
    } else {
      strSet.delete(s[rmvIdx]);
      rmvIdx++;
    }
  }
  return longestStr;
};