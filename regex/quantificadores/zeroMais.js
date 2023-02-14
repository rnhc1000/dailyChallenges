const texto1 = 'De longe eu avistei o fogo e uma pessoa gritando: fogo e outra FOGOOOOO'
const texto2 = 'There is a big fog in MYC'

// + -> um ou mais
const regex = /fogo*/gi // resolve para fogo ou fogoooo ou fogpois o caracter q antece o? é opcional
console.log(texto1.match(regex))
console.log(texto2.match(regex))

const regexx = /fogoo*?/gi // resolve para fog ou fogo pois o caracter q antece o? é opcional
console.log(texto1.match(regexx))
console.log(texto2.match(regexx))

const texto3 = 'Os números: 0123456789.'
console.log(texto3.match(/[0-9]/g))
/**
 * [
'0', '1', '2', '3',
'4', '5', '6', '7',
'8', '9'
]
 */
console.log(texto3.match(/[0-9]+/g))

/**
 * [ '0123456789' ]
 */

console.log(texto3.match(/[0-9]+?/g))
/**
  * [
'0', '1', '2', '3',
'4', '5', '6', '7',
'8', '9'
]

  */



