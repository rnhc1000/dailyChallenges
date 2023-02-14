function diffArray(arr1, arr2) {
    let newArr = [];
    let i=0;
    newArr=[...arr1,...arr2];
    console.log(newArr);
    const x = (y,z) => y-z;
    newArr.sort(x);
    newArr = [...new Set(newArr)];

    newArr = newArr.filter((el,pos) => newArr.indexOf(el) === pos);
    console.log(newArr);
    // let str = '123';
    // console.log(typeof str);
    // let num = +str;
    // console.log(typeof num)

    // for (let idx in arr1){

    //   if (arr1.indexOf(arr1[idx])  !== -1) {
    //     console.log("-1",arr1[idx]);
    //   } else {
    //     console.log("1",arr1[idx]);
    //   }
    // }

    let l1 = arr1.length;
    let l2 = arr2.length;



        for(let j=0; j< l2; j++) {
          if (arr1.includes(arr2[j])) {
            console.log(arr2[j]);
          } else {
            console.log("N existe!", arr2[j]);
          }
        
        }
      
    
   //return newArr;
    // for (let idx of arr1) {
    //     for (let idy of arr2){
    //         if (arr1[idx] === arr2[idy]) {
    //             newArr[i] = arr2[idy];
    //             i++;
    //         }
    //     }
    // }
    // return newArr;
  }

  
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));

const n = 7
const nMap = {
  1: 'res-1',
  2: 'res-2',
  3: 'res-3'
}
const result = nMap[ n ]
console.log(result);

const conditions = [ 1, 2, 3, 4, 5 ] // You just need to add new numbers here
if (conditions.includes(n)) {
  console.log("---");
  console.log(conditions.indexOf(n));
} else {
  console.log(conditions.indexOf(n));

}