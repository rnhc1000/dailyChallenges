function chunkArrayInGroups(arr,size) {

    // let arr_1 = [];
    // let arr_2 = [0,0,0];
    // arr_1.push([...arr_2]);
    // // for (let i=0; i<arr_1.length; i++) {
    // //     arr_1.push([...arr_2]);
        
    // // }
    
    // // for(let m=0; m<arr.length; m++){
    // //     for(let k=0; k<size; k++){
    // //         console.log(arr_1[m][k]);
    // //     }
    // // }
    let remind = size;
    let child = arr.length/size;
    let runt = arr.length % size;
    let arrayLenRunt=0;
    runt === 0 ? child+=runt : arrayLenRunt=runt;
    console.log(child, runt)

    let i=0;
    // console.log(arr_1);
    let newArray=[];
    // while(size>=1) {
    //     newArray.push([...arr]);
    //     size--;
    // }
    // for (let idx in newArray) {
    //     console.log(idx)
    //     newArray[idx].push(arr.slice(idx, idx+size));
        
    // }


    while (i < arr.length) {

        newArray.push(arr.slice(i, i+size));
        i+=size;
    }
    return newArray;
}


let a = chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);
console.table(a);