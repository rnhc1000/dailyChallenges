/**
 * 
 * @param {*} ms 
 * @returns Promise
 */

function sleep (ms) {
  return new Promise((resolve) => setTimeout(resolve,ms));
}

function sumUpAsync(x,y) {
  return new Promise((resolve,reject) => {
    let i=10;
    sleep(1000).then(() => {
      while(i!=0){
        console.log(".");
        i--;
      }
      resolve(x+y);
    });
  });
}


// sumUpAsync(5,7).then(((result)=> {
//   console.log(result)
// }))


async function sumUP(x,y) {
  console.log("...........");
  await sleep(1000);
  return (x+y)
}


sumUP(5,7).then((result) => {
  console.log(result)
})