// g - flag global
// i - ignore case

const texto= 'Carlos assinou o abaixo-assinado.';

console.log(texto.match(/C|ss/g))
console.log(texto.match(/c|ab/i))
console.log(texto.match(/ab|c/gi))