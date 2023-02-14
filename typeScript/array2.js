
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes

  let newArray = [];

  for (let i = 0; i < m; i++) {
    let row = [];
    console.log("conta row " + i);
    // Adds the m-th row into newArray
    for (let j = 0; j < n; j++) {

      console.log("conta column " + j);        // Pushes n zeroes into the current row to create the columns
      row.push(0);
      console.log("Row -> " + row);
      //console.log(row);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    //   console.log(i);
    // console.log(j);
    newArray.push(row);
    //   newArray = [...row];

    console.log("NewArray -> " + newArray)
  }

  // for (let idx in row) {
  //     console.log(idx);
  // }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log({ matrix });

let m = [
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
]