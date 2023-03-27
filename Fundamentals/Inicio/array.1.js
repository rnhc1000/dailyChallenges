const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let temp = 0;
let comp = numeros.length;
let i = 0;
let even = [];
let odd = [];
let j = 0;
let k = 0;
for (i = 0; i < comp; i++) {
  if (numeros[i] % 2 == 0) {
    even[j] = numeros[i];
    j++;
  } else {
    odd[k] = numeros[i];
    k++;
  }
}

let valEvens = "";
for (let evens of even) {
  valEvens += evens + " ";
}

let valOdds = "";
for (let odds of odd) {
  valOdds += odds + " ";
}
console.log(valEvens);
console.log(valOdds);

i = numeros.length - 1;
console.log(numeros[i]);
j = 0;
for (i; i >= 0; i -= 2) {
  even[j] = numeros[i];
  j++;
}

console.log(even);

function praCadaElemento(elemento, indice, array) {
  console.log(elemento, indice, array);
}

numeros.forEach(praCadaElemento);

var n = [0, 1, 2, 3, 4, 5, 6];
// let numero = "";
var t = n.reduce((acumulador, numero) => {
  console.log(numero);
  return acumulador + numero;
}, 0);
console.log("Resultado");
console.log(t);

var findMedian = function (n1, n4) {
  let avg = 0;
  for (let a of n1) {
    a = Number.n1;
  }
  for (let b of n4) {
    b = Number.n4;
  }
  if (n1.length == 0 || n4.length == 0)
  {
    let n3 = n4;
  }
  let n3 = [...n1, ...n4];
  n3.sort();
  console.log("N3 -> " + n3);
  let u = [...new Set(n3)];
  console.log("U -> " + u);
  u.sort(function (a, b) {
    return a - b;
  });
  let len = u.length;
  let valor = 0;
  console.log(u);
  console.log(len);
  if (len == 2 || len == 0 || len == null) {
    let soma = u[0];
    return soma;
  } else if (len % 2 == 0) {
    console.log("Vetor com Numero Par de Elements");
    // len == 2 ? return u[0]: continue ;
    let midPosition = len / 2;
    console.log(midPosition);
    let midPartner = midPosition - 1;
    console.log(midPartner);
    let soma = (u[midPartner] + u[midPosition]) / 2;
    return soma.toFixed(5);
  } else {
    console.log("Vetor com numero impar de Elements");
    let midPosition = Math.floor(len / 2);
    console.log(midPosition);
    return u[midPosition];
  }

  // if (midPosition % 2 == 1 ){
  //     console.log("Valor Impar " + parseInt(midPosition));
  //      valor = u[midPosition];
  // } else {
  //     console.log("MidPosition Par " + midPosition);

  //     let postMid=midPosition-1;
  //     console.log(postMid);

  //      valor = parseFloat(u[midPosition] + u[postMid]).toFixed(5);
  //      valor = valor/2;
  // }

  // return valor;
  // const soma = u.reduce((acumulador, number) =>
  //     // console.log(number);
  //     // console.log(acumulador);
  //     acumulador + number, 0);

  //     return parseFloat(soma/n3.length);
  // return avg/(u.length);
};

a = [];
b = [2,-3];

let x = findMedian(a, b);
console.log(x);

// console.log(x.length);


// Use to remove duplicate elements from the array

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)])

// [2, 3, 4, 5, 6, 7, 32]
let bw=[];
var ax = "55555";
let bx = [...ax];
for (i=0; i<bx.length; i++) {
  bw[i] = parseInt(bx[i]);
};

//bw.forEach(soma);


console.log(bw);
let soma="";
let s="";
let valorInicial = 0;
let acumulador = "";
let numero="";
soma = bw.reduce((acumulador, numero) => acumulador + numero, valorInicial);
  console.log(typeof soma);
  //let s = [...soma];
s = toString(soma);
console.log(typeof s);
console.log(s);

let tt = [...s];
console.log(typeof tt);

if (tt.length > 1){

  tt.reduce((acumulador, numero) => acumulador,numero,valorInicial);
}


console.log(soma)
console.log(tt);