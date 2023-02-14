const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/[^0-9]/g)) // \D não numérico [^0-9]
/**
 * [
  ',', ',', ',', 'a',
  '.', 'b', ' ', 'c',
  '!', 'd', '?', 'e',
  
  '[', 'f'
]


 */

console.log(texto.match(/[^0-9]/g)) //exatamanete iguais
/**
 * [
  ',', ',', ',', 'a',
  '.', 'b', ' ', 'c',
  '!', 'd', '?', 'e',
  '[', 'f'
]
 */


//console.log(texto.match(/[^\d!\?\[\s,\.]/g)) // tudo negado....
//console.log(texto.match(/\D/g))


