const { collapseTextChangeRangesAcrossMultipleVersions } = require("typescript");

const myStr = "FirstLine\n\t\/SecondLine\nThirdLine"; // Change this line

console.log(myStr);

const someAdjective = "awesome";
let mxStr = "Learning to code is ";
mxStr += someAdjective;

console.log(mxStr);
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];


  console.log({arr});
console.table(arr);

const myArray = [["John", 23], ["cat", 2]];
console.table(myArray);
// Only change code below this line

myArray.push(["dog", 3]);

console.log(myArray);

var retiradoUltimo = myArray.pop();

console.log(retiradoUltimo);
console.table(myArray);
myArray.push(["dog", 3]);

let retiradoPrimeiro = myArray.shift();

console.log(retiradoPrimeiro);
console.table(myArray);
myArray.unshift(["Paul", 35]);
console.table(myArray);