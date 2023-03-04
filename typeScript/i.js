function findLucky(arr) {
    let largest=0;
    let repeat=[[]];
    let jMax=0;
    let count=0;
    for (let i=0; i<arr.length; i++) {
        if (arr[i] == arr[i+1]) {
            count+=1;
            repeat[jMax] = arr[i]
            jMax+=1;
            console.log(repeat);
        }
    }

    return Math.max(...repeat);
}


let arr = [1,2,2,3,3,4]

console.log(findLucky(arr));