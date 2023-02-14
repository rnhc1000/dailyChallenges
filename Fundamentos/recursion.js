// let a = (a, b) => a ** b;

// console.log(a(2, 3));

// console.log("\n");

// function power(x, y) {
//   /**
//    * base case: y === 1;
//    * decreases y every recursion
//    */
//   if (y === 0) return 1;
//   if (y === 1) return x;
//   return x * power(x, (y -= 1));
// }
// console.log("Power -----------------------");

// let x = 2;
// let y = 0;
// console.log(power(x, y));

// function factorial(num) {
//   if (num === 1) return num;
//   return num * factorial((num -= 1));
// }

// // function sumRange(num) {
// //     if (num === 1) return num;
// //     console.log(num);
// //     return num + sumRange(num-=1);
// // }

// // let num =10
// // console.log(sumRange(num));
// console.log("Factorial -----------------------");

// let num = 3;
// console.log(factorial(3));

// function countDown(num) {
//   setTimeout(() => {
//     if (num <= 0) {
//       console.log("Done");
//       return num;
//     }
//     console.log(num);
//     num--;

//     countDown(num);
//   }, 1000);
// }

// console.log("CountDown -----------------------");

// countDown(5);

// function pow(x, y) {
//   let p = 0;
//   if (y === 0) return 1;
//   if (y === 1) return x;

//   console.log(x, y);
//   return x * pow(x, (y -= 1));
// }

// x = 2;
// y = 4;
// console.log("Pow ", pow(x, y));

function fib(num) {
  let sequence = new Array(num);
  let size = sequence.length;
  let posMax= size-1;
  let iniciaFibo = 1;

  console.log(size, posMax);
  for (let j = 0; j < 2; j++) {
    sequence[j] = iniciaFibo;
  }

  //console.log("Sequence ", sequence)
  let i = 0;
  for (let k = 2; k < size; k++) {
    sequence[k] = sequence[i] + sequence[++i];
    //console.log("i=",i);
  }
  return (sequence[posMax]);
}


num = 4;

console.log(fib(28));



function recurseFib(num) {
    let sequence = new Array(num);
    let size = sequence.length;
    let posMax= size-1;
    let iniciaFibo = 1;
  
    console.log(size, posMax);
    for (let j = 0; j < 2; j++) {
      sequence[j] = iniciaFibo;
    }
  
    //console.log("Sequence ", sequence)
    let i = 0;
    for (let k = 2; k < size; k++) {
      sequence[k] = sequence[i] + sequence[++i];
      //console.log("i=",i);
    }
    return (sequence[posMax]);
  }
  