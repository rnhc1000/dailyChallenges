const texto = 'a   b'
console.log(texto.match(/a\s\s\sb/))
console.log(texto.match(/a...b/))
console.log(texto.match(/a\s+b/))
console.log(texto.match(/a\s{3}b/))
/**
 * [ 'a   b', index: 0, input: 'a   b', groups: undefined ]
   [ 'a   b', index: 0, input: 'a   b', groups: undefined ]
   [ 'a   b', index: 0, input: 'a   b', groups: undefined ]
   [ 'a   b', index: 0, input: 'a   b', groups: undefined ]
 */