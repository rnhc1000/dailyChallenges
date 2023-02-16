/**
 * 04) Crie uma função que irá receber dois valores, 
 * o dividendo e o divisor. A função deverá imprimir o resultado
 * e o resto da divisão destes dois valores 
 */


 const resultado = function(dividendo, divisor) {
     dividendo = isNaN(dividendo) ? 1 : dividendo;
     divisor   = isNaN(divisor) ? 1 : divisor;
     if (divisor == 0)
     {
         console.log('Não existe divisão por zero. tente outra vez!');
     } else {
         res= (dividendo/divisor).toFixed(2);
         return res;
     }
 }

console.log(resultado(3,1));
console.log(resultado(25,17));