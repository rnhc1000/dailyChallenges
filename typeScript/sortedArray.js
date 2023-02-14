function compare(a, b){
    if (a < b){return -1;}
    if (a > b){return 1;}
    if (a === b){return 0;}
  }

function getIndexToIns(arr, num) {
    let lenArr=arr.length;
    arr = arr.sort((a,b)=>a-b);
    num = Math.floor(num);
    if (arr.length === 0){
        return 0;
    }
   for (let idx in arr) {
    if (num <= arr[idx]) {
        return idx;
    }
   }
   return lenArr;
  }

// function sort(a,b) {
//     return a-b;
//   }
  
  let x = getIndexToIns([10, 20, 30, 40, 50], 35);

  console.log(x)

//   let y = [];
//   console.log(y.length)