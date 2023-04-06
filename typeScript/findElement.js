/**
 * 
 * @param {*} arr 
 * @param {*} func 
 * @returns 
 */

function findElement(arr, findOdd) {
  let pos = [];
    let num = [];
    for (let idx in arr) {
      num[idx] = findOdd(arr[idx]);
      if (num[idx]) {

        pos[idx] = idx

      }
      console.log(num);
      // if (num) {
      //   return arr[idx];
      // }
    } //return undefined;
    console.log(pos);
    const position = pos.filter(pos => pos !== "");
    console.log(position);
    const resp = num.filter(num => num === true);
    console.log(resp)

  }


  function findOdd(num) {

    return num % 2 == 1;
  }

  let x = findElement([1, 2, 3, 5], findOdd);

  console.log(x);