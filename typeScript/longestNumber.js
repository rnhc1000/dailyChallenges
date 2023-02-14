function largestOfFour(arr) {
    let largest = [];
    let current =[];
    let jMax=0;
    for (let idx in arr) {
        arr[idx].sort((a,b)=>a-b);
    }
    for (let idx in arr) {          
        largest[jMax] = Math.max(...arr[idx]);
        jMax+=1;
        //console.log(jMax);
        //     // console.log("Size -> "+ arr[idx].length)
        //     current[i] = arr[idx][i];
        //     jMax = arr[idx].length-1;
        //     // largest[i] = arr[idx][i];
        //     // console.log("Current -> " + current[i])
        //     console.log("jMax -> " + arr[idx][jMax]);
        //     if (current[i] > arr[idx][jMax]) {
        //         // console.log(largest[i]);
        //         largest[i] = current[i];
        //         console.log(largest[i]);
        //         jMax-=1;
        //         console.log(jMax)
        //     } 
        // }
    }
    //console.log(largest);
    return largest;
  }

  
  let r = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1,757]]);
  console.log(r);