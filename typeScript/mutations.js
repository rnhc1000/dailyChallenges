function mutation(arr) {

    let wordOne = [...arr[0]];
    let wordTwo = [...arr[1]];

    let sizeWordOne = wordOne.length;
    let sizeWordTwo = wordTwo.length;
    let countExistents =0;
    let countNonExistents=0
    for (let i=0; i<wordOne.length; i++){
        for (let j=0; j<wordTwo.length; j++) {
            if (wordOne[i] === wordTwo[j]) {
                countExistents=countExistents+=1;
            } else {
                countNonExistents=countNonExistents+=1;
            }
        }
        // if (count) {
        //     return true;
        // } else {
        //     return false;
        // }


    }
    console.log(countExistents);
    console.log(countNonExistents)
  }
  
  let a = mutation(["hello", "hey"]);
  console.log(a);