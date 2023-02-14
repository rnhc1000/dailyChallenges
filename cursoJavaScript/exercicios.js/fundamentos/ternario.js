const resultado = nota => nota >= 7 ? 'Aprovada' : 'Reprovado';

/**
 * operador ternario
 */

 console.log(resultado(7.1));

/** Atenção na função arrow =>
 * nota é uam função e retona uma função 
 * ao resultado por isso ao passar o valor
 * para o cosole.log passa a função com um valor
 * 
 */

console.log(resultado(6.1));
