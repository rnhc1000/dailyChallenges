// O ponto representa um coringa, válido apenas para uma posição

const texto = '1,2,3,4,5,6,7,8,9,0'

console.log(texto.match(/1.2/g))
//[ '1,2' ]

console.log(texto.match(/1\.2/g))
// null


console.log(texto.match(/1..2/g))
// null não exste na string entre 1 e 2 dois caracteres

console.log(texto.match(/1..,/g))
//[ '1,2,' ]

const notas = '8.3,7.1,8.8,10.0'

console.log(notas.match(/8../g))
//[ '8.3', '8.8' ]

console.log(notas.match(/.\../g))
//[ '8.3', '7.1', '8.8', '0.0' ]
