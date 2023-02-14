function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = [];
    console.log("conta row " + i);
    for (let j = 0; j < n; j++) {
      console.log("conta column " + j);
      row.push(0);
      console.log("Row -> " + row);
    }
    newArray.push(row);
    console.log("NewArray -> " + newArray);
  }
  return newArray;
}

var powerSet = function (arr) {
  let arrSize = arr.length;
  let sizePowerSet = parseInt(Math.pow(2, arrSize));
  let counter = 0;
  let i,idx = 0;
  let j = 0;
  let ar = new Array();
  for (i = 0; i < sizePowerSet; i++) {
    for (j = 0; j < arrSize; j++) {
      ar[i] = new Array();
    }
  }
  console.log(ar)
  // console.log(ar[0][0])
  //   let ind=[];
  //   if(Array.isArray(ar[0])) {
  //     ar[counter][idx]=0;
  //   } else {
  //     ar[0]=[0];
  //   }
  for (counter = 0; counter < sizePowerSet; counter++) {
    for (i = 0; i < arrSize; i++) {
        console.log("i normal ",i)
        console.log("Counter -> ",counter);
      if ((counter & (1 << i)) > 0) {
        console.log("i << =",i)
        // console.log("Counter -> " + counter);
        ar[counter][i] = arr[i];
      }
    //   console.log("J-> " + j);
      //  ind[j]=ar[i];
      //  j+=1;
    }

    // j=0;
  }

  let ax=[];

   let k;

  for (i=0; i<ar.length; i++){
    for (j=0; j<ar[i].length; j++){
        ax =ar[j].reduce((acc,i)=> i=k ? [...acc,k] : acc, []);

    // console.log(typeof ax[i][j]);
    }

    }
  console.log(ar); //console.log(i)
};
for(let w=0; w<2;w++) {
for (let y=0; y<2; y++) {
    let b = (1 << y);
    let c = w & b;
    console.log(y + " " + b + " " + w + " " + c);
    
}
}
let b = (1 << 0);
console.log(b);
nums = [1, 2];

let a = powerSet(nums);
