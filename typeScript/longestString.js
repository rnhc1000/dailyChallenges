function findLongestWordLength(str) {

    let rts = [...str]
    console.log(rts.length);
    str = str.split(" ");
    // let sep ="\\\\";
    // let regex = /\s+/g;
    // str = str.replace(regex, sep);
    console.log(str.length);

    console.log(str);
    // let arr=[
    //     [1]
    // ];
    // let i=0;
    // let j=0;
    let currentLength = 0;
    let maxLength = 0;
    for (let idx in str) {
        // console.log("i -> ",i);
        // console.log("j -> ",j)
        // for (i=0; i<=str.length; i++) {
        //     let innerLength = str[i].length;
        //     console.log(innerLength);
        //     for (j=0; j<innerLength; j++) {
        //         if (str[idx] !== "\\\\") {
        //             // arr[i][j]= str[idx]; 
        //             console.log(str[idx]);
        //             j+=1;
        //         } else {
        //             i++;
        //         }
        //         i++;
        //     }
        // }
       
        currentLength = str[idx].length;
        if (currentLength > maxLength) {
            maxLength = currentLength
        }

        console.log("Tamanho -> " + maxLength);

    // //     console.log(rts[idx])
      console.log(str[idx].length);
     }
    // console.table(arr);
    return maxLength;

    }
  

  
  let a = findLongestWordLength("The quick brown fox jumped over the lazy dog");
  console.log(a);