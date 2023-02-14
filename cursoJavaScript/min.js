function miniMaxSum(arr) {
    // Write your code here
let min=0;
let max=0;
let len=5;
let window=4;
let sumMin=0;
let sumMax=0;
let i=0;
let j=0;
let ar = arr.sort((a,b) => a-b);

for(i=0; i<window; i++){
    sumMin+=ar[i];
    console.log(sumMin)

}
for (j=1; j<=window; j++) {
    sumMax+=ar[j];
    console.log(sumMax)
}

console.log(ar);
console.log(sumMin + "  " + sumMax);
}

arr=[1,2,3,4,5];
arr=[7, 69, 2, 221, 8974];
miniMaxSum(arr);