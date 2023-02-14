console.log('01)', '1' == 1);
/** em JS  o acima é verdadeiro
 * retorna true
*/
console.log('02)', '1' === 1);
/**
 * neste caso n s estritamente iguais... retornando false
 * atenção para o comparador == e o comparador ===
 * o '1' é uma string e 1 é um inteiro
 */
console.log('03)', '3' != 3);
/**
 * retorna true pois os tipos n s comparados
 * aepsar de diferentes
 */
console.log('04)', '3' !== 3);
/**
 * retorna false pq os tipos s diferentes
 */

 console.log('05)', 3 < 2);
 console.log('06)', 3 > 2);
 console.log('07)', 3 <= 2);
 console.log('08)', 3 >= 2);

 const d1 = new Date(0);
 console.log(d1);
 const d2 = new Date(0);
 console.log('09)', d1 === d2);
 console.log('09)', d1 == d2);
 console.log('11)', d1.getTime() == d2.getTime());
 console.log('12)', undefined == null);
 console.log('13)', undefined === null);
 /**
  * recomendação usar sempre o 
  * operador estritamente igual ===
  */