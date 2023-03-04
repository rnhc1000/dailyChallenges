
function verificaSeMaior(A, k) {
    let sum = 0;
    let i = 0;
    let result = null;
    const acc = [];
    const bcc = [];
    A = A.sort((a,b) => a-b);
    //console.log(A);
    let sanitizedAcc = [];
    let sanitizedBcc = [];
    let sumAcc = 0;
    let sumBcc = 0 ;
    for (i in A) {
        sum += A[i];
        //console.log("Soma...",sum);
        if (sum < k ) {
            acc[i] = sum;
           // console.log("acc...",acc[i]);
        } 
    }
    
    sanitizedAcc = acc.filter((el)=>el);
    //console.log(sanitizedAcc)

    if (sanitizedAcc.length === 0) {
        return -1;
    }
    sumAcc =  Math.max(...sanitizedAcc);
    //sumBcc =  Math.max(...sanitizedBcc);
    //console.log({sumAcc});
    //console.log({sumBcc});
    if ( sumAcc <=  k) {
        return sumAcc;
    } else {

        return -1;

    }        
}

// const matriz = [10,20,30];
//const matriz = [34, 23, 12, 24, 75, 33, 54, 8 ];
const matriz = [1, 2, 3, 4, 5];
let k = 10;
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

//let c = filtraMaior(matriz,k);
//console.log({c});