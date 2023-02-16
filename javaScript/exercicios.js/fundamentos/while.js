/**
 * Usado quando o númeo de eventos a verificar
 * é desconhecido
 */

 function getInteiroAleatorio (min, max) {
     const valor = Math.random() * (max-min) + min;
     return Math.floor(valor);
 }

 let opcao = 0;

 while(opcao != -1) {
     opcao = getInteiroAleatorio(-1, 100);
     console.log(`Opcao escolhida foi ${opcao}.`);
 }

 console.log('Até a próxima');