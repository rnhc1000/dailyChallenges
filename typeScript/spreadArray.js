function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Only change code below this line
      newArr.push([...arr]);
      //console.log(newArr)
      // Only change code above this line
      num--;
    }
    return newArr;
  }
  
const a = copyMachine([true, false, true], 2);
console.log(a)