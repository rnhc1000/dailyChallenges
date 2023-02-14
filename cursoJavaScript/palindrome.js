/**
 * @param {string} s
 * @return {string}
 */
function  longestPalindrome(s) {

    let str = s.toLowerCase();
    let rgx = /[a-zA-Z0-9]/g;
    str = str.match(rgx).join("");
    let idxLow = 0;
    let idxHi = str.length-1;
    let see = [];
    let i=0;
    let j=1;
    let filteredString = "";
    let sizeString = str.length;
    let count=1;
    if (sizeString === 1) return str;
    if (sizeString === 2) {
        if (str[0] === str[1]) {
            return str
        } else {
            return str[0];
        }
    }
    if (sizeString === 3) {
        //filteredString=str[0];
        while (count < sizeString) {
            str[i] === str[j] ? filteredString+=str[i] : filteredString+=str[j];
            i+=1;
            j+=1;
            count+=1;
            console.log("Count ", count);
            console.log("Spring ", filteredString);
        }
        return filteredString;
    }

    while (idxLow < idxHi) {
        let i=0;
        while (idxHi >= 0) {
            str[idxLow] === str[idxHi] ? see[i] = true : see[i] = false;
            if(see[i]) {
                filteredString+=str[idxHi];
            }
            i++;
            idxLow++;
            idxHi--;
        }
        idxLow++;
    }
    return filteredString;    
};

s="ccc";
let a = longestPalindrome(s);

console.log("A ", a);