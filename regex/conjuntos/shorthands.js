const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g


`

console.log(texto.match(/\d/g)) // \d números apenas [0-9]
//[ '1', '2', '3', '4', '5', '6' ]


console.log(texto.match(/\D/g)) // \D não numérico [^0-9]
/**
 * [
  ',',  ',',  ',',  ',',  ',',
  ',',  'a',  '.',  'b',  ' ',
  'c',  '!',  'd',  '?',  'e',
  '\t', '-',  '\n', 'f',  '_',
  'g',  '\n', '\n', '\n'
]
 */

console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9_]
/**
 * [
  '1', '2', '3', '4',
  '5', '6', 'a', 'b',
  'c', 'd', 'e', 'f',
  '_', 'g'
]
 */

console.log(texto.match(/\W/g)) // caracteres [^a-zA-Z0-9_]
/**
 * [
  ',',  ',',  ',',  ',',
  ',',  ',',  '.',  ' ',
  '!',  '?',  '\t', '-',
  '\n', '\n', '\n', '\n'
]
 */
console.log(texto.match(/\s/g)) // espaços [ \t\n\r\t]
//[ ' ', '\t', '\n', '\n', '\n', '\n' ]

console.log(texto.match(/\S/g))  // não espaço [^ \t\n\r\f]
/**
 * [
  '1', ',', '2', ',', '3',
  ',', '4', ',', '5', ',',
  '6', ',', 'a', '.', 'b',
  'c', '!', 'd', '?', 'e',
  '-', 'f', '_', 'g'
]
 */

