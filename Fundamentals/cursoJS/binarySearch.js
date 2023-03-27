function binarySearch(arr, number) {
    let mid=0;
    let mdi=0;
    let hi=0;
    let lo=0;
    arr.sort(function(a,b) { return a - b});
    hi = arr.length-1;
    console.log(arr);
    console.log(hi);
    while (lo <= hi ) {
        mdi = (lo + (hi - lo)/2);
        mid = Math.trunc(mdi);
        if (number < arr[mid]) {
            hi = mid-1;
        } else if (number > arr[mid]) {
            lo = mid+1;
        } else {
            return arr[mid];
        }
    }
    return -1;
}

const array= [40,-1, -3, -29,32,21,34,56,78,99,22,31];
let numb = 31;
let response = binarySearch(array, numb);
if (response == numb) {
    console.log("Numero informado:-. " + numb + " existe na matriz informada");
} else {
    console.log("Numero informado " + numb + " não existe na matriz informada");
}