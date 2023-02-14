function palindrome(str) {
  str = str.toLowerCase();
  let regex = /[a-zA-Z0-9]/g;
  str = str.match(regex).join("");
  //str=str.join("");

  str = [...str];
  //console.log(str);
  let idxA=0;
  let idxB=str.length-1;

  let see =[];

  while (idxA < str.length)  {
    let i=0;

    while (idxB > 0) {
    // for (idxB=str.length-1; idxB > 0 ; idxB-- ){
    //     console.log(idxA, idxB)
    //     console.log(str[idxA], str[idxB])
        //console.log(idxA, idxB)
        str[idxA] === str[idxB] ? see[i] = true: see[i] = false;
        i++;
        idxA++;
        idxB--;
    }
    idxA++;
    //console.log(idxA)
  }
 
  //console.log(see);

  let result = see.every(el => el ? true : false);

  //console.log(result);
  return result;

}
  

  
  
  //   let stx = str.replace(/,/g, "")
    // str=str.match(/,/g);
//   console.log(stx)

  //return true;
// }

// console.log(palindrome("eye"));
// console.log(palindrome("ana"));
// console.log(palindrome("Eye"))
// console.log(palindrome("3223"));
// console.log(palindrome("RACE*!CAR"));
// console.log(palindrome("TACO CAT"));
// console.log(palindrome("NEVER ODD OR  EVEN"))
// console.log(palindrome("2A*A"));

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

  let str = s.toLowerCase();
  let rgx = /[a-zA-Z0-9]/g;
  str = str.match(rgx).join("");
  //console.log(str)
  let lenStr = str.length;
  let idxA = 0;
  let idxB = str.length - 1;
  let see = [];
  let pal = "";
  let strTemp = "";
  let k = 0;
  console.log(lenStr);
  if (lenStr <= 2) return str[0];
  // if (lenStr === 3)
  // if (lenStr <= 3 ) {
  //   for (k=0; k < lenStr; k++){
  //     console.log(str[k])
  //     console.log(str[k+1])
  //     if (str[k] === str[lenStr-1]){
  //       console.log("Entrei no loop")
  //       strTemp+=str[k];
  //       console.log(strTemp)
  //       lenStr--;
  //     }
  //   }
  //   //return strTemp;
  // }
  while (idxA < str.length) {
    let i = 0;
    while (idxB !== 0) {
      str[idxA] === str[idxB] ? see[i] = true : see[i] = false;
      if (see[i]) {
        pal += str[idxA];
        //console.log(pal)
      }
      //console.log("Pal",pal)
      i++;
      idxA++;
      idxB--;
    }
    idxA++;
  }
  //console.log(pal)
  //let result = pal.filter((el) => el || 0).join("");


  //console.log(typeof result)
  //console.log(pal)

  return pal;


};


// console.log(longestPalindrome("eye"));
// console.log(longestPalindrome("ana"));
// console.log(longestPalindrome("Eyy"))
// console.log(longestPalindrome("3223"));
// console.log(longestPalindrome("RACE*!CAR"));
// console.log(longestPalindrome("TACO CAT"));
// console.log(longestPalindrome("NEVER ODD OR  EVEN"))
// console.log(longestPalindrome("2A*A"));
// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("bb"));
console.log(longestPalindrome("ac"));
console.log(longestPalindrome("ABB"));
console.log(longestPalindrome("x"));