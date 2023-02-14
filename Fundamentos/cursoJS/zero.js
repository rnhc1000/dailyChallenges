
// Given N distinct integers, how many triples sum to exactly zero?
const a=[ 30, 40, -20, -50, 50, 0, 10, 5, 20 ];
let key = 3;
let soma=0;
let i = 0;
let k =0;
let j = 0;
let s = 0;
s = a.length;
console.log(a.length);
for(j=0; j < s; j++) {
    for (i=0; i < s ; i++) {
        for (k=0; k < s; k++) {
            console.log(a[i], a[j] , a[k]);
            soma = a[i]+a[j]+a[k];
            console.log("Soma -> " + soma);
            if (soma === 0) {
                console.log("Soma igual a zero ", a[i], a[j], a[k]);
            } else {
                soma=0;
                console.log("Soma diferente de zero");
            }
        }
    }
}

// for (let i in a) {
//     soma = soma+a[i];
//     console.log(soma);
// }
console.log({soma})