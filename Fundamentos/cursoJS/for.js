const a = [10, 20, 30];

//for ([inicializacao]; [consdição]); [expressao final]);

for (let i = 0; i < a.length; i++) {
    console.log(i);
}

for (let item of a) {
    console.log(item);
}

let sum = 0;
const xx = [];
const xy = [];
let j = 0;
let k = 0;
for (let b in a) {
    console.log(b);
    sum = sum += a[b];
    if (sum > 16) {
        xx[j++] = sum;
        j++;
    } else {
        xy[k++] = sum;
        ;
    }
}

// Array.filter((element,index)=> {

// })


console.log(sum)
console.table(xx)
console.table(xy)

let zx = Math.max(...xy);
console.log(zx);