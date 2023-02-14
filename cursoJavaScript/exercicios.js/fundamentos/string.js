/**
 * delimitar strings com asṕas duplas, simples ou com crase.... 
 */
const escola = "04 / 25";
console.log(escola.charAt(2));
console.log(escola.indexOf('/'));
console.log(escola.replace(/\//g, ''));
let tam=escola.replace(/\D/g, '');
console.log(escola);
comsole.log(tam);
console.log(tam.length);

console.log('ana','maria','barbosa'.split(','));