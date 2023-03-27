const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = [];
//   arr = newArr.concat(arr);
//   console.log(arr)
  const x = (y,z) => y-z;
//   return arr.sort(x);
return [].concat(arr).sort(x);
  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));