const texto ='ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
//[ 'a', 'b', 'c', 'a', 'c' ]

console.log(texto.match(/a-c/g))
//[ 'a-c' ]

console.log(texto.match(/[A-z]/g)) //intervalos usam a ordem databela UNICOIDE/ASCII
/**
 * [
  'A', 'B', 'C', '[',
  'a', 'b', 'c', ']',
  'a', 'c'
]
 */

// não trouxe o 1234 e trouxe os colchetes


// tem que respeitar a ordem da tabeka UNICODE
//console.log(texto.match([a-Z]g))//erro

console.log(texto.match(/[A-Za-z]/g))

// \w -  shorthand A-Z a-z 0-09 _