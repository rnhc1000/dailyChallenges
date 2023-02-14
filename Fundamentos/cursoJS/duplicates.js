function areThereDuplicates() {
    let duplicates = [...arguments];
    let response=[]
    let i=0;
    let j=0;
    let k=0;
    for (i=0; i<duplicates.length-1; i++) {
        for (j=1; j<duplicates.length; j++) {
            if(duplicates[i] === duplicates[j] && i !== j) {
                console.log("Iguais ", duplicates[i], duplicates[j]);
                response[k] = duplicates[i];
                k++;
            } else {
                continue;
            }
        }  
    }
    return response;
    //return -1;
}
    // good luck. (supply any arguments you deem necessary.)

    let x = areThereDuplicates(1,2,2);
    console.log(x)