/**
 * função arrow introduzida em es2015(ES6)
 * tem como objetivo ter uma sintaxe
 * reduzida e um this associado ao contexto
 * onde a função foi escrita
 * A função arrow é sempre uma função ANÔNIMA
 * e para fazer uso dela tem que atribuir
 * a uma variavel
 * 
 */

 let dobro = function (a) {
     return a * 2;
 }

 dobro = (a) => {
     return a * 2;
 }

 console.log(`O valor do primeiro a: ${dobro(2)}`)

 dobro = a => a*2;

 /**
  * Neste caso o valor de retorno está implícito 
  * pois é uma função que recebe um único parametro
  */
console.log(`O valor do segundo a: ${dobro(2)}`)

console.log(`O valor do terceiro a: ${dobro(Math.PI.toPrecision(3))}`);

let ola = function (b) {
    return b;
}

ola = () => 'Oi';
ola = _  => 'Oi';
/**
 * no caso acima o undersore é um parâmtro
 */
console.log(`${ola()}`);
/**
 * atenção a construção acima
 * na função normal vc pode passar o parâmetro
 * na função arrow apenas o valor
 * para passar por parãmetro
 * vide a seguir:
 */
ola = (b) => b;
console.log(`${ola('oi')}`);
