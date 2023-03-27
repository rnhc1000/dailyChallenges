// ES5 version
let flattened = [[1, 2], [3, 4], [5, 6]].reduce(function (acc, curVal) {
    return acc.concat(curVal)
  }, []);
  
  // ES6 version
  let flattenedd = [[1, 2], [3, 4], [5, 6]].reduce((acc, curVal) => acc.concat(curVal), []);
  
  console.log(flattenedd); // [1,2,3,4,5,6]

  //Reducing Objects

// ES5 version
let arr = [ { Item: "A", Quantity : 2,}, { Item: "B", Quantity : 7,}, { Item: "C", Quantity : 10,} ];

const flattenObjj = arr.reduce(function (acc, curVal) {
  return `${acc} ${curVal.Item} : ${curVal.Quantity},`
}, '');

// ES6 version
const flattenObj = arr1.reduce((acc, curVal) => `${acc} ${curVal.Item} : ${curVal.Quantity},`, '');

console.log(flattenObj); // A : 2, B : 7, C : 10,