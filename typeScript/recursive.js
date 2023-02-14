function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0; // base case
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }

  // Only change code above this line
}

let arr = [1, 2, 3, 4, 5];
let n = 4;
let soma = sum(arr, n);
console.log(soma);
