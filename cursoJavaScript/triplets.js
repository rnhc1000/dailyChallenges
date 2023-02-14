function compareTriplets(a, b) {
  let lenAlice = a.length;
  let lenBob = b.length;
  let alice = 0;
  let bob = 0;
  let i = 0;
  let temp = [];
  let response = [];
  if (lenAlice != lenBob) return false;
  for (let contentA of a) {
    if (contentA > b[i]) {
      console.log(contentA + " Maior " + b[i]);
      alice += 1;
      console.log("Alice ", alice);
    } else if (contentA < b[i]) {
      console.log(contentA + " Menor " + b[i]);
      bob += 1;
      console.log("bob", bob);
    }
    i++;
    console.log("b " + b[i]);
  }

  response.push(alice, bob);

  return response;
}

function squareMatrix(arr) {
  let right = 0;
  let left = 0;
  let delta = 0;
  let squareMatrix = false;
  let row = 0;
  let column = 0;
  row = arr.length;
  column = arr[0].length;
  let deltaR = 0;
  let sumRight = 0;
  let sumLeft = 0;
  let idx = 0;
  let m = 0;

  let deltaL = 0;

  if (row != column) return false;
  idx = row - 1;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (i == j) {
        sumRight += arr[i][j];
      }
    }
  }

  for (let k = idx; k >= 0; k--) {
    sumLeft += arr[m][k];
    m++;
  }



  delta = sumRight - sumLeft;

  delta >= 0 ? delta : (delta = delta *= -1);

  return delta;
}

let a = [9, -9, 7];
let b = [-1, 2, 5];
console.table(compareTriplets(a, b));

arr = [
  [3, 2, 2, 6],
  [1, 2, 2, 5],
  [1, 3, 3, 4],
  [20, 3, 3, 4],
];

console.table(arr);

console.log("Delta => ", squareMatrix(arr));


