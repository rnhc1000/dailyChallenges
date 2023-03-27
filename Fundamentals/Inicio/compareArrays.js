const compareArrays = (a, b) =>
  a.length === b.length && a.every((element, index) => element === b[index]);

let array1 = [11, null, 33];
let array2 = [21, 22, 23];
let array3 = [11, undefined, 33];

console.log(compareArrays(array1, array2)); //false
console.log(compareArrays(array1, array3)); //false