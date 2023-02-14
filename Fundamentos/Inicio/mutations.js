function mutation(arr) {

let str_1 = arr[0];
let str_2 = arr[1];
str_1 = str_1.toLowerCase();
str_2 = str_2.toLowercase();
str_1 = [...str_1];
str_2 = [...str_2];

//str_1 = str_1.filter((elemento,indice)=>str_1.indexOf(elemento) === indice);
str_2 = str_2.filter((elemento,indice)=>str_2.indexOf(elemento) === indice);
let len_1 = str_1.length;
let len_2 = str_2.length;
let count = [];
let cnt =0;
let dif = 0;

const compara = str_2.map(varredura);

function varredura(str_2, str_1) {

    if ((str_2.filter((elemento, indice) => indexOf(elemento === indice)))) {

    }

// for (let i=0; i<len_2; i++) {
//     for (let j=0; j < len_1; j++) {

//         str_2[i] === str_1[j] ? count[cnt]=str_2[i] :  dif+=1;
//         cnt++;

//     }
//     console.log("I-> ", i)
// }

count = count.filter((elemento, indice) => count.indexOf(elemento) === indice);
console.log("Contagem ",count);
console.log(count.length);
console.log(dif);
    return arr;
}


let ax = ['hello', 'hell'];

// check if all letters in the second string 
// are present in the fiorst one...

mutation(ax);

const test = arr[1].toLowerCase();
const target = arr[0].toLowerCase();
for (let i = 0; i < test.length; i++) {
  if (target.indexOf(test[i]) < 0) return false;
}
return true;