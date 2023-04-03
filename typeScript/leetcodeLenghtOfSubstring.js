/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let strSet = new Set();
    let rmvIdx = 0;
    let curIdx = 0;
    let longestStr = 0;
    let sizeOfString = s.length;
    while (curIdx < sizeOfString) {
      let char = s[curIdx];
      if (!strSet.has(char)) {
        strSet.add(char);
        curIdx++;
        longestStr = Math.max(strSet.size, longestStr);
      } else {
        strSet.delete(s[rmvIdx]);
        rmvIdx++;
      }
    }
    return longestStr;
  };



let s = "abcabcbb";
s= "bbbbbb";
s = "pwwwkew"

console.log(lengthOfLongestSubstring(s));
