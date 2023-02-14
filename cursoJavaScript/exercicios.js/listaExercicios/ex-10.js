/**
 * 10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 
 * e retorne true ou false.
 */

 const verifica = function numeroTres(numero) {

    /**
     * testa se divisivel por 3
     */
    numero = isNaN(numero) ? 1 : numero;

     numero = numero % 3;
     if (numero) {
         return false;
     } else {
         return true;
     }
    
 }

 console.log(verifica(27))