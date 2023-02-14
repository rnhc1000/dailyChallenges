function countdown(n){
    if (n <= 0) {
      return []; //base case
    } else {
        console.log(n);
        const countArray = countdown(n-1);
        countArray.unshift(n);
        return countArray;
    }
  }

  let a = countdown(10);
  console.log(a)

//   console.log(countdown(5));
// function countup(n) {
//     if (n < 1) {
//       return [];
//     } else {
//       const countArray = countup(n - 1);
//       countArray.push(n);
//       return countArray;
//     }
//   }
//   console.log(countup(5));