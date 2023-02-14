let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiuou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result);

let ohStr = "Ohhhhhhhh no";
let ohRegex = /^Oh{3,6}.*no/; // Change this line
let results = ohStr.match(ohRegex);
console.log(results);

let sampleWord = "ast12";
let pwRegex = /(?=\w{5})(?=\w*\d{2})/; // Change this line
let pwRegexx = /(?=\w{5})(?=[0-9]{2}])/; // Change this line
let resultt= sampleWord.match(pwRegex);
let resultx = pwRegex.test(sampleWord);
console.log(resultt);
console.log(resultx);

let myString = "Franklin D. Roosevelt";
let myRegexx = /(Franklin | Eleanor).*Roosevelt/; // Change this line
let resultw = myRegexx.test(myString);
let resultxw = myString.match(myRegexx)
console.log(resultw);
console.log(resultxw);

let repeatNum = "42 42 42 42" ;
let reRegex = /(\d+)\s\1\s\1$/; // Change this line
let result63 = reRegex.test(repeatNum);
let result633 = repeatNum.match(reRegex);
console.log(result63);
console.log(result633);

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
// Change this line

let replaceText = "$3 $2 $1"; // Change this line
let result20 = str.replace(fixRegex, replaceText);

console.log(result20);

let hello = "   Hello, World!  ";
let wsRegex = /(Hello, World!)/; 
let wsRegexx = /^\s+|\s+$/g;// Change this line
let result93 = hello.match(wsRegex); // Change this line
console.log(result93);

//let result933 = hello.match(wsRegexx); //
let result933 = hello.replace(wsRegex, "");
console.log(result933);