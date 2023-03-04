function filteredArray(arr, elem) {
    let newArr = [];
    console.log(arr);
    let len = arr.length;
    console.log(len);
    // Only change code below this line
    for(let i=0; i<len; i++) {
      if (arr[i].indexOf(elem) === -1) {
        console.log(arr[i].indexOf(elem));
        newArr.push(arr[i]);
      } else {

        console.log("index -> "+arr[i].indexOf(elem))

      }
      
    }
    // Only change code above this line
    return newArr;
  }
  
let x = filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 26);

console.log(x);