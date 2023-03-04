/**
 * Given a string s, return the longest palindromic substring in s.
 * 
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 * 
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 * 
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    let str = s.toLowerCase();
    let rgx = /[a-zA-Z0-9]/g;
    str = str.match(rgx);
    console.log(str);
    let idxLow = 0;
    let idxHi = str.length - 1;
    let see = [];
    let i = 0;
    let j = 1;
    let filteredString = "";
    let sizeString = str.length;
    let count = 1;

    switch (sizeString) {

        case 1:
            return str;
            break;

        case 2:
            if (str[0] === str[1]) {
                return str;
            } else {
                return str[0];
            }
            break;

        default:
            break;
    }

    /**
     * if (sizeString === 1) return str;
     * if (sizeString === 2) {
     *    if (str[0] === str[1]) {
     *       return str;
     *    } else {
     *    return str[0];
     *    }
     * }
     */

    if (sizeString === 3) {
        console.log("String...", sizeString);
        console.log(str);
        for (let kk = 0; kk < sizeString; kk++) {
            if (str[i] === str[j]) {
                filteredString = filteredString + str[i];
                console.log("No loop...");
                console.log(i, j, count, filteredString);
            }
            i += 1;
            j += 1;
            count += 1;
        }
        return filteredString;
    }

    while (idxLow < idxHi) {
        i = 0;
        while (idxHi >= 0) {
            str[idxLow] === str[idxHi] ? see[i] = true : see[i] = false;
            if (see[i]) {
                filteredString += str[idxLow];
            }
            i++;
            idxLow++;
            idxHi--;
        }
        idxLow++;
    }
    return filteredString;
};

let s = "abb";

console.log(longestPalindrome(s));