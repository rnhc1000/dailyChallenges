function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    console.log({arr});
    for (let i=0; i < arr.length; i++) {
        console.log(arr[i]);
      for (let j=0; j<arr[i].length; j++) {
        product = product*parseInt(arr[i][j]);
        console.log(arr[j]);
        console.log(product);
      }
    }
    // Only change code above this line
    return product;
  }
  
//   let c = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
let c = multiplyAll([[5, 1], [0.2, 4, 0.5], [3, 9]]);
  console.log(c);

  // Setup
const mzArray = [];
let i = 10;

// Only change code below this line

do {
  mzArray.push(10);
  i++;
} while (i < 11);

console.log(mzArray)
console.log(i);