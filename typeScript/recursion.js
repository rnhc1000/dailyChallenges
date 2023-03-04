
function factorial(num) {
  if (num === 0) { // base code.... the exit condition
    return 1;
  }
  console.log(num)
  return num * factorial(num - 1)
}

// console.log(factorial(20));

function decrescingNumberIterating(num) {
  let f = [];
  let i = 0;
  while (num !== -1) {
    f[i] = num -= 1;
    i++;
    // return num - decrescingNumber(1);
  }
  return f
  // num-=1;

}


console.log(decrescingNumber(10));
function decrescingNumber(num) {
  let f = [];
  let i = 0;
  if (num === 0) {
    return 1;
    // return num - decrescingNumber(1);
  } else {
    f[i] = num - decrescingNumber(num - 1);
    i++;
  }

  return f;
  // num-=1;

}


console.log(decrescingNumber(10));

function descendNum(StartNum) {
  console.log("->",StartNum);

  let NextNum = StartNum - 1;

  if (NextNum > 0) {

    descendNum(NextNum);
  }

}

descendNum(10);/*  */

/**
 * string reversal
 */


function reverseString(text) {
    if (text.length == 1) {
        return text;
    }
    else {
        return text.slice(-1) + reverseString(text.slice(0, -1));
    }
}

console.log(reverseString("Ricardo"))

function reverseArray(arr) {
  /**
   * base case to stop the recursion
   */
  let l = arr.length;
  let rra=[];
  let i=0;

  while (l > 0) {
    rra[i] = arr.slice(l-1,l);
    console.log(rra);
    l--;
    i++;
  }
  return [...rra].flat();
}
console.log(reverseArray([0,1,2,3]))