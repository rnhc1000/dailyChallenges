// var startTime, endTime;

// function start() {
//   return startTime = new Date();
// }

// function end() {
//   return endTime = new Date();
// }

// function alerta() {
//     console.log("Ola....");
// }

// let a = start();
// console.log(a);

//setTimeout(alerta,1000);

//let b = end();

//console.log(b);

//let diff = b-a;

//console.log(diff);

// // const timeout = (duration) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(resolve,duration)
// //     });
// // };

// // let bx = 0;

// // timeout(3000).then(function() {
// //     console.log(bx = end());
// // })

// // console.log(bx);

// // } = new Promise(function(resolve,reject) {
// //     setTimeout(alerta(), 3000);
// //     resolve();
// // });
// let b=0;

// // myPromise.then(function () {
// //      b = end();
// // });

// //console.log(b);
// //

// async function startt() {
//     const result = await new Date();
//     console.log("start" + result)
//   }

// async function endd() {
//     const result = await new Date();
//     console.log(result);
//   }

//   startt();
//   endd();

//   const timeoutt = (duration) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve,duration)
//     });
// };

//  let bx = 0;

// timeout(3000).then(function() {
//     console.log(bx = end());
// })
// let inicio = new Date();
// console.log("Inicio ->" + inicio)
// let final=new Date();

function endTime(arr, num) {
  return new Promise((resolve) => {
    let count = 0;
    arr = [...arr];
    num = [...num];
    let inicio = new Date();
    console.log(arr);
    console.log(num);
    for (let idx of arr) {
      for (let j = 0; j < num.length; j++) {
        if (arr[idx] === num[j]) {
            let rnd = parseInt(100000*Math.random());
            for(let k=0; k <= rnd; k++) {
                ;
            }
          count += 1;
          console.log("Teclando -> ", num[j] + " " + j + "...");
        }
      }
      console.log(count);
    }
    let final = new Date();
    // console.log(typeof inicio);
    // console.log(typeof final);
    let diff = final - inicio;
    console.log("Respondendo a promise... ->" + final);
    console.log("Delta -> " + diff + "ms");
  });
}

function handlePromise(arr, num) {
  console.log("Aguardando a promise...Inicio-> ");
  endTime(arr, num).then((result) => {});
}
let arr = "5678123409";
let num = "75789";
handlePromise(arr, num);
