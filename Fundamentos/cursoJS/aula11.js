/**
 * @param {string} s
 * @return {number}
 */
 function aula1(s) {
    let soma=0;
    let valorInicial = 0;
    let acumulador = "";
    let numero="";
    let arrayStr=[...s];
    for (let index in arrayStr) {
        arrayStr[index] = parseInt(arrayStr[index]);
    }
    try {
        if (!Array.isArray(arrayStr)) {
            throw new Error('Favor passar uma matriz como parametro')
        } else {
            return soma = arrayStr.reduce((acumulador, numero) => acumulador + numero);
        }
    } catch (err) {
       console.log(err.message);
    }
}

function trataResponse(response) {
    let responseOneDigit = response.toString();
    let xx = [...responseOneDigit];

    for (let index in xx) {
        xx[index] = parseInt(xx[index]);
    }
    soma = xx.reduce((acumulador, numero) => acumulador+numero);
    while (soma > 9) {
        xx = soma.toString();
        xx = [...xx];
        for (let l in xx) {
            xx[l] = parseInt(xx[l]);
        }  
        soma = xx.reduce((acumulador, numero) => acumulador+numero);
    }

    return soma;
}

s = '7777779999777';
let response = aula1(s);
console.log(response);
let final = trataResponse(response);


console.log(final);


//template literals - uso de aspas duplas
quantidade = 10;

console.log(`Quantidade: ${quantidade}`);

var valorDeCompra = 88.98651
var valorVenda = 114.45876

console.log(`Valor de compra: ${valorDeCompra.toFixed(2)} - Valor de Venda: ${valorVenda.toFixed(2)}`);

//se casas decimais for >= 5 - arredondamento para cima
// se < 5 para baixo,
