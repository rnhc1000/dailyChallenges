/**
 * @param {string} s
 * @return {number}
 */

function aula1(s) {
    let b=[...s]; 
    let i = 0;
    let bx=[];
    for (let j in b) {
        b[j] = parseInt(b[j]);
    }

    // for(let i=0; i<b.length; i++) {
    //     bx[i] = parseInt(b[i]);
    // }

    let soma=0;
    let valorInicial = 0;
    let acumulador = "";
    let numero="";
    try {
        if (!Array.isArray(b)) {
            throw new Error('Favor passar uma matriz como parametro')
        } else {
            return soma = b.reduce((acumulador, numero) => acumulador + numero);
        }
    } catch (err) {
       console.log(err.message);
    }


}

s = '777799999999999999999999999999999999999999999999999999999999999999997777777777777777777777777';
let response = aula1(s);
console.log(response);
console.log(typeof response);

let responseOneDigit = response.toString();

console.log(responseOneDigit);
console.log(typeof responseOneDigit);

let xx = [...responseOneDigit];
console.log(xx);

// while (xx.length != 1) {
for (let k in xx) {
    xx[k] = parseInt(xx[k]);
}
soma = xx.reduce((acumulador, numero) => acumulador+numero);
    while (soma > 9) {
        console.log("Maior que 9");
        xx = soma.toString();
        xx = [...xx];
        console.log(xx);
        for (let l in xx) {
            xx[l] = parseInt(xx[l]);
        }  
        soma = xx.reduce((acumulador, numero) => acumulador+numero);
    }

    console.log(soma);
// }

// let z = [...response];

// console.log(z);

// const euros = [29.76, 41.85, 46.5];

// const sum = euros.reduce((total, amount) => total + amount); 

// console.log(sum);