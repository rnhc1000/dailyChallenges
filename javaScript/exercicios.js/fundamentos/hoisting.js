/** hoisting -> içar, levar para cima...
 * alterar a sequencia de execução do código
 * ao se declarar uma variável como var
 */

 console.log('a =', a)
 var a = 2;
 console.log('a =', a)

/** ao avaliar o código 
 * mesmo após a primiera linha a variável a n ter sido delcararo
 * mas como esta na seunda linha, ela é içada e processa sem erro
 * Portanto declare as variáveis antes de usar
 */

