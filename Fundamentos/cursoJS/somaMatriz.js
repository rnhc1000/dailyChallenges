
function verificaSeMaior(A, k) {
    let sum = 0;
    let i = 0;
    let result = null;
    const acc = [];
    const bcc = [];
    let sumAcc = 0;
    let sumBcc = 0 ;
    for (i in A) {
        sum += A[i];
        console.log(sum);
        if (sum < k && sum > A[0]) {
            acc[i] = sum;
            console.log({acc});
        } else if (sum > k){
            bcc[i] = sum;
            console.log("bcc " + bcc[i]);
        }
    }
    console.log(acc);
    sumAcc =  Math.max(...acc);
    sumBcc =  Math.max(...bcc);
    console.log({sumAcc});
    console.log({sumBcc});
    if ( sumAcc <  k) {
        return sumAcc;
    } else if( sumBcc > k) {
        return -1;
    }

}
// const matriz = [10,20,30];
const matriz = [34, 23, 1, 24, 75, 33, 54,8 ];
let k = 60;
// let k = 15;
let resp = verificaSeMaior(matriz, k) 

console.log("Resp -> " + resp);
// const a = matriz => i >= 20;


function filtraMaior(matriz, k) {
    matriz.filter(function(value) {
    if (value > k) {
        return value;
    } else {
        return false;
    }
    });
}

let c = filtraMaior(matriz,k);
console.log({c});