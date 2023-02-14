function findElement(arr, func) {
    let num = 0;
    for (let idx in arr) {
      num = func(arr[idx]);
      if (num) {
        return arr[idx];
      }
    } return undefined;
  }

  let x = findElement([1, 3, 3, 5], num => num % 2 === 0);

  console.log(x);